export interface DetectionResult {
  id: string;
  timestamp: number;
  imageUrl: string;
  disease: string;
  confidence: number;
  severity: 'Low' | 'Moderate' | 'High' | 'Critical';
  affectedCrop: string;
  description: string;
  symptoms: string[];
  treatments: Treatment[];
  preventiveMeasures: string[];
  estimatedYieldImpact: string;
}

export interface Treatment {
  type: 'Organic' | 'Chemical' | 'Cultural' | 'Biological';
  name: string;
  instructions: string;
  timeline: string;
}

export interface DiseaseDatabase {
  name: string;
  crops: string[];
  keywords: string[];
  severity: DetectionResult['severity'];
  description: string;
  symptoms: string[];
  treatments: Treatment[];
  preventiveMeasures: string[];
  yieldImpact: string;
}
