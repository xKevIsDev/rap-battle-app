import { Mic2, Zap, Flame, Trophy, Music } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#080810] flex flex-col items-center justify-center p-4 overflow-hidden relative">

      <div className="noise-overlay" />

      <div className="glow-orb glow-orb-1" />
      <div className="glow-orb glow-orb-2" />
      <div className="glow-orb glow-orb-3" />

      <div className="w-full max-w-5xl relative z-10">

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-semibold tracking-widest text-slate-400 uppercase">Live Event</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-4">
            <span className="block text-white">RAP</span>
            <span className="block text-gradient-fire">BATTLE</span>
          </h1>

          <p className="text-slate-500 text-sm tracking-widest uppercase font-medium">
            The Ultimate Showdown
          </p>
        </div>

        <div className="battle-card relative rounded-3xl overflow-hidden mb-10">
          <div className="battle-card-bg" />

          <div className="relative z-10 p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-10 items-center">

              <div className="fighter-card group">
                <div className="fighter-glow fighter-glow-red" />
                <div className="relative">
                  <div className="fighter-avatar bg-gradient-to-br from-red-500 to-rose-700">
                    <Mic2 className="w-10 h-10 text-white drop-shadow-lg" />
                  </div>
                  <div className="fighter-badge bg-red-500">
                    <Flame className="w-3 h-3" />
                    <span>Challenger</span>
                  </div>
                </div>
                <h2 className="fighter-name">Jorrit</h2>
                <div className="fighter-stats">
                  <div className="stat-pill">
                    <Music className="w-3 h-3" />
                    <span>Fire Bars</span>
                  </div>
                  <div className="stat-pill">
                    <Zap className="w-3 h-3" />
                    <span>Quick Flow</span>
                  </div>
                </div>
              </div>

              <div className="vs-container">
                <div className="vs-ring" />
                <div className="vs-ring vs-ring-2" />
                <span className="vs-text">VS</span>
              </div>

              <div className="fighter-card group">
                <div className="fighter-glow fighter-glow-amber" />
                <div className="relative">
                  <div className="fighter-avatar bg-gradient-to-br from-amber-400 to-orange-600">
                    <Mic2 className="w-10 h-10 text-white drop-shadow-lg" />
                  </div>
                  <div className="fighter-badge bg-amber-500">
                    <Trophy className="w-3 h-3" />
                    <span>Defender</span>
                  </div>
                </div>
                <h2 className="fighter-name">Brian</h2>
                <div className="fighter-stats">
                  <div className="stat-pill">
                    <Flame className="w-3 h-3" />
                    <span>Hard Hits</span>
                  </div>
                  <div className="stat-pill">
                    <Trophy className="w-3 h-3" />
                    <span>Veteran</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="text-center space-y-4 mb-10">
          <p className="text-xl md:text-2xl font-bold text-white tracking-tight">
            Who will claim the crown?
          </p>
          <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
            The stage is set, the crowd is electric. Two MCs step up — only one walks away victorious.
          </p>
        </div>

        <div className="equalizer">
          {[4, 7, 5, 9, 6, 10, 7, 5, 8, 6, 4, 7, 9, 5, 8].map((h, i) => (
            <div
              key={i}
              className="eq-bar"
              style={{
                animationDelay: `${i * 0.07}s`,
                '--bar-height': `${h * 4}px`,
              } as React.CSSProperties}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;
