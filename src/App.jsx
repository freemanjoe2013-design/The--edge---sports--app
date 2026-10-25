import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [selectedSport, setSelectedSport] = useState('NBA');
  const [selectedMetric, setSelectedMetric] = useState('all');

  const comprehensiveData = {
    NBA: {
      metrics: { activePlays: 18, valueToday: '+5.6%', winProbAvg: '71.2%', edgeScore: '94.4' },
      insights: [
        { matchup: 'Lakers vs. Celtics', time: '7:30 PM EST', edge: '+4.2%', winProb: '68.4%', status: 'Optimal', prop: 'LeBron James O/U 25.5 Points (Over -115)' },
        { matchup: 'Warriors vs. Bucks', time: '10:00 PM EST', edge: '+5.8%', winProb: '74.1%', status: 'High Value', prop: 'Stephen Curry 4+ Made Threes (-130)' },
        { matchup: 'Nuggets vs. Suns', time: '9:00 PM EST', edge: '+3.1%', winProb: '62.0%', status: 'Active', prop: 'Nikola Jokic Triple-Double (+110)' }
      ]
    },
    NFL: {
      metrics: { activePlays: 14, valueToday: '+4.8%', winProbAvg: '68.9%', edgeScore: '91.2' },
      insights: [
        { matchup: 'Chiefs vs. 49ers', time: 'Sun 8:20 PM', edge: '+5.1%', winProb: '72.0%', status: 'Optimal', prop: 'Patrick Mahomes O/U 275.5 Passing Yards' },
        { matchup: 'Eagles vs. Cowboys', time: 'Sun 4:25 PM', edge: '+3.9%', winProb: '65.4%', status: 'Tracking', prop: 'Saquon Barkley Anytime Touchdown (-145)' }
      ]
    },
    MLB: {
      metrics: { activePlays: 9, valueToday: '+3.4%', winProbAvg: '64.5%', edgeScore: '88.0' },
      insights: [
        { matchup: 'Yankees vs. Dodgers', time: '8:08 PM EST', edge: '+3.5%', winProb: '59.1%', status: 'Optimal', prop: 'Aaron Judge 1+ Home Run (+220)' }
      ]
    },
    NHL: {
      metrics: { activePlays: 11, valueToday: '+4.1%', winProbAvg: '66.8%', edgeScore: '89.5' },
      insights: [
        { matchup: 'Rangers vs. Bruins', time: '7:00 PM EST', edge: '+4.0%', winProb: '63.5%', status: 'Active', prop: 'Artemi Panarin Over 0.5 Assists (-120)' }
      ]
    }
  };

  const currentData = comprehensiveData[selectedSport];
  if (onboardingStep === 'welcome') {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 p-6 flex flex-col justify-between items-center text-center">
        <div className="w-full max-w-md mx-auto space-y-6 pt-6">
          <img src="Screenshot_20261023-235030.png" alt="Edge Sports Insight" className="w-full rounded-xl shadow-2xl border border-amber-400/30" />
          <h1 className="text-3xl font-black tracking-wider text-amber-400">THE EDGE Pro</h1>
          <p className="text-sm text-slate-300">Advanced AI Sports Analytics & Real-Time Value Engine</p>
          
          <div className="flex justify-center gap-3 py-2">
            {['EN', 'ES', 'FR'].map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className={`px-4 py-2 rounded-lg font-bold text-xs transition-all ${
                  selectedLanguage === lang ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20' : 'bg-slate-900 text-slate-400 border border-slate-800'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          <button 
            onClick={() => setOnboardingStep('disclaimer')}
            className="w-full py-4 bg-amber-400 text-slate-950 font-black rounded-xl shadow-lg shadow-amber-400/20 uppercase tracking-widest mt-6"
          >
            Enter Terminal
          </button>
        </div>
      </div>
    );
  }

  if (onboardingStep === 'disclaimer') {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 p-6 flex flex-col justify-between items-center text-center">
        <div className="w-full max-w-md mx-auto space-y-6 pt-10">
          <div className="p-6 bg-slate-900/80 border border-amber-400/30 rounded-2xl shadow-xl space-y-4">
            <h2 className="text-xl font-black text-amber-400 uppercase tracking-wider">Attention & Strategy Notice</h2>
            <p className="text-xs text-slate-300 leading-relaxed text-left">
              Statistical modeling proves that the mathematical probability of hitting your target significantly increases with fewer legs. **The fewer, the better.** Stick to disciplined 1, 2, and 3-pick strategies to maximize your long-term edge.
            </p>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest pt-2">
              For analytical insights and informational purposes only. Play responsibly.
            </p>
          </div>

          <button 
            onClick={() => setOnboardingStep('app')}
            className="w-full py-4 bg-amber-400 text-slate-950 font-black rounded-xl shadow-lg shadow-amber-400/20 uppercase tracking-widest"
          >
            I Understand & Agree
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-6 font-sans">
      <header className="max-w-4xl mx-auto mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-800 pb-4 gap-4">
        <div>
          <h1 className="text-2xl font-black tracking-wider text-amber-400 flex items-center gap-2">
            <span>THE EDGE</span>
            <span className="text-[10px] bg-amber-400/10 text-amber-400 border border-amber-400/30 px-2 py-0.5 rounded-full uppercase">Pro Terminal</span>
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">Advanced AI Sports Analytics & Real-Time Value Engine</p>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          {['Dashboard', 'Analytics', 'Props Grid'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 sm:flex-initial px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                activeTab === tab 
                  ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20' 
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </header>

      <main className="max-w-4xl mx-auto space-y-6">
        {activeTab === 'Dashboard' && (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl shadow-lg">
                <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Active Plays</div>
                <div className="text-2xl font-black text-white mt-1">{currentData.metrics.activePlays}</div>
                <div className="text-[11px] text-emerald-400 mt-1 font-bold">↑ {currentData.metrics.valueToday} value</div>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl shadow-lg">
                <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Win Model Avg</div>
                <div className="text-2xl font-black text-white mt-1">{currentData.metrics.winProbAvg}</div>
                <div className="text-[11px] text-slate-400 mt-1">Simulated 10k times</div>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl shadow-lg">
                <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Edge Score</div>
                <div className="text-2xl font-black text-amber-400 mt-1">{currentData.metrics.edgeScore}</div>
                <div className="text-[11px] text-amber-400/80 mt-1">High confidence tier</div>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl shadow-lg">
                <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">System Status</div>
                <div className="text-2xl font-black text-emerald-400 mt-1">Optimal</div>
                <div className="text-[11px] text-slate-400 mt-1">Live feeds active</div>
              </div>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl shadow-lg">
              <h2 className="text-xs font-bold text-slate-300 mb-3 uppercase tracking-wider">Select Sport League</h2>
              <div className="grid grid-cols-2 sm:flex gap-2">
                {Object.keys(comprehensiveData).map((sport) => (
                  <button
                    key={sport}
                    onClick={() => setSelectedSport(sport)}
                    className={`px-4 py-2.5 text-xs font-black rounded-lg transition-all ${
                      selectedSport === sport
                        ? 'bg-amber-500 text-slate-950 shadow-md scale-[1.02]'
                        : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/50'
                    }`}
                  >
                    {sport} Terminal
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Live Match Insights & Key Props ({selectedSport})</h2>
                <span className="text-[10px] bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700">Real-time sync</span>
              </div>
              <div className="space-y-3">
                {currentData.insights.map((match, idx) => (
                  <div key={idx} className="bg-slate-950 border border-slate-800/80 p-4 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 hover:border-amber-500/40 transition-all">
                    <div>
                      <div className="font-extrabold text-white text-sm">{match.matchup}</div>
                      <div className="text-xs text-slate-400 mt-0.5">{match.time} • <span className="text-amber-400 font-medium">{match.prop}</span></div>
                    </div>
                    <div className="flex sm:text-right gap-4 sm:gap-6 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 border-slate-900 pt-2 sm:pt-0">
                      <div>
                        <div className="text-[10px] text-slate-400 uppercase">Edge Value</div>
                        <div className="text-sm font-black text-amber-400">{match.edge}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-400 uppercase">Win Prob</div>
                        <div className="text-sm font-black text-emerald-400">{match.winProb}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {activeTab === 'Analytics' && (
          <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-xl shadow-lg space-y-4">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">Advanced Odds Movement & Line Analysis</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Monitoring sharp money percentages, public betting splits, and closing line value across major sportsbooks in real-time.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                <div className="text-xs text-slate-400">Sharp Money Indicator</div>
                <div className="text-lg font-bold text-emerald-400 mt-1">Heavy Action on Underdogs</div>
                <div className="text-[11px] text-slate-500 mt-1">Line movement detected across 4 major books.</div>
              </div>
              <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                <div className="text-xs text-slate-400">Public Consensus vs Sharp</div>
                <div className="text-lg font-bold text-amber-400 mt-1">78% Public / 22% Sharp Split</div>
                <div className="text-[11px] text-slate-500 mt-1">Favorable fade opportunity identified.</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Props Grid' && (
          <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-xl shadow-lg space-y-4">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">Player Prop Value Matrix</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Comparing projections against sportsbook offerings to locate immediate statistical mismatches and implied value.
            </p>
            <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 text-center py-8">
              <div className="text-amber-400 font-bold text-sm">Matrix Active & Streaming Data</div>
              <div className="text-xs text-slate-400 mt-1">All player props formulas loaded and operational.</div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
                }
         
