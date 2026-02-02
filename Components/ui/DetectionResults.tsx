import { AlertTriangle, CheckCircle, Info, ArrowLeft, Download, Share2 } from 'lucide-react';
import { getSeverityColor } from '../services/diseaseDetection';
import type { DetectionResult } from '../types';

interface DetectionResultsProps {
  result: DetectionResult;
  onNewDetection: () => void;
}

export function DetectionResults({ result, onNewDetection }: DetectionResultsProps) {
  const severityColors = getSeverityColor(result.severity);
  const confidencePercentage = Math.round(result.confidence * 100);

  const handleDownloadReport = () => {
    const reportData = {
      date: new Date(result.timestamp).toLocaleString(),
      disease: result.disease,
      crop: result.affectedCrop,
      confidence: `${confidencePercentage}%`,
      severity: result.severity,
      symptoms: result.symptoms,
      treatments: result.treatments,
      preventiveMeasures: result.preventiveMeasures,
      yieldImpact: result.estimatedYieldImpact
    };

    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `disease-report-${result.id}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Action Bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={onNewDetection}
          className="flex items-center gap-2 px-4 py-2 text-green-700 hover:bg-green-50 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>New Detection</span>
        </button>
        <div className="flex gap-2">
          <button
            onClick={handleDownloadReport}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Download Report</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
            <Share2 className="w-4 h-4" />
            <span>Share</span>
          </button>
        </div>
      </div>

      {/* Detection Overview */}
      <div className="bg-white rounded-xl shadow-sm border border-green-100 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
          {/* Image */}
          <div>
            <img
              src={result.imageUrl}
              alt="Analyzed crop"
              className="rounded-lg shadow-md w-full h-80 object-cover"
            />
            <p className="text-gray-500 text-sm mt-2">
              Analyzed on {new Date(result.timestamp).toLocaleString()}
            </p>
          </div>

          {/* Detection Info */}
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className={`w-6 h-6 ${severityColors.text}`} />
                <h2 className="text-gray-900">Detection Results</h2>
              </div>
              <p className="text-gray-600">AI-powered analysis complete</p>
            </div>

            {/* Disease Name */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600 text-sm mb-1">Detected Disease</p>
              <p className="text-gray-900">{result.disease}</p>
            </div>

            {/* Confidence Score */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600 text-sm mb-2">Confidence Score</p>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-green-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${confidencePercentage}%` }}
                  />
                </div>
                <span className="text-gray-900 min-w-[3rem] text-right">{confidencePercentage}%</span>
              </div>
              <p className="text-gray-500 text-sm mt-2">
                {confidencePercentage >= 90 ? 'Very High' : confidencePercentage >= 75 ? 'High' : 'Moderate'} confidence
              </p>
            </div>

            {/* Severity & Crop */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600 text-sm mb-1">Severity Level</p>
                <span className={`inline-block px-3 py-1 rounded-full text-sm ${severityColors.bg} ${severityColors.text} border ${severityColors.border}`}>
                  {result.severity}
                </span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600 text-sm mb-1">Affected Crop</p>
                <p className="text-gray-900">{result.affectedCrop}</p>
              </div>
            </div>

            {/* Yield Impact */}
            <div className={`p-4 rounded-lg border ${severityColors.bg} ${severityColors.border}`}>
              <div className="flex items-start gap-2">
                <Info className={`w-5 h-5 ${severityColors.text} flex-shrink-0 mt-0.5`} />
                <div>
                  <p className={`${severityColors.text} mb-1`}>Estimated Yield Impact</p>
                  <p className={`${severityColors.text} text-sm`}>{result.estimatedYieldImpact}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Disease Description */}
      <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6">
        <h3 className="text-gray-900 mb-3">About This Disease</h3>
        <p className="text-gray-700 leading-relaxed">{result.description}</p>
      </div>

      {/* Symptoms */}
      <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6">
        <h3 className="text-gray-900 mb-4">Symptoms to Look For</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {result.symptoms.map((symptom, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700 text-sm">{symptom}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Treatment Recommendations */}
      <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6">
        <h3 className="text-gray-900 mb-4">Treatment Recommendations</h3>
        <div className="space-y-4">
          {result.treatments.map((treatment, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  {treatment.type}
                </span>
                <h4 className="text-gray-900">{treatment.name}</h4>
              </div>
              <p className="text-gray-700 mb-3">{treatment.instructions}</p>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Info className="w-4 h-4" />
                <span>Timeline: {treatment.timeline}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Preventive Measures */}
      <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6">
        <h3 className="text-gray-900 mb-4">Preventive Measures for Future</h3>
        <div className="space-y-2">
          {result.preventiveMeasures.map((measure, index) => (
            <div key={index} className="flex items-start gap-3 p-3 hover:bg-green-50 rounded-lg transition-colors">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green-700 text-sm">{index + 1}</span>
              </div>
              <p className="text-gray-700">{measure}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Action Steps */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl shadow-sm p-6 text-white">
        <h3 className="text-white mb-3">Immediate Action Required</h3>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            <span>Begin treatment within 24-48 hours for best results</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            <span>Monitor surrounding plants for similar symptoms</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            <span>Document progress with photos for comparison</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            <span>Consult with local agricultural extension if needed</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
