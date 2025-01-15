import React, { useState } from 'react';
import { Search, Settings, Grid, Bell, Globe } from 'lucide-react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2072&q=80")',
      }}
    >
      <div className="min-h-screen bg-black/40 backdrop-blur-[2px]">
        {/* Header */}
        <header className="flex justify-between items-center p-4 text-white">
          <div className="flex gap-4 items-center">
            <a href="#" className="hover:text-blue-200 transition-colors flex items-center gap-2">
              <Globe className="w-4 h-4" />
              简体中文
            </a>
          </div>
          <nav className="flex gap-6 items-center">
            <a href="#" className="hover:text-blue-200 transition-colors">新闻</a>
            <a href="#" className="hover:text-blue-200 transition-colors">地图</a>
            <a href="#" className="hover:text-blue-200 transition-colors">视频</a>
            <a href="#" className="hover:text-blue-200 transition-colors">图片</a>
            <div className="flex gap-4 ml-4">
              <button className="hover:text-blue-200 transition-colors">
                <Grid className="w-5 h-5" />
              </button>
              <button className="hover:text-blue-200 transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <button className="hover:text-blue-200 transition-colors">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center h-[calc(100vh-120px)]">
          {/* Logo */}
          <div className="text-7xl font-bold text-white mb-12 tracking-wider flex items-center">
            <span className="text-blue-400">搜</span>
            <span className="text-red-400">索</span>
          </div>

          {/* Search Box */}
          <form onSubmit={handleSearch} className="w-full max-w-2xl">
            <div className="relative group">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 rounded-full bg-white/90 backdrop-blur-sm text-lg 
                         focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg
                         group-hover:bg-white/95 transition-all"
                placeholder="搜索内容..."
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-blue-500 
                         rounded-full hover:bg-blue-600 transition-colors
                         active:scale-95 transform duration-100"
              >
                <Search className="w-6 h-6 text-white" />
              </button>
            </div>
          </form>

          {/* Quick Links */}
          <div className="mt-8 grid grid-cols-4 gap-6 max-w-xl">
            {['热搜', '学术', '地图', '翻译'].map((item) => (
              <a
                key={item}
                href="#"
                className="px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white 
                         hover:bg-white/30 transition-all hover:scale-105 transform duration-200
                         active:scale-95 text-center"
              >
                {item}
              </a>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
          <p>© 2024 搜索 - 使用搜索前必读</p>
        </footer>
      </div>
    </div>
  );
}

export default App;