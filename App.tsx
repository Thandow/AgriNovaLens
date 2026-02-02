import { useState } from 'react';
import { Leaf, Upload, History, LogOut, Droplets, Satellite, Search } from 'lucide-react';
import { ImageUpload } from './components/ImageUpload';
import { DetectionResults } from './components/DetectionResults';
import { DetectionHistory } from './components/DetectionHistory';
import { Login } from './components/Login';
import { SmartIrrigation } from './components/SmartIrrigation';
import { CropMonitoring } from './components/CropMonitoring';
import type { DetectionResult } from './types';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('agrinova_user') !== null;
  });
  const [userEmail, setUserEmail] = useState(() => {
    return localStorage.getItem('agrinova_user') || '';
  });
  const [activeTab, setActiveTab] = useState<'detect' | 'history' | 'irrigation' | 'monitoring'>('detect');
  const [currentResult, setCurrentResult] = useState<DetectionResult | null>(null);
  const [detectionHistory, setDetectionHistory] = useState<DetectionResult[]>(() => {
    const saved = localStorage.getItem('detection_history');
    return saved ? JSON.parse(saved) : [];
  });
  const [searchQuery, setSearchQuery] = useState('');

  const handleDetectionComplete = (result: DetectionResult) => {
    setCurrentResult(result);
    const newHistory = [result, ...detectionHistory].slice(0, 10); // Keep last 10
    setDetectionHistory(newHistory);
    localStorage.setItem('detection_history', JSON.stringify(newHistory));
  };

  const handleNewDetection = () => {
    setCurrentResult(null);
  };

  const handleLogin = (email: string) => {
    setUserEmail(email);
    setIsAuthenticated(true);
    localStorage.setItem('agrinova_user', email);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserEmail('');
    localStorage.removeItem('agrinova_user');
    setCurrentResult(null);
    setActiveTab('detect');
    setSearchQuery('');
  };

  // Filter detection history based on search query
  const filteredHistory = detectionHistory.filter(item => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      item.disease.toLowerCase().includes(query) ||
      item.severity.toLowerCase().includes(query) ||
      item.treatments?.some(t => t.name.toLowerCase().includes(query) || t.type.toLowerCase().includes(query)) ||
      item.affectedCrop?.toLowerCase().includes(query) ||
      item.description?.toLowerCase().includes(query) ||
      item.symptoms?.some(s => s.toLowerCase().includes(query))
    );
  });

  // Check if search has results
  const hasSearchResults = searchQuery && filteredHistory.length > 0;
  const showNoResults = searchQuery && filteredHistory.length === 0;

  const tabs = [
    { id: 'detect' as const, label: 'Disease Detection', icon: Upload },
    { id: 'history' as const, label: 'History', icon: History },
    { id: 'irrigation' as const, label: 'Smart Irrigation', icon: Droplets },
    { id: 'monitoring' as const, label: 'Crop Monitoring', icon: Satellite },
  ];

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom right, #f0f9f0, #e8f5e8, #f5f9f0)' }}>
      {/* Header */}
      <header className="bg-white border-b shadow-sm" style={{ borderColor: '#e5e7eb' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg" style={{ background: 'linear-gradient(to bottom right, #106419, #07480E)' }}>
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 style={{ color: '#07480E' }}>AgriNova Lens</h1>
                <p className="text-sm" style={{ color: '#106419' }}>Intelligent Crop Disease Detection System</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {/* Search Bar */}
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#474747' }} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search diseases, treatments..."
                  className="pl-10 pr-4 py-2 border rounded-lg text-sm outline-none w-64"
                  style={{ 
                    borderColor: '#e5e7eb',
                    color: '#474747'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#106419';
                    e.target.style.boxShadow = '0 0 0 2px rgba(16, 100, 25, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e5e7eb';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div className="text-right hidden sm:block">
                <p className="text-sm" style={{ color: '#474747' }}>{userEmail}</p>
                <p className="text-xs" style={{ color: '#9ca3af' }}>Logged in</p>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
                style={{ color: '#474747' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b" style={{ borderColor: '#e5e7eb' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex gap-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="flex items-center gap-2 px-6 py-4 border-b-2 transition-colors"
                  style={{
                    borderColor: isActive ? '#106419' : 'transparent',
                    color: isActive ? '#07480E' : '#474747',
                    backgroundColor: isActive ? '#f0f9f0' : 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = '#f9fafb';
                      e.currentTarget.style.color = '#07480E';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#474747';
                    }
                  }}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'detect' && (
          <div className="space-y-6">
            {!currentResult ? (
              <ImageUpload onDetectionComplete={handleDetectionComplete} />
            ) : (
              <DetectionResults result={currentResult} onNewDetection={handleNewDetection} />
            )}
          </div>
        )}

        {activeTab === 'history' && (
          <DetectionHistory history={filteredHistory} searchQuery={searchQuery} />
        )}

        {activeTab === 'irrigation' && (
          <SmartIrrigation />
        )}

        {activeTab === 'monitoring' && (
          <CropMonitoring />
        )}
      </main>

      {/* Footer */}
      <footer className="mt-16 bg-white border-t" style={{ borderColor: '#e5e7eb' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-sm" style={{ color: '#474747' }}>
            <p>AgriNova Lens - Reducing crop losses through early disease detection</p>
            {searchQuery && (
              <p className="text-xs mt-1" style={{ color: hasSearchResults ? '#106419' : '#ef4444' }}>
                {hasSearchResults 
                  ? `Found ${filteredHistory.length} result${filteredHistory.length === 1 ? '' : 's'} for "${searchQuery}"`
                  : `No results found for "${searchQuery}"`
                }
              </p>
            )}
            <p className="mt-1" style={{ color: '#6b7280' }}>Impact: Up to 40% reduction in crop losses | Early intervention within 24-48 hours</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
