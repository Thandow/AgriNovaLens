import type { DetectionResult, DiseaseDatabase } from '../types';

// Mock disease database simulating a trained AI model
// In production, this would be replaced with actual API calls to:
// - Teachable Machine (Google)
// - TensorFlow.js model
// - Hugging Face Image Classification API
// - Custom trained model endpoint

const diseaseDatabase: DiseaseDatabase[] = [
  {
    name: 'Late Blight',
    crops: ['Tomato', 'Potato'],
    keywords: ['brown', 'dark', 'spots', 'wilting'],
    severity: 'Critical',
    description: 'Late blight is a devastating disease caused by Phytophthora infestans. It can destroy entire crops within days if left untreated.',
    symptoms: [
      'Dark brown to black lesions on leaves',
      'Water-soaked appearance on stems',
      'White fuzzy growth on leaf undersides',
      'Rapid spread during humid conditions',
      'Fruit rot with brown, firm lesions'
    ],
    treatments: [
      {
        type: 'Chemical',
        name: 'Copper-based fungicide',
        instructions: 'Apply every 7-10 days. Mix 2-3 tablespoons per gallon of water. Spray thoroughly covering all plant surfaces.',
        timeline: 'Start immediately, continue for 3-4 weeks'
      },
      {
        type: 'Cultural',
        name: 'Remove infected plants',
        instructions: 'Immediately remove and destroy all infected plant material. Do not compost. Burn or bag and dispose of.',
        timeline: 'Immediate action required'
      },
      {
        type: 'Biological',
        name: 'Bacillus subtilis',
        instructions: 'Apply biological fungicide as preventive measure on healthy plants nearby.',
        timeline: 'Weekly application for 4 weeks'
      }
    ],
    preventiveMeasures: [
      'Plant resistant varieties',
      'Ensure proper spacing for air circulation',
      'Avoid overhead watering',
      'Apply mulch to prevent soil splash',
      'Monitor weather - disease spreads in cool, wet conditions'
    ],
    yieldImpact: '30-80% crop loss if untreated'
  },
  {
    name: 'Powdery Mildew',
    crops: ['Tomato', 'Cucumber', 'Squash', 'Pumpkin'],
    keywords: ['white', 'powder', 'coating', 'dusty'],
    severity: 'Moderate',
    description: 'Powdery mildew appears as white powdery spots on leaves and stems. While not immediately fatal, it weakens plants and reduces yields.',
    symptoms: [
      'White powdery coating on leaves',
      'Yellowing and browning of affected leaves',
      'Stunted plant growth',
      'Reduced fruit production',
      'Leaf distortion and curling'
    ],
    treatments: [
      {
        type: 'Organic',
        name: 'Baking soda spray',
        instructions: 'Mix 1 tablespoon baking soda + 1 tablespoon vegetable oil + 1 drop dish soap per gallon of water. Spray weekly.',
        timeline: '2-3 weeks of treatment'
      },
      {
        type: 'Organic',
        name: 'Neem oil',
        instructions: 'Mix 2 tablespoons neem oil per gallon of water. Spray every 7-14 days in early morning or evening.',
        timeline: 'Continue until symptoms disappear'
      },
      {
        type: 'Chemical',
        name: 'Sulfur-based fungicide',
        instructions: 'Apply according to package directions. Do not apply when temperature exceeds 90°F.',
        timeline: 'Every 10-14 days'
      }
    ],
    preventiveMeasures: [
      'Provide good air circulation',
      'Avoid overhead watering',
      'Water in the morning to allow foliage to dry',
      'Remove infected leaves promptly',
      'Plant in full sun locations'
    ],
    yieldImpact: '10-30% yield reduction'
  },
  {
    name: 'Early Blight',
    crops: ['Tomato', 'Potato'],
    keywords: ['concentric', 'rings', 'target', 'spots'],
    severity: 'Moderate',
    description: 'Early blight is caused by Alternaria solani fungus. It typically affects older leaves first and progresses upward.',
    symptoms: [
      'Dark spots with concentric rings (target pattern)',
      'Lower leaves affected first',
      'Yellowing around lesions',
      'Premature leaf drop',
      'Stem lesions in severe cases'
    ],
    treatments: [
      {
        type: 'Chemical',
        name: 'Chlorothalonil fungicide',
        instructions: 'Apply every 7-10 days. Rotate with copper-based fungicides to prevent resistance.',
        timeline: '3-4 weeks'
      },
      {
        type: 'Cultural',
        name: 'Improve plant health',
        instructions: 'Apply balanced fertilizer, ensure consistent watering, and mulch to reduce soil splash.',
        timeline: 'Ongoing maintenance'
      },
      {
        type: 'Organic',
        name: 'Copper fungicide',
        instructions: 'Apply organic copper spray according to package directions.',
        timeline: 'Weekly for 4 weeks'
      }
    ],
    preventiveMeasures: [
      'Rotate crops annually',
      'Space plants adequately',
      'Use drip irrigation instead of overhead watering',
      'Remove plant debris at season end',
      'Apply mulch around plants'
    ],
    yieldImpact: '20-40% yield loss if severe'
  },
  {
    name: 'Bacterial Spot',
    crops: ['Tomato', 'Pepper'],
    keywords: ['small', 'dark', 'spots', 'yellow'],
    severity: 'High',
    description: 'Bacterial spot is caused by Xanthomonas bacteria. It thrives in warm, humid conditions and spreads rapidly.',
    symptoms: [
      'Small dark spots with yellow halos',
      'Spots on leaves, stems, and fruit',
      'Leaf drop in severe infections',
      'Fruit spots become raised and scabby',
      'Reduced fruit quality'
    ],
    treatments: [
      {
        type: 'Chemical',
        name: 'Copper bactericide',
        instructions: 'Apply copper-based bactericide. More effective as preventive than curative treatment.',
        timeline: 'Every 5-7 days during wet weather'
      },
      {
        type: 'Cultural',
        name: 'Sanitation practices',
        instructions: 'Remove and destroy infected plants. Disinfect tools between plants. Avoid working with wet plants.',
        timeline: 'Immediate and ongoing'
      },
      {
        type: 'Biological',
        name: 'Beneficial bacteria',
        instructions: 'Apply products containing Bacillus species to suppress pathogen populations.',
        timeline: 'Weekly applications'
      }
    ],
    preventiveMeasures: [
      'Use disease-free seeds and transplants',
      'Avoid overhead irrigation',
      'Practice 3-4 year crop rotation',
      'Maintain good air circulation',
      'Remove infected plant material immediately'
    ],
    yieldImpact: '15-50% yield reduction'
  },
  {
    name: 'Leaf Spot Disease',
    crops: ['Various'],
    keywords: ['spots', 'circular', 'brown'],
    severity: 'Low',
    description: 'General leaf spot diseases caused by various fungal pathogens. Usually manageable with good cultural practices.',
    symptoms: [
      'Circular to irregular brown spots',
      'May have darker borders',
      'Spots may merge on severely infected leaves',
      'Premature leaf yellowing',
      'Reduced photosynthesis'
    ],
    treatments: [
      {
        type: 'Organic',
        name: 'Remove affected leaves',
        instructions: 'Prune and dispose of infected leaves. Improve air circulation around plants.',
        timeline: 'As needed'
      },
      {
        type: 'Organic',
        name: 'Compost tea',
        instructions: 'Apply well-aged compost tea as foliar spray to boost plant immunity.',
        timeline: 'Weekly for 3 weeks'
      },
      {
        type: 'Chemical',
        name: 'Broad-spectrum fungicide',
        instructions: 'Apply if infection is severe. Follow label instructions.',
        timeline: '2-3 applications at 10-day intervals'
      }
    ],
    preventiveMeasures: [
      'Water at soil level, not on foliage',
      'Ensure adequate plant spacing',
      'Keep garden clean and remove debris',
      'Apply mulch to prevent soil splash',
      'Promote healthy, vigorous plant growth'
    ],
    yieldImpact: '5-15% yield reduction'
  },
  {
    name: 'Septoria Leaf Spot',
    crops: ['Tomato'],
    keywords: ['small', 'circular', 'gray', 'dark'],
    severity: 'Moderate',
    description: 'Septoria leaf spot is a common tomato disease that starts on lower leaves and moves upward.',
    symptoms: [
      'Numerous small circular spots',
      'Gray or tan centers with dark borders',
      'Tiny black dots (fruiting bodies) in spot centers',
      'Lower leaves turn yellow and drop',
      'Progressive upward spread'
    ],
    treatments: [
      {
        type: 'Chemical',
        name: 'Fungicide rotation',
        instructions: 'Alternate between chlorothalonil and copper-based fungicides every 7-10 days.',
        timeline: '4-6 weeks'
      },
      {
        type: 'Cultural',
        name: 'Pruning and mulching',
        instructions: 'Remove lower branches up to first fruit cluster. Apply thick organic mulch.',
        timeline: 'Immediate action'
      },
      {
        type: 'Organic',
        name: 'Organic copper spray',
        instructions: 'Apply organic approved copper fungicide early in disease development.',
        timeline: 'Weekly for 4 weeks'
      }
    ],
    preventiveMeasures: [
      'Stake and cage plants for better air flow',
      'Mulch heavily to prevent soil splash',
      'Avoid overhead watering',
      'Remove and destroy infected leaves',
      'Rotate crops on 3-year cycle'
    ],
    yieldImpact: '20-30% yield reduction'
  }
];

