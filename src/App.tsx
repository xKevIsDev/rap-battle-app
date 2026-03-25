import { Mic2, Zap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4 overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIi8+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="max-w-4xl w-full relative">
        <div className="bg-gradient-to-br from-red-600 via-orange-600 to-yellow-500 p-1 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Zap className="w-10 h-10 text-yellow-400 animate-pulse" />
              <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-center">
                RAP BATTLE
              </h1>
              <Zap className="w-10 h-10 text-yellow-400 animate-pulse" />
            </div>

            <div className="relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-yellow-500/20 blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/30">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                  <div className="flex flex-col items-center group">
                    <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-full p-6 mb-4 shadow-xl group-hover:shadow-red-500/50 transition-shadow duration-300">
                      <Mic2 className="w-12 h-12 text-white" />
                    </div>
                    <span className="text-3xl md:text-4xl font-bold text-white">Jorrit</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
                    <span className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400">
                      VS
                    </span>
                    <div className="w-8 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></div>
                  </div>

                  <div className="flex flex-col items-center group">
                    <div className="bg-gradient-to-br from-orange-600 to-yellow-600 rounded-full p-6 mb-4 shadow-xl group-hover:shadow-yellow-500/50 transition-shadow duration-300">
                      <Mic2 className="w-12 h-12 text-white" />
                    </div>
                    <span className="text-3xl md:text-4xl font-bold text-white">Brian</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center space-y-4">
              <p className="text-2xl md:text-3xl font-bold text-white">
                Need to Rap Battle
              </p>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                The stage is set. The mic is hot. Who will drop the sickest bars?
              </p>
            </div>

            <div className="mt-8 flex justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-12 bg-gradient-to-t from-red-500 via-orange-500 to-yellow-500 rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 0.1}s` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;