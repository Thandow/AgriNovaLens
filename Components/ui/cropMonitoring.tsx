import { useState } from 'react';
import { Satellite, Wifi, Camera, TrendingUp, TrendingDown, AlertTriangle, CheckCircle, MapPin, BarChart3 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CropHealth {
  fieldName: string;
  cropType: string;
  healthScore: number;
  ndviValue: number;
  trend: 'up' | 'down' | 'stable';
  status: 'healthy' | 'warning' | 'critical';
  area: number;
  lastUpdated: string;
}

export function CropMonitoring() {
  const [selectedField, setSelectedField] = useState<number>(0);

  const cropFields: CropHealth[] = [
    {
      fieldName: 'North Field A',
      cropType: 'Corn',
      healthScore: 92,
      ndviValue: 0.78,
      trend: 'up',
      status: 'healthy',
      area: 45.5,
      lastUpdated: '2 hours ago'
    },
    {
      fieldName: 'South Field B',
      cropType: 'Wheat',
      healthScore: 85,
      ndviValue: 0.68,
      trend: 'stable',
      status: 'healthy',
      area: 38.2,
      lastUpdated: '3 hours ago'
    },
    {
      fieldName: 'East Field C',
      cropType: 'Soybeans',
      healthScore: 68,
      ndviValue: 0.52,
      trend: 'down',
      status: 'warning',
      area: 52.0,
      lastUpdated: '1 hour ago'
    },
    {
      fieldName: 'West Field D',
      cropType: 'Rice',
      healthScore: 45,
      ndviValue: 0.38,
      trend: 'down',
      status: 'critical',
      area: 40.5,
      lastUpdated: '30 minutes ago'
    }
  ];

  const sensorMetrics = [
    { label: 'Active IoT Sensors', value: '24', icon: Wifi, color: 'blue' },
    { label: 'Satellite Scans', value: '156', icon: Satellite, color: 'purple' },
    { label: 'Drone Flights', value: '12', icon: Camera, color: 'green' },
    { label: 'Fields Monitored', value: '4', icon: MapPin, color: 'orange' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'warning':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'critical':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
      case 'critical':
        return <AlertTriangle className="w-5 h-5 text-red-600" />;
      default:
        return <CheckCircle className="w-5 h-5 text-gray-600" />;
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-600" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-red-600" />;
      default:
        return <BarChart3 className="w-4 h-4 text-gray-600" />;
    }
  };

  const getHealthColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-purple-100 p-3 rounded-lg">
            <Satellite className="w-6 h-6 text-purple-700" />
          </div>
          <div>
            <h2 className="text-gray-900">Crop Monitoring System</h2>
            <p className="text-gray-600">Real-time crop health tracking using satellite imagery, drones, and IoT sensors</p>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {sensorMetrics.map((metric, index) => {
            const Icon = metric.icon;
            const colorClasses = {
              blue: 'bg-blue-50 text-blue-700 border-blue-200',
              purple: 'bg-purple-50 text-purple-700 border-purple-200',
              green: 'bg-green-50 text-green-700 border-green-200',
              orange: 'bg-orange-50 text-orange-700 border-orange-200'
            };
            
            return (
              <div key={index} className={`p-4 rounded-lg border ${colorClasses[metric.color as keyof typeof colorClasses]}`}>
                <Icon className="w-5 h-5 mb-2" />
                <p className="mb-1">{metric.value}</p>
                <p className="text-sm opacity-90">{metric.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Satellite & Drone Imagery */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Satellite className="w-5 h-5 text-purple-600" />
            <h3 className="text-gray-900">Satellite Imagery Analysis</h3>
          </div>
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1515102502805-e970df437805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRlbGxpdGUlMjBjcm9wJTIwZmllbGQlMjBhZXJpYWx8ZW58MXx8fHwxNzY0NzU0OTM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Satellite crop field imagery"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">NDVI Analysis</span>
              <span className="text-green-700">Updated daily</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Resolution</span>
              <span className="text-gray-900">10m per pixel</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Coverage</span>
              <span className="text-gray-900">176.2 hectares</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Camera className="w-5 h-5 text-green-600" />
            <h3 className="text-gray-900">Drone Surveillance</h3>
          </div>
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1660141259396-858ed837477a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGFncmljdWx0dXJlJTIwbW9uaXRvcmluZ3xlbnwxfHx8fDE3NjQ3NTQ5MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Drone agriculture monitoring"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Flight Frequency</span>
              <span className="text-green-700">3x per week</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Image Resolution</span>
              <span className="text-gray-900">2cm per pixel</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Last Flight</span>
              <span className="text-gray-900">Yesterday 9:00 AM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Field Health Dashboard */}
      <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6">
        <h3 className="text-gray-900 mb-6">Field Health Overview</h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {cropFields.map((field, index) => (
            <div
              key={index}
              onClick={() => setSelectedField(index)}
              className={`p-5 rounded-lg border-2 cursor-pointer transition-all ${
                selectedField === index
                  ? 'border-green-500 bg-green-50 shadow-md'
                  : 'border-gray-200 bg-gray-50 hover:border-green-300'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-gray-900">{field.fieldName}</h4>
                  <p className="text-gray-600 text-sm">{field.cropType} • {field.area} hectares</p>
                </div>
                <div className="flex items-center gap-2">
                  {getStatusIcon(field.status)}
                  {getTrendIcon(field.trend)}
                </div>
              </div>

              <div className="space-y-3">
                {/* Health Score */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gray-600 text-sm">Health Score</span>
                    <span className={`${getHealthColor(field.healthScore)}`}>
                      {field.healthScore}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all ${
                        field.healthScore >= 80
                          ? 'bg-green-500'
                          : field.healthScore >= 60
                          ? 'bg-yellow-500'
                          : 'bg-red-500'
                      }`}
                      style={{ width: `${field.healthScore}%` }}
                    />
                  </div>
                </div>

                {/* NDVI Value */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">NDVI Index:</span>
                  <span className="text-gray-900">{field.ndviValue.toFixed(2)}</span>
                </div>

                {/* Status Badge */}
                <div className="flex items-center justify-between">
                  <span
                    className={`px-3 py-1 rounded-full text-xs border ${getStatusColor(field.status)}`}
                  >
                    {field.status.charAt(0).toUpperCase() + field.status.slice(1)}
                  </span>
                  <span className="text-xs text-gray-500">Updated {field.lastUpdated}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Field Details */}
      {selectedField !== null && (
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-200 p-6">
          <h3 className="text-gray-900 mb-4">AI Analysis: {cropFields[selectedField].fieldName}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-white p-4 rounded-lg">
              <p className="text-gray-600 text-sm mb-1">Growth Stage</p>
              <p className="text-gray-900">Vegetative</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="text-gray-600 text-sm mb-1">Estimated Yield</p>
              <p className="text-gray-900">8.5 tons/hectare</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="text-gray-600 text-sm mb-1">Days to Harvest</p>
              <p className="text-gray-900">45-50 days</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg">
            <h4 className="text-gray-900 mb-3">Recommendations</h4>
            <ul className="space-y-2">
              {cropFields[selectedField].status === 'critical' && (
                <>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Immediate intervention required - detected pest infestation in south sector</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Increase irrigation by 25% - soil moisture below optimal levels</span>
                  </li>
                </>
              )}
              {cropFields[selectedField].status === 'warning' && (
                <>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <AlertTriangle className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span>Monitor closely - early signs of nutrient deficiency detected</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <AlertTriangle className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span>Consider nitrogen fertilizer application in affected zones</span>
                  </li>
                </>
              )}
              {cropFields[selectedField].status === 'healthy' && (
                <>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Crop health is optimal - maintain current care routine</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Projected yield is above average for this season</span>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      )}

      {/* Technology Stack */}
      <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6">
        <h3 className="text-gray-900 mb-4">Monitoring Technologies</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border border-gray-200 rounded-lg">
            <Satellite className="w-8 h-8 text-purple-600 mb-3" />
            <p className="text-gray-900 mb-2">Satellite Imagery</p>
            <p className="text-gray-600 text-sm">Multi-spectral analysis using Sentinel-2 and Landsat satellites for vegetation health monitoring</p>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg">
            <Camera className="w-8 h-8 text-green-600 mb-3" />
            <p className="text-gray-900 mb-2">Drone Surveillance</p>
            <p className="text-gray-600 text-sm">High-resolution RGB and multispectral imaging for detailed crop assessment</p>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg">
            <Wifi className="w-8 h-8 text-blue-600 mb-3" />
            <p className="text-gray-900 mb-2">IoT Sensors</p>
            <p className="text-gray-600 text-sm">Ground-based sensors measuring soil moisture, temperature, and nutrient levels</p>
          </div>
        </div>
      </div>
    </div>
  );
}
