import { Mic2, Zap, Flame, Music } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4 overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDIpIi8+PC9nPjwvc3ZnPg==')] opacity-50"></div>

      <div className="absolute top-10 left-10 animate-bounce">
        <Music className="w-8 h-8 text-orange-500/30" />
      </div>
      <div className="absolute bottom-10 right-10 animate-bounce" style={{ animationDelay: '0.5s' }}>
        <Music className="w-8 h-8 text-red-500/30" />
      </div>
      <div className="absolute top-1/3 right-20 animate-pulse">
        <Flame className="w-6 h-6 text-yellow-500/20" />
      </div>
      <div className="absolute bottom-1/3 left-20 animate-pulse" style={{ animationDelay: '0.3s' }}>
        <Flame className="w-6 h-6 text-orange-500/20" />
      </div>

      <div className="max-w-5xl w-full relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 rounded-3xl blur-2xl opacity-75 animate-pulse"></div>

        <div className="relative bg-gradient-to-br from-red-600 via-orange-600 to-yellow-500 p-[2px] rounded-3xl shadow-2xl">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 md:p-12">
            <div className="flex items-center justify-center gap-4 mb-10">
              <Zap className="w-12 h-12 text-yellow-400 animate-pulse drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
              <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 text-center tracking-tight drop-shadow-2xl">
                RAP BATTLE
              </h1>
              <Zap className="w-12 h-12 text-yellow-400 animate-pulse drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
            </div>

            <div className="relative mb-10">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500/30 to-yellow-500/30 blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-10 border-2 border-orange-500/40 shadow-inner">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                  <div className="flex flex-col items-center group cursor-pointer">
                    <div className="relative">
                      <div className="absolute inset-0 bg-red-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                      <div className="relative bg-gradient-to-br from-red-500 to-red-700 rounded-full p-8 mb-5 shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <Mic2 className="w-14 h-14 text-white drop-shadow-lg" />
                      </div>
                    </div>
                    <span className="text-4xl md:text-5xl font-black text-white drop-shadow-lg group-hover:text-red-400 transition-colors">Jorrit</span>
                    <div className="mt-2 flex gap-1">
                      {[...Array(3)].map((_, i) => (
                        <Flame key={i} className="w-5 h-5 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity" style={{ transitionDelay: `${i * 0.1}s` }} />
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full shadow-lg"></div>
                      <div className="relative">
                        <div className="absolute inset-0 bg-orange-500 blur-xl opacity-75"></div>
                        <span className="relative text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-300 via-orange-300 to-yellow-300 drop-shadow-2xl animate-pulse">
                          VS
                        </span>
                      </div>
                      <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full shadow-lg"></div>
                    </div>
                    <div className="flex gap-2">
                      {[...Array(7)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1 h-8 bg-gradient-to-t from-red-500 via-orange-500 to-yellow-500 rounded-full animate-pulse shadow-lg"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col items-center group cursor-pointer">
                    <div className="relative">
                      <div className="absolute inset-0 bg-yellow-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                      <div className="relative bg-gradient-to-br from-orange-500 to-yellow-600 rounded-full p-8 mb-5 shadow-2xl transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
                        <Mic2 className="w-14 h-14 text-white drop-shadow-lg" />
                      </div>
                    </div>
                    <span className="text-4xl md:text-5xl font-black text-white drop-shadow-lg group-hover:text-yellow-400 transition-colors">Brian</span>
                    <div className="mt-2 flex gap-1">
                      {[...Array(3)].map((_, i) => (
                        <Flame key={i} className="w-5 h-5 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity" style={{ transitionDelay: `${i * 0.1}s` }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center space-y-5">
              <p className="text-3xl md:text-4xl font-black text-white drop-shadow-lg">
                Need to Rap Battle
              </p>
              <p className="text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
                The stage is set. The mic is hot. Who will drop the sickest bars?
              </p>
              <div className="flex justify-center gap-4 mt-6">
                <div className="px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 rounded-full text-white font-bold shadow-lg hover:shadow-red-500/50 transition-shadow cursor-pointer">
                  Let's Battle
                </div>
              </div>
            </div>

            <div className="mt-10 flex justify-center gap-2">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-16 bg-gradient-to-t from-red-600 via-orange-500 to-yellow-400 rounded-full shadow-lg"
                  style={{
                    animation: 'pulse 1.5s ease-in-out infinite',
                    animationDelay: `${i * 0.1}s`,
                    height: `${Math.random() * 32 + 32}px`
                  }}
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