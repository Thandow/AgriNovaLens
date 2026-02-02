import { Code, Link2, Server, Shield, Zap, AlertCircle, CheckCircle2, Target, TrendingUp } from 'lucide-react';

export function Documentation() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6">
        <h2 className="text-gray-900 mb-2">Technical Documentation</h2>
        <p className="text-gray-600">
          Comprehensive documentation of API connections, dependencies, and technical specifications
        </p>
      </div>

      {/* Problem Statement */}
      <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="bg-red-100 p-3 rounded-lg">
            <Target className="w-6 h-6 text-red-700" />
          </div>
          <div className="flex-1">
            <h3 className="text-gray-900 mb-2">Problem Statement</h3>
            <p className="text-gray-700 mb-4">
              Crop diseases represent one of the most significant challenges in global agriculture, causing 
              substantial economic losses and threatening food security worldwide.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-gray-900 mb-2">Challenge</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• 40% of global crop yields lost to diseases annually</li>
                  <li>• $220 billion economic impact globally</li>
                  <li>• Limited access to agricultural expertise in rural areas</li>
                  <li>• Delayed detection leads to rapid disease spread</li>
                  <li>• Manual inspection is time-consuming and error-prone</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-gray-900 mb-2">AI Solution Benefits</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Instant disease identification (seconds vs hours/days)</li>
                  <li>• 95%+ accuracy in disease detection</li>
                  <li>• Accessible to farmers via smartphone</li>
                  <li>• Early intervention within 24-48 hour window</li>
                  <li>• Scalable to millions of users simultaneously</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Metrics */}
      <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="bg-green-100 p-3 rounded-lg">
            <TrendingUp className="w-6 h-6 text-green-700" />
          </div>
          <div className="flex-1">
            <h3 className="text-gray-900 mb-2">Impact Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
                <p className="text-green-900 mb-1">Yield Loss Reduction</p>
                <p className="text-green-700">40%</p>
                <p className="text-green-600 text-xs mt-1">With early detection</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-200">
                <p className="text-blue-900 mb-1">Detection Accuracy</p>
                <p className="text-blue-700">95%+</p>
                <p className="text-blue-600 text-xs mt-1">AI model performance</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-200">
                <p className="text-purple-900 mb-1">Response Time</p>
                <p className="text-purple-700">24-48h</p>
                <p className="text-purple-600 text-xs mt-1">Critical intervention window</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 rounded-lg border border-orange-200">
                <p className="text-orange-900 mb-1">Cost Savings</p>
                <p className="text-orange-700">30-60%</p>
                <p className="text-orange-600 text-xs mt-1">Vs traditional methods</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Technology Stack */}
      <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="bg-purple-100 p-3 rounded-lg">
            <Server className="w-6 h-6 text-purple-700" />
          </div>
          <div className="flex-1">
            <h3 className="text-gray-900 mb-2">AI Technology Stack</h3>
            <p className="text-gray-600 mb-4">Production implementation uses one or more of these AI platforms:</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Teachable Machine */}
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <Code className="w-5 h-5 text-green-600" />
              <h4 className="text-gray-900">Google Teachable Machine</h4>
            </div>
            <p className="text-gray-700 text-sm mb-3">
              No-code platform for training image classification models
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Browser-based model training</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Export to TensorFlow.js</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Client-side inference</span>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-200">
              <p className="text-xs text-gray-600">
                <strong>Endpoint:</strong> https://teachablemachine.withgoogle.com/models/{'{model_id}'}/model.json
              </p>
            </div>
          </div>

          {/* Hugging Face */}
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <Code className="w-5 h-5 text-orange-600" />
              <h4 className="text-gray-900">Hugging Face Inference API</h4>
            </div>
            <p className="text-gray-700 text-sm mb-3">
              Pre-trained models for image classification tasks
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Serverless inference</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Pre-trained models available</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">REST API integration</span>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-200">
              <p className="text-xs text-gray-600">
                <strong>Endpoint:</strong> https://api-inference.huggingface.co/models/{'{model_name}'}
              </p>
            </div>
          </div>

          {/* TensorFlow.js */}
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <Code className="w-5 h-5 text-blue-600" />
              <h4 className="text-gray-900">TensorFlow.js</h4>
            </div>
            <p className="text-gray-700 text-sm mb-3">
              Client-side machine learning framework
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Browser-based inference</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">No server required</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Privacy-focused (local processing)</span>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-200">
              <p className="text-xs text-gray-600">
                <strong>Package:</strong> npm install @tensorflow/tfjs
              </p>
            </div>
          </div>

          {/* Custom API */}
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <Code className="w-5 h-5 text-purple-600" />
              <h4 className="text-gray-900">Custom Trained Model API</h4>
            </div>
            <p className="text-gray-700 text-sm mb-3">
              Production-grade models deployed on cloud platforms
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">PyTorch/TensorFlow trained models</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Cloud deployment (AWS, GCP, Azure)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Scalable infrastructure</span>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-200">
              <p className="text-xs text-gray-600">
                <strong>Endpoint:</strong> https://api.yourdomain.com/v1/detect
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* API Integration Guide */}
      <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="bg-blue-100 p-3 rounded-lg">
            <Link2 className="w-6 h-6 text-blue-700" />
          </div>
          <div className="flex-1">
            <h3 className="text-gray-900 mb-2">API Integration Example</h3>
            <p className="text-gray-600 mb-4">Sample code for integrating with AI classification APIs</p>
          </div>
        </div>

        <div className="space-y-4">
          {/* Example 1 */}
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h4 className="text-gray-900 mb-2 text-sm">Example 1: Hugging Face Integration</h4>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-xs overflow-x-auto">
{`async function detectWithHuggingFace(imageFile) {
  const formData = new FormData();
  formData.append('file', imageFile);
  
  const response = await fetch(
    'https://api-inference.huggingface.co/models/YOUR_MODEL_NAME',
    {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer YOUR_API_KEY_HERE'
      },
      body: formData
    }
  );
  
  const result = await response.json();
  return result; // [{label: 'Late Blight', score: 0.95}, ...]
}`}</pre>
          </div>

          {/* Example 2 */}
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h4 className="text-gray-900 mb-2 text-sm">Example 2: TensorFlow.js Integration</h4>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-xs overflow-x-auto">
{`import * as tf from '@tensorflow/tfjs';

async function detectWithTensorFlow(imageElement) {
  // Load pre-trained model
  const model = await tf.loadLayersModel(
    'https://teachablemachine.withgoogle.com/models/MODEL_ID/model.json'
  );
  
  // Preprocess image
  const tensor = tf.browser.fromPixels(imageElement)
    .resizeNearestNeighbor([224, 224])
    .toFloat()
    .div(255.0)
    .expandDims();
  
  // Make prediction
  const predictions = await model.predict(tensor);
  const scores = await predictions.data();
  
  return scores; // [0.05, 0.95, 0.00, ...]
}`}</pre>
          </div>

          {/* Example 3 */}
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h4 className="text-gray-900 mb-2 text-sm">Example 3: Custom API Integration</h4>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-xs overflow-x-auto">
{`async function detectWithCustomAPI(imageFile) {
  const formData = new FormData();
  formData.append('image', imageFile);
  formData.append('crop_type', 'tomato'); // Optional metadata
  
  const response = await fetch(
    'https://api.yourdomain.com/v1/detect',
    {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer YOUR_API_KEY_HERE',
        'X-API-Version': '1.0'
      },
      body: formData
    }
  );
  
  const result = await response.json();
  return {
    disease: result.prediction.class,
    confidence: result.prediction.confidence,
    treatments: result.recommendations
  };
}`}</pre>
          </div>
        </div>
      </div>

      {/* Dependencies */}
      <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="bg-orange-100 p-3 rounded-lg">
            <Zap className="w-6 h-6 text-orange-700" />
          </div>
          <div className="flex-1">
            <h3 className="text-gray-900 mb-2">System Dependencies</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Frontend Dependencies */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="text-gray-900 mb-3">Frontend Dependencies</h4>
            <div className="space-y-2 text-sm font-mono">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-700">react</span>
                <span className="text-gray-500">^18.0.0</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-700">typescript</span>
                <span className="text-gray-500">^5.0.0</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-700">tailwindcss</span>
                <span className="text-gray-500">^4.0.0</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-700">lucide-react</span>
                <span className="text-gray-500">latest</span>
              </div>
            </div>
          </div>

          {/* AI/ML Dependencies */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="text-gray-900 mb-3">AI/ML Dependencies (Optional)</h4>
            <div className="space-y-2 text-sm font-mono">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-700">@tensorflow/tfjs</span>
                <span className="text-gray-500">^4.0.0</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-700">@tensorflow/tfjs-backend-webgl</span>
                <span className="text-gray-500">^4.0.0</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-700">axios</span>
                <span className="text-gray-500">^1.6.0</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-700">form-data</span>
                <span className="text-gray-500">^4.0.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Security & Privacy */}
      <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="bg-red-100 p-3 rounded-lg">
            <Shield className="w-6 h-6 text-red-700" />
          </div>
          <div className="flex-1">
            <h3 className="text-gray-900 mb-2">Security & Privacy Considerations</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <h4 className="text-gray-900">Best Practices</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">Store API keys in environment variables, never in code</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">Use HTTPS for all API communications</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">Implement rate limiting to prevent abuse</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">Validate and sanitize all user inputs</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">Implement CORS policies appropriately</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-gray-900">Privacy Protection</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">Images processed locally when using TensorFlow.js</span>
              </div>
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">Do not log or store personally identifiable information</span>
              </div>
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">Comply with GDPR/CCPA data protection regulations</span>
              </div>
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">Provide clear privacy policy and terms of use</span>
              </div>
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">Allow users to delete their data</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* User Interaction Touchpoints */}
      <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6">
        <h3 className="text-gray-900 mb-4">User Interaction Touchpoints</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
              <span className="text-green-700">1</span>
            </div>
            <h4 className="text-gray-900 mb-2">Image Upload</h4>
            <p className="text-gray-600 text-sm">Drag-and-drop or file selection interface</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
              <span className="text-green-700">2</span>
            </div>
            <h4 className="text-gray-900 mb-2">Results Viewing</h4>
            <p className="text-gray-600 text-sm">Interactive display of detection results and confidence scores</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
              <span className="text-green-700">3</span>
            </div>
            <h4 className="text-gray-900 mb-2">Treatment Plans</h4>
            <p className="text-gray-600 text-sm">Detailed recommendations with actionable steps</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
              <span className="text-green-700">4</span>
            </div>
            <h4 className="text-gray-900 mb-2">History Tracking</h4>
            <p className="text-gray-600 text-sm">View past detections and track disease patterns</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
              <span className="text-green-700">5</span>
            </div>
            <h4 className="text-gray-900 mb-2">Report Download</h4>
            <p className="text-gray-600 text-sm">Export detection results for offline reference</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
              <span className="text-green-700">6</span>
            </div>
            <h4 className="text-gray-900 mb-2">Navigation</h4>
            <p className="text-gray-600 text-sm">Tab-based interface for different features</p>
          </div>
        </div>
      </div>
    </div>
  );
}