/**
 * Mock AI Disease Detection Service
 * 
 * In production, this would integrate with:
 * - Teachable Machine: https://teachablemachine.withgoogle.com/
 * - TensorFlow.js for client-side inference
 * - Hugging Face Inference API: https://huggingface.co/models?pipeline_tag=image-classification
 * - Custom trained model (PyTorch/TensorFlow) deployed on cloud services
 * 
 * API Integration Example (would replace this mock):
 * ```typescript
 * const formData = new FormData();
 * formData.append('image', file);
 * 
 * const response = await fetch('https://api.example.com/v1/detect', {
 *   method: 'POST',
 *   headers: { 'Authorization': 'Bearer YOUR_API_KEY' },
 *   body: formData
 * });
 * 
 * const result = await response.json();
 * ```
 */
export async function detectDisease(file: File, imageUrl: string): Promise<DetectionResult> {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Mock image analysis - in production, this would be actual ML inference
  // The model would analyze visual features like:
  // - Color patterns (chlorosis, necrosis)
  // - Texture (lesions, powdery coating)
  // - Shape patterns (spots, rings, wilting)
  // - Spatial distribution of symptoms
  
  // For demo, randomly select a disease with weighted probabilities
  const random = Math.random();
  let selectedDisease: DiseaseDatabase;
  
  if (random < 0.25) {
    selectedDisease = diseaseDatabase[0]; // Late Blight
  } else if (random < 0.45) {
    selectedDisease = diseaseDatabase[1]; // Powdery Mildew
  } else if (random < 0.65) {
    selectedDisease = diseaseDatabase[2]; // Early Blight
  } else if (random < 0.80) {
    selectedDisease = diseaseDatabase[3]; // Bacterial Spot
  } else if (random < 0.90) {
    selectedDisease = diseaseDatabase[5]; // Septoria Leaf Spot
  } else {
    selectedDisease = diseaseDatabase[4]; // Leaf Spot
  }

  // Generate realistic confidence score
  // Critical diseases get lower confidence to reflect difficulty
  const baseConfidence = selectedDisease.severity === 'Critical' ? 0.85 : 0.90;
  const variance = Math.random() * 0.10;
  const confidence = Math.min(0.99, baseConfidence + variance);

  // Select random crop from affected crops
  const affectedCrop = selectedDisease.crops[Math.floor(Math.random() * selectedDisease.crops.length)];

  const result: DetectionResult = {
    id: `detection_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    timestamp: Date.now(),
    imageUrl,
    disease: selectedDisease.name,
    confidence: Math.round(confidence * 100) / 100,
    severity: selectedDisease.severity,
    affectedCrop,
    description: selectedDisease.description,
    symptoms: selectedDisease.symptoms,
    treatments: selectedDisease.treatments,
    preventiveMeasures: selectedDisease.preventiveMeasures,
    estimatedYieldImpact: selectedDisease.yieldImpact
  };

  return result;
}

/**
 * Get color coding for severity levels
 */
export function getSeverityColor(severity: DetectionResult['severity']): {
  bg: string;
  text: string;
  border: string;
} {
  switch (severity) {
    case 'Critical':
      return { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-300' };
    case 'High':
      return { bg: 'bg-orange-100', text: 'text-orange-800', border: 'border-orange-300' };
    case 'Moderate':
      return { bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-300' };
    case 'Low':
      return { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-300' };
    default:
      return { bg: 'bg-gray-100', text: 'text-gray-800', border: 'border-gray-300' };
  }
}
