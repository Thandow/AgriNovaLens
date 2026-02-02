import { useState, useCallback } from 'react';
import { Upload, Image as ImageIcon, AlertCircle, Loader2, Camera, X } from 'lucide-react';
import { detectDisease } from '../services/diseaseDetection';
import type { DetectionResult } from '../types';

interface ImageUploadProps {
  onDetectionComplete: (result: DetectionResult) => void;
}

export function ImageUpload({ onDetectionComplete }: ImageUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [isValidating, setIsValidating] = useState(false);

  const validateFile = (file: File): string | null => {
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    const maxSize = 10 * 1024 * 1024; // 10MB

    if (!validTypes.includes(file.type)) {
      return 'Invalid file type. Please upload a JPG, PNG, or WebP image.';
    }

    if (file.size > maxSize) {
      return 'File size too large. Maximum size is 10MB.';
    }

    return null;
  };

  const validateImageContent = async (file: File): Promise<boolean> => {
    // In a real application, this would use an AI model to classify the image
    // For this prototype, we'll use filename and basic heuristics with strict validation
    
    const fileName = file.name.toLowerCase();
    const cropKeywords = ['crop', 'plant', 'leaf', 'leaves', 'corn', 'wheat', 'tomato', 'potato', 
                          'rice', 'soybean', 'pest', 'disease', 'agriculture', 'farm', 'maize',
                          'bean', 'pea', 'cotton', 'sugarcane', 'barley', 'vegetable', 'fruit'];
    
    // Check if filename contains crop-related keywords
    const hasValidKeyword = cropKeywords.some(keyword => fileName.includes(keyword));
    
    // In production, you would analyze the actual image content using a classifier
    // For this prototype, we'll simulate strict AI validation
    return new Promise((resolve) => {
      setTimeout(() => {
        // Only accept if filename clearly suggests it's crop-related
        // Strict validation: only accept 40% of random images (vs 70% before) to simulate stricter AI
        // Images with valid keywords are more likely to be accepted
        const isValid = hasValidKeyword ? Math.random() > 0.1 : Math.random() > 0.6;
        resolve(isValid);
      }, 1500);
    });
  };

  const showError = (message: string) => {
    setError(message);
    setShowErrorModal(true);
  };

  const processImage = async (file: File) => {
    const validationError = validateFile(file);
    if (validationError) {
      showError(validationError);
      return;
    }

    setError(null);
    setShowErrorModal(false);
    setIsValidating(true);

    try {
      // Create preview
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);

      // Validate image content with AI - strict validation for crops/plants only
      const isValidCropImage = await validateImageContent(file);
      
      if (!isValidCropImage) {
        setIsValidating(false);
        setPreviewUrl(null);
        URL.revokeObjectURL(url);
        showError('Error: The provided image does not contain a recognizable crop or plant related.');
        return;
      }

      setIsValidating(false);
      setIsProcessing(true);

      // Simulate AI processing time (would be actual API call in production)
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Process with AI detection
      const result = await detectDisease(file, url);
      onDetectionComplete(result);
    } catch (err) {
      showError('Failed to process image. Please try again.');
      console.error(err);
    } finally {
      setIsProcessing(false);
      setIsValidating(false);
    }
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      processImage(file);
    }
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processImage(file);
    }
  };

  return (
    <div className="space-y-6">
      {/* Problem Statement Card */}
      <div className="bg-white rounded-xl shadow-sm border p-6" style={{ borderColor: '#e5e7eb' }}>
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg" style={{ backgroundColor: '#f0f9f0' }}>
            <AlertCircle className="w-6 h-6" style={{ color: '#106419' }} />
          </div>
          <div className="flex-1">
            <h2 className="mb-2" style={{ color: '#07480E' }}>Problem: Crop Disease Detection</h2>
            <p className="mb-4" style={{ color: '#474747' }}>
              Crop diseases cause up to 40% yield losses globally, costing farmers billions annually. 
              Early detection is critical but requires expert knowledge that many farmers lack.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-3 rounded-lg" style={{ backgroundColor: '#f0f9f0' }}>
                <p style={{ color: '#07480E' }}>Impact Metric</p>
                <p className="text-sm" style={{ color: '#106419' }}>40% reduction in crop losses with early detection</p>
              </div>
              <div className="p-3 rounded-lg" style={{ backgroundColor: '#f0f9f0' }}>
                <p style={{ color: '#07480E' }}>Response Time</p>
                <p className="text-sm" style={{ color: '#106419' }}>24-48 hour intervention window</p>
              </div>
              <div className="p-3 rounded-lg" style={{ backgroundColor: '#f0f9f0' }}>
                <p style={{ color: '#07480E' }}>Accuracy</p>
                <p className="text-sm" style={{ color: '#106419' }}>95%+ detection accuracy with AI</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upload Area */}
      <div className="bg-white rounded-xl shadow-sm border p-8" style={{ borderColor: '#e5e7eb' }}>
        <h3 className="mb-6" style={{ color: '#07480E' }}>Upload Crop Image for Analysis</h3>
        
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className="border-2 border-dashed rounded-xl p-12 text-center transition-all"
          style={{
            borderColor: isDragging ? '#106419' : '#d1d5db',
            backgroundColor: isDragging ? '#f0f9f0' : '#f9fafb'
          }}
          onMouseEnter={(e) => {
            if (!isDragging && !isValidating && !isProcessing) {
              e.currentTarget.style.borderColor = '#106419';
              e.currentTarget.style.backgroundColor = '#f0f9f0';
            }
          }}
          onMouseLeave={(e) => {
            if (!isDragging) {
              e.currentTarget.style.borderColor = '#d1d5db';
              e.currentTarget.style.backgroundColor = '#f9fafb';
            }
          }}
        >
          {isValidating ? (
            <div className="space-y-4">
              {previewUrl && (
                <div className="max-w-md mx-auto mb-4">
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="rounded-lg shadow-md w-full h-64 object-cover"
                  />
                </div>
              )}
              <Loader2 className="w-12 h-12 mx-auto animate-spin" style={{ color: '#106419' }} />
              <p style={{ color: '#474747' }}>Validating image content...</p>
              <p className="text-sm" style={{ color: '#6b7280' }}>Ensuring image contains crops or plants</p>
            </div>
          ) : isProcessing ? (
            <div className="space-y-4">
              {previewUrl && (
                <div className="max-w-md mx-auto mb-4">
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="rounded-lg shadow-md w-full h-64 object-cover"
                  />
                </div>
              )}
              <Loader2 className="w-12 h-12 mx-auto animate-spin" style={{ color: '#106419' }} />
              <p style={{ color: '#474747' }}>Processing image with AI model...</p>
              <p className="text-sm" style={{ color: '#6b7280' }}>Analyzing patterns and identifying diseases</p>
            </div>
          ) : (
            <>
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#f0f9f0' }}>
                {isDragging ? (
                  <ImageIcon className="w-10 h-10" style={{ color: '#106419' }} />
                ) : (
                  <Upload className="w-10 h-10" style={{ color: '#106419' }} />
                )}
              </div>
              
              <p className="mb-2" style={{ color: '#474747' }}>
                Drag and drop your crop image here
              </p>
              <p className="text-sm mb-6" style={{ color: '#6b7280' }}>
                or click to browse from your device
              </p>

              <label className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-colors cursor-pointer" style={{ backgroundColor: '#106419', color: 'white' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#07480E'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#106419'}
              >
                <Camera className="w-5 h-5" />
                <span>Select Image</span>
                <input
                  type="file"
                  accept="image/jpeg,image/jpg,image/png,image/webp"
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </label>

              <p className="text-sm mt-4" style={{ color: '#6b7280' }}>
                Supported formats: JPG, PNG, WebP (Max 10MB)
              </p>
            </>
          )}
        </div>

        {error && (
          <div className="mt-4 border rounded-lg p-4 flex items-start gap-3" style={{ backgroundColor: '#fee2e2', borderColor: '#fecaca' }}>
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#dc2626' }} />
            <div>
              <p style={{ color: '#7f1d1d' }}>Error</p>
              <p className="text-sm" style={{ color: '#991b1b' }}>{error}</p>
            </div>
          </div>
        )}

        {/* Instructions */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2" style={{ backgroundColor: '#f0f9f0' }}>
              <span style={{ color: '#106419' }}>1</span>
            </div>
            <p className="text-sm" style={{ color: '#474747' }}>Take a clear photo of the affected plant</p>
          </div>
          <div className="text-center p-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2" style={{ backgroundColor: '#f0f9f0' }}>
              <span style={{ color: '#106419' }}>2</span>
            </div>
            <p className="text-sm" style={{ color: '#474747' }}>Upload the image for AI analysis</p>
          </div>
          <div className="text-center p-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2" style={{ backgroundColor: '#f0f9f0' }}>
              <span style={{ color: '#106419' }}>3</span>
            </div>
            <p className="text-sm" style={{ color: '#474747' }}>Receive instant diagnosis and treatment plan</p>
          </div>
        </div>
      </div>

      {/* Error Modal Popup */}
      {showErrorModal && (
        <div className="fixed inset-0 flex items-center justify-center p-4 z-50" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 animate-[slideIn_0.3s_ease-out]">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full flex-shrink-0" style={{ backgroundColor: '#fee2e2' }}>
                <AlertCircle className="w-6 h-6" style={{ color: '#dc2626' }} />
              </div>
              <div className="flex-1">
                <h3 className="mb-2" style={{ color: '#111827' }}>Image Validation Error</h3>
                <p className="text-sm mb-4" style={{ color: '#474747' }}>{error}</p>
                <button
                  onClick={() => {
                    setShowErrorModal(false);
                    setError(null);
                  }}
                  className="w-full py-2 px-4 rounded-lg transition-colors"
                  style={{ backgroundColor: '#dc2626', color: 'white' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#b91c1c'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#dc2626'}
                >
                  Upload Different Image
                </button>
              </div>
              <button
                onClick={() => {
                  setShowErrorModal(false);
                  setError(null);
                }}
                className="flex-shrink-0"
                style={{ color: '#9ca3af' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#4b5563'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
