import { Upload, Cpu, Database, BarChart2, CheckCircle, ArrowRight, Smartphone, Cloud, Brain } from 'lucide-react';

export function DataFlowDiagram() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6">
        <h2 className="text-gray-900 mb-2">System Data Flow Architecture</h2>
        <p className="text-gray-600">
          Visual representation of how information moves through the AgriNova Lens system
        </p>
      </div>

      {/* Main Flow Diagram */}
      <div className="bg-white rounded-xl shadow-sm border border-green-100 p-8">
        <div className="space-y-8">
          {/* Step 1: User Input */}
          <div className="flex items-center gap-6">
            <div className="flex-shrink-0">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white w-16 h-16 rounded-xl flex items-center justify-center shadow-lg">
                <Smartphone className="w-8 h-8" />
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
                <h3 className="text-blue-900 mb-2">1. User Input Layer</h3>
                <p className="text-blue-700 text-sm mb-3">Farmer captures image of affected crop</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white text-blue-800 rounded-lg text-sm border border-blue-200">
                    Camera/Upload
                  </span>
                  <span className="px-3 py-1 bg-white text-blue-800 rounded-lg text-sm border border-blue-200">
                    Image File (JPG/PNG)
                  </span>
                  <span className="px-3 py-1 bg-white text-blue-800 rounded-lg text-sm border border-blue-200">
                    Max 10MB
                  </span>
                </div>
              </div>
            </div>
            <ArrowRight className="w-8 h-8 text-gray-400 flex-shrink-0" />
          </div>

          {/* Step 2: Preprocessing */}
          <div className="flex items-center gap-6">
            <div className="flex-shrink-0">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white w-16 h-16 rounded-xl flex items-center justify-center shadow-lg">
                <Cpu className="w-8 h-8" />
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-4">
                <h3 className="text-purple-900 mb-2">2. Preprocessing Layer</h3>
                <p className="text-purple-700 text-sm mb-3">Image validation and optimization</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white p-2 rounded-lg border border-purple-200">
                    <p className="text-purple-900 text-sm">File Validation</p>
                    <p className="text-purple-600 text-xs">Type, size, format checks</p>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-purple-200">
                    <p className="text-purple-900 text-sm">Image Resize</p>
                    <p className="text-purple-600 text-xs">Normalize to 224x224px</p>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-purple-200">
                    <p className="text-purple-900 text-sm">Color Normalization</p>
                    <p className="text-purple-600 text-xs">RGB value standardization</p>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-purple-200">
                    <p className="text-purple-900 text-sm">Error Handling</p>
                    <p className="text-purple-600 text-xs">Invalid file rejection</p>
                  </div>
                </div>
              </div>
            </div>
            <ArrowRight className="w-8 h-8 text-gray-400 flex-shrink-0" />
          </div>

          {/* Step 3: AI Processing */}
          <div className="flex items-center gap-6">
            <div className="flex-shrink-0">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white w-16 h-16 rounded-xl flex items-center justify-center shadow-lg">
                <Brain className="w-8 h-8" />
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4">
                <h3 className="text-green-900 mb-2">3. AI Classification Engine</h3>
                <p className="text-green-700 text-sm mb-3">Deep learning model analyzes image features</p>
                <div className="space-y-2">
                  <div className="bg-white p-3 rounded-lg border border-green-200">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-green-900 text-sm">Convolutional Neural Network (CNN)</p>
                      <Cloud className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="text-center">
                        <p className="text-green-900">Input Layer</p>
                        <p className="text-green-600">224x224x3</p>
                      </div>
                      <div className="text-center">
                        <p className="text-green-900">Hidden Layers</p>
                        <p className="text-green-600">50+ layers</p>
                      </div>
                      <div className="text-center">
                        <p className="text-green-900">Output</p>
                        <p className="text-green-600">6 classes</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-white text-green-800 rounded text-xs border border-green-200">
                      Feature Extraction
                    </span>
                    <span className="px-2 py-1 bg-white text-green-800 rounded text-xs border border-green-200">
                      Pattern Recognition
                    </span>
                    <span className="px-2 py-1 bg-white text-green-800 rounded text-xs border border-green-200">
                      Confidence Scoring
                    </span>
                    <span className="px-2 py-1 bg-white text-green-800 rounded text-xs border border-green-200">
                      Multi-class Classification
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <ArrowRight className="w-8 h-8 text-gray-400 flex-shrink-0" />
          </div>

          {/* Step 4: Knowledge Base */}
          <div className="flex items-center gap-6">
            <div className="flex-shrink-0">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white w-16 h-16 rounded-xl flex items-center justify-center shadow-lg">
                <Database className="w-8 h-8" />
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-4">
                <h3 className="text-orange-900 mb-2">4. Knowledge Base Lookup</h3>
                <p className="text-orange-700 text-sm mb-3">Retrieve disease information and treatment protocols</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white p-2 rounded-lg border border-orange-200">
                    <p className="text-orange-900 text-sm">Disease Database</p>
                    <p className="text-orange-600 text-xs">6 diseases, 15+ crops</p>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-orange-200">
                    <p className="text-orange-900 text-sm">Treatment Library</p>
                    <p className="text-orange-600 text-xs">18 treatment protocols</p>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-orange-200">
                    <p className="text-orange-900 text-sm">Symptom Catalog</p>
                    <p className="text-orange-600 text-xs">30+ symptom descriptions</p>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-orange-200">
                    <p className="text-orange-900 text-sm">Prevention Tips</p>
                    <p className="text-orange-600 text-xs">25+ best practices</p>
                  </div>
                </div>
              </div>
            </div>
            <ArrowRight className="w-8 h-8 text-gray-400 flex-shrink-0" />
          </div>

          {/* Step 5: Results Generation */}
          <div className="flex items-center gap-6">
            <div className="flex-shrink-0">
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white w-16 h-16 rounded-xl flex items-center justify-center shadow-lg">
                <BarChart2 className="w-8 h-8" />
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-pink-50 border-2 border-pink-200 rounded-xl p-4">
                <h3 className="text-pink-900 mb-2">5. Results Compilation</h3>
                <p className="text-pink-700 text-sm mb-3">Generate comprehensive diagnostic report</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-pink-600" />
                    <span className="text-pink-800 text-sm">Disease identification with confidence score</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-pink-600" />
                    <span className="text-pink-800 text-sm">Severity assessment and yield impact</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-pink-600" />
                    <span className="text-pink-800 text-sm">Treatment recommendations (organic, chemical, cultural)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-pink-600" />
                    <span className="text-pink-800 text-sm">Preventive measures for future protection</span>
                  </div>
                </div>
              </div>
            </div>
            <ArrowRight className="w-8 h-8 text-gray-400 flex-shrink-0" />
          </div>

          {/* Step 6: User Output */}
          <div className="flex items-center gap-6">
            <div className="flex-shrink-0">
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 text-white w-16 h-16 rounded-xl flex items-center justify-center shadow-lg">
                <CheckCircle className="w-8 h-8" />
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-teal-50 border-2 border-teal-200 rounded-xl p-4">
                <h3 className="text-teal-900 mb-2">6. User Interface Display</h3>
                <p className="text-teal-700 text-sm mb-3">Present actionable insights to farmer</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white text-teal-800 rounded-lg text-sm border border-teal-200">
                    Visual Results Dashboard
                  </span>
                  <span className="px-3 py-1 bg-white text-teal-800 rounded-lg text-sm border border-teal-200">
                    Treatment Action Plan
                  </span>
                  <span className="px-3 py-1 bg-white text-teal-800 rounded-lg text-sm border border-teal-200">
                    Downloadable Report
                  </span>
                  <span className="px-3 py-1 bg-white text-teal-800 rounded-lg text-sm border border-teal-200">
                    History Tracking
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Data Processing */}
        <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6">
          <h3 className="text-gray-900 mb-4">Data Processing Pipeline</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <span className="text-green-700 text-xs">1</span>
              </div>
              <div>
                <p className="text-gray-900 text-sm">Image Upload</p>
                <p className="text-gray-600 text-xs">Client-side validation, FormData API</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <span className="text-green-700 text-xs">2</span>
              </div>
              <div>
                <p className="text-gray-900 text-sm">Preprocessing</p>
                <p className="text-gray-600 text-xs">Canvas API for resizing, normalization</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <span className="text-green-700 text-xs">3</span>
              </div>
              <div>
                <p className="text-gray-900 text-sm">AI Inference</p>
                <p className="text-gray-600 text-xs">TensorFlow.js / REST API call</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <span className="text-green-700 text-xs">4</span>
              </div>
              <div>
                <p className="text-gray-900 text-sm">Post-processing</p>
                <p className="text-gray-600 text-xs">JSON parsing, confidence thresholding</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <span className="text-green-700 text-xs">5</span>
              </div>
              <div>
                <p className="text-gray-900 text-sm">Storage</p>
                <p className="text-gray-600 text-xs">LocalStorage for history tracking</p>
              </div>
            </div>
          </div>
        </div>

        {/* System Integration */}
        <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6">
          <h3 className="text-gray-900 mb-4">System Integration Points</h3>
          <div className="space-y-3">
            <div className="border border-gray-200 rounded-lg p-3">
              <p className="text-gray-900 text-sm mb-1">Frontend Framework</p>
              <p className="text-gray-600 text-xs">React 18 with TypeScript</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-3">
              <p className="text-gray-900 text-sm mb-1">Styling</p>
              <p className="text-gray-600 text-xs">Tailwind CSS v4.0</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-3">
              <p className="text-gray-900 text-sm mb-1">State Management</p>
              <p className="text-gray-600 text-xs">React Hooks (useState, useCallback)</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-3">
              <p className="text-gray-900 text-sm mb-1">Data Persistence</p>
              <p className="text-gray-600 text-xs">Browser LocalStorage API</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-3">
              <p className="text-gray-900 text-sm mb-1">Icons</p>
              <p className="text-gray-600 text-xs">Lucide React icon library</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
