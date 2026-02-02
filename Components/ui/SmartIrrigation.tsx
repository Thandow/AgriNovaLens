import { useState, useEffect } from 'react';
import { Droplets, Cloud, Thermometer, Wind, AlertCircle, Power, Pause, Play, Activity } from 'lucide-react';

interface SensorData {
  soilMoisture: number;
  temperature: number;
  humidity: number;
  rainfall: number;
  windSpeed: number;
}

interface IrrigationZone {
  id: number;
  name: string;
  status: 'active' | 'inactive' | 'scheduled';
  soilMoisture: number;
  lastWatered: string;
  nextScheduled: string;
}

export function SmartIrrigation() {
  const [isSystemActive, setIsSystemActive] = useState(true);
  const [sensorData, setSensorData] = useState<SensorData>({
    soilMoisture: 45,
    temperature: 28,
    humidity: 65,
    rainfall: 0,
    windSpeed: 12
  });

  const [zones, setZones] = useState<IrrigationZone[]>([
    {
      id: 1,
      name: 'North Field - Corn',
      status: 'active',
      soilMoisture: 42,
      lastWatered: '2 hours ago',
      nextScheduled: 'Tomorrow 6:00 AM'
    },
    {
      id: 2,
      name: 'South Field - Wheat',
      status: 'inactive',
      soilMoisture: 68,
      lastWatered: '5 hours ago',
      nextScheduled: 'Tomorrow 7:00 AM'
    },
    {
      id: 3,
      name: 'East Field - Vegetables',
      status: 'scheduled',
      soilMoisture: 35,
      lastWatered: '1 hour ago',
      nextScheduled: 'Today 4:00 PM'
    },
    {
      id: 4,
      name: 'West Field - Fruits',
      status: 'inactive',
      soilMoisture: 55,
      lastWatered: '3 hours ago',
      nextScheduled: 'Tomorrow 6:30 AM'
    }
  ]);

  const [waterUsage, setWaterUsage] = useState({
    today: 1250,
    thisWeek: 7800,
    efficiency: 92
  });

  // Simulate real-time sensor updates
  useEffect(() => {
    const interval = setInterval(() => {
      setSensorData(prev => ({
        soilMoisture: Math.max(20, Math.min(80, prev.soilMoisture + (Math.random() - 0.5) * 2)),
        temperature: Math.max(20, Math.min(35, prev.temperature + (Math.random() - 0.5) * 0.5)),
        humidity: Math.max(40, Math.min(90, prev.humidity + (Math.random() - 0.5) * 2)),
        rainfall: Math.random() > 0.95 ? Math.random() * 5 : 0,
        windSpeed: Math.max(5, Math.min(25, prev.windSpeed + (Math.random() - 0.5) * 1))
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const toggleZone = (zoneId: number) => {
    setZones(zones.map(zone => {
      if (zone.id === zoneId) {
        return {
          ...zone,
          status: zone.status === 'active' ? 'inactive' : 'active',
          lastWatered: zone.status === 'inactive' ? 'Just now' : zone.lastWatered
        };
      }
      return zone;
    }));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'scheduled':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getMoistureColor = (moisture: number) => {
    if (moisture < 40) return 'text-red-600';
    if (moisture < 60) return 'text-yellow-600';
    return 'text-green-600';
  };

  const getMoistureLevel = (moisture: number) => {
    if (moisture < 40) return 'Low - Irrigation Needed';
    if (moisture < 60) return 'Optimal';
    return 'High - No Irrigation Needed';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Droplets className="w-6 h-6 text-blue-700" />
            </div>
            <div>
              <h2 className="text-gray-900">Smart Irrigation System</h2>
              <p className="text-gray-600">Automated watering based on real-time data and AI optimization</p>
            </div>
          </div>
          <button
            onClick={() => setIsSystemActive(!isSystemActive)}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
              isSystemActive
                ? 'bg-green-600 text-white hover:bg-green-700'
                : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
            }`}
          >
            <Power className="w-5 h-5" />
            <span>{isSystemActive ? 'System Active' : 'System Inactive'}</span>
          </button>
        </div>

        {/* System Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-blue-900 mb-1">Water Usage Today</p>
            <p className="text-blue-600">{waterUsage.today.toLocaleString()} Liters</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-blue-900 mb-1">This Week</p>
            <p className="text-blue-600">{waterUsage.thisWeek.toLocaleString()} Liters</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-blue-900 mb-1">Water Efficiency</p>
            <p className="text-blue-600">{waterUsage.efficiency}%</p>
          </div>
        </div>
      </div>

      {/* Real-Time Sensor Data */}
      <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6">
        <div className="flex items-center gap-2 mb-6">
          <Activity className="w-5 h-5 text-green-600 animate-pulse" />
          <h3 className="text-gray-900">Real-Time Environmental Sensors</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <Droplets className="w-5 h-5 text-blue-700" />
              <p className="text-blue-900 text-sm">Soil Moisture</p>
            </div>
            <p className="text-blue-700">{sensorData.soilMoisture.toFixed(1)}%</p>
            <div className="mt-2 h-2 bg-blue-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 transition-all duration-500"
                style={{ width: `${sensorData.soilMoisture}%` }}
              />
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg border border-orange-200">
            <div className="flex items-center gap-2 mb-2">
              <Thermometer className="w-5 h-5 text-orange-700" />
              <p className="text-orange-900 text-sm">Temperature</p>
            </div>
            <p className="text-orange-700">{sensorData.temperature.toFixed(1)}°C</p>
            <p className="text-orange-600 text-xs mt-1">Optimal: 20-30°C</p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-4 rounded-lg border border-teal-200">
            <div className="flex items-center gap-2 mb-2">
              <Cloud className="w-5 h-5 text-teal-700" />
              <p className="text-teal-900 text-sm">Humidity</p>
            </div>
            <p className="text-teal-700">{sensorData.humidity.toFixed(1)}%</p>
            <p className="text-teal-600 text-xs mt-1">Current conditions</p>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-4 rounded-lg border border-indigo-200">
            <div className="flex items-center gap-2 mb-2">
              <Cloud className="w-5 h-5 text-indigo-700" />
              <p className="text-indigo-900 text-sm">Rainfall</p>
            </div>
            <p className="text-indigo-700">{sensorData.rainfall.toFixed(1)}mm</p>
            <p className="text-indigo-600 text-xs mt-1">Last 24 hours</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200">
            <div className="flex items-center gap-2 mb-2">
              <Wind className="w-5 h-5 text-purple-700" />
              <p className="text-purple-900 text-sm">Wind Speed</p>
            </div>
            <p className="text-purple-700">{sensorData.windSpeed.toFixed(1)} km/h</p>
            <p className="text-purple-600 text-xs mt-1">Current speed</p>
          </div>
        </div>
      </div>

      {/* AI Recommendations */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 p-6">
        <div className="flex items-start gap-4">
          <div className="bg-green-100 p-3 rounded-lg">
            <AlertCircle className="w-6 h-6 text-green-700" />
          </div>
          <div>
            <h3 className="text-green-900 mb-2">AI-Powered Recommendations</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">•</span>
                <span>East Field moisture at 35% - irrigation scheduled for 4:00 PM today</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">•</span>
                <span>Weather forecast shows rain tomorrow - delaying North Field irrigation by 24 hours</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">•</span>
                <span>Current efficiency at 92% - saving 450L daily compared to traditional methods</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Irrigation Zones */}
      <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6">
        <h3 className="text-gray-900 mb-6">Irrigation Zones Control</h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {zones.map((zone) => (
            <div
              key={zone.id}
              className="bg-gray-50 rounded-lg p-5 border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-gray-900">{zone.name}</h4>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs border mt-2 ${getStatusColor(
                      zone.status
                    )}`}
                  >
                    {zone.status.charAt(0).toUpperCase() + zone.status.slice(1)}
                  </span>
                </div>
                <button
                  onClick={() => toggleZone(zone.id)}
                  disabled={!isSystemActive}
                  className={`p-3 rounded-lg transition-colors ${
                    zone.status === 'active'
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {zone.status === 'active' ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5" />
                  )}
                </button>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-gray-600 text-sm">Soil Moisture</p>
                    <p className={`text-sm ${getMoistureColor(zone.soilMoisture)}`}>
                      {zone.soilMoisture}%
                    </p>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${
                        zone.soilMoisture < 40
                          ? 'bg-red-500'
                          : zone.soilMoisture < 60
                          ? 'bg-yellow-500'
                          : 'bg-green-500'
                      }`}
                      style={{ width: `${zone.soilMoisture}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{getMoistureLevel(zone.soilMoisture)}</p>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Last Watered:</span>
                  <span className="text-gray-900">{zone.lastWatered}</span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Next Scheduled:</span>
                  <span className="text-gray-900">{zone.nextScheduled}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6">
        <h3 className="text-gray-900 mb-4">How Smart Irrigation Works</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center p-4">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <Activity className="w-6 h-6 text-blue-700" />
            </div>
            <p className="text-gray-900 mb-1">1. Sensors Monitor</p>
            <p className="text-gray-600 text-sm">IoT sensors track soil moisture, weather, and plant needs</p>
          </div>

          <div className="text-center p-4">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <Cloud className="w-6 h-6 text-blue-700" />
            </div>
            <p className="text-gray-900 mb-1">2. Weather Data</p>
            <p className="text-gray-600 text-sm">Real-time weather forecasts adjust watering schedules</p>
          </div>

          <div className="text-center p-4">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <AlertCircle className="w-6 h-6 text-blue-700" />
            </div>
            <p className="text-gray-900 mb-1">3. AI Optimization</p>
            <p className="text-gray-600 text-sm">Machine learning optimizes water usage and timing</p>
          </div>

          <div className="text-center p-4">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <Droplets className="w-6 h-6 text-blue-700" />
            </div>
            <p className="text-gray-900 mb-1">4. Automated Watering</p>
            <p className="text-gray-600 text-sm">System waters zones precisely when and where needed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
