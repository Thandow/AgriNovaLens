import { Clock, Trash2, Eye, Calendar } from 'lucide-react';
import { getSeverityColor } from '../services/diseaseDetection';
import type { DetectionResult } from '../types';

interface DetectionHistoryProps {
  history: DetectionResult[];
  searchQuery?: string;
}

export function DetectionHistory({ history, searchQuery }: DetectionHistoryProps) {
  const clearHistory = () => {
    if (confirm('Are you sure you want to clear all detection history?')) {
      localStorage.removeItem('detection_history');
      window.location.reload();
    }
  };

  if (history.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm border p-12 text-center" style={{ borderColor: '#e5e7eb' }}>
        <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#f3f4f6' }}>
          <Clock className="w-10 h-10" style={{ color: '#9ca3af' }} />
        </div>
        <h3 style={{ color: '#111827' }} className="mb-2">
          {searchQuery ? `No results found for "${searchQuery}"` : 'No Detection History'}
        </h3>
        <p style={{ color: '#6b7280' }}>
          {searchQuery ? 'Try searching for a different disease or treatment' : 'Your disease detection history will appear here'}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 style={{ color: '#07480E' }}>Detection History</h2>
          <p style={{ color: '#474747' }}>
            {searchQuery 
              ? `Found ${history.length} result${history.length === 1 ? '' : 's'} for "${searchQuery}"`
              : 'View your past disease detections'
            }
          </p>
        </div>
        <button
          onClick={clearHistory}
          className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
          style={{ color: '#ef4444' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fee2e2'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <Trash2 className="w-4 h-4" />
          <span>Clear History</span>
        </button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-green-100 p-4">
          <p className="text-gray-600 text-sm mb-1">Total Detections</p>
          <p className="text-gray-900">{history.length}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-green-100 p-4">
          <p className="text-gray-600 text-sm mb-1">Critical Cases</p>
          <p className="text-gray-900">
            {history.filter(h => h.severity === 'Critical').length}
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-green-100 p-4">
          <p className="text-gray-600 text-sm mb-1">Most Common</p>
          <p className="text-gray-900">
            {getMostCommonDisease(history)}
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-green-100 p-4">
          <p className="text-gray-600 text-sm mb-1">Avg. Confidence</p>
          <p className="text-gray-900">
            {Math.round(history.reduce((sum, h) => sum + h.confidence, 0) / history.length * 100)}%
          </p>
        </div>
      </div>

      {/* History List */}
      <div className="space-y-4">
        {history.map((result) => {
          const severityColors = getSeverityColor(result.severity);
          const confidencePercentage = Math.round(result.confidence * 100);

          return (
            <div
              key={result.id}
              className="bg-white rounded-xl shadow-sm border border-green-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-4">
                {/* Image */}
                <div className="lg:col-span-3">
                  <img
                    src={result.imageUrl}
                    alt={result.disease}
                    className="rounded-lg w-full h-32 object-cover"
                  />
                </div>

                {/* Info */}
                <div className="lg:col-span-6 space-y-2">
                  <div>
                    <h4 className="text-gray-900 mb-1">{result.disease}</h4>
                    <p className="text-gray-600 text-sm">{result.affectedCrop}</p>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(result.timestamp).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{new Date(result.timestamp).toLocaleTimeString()}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm line-clamp-2">{result.description}</p>
                </div>

                {/* Metrics */}
                <div className="lg:col-span-3 flex lg:flex-col justify-between lg:justify-start gap-3">
                  <div>
                    <p className="text-gray-600 text-sm mb-1">Severity</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm ${severityColors.bg} ${severityColors.text} border ${severityColors.border}`}>
                      {result.severity}
                    </span>
                  </div>
                  
                  <div>
                    <p className="text-gray-600 text-sm mb-1">Confidence</p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2 min-w-[80px]">
                        <div
                          className="bg-green-600 h-2 rounded-full"
                          style={{ width: `${confidencePercentage}%` }}
                        />
                      </div>
                      <span className="text-gray-900 text-sm">{confidencePercentage}%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="border-t border-gray-100 bg-gray-50 px-4 py-3">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    <span className="text-gray-900">{result.treatments.length}</span> treatment options • {' '}
                    <span className="text-gray-900">{result.preventiveMeasures.length}</span> preventive measures
                  </div>
                  <button className="flex items-center gap-2 px-3 py-1 text-green-700 hover:bg-green-100 rounded-lg transition-colors text-sm">
                    <Eye className="w-4 h-4" />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function getMostCommonDisease(history: DetectionResult[]): string {
  if (history.length === 0) return 'N/A';
  
  const counts: Record<string, number> = {};
  history.forEach(h => {
    counts[h.disease] = (counts[h.disease] || 0) + 1;
  });
  
  const most = Object.entries(counts).reduce((a, b) => a[1] > b[1] ? a : b);
  return most[0];
}
