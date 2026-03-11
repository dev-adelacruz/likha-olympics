import React, { useState, useEffect } from 'react';
import { 
  Trophy, 
  Calendar, 
  Users, 
  ChevronRight, 
  Award, 
  MapPin, 
  Timer,
  Info,
  Zap,
  Flame,
  Star,
  ChevronDown,
  ChevronUp,
  Swords,
  Activity
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedTeam, setSelectedTeam] = useState('blue');
  const [expandedEvent, setExpandedEvent] = useState(null);

  // Dynamic Metadata for Sharing Previews
  useEffect(() => {
    document.title = "LiKHA-iT Olympics Season 2 | Dashboard";
    
    const metaData = {
      "og:title": "LiKHA-iT Olympics Season 2",
      "og:description": "Official Dashboard for LiKHA-iT Olympics Season 2. Track schedules, team rosters, and live battle cards!",
      "og:type": "website",
      "og:image": "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=1000&auto=format&fit=crop",
      "twitter:card": "summary_large_image",
      "theme-color": "#2563eb"
    };

    Object.entries(metaData).forEach(([property, content]) => {
      let element = document.querySelector(`meta[property="${property}"]`) || 
                    document.querySelector(`meta[name="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        if (property.startsWith('og:')) {
          element.setAttribute('property', property);
        } else {
          element.setAttribute('name', property);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    });
  }, []);

  const schedule = [
    { 
      date: 'March 12', 
      events: ['Opening Ceremony', 'Pep Dance'],
      icon: <Flame className="w-5 h-5 text-orange-500" />,
      color: 'bg-blue-600',
      tag: 'KICKOFF'
    },
    { 
      date: 'March 19', 
      events: ['Scrabble', 'Chess', 'Table Tennis'],
      icon: <Star className="w-5 h-5 text-yellow-500" />,
      color: 'bg-indigo-600',
      tag: 'MIND & SKILL',
      rosters: {
        'Scrabble': {
          blue: { primary: ['Matt', 'Jose'], reserve: ['Paul'] },
          white: { primary: ['Raph', 'Son'], reserve: ['Eli'] }
        },
        'Chess': {
          blue: { primary: ['Risto'], reserve: ['JM'] },
          white: { primary: ['Marc'], reserve: ['Rae'] }
        },
        'Table Tennis': [
          { 
            label: "Men's Singles", 
            blue: ['Abel'], 
            white: ['RM'] 
          },
          { 
            label: "Men's Doubles", 
            blue: ['Wassan', 'HM'], 
            white: ['Josh', 'Dane'] 
          },
          { 
            label: "Women's Singles", 
            blue: ['Aireen'], 
            white: ['Cy'] 
          },
          { 
            label: "Women's Doubles", 
            blue: ['Keisha', 'Pau'], 
            white: ['Ly', 'Ana'] 
          },
          { 
            label: "Reserves", 
            blue: ['Justine', 'Diana'], 
            white: ['James', 'Charie'] 
          }
        ]
      }
    },
    { 
      date: 'March 27', 
      events: ['Volleyball', 'Basketball'],
      icon: <Trophy className="w-5 h-5 text-emerald-500" />,
      color: 'bg-blue-800',
      tag: 'FINALS',
      rosters: {
        'Volleyball': {
          blue: { primary: ['Diana (C)'], reserve: [] },
          white: { primary: ['Cy (C)'], reserve: [] }
        },
        'Basketball': {
          blue: { primary: ['Aldrin Atentar (C)'], reserve: [] },
          white: { primary: ['Jhoren (C)'], reserve: [] }
        }
      }
    }
  ];

  const teams = {
    blue: {
      name: 'Blue Team',
      leader: 'Alyssa',
      color: 'from-blue-600 to-blue-400',
      textColor: 'text-white',
      accent: 'text-blue-200',
      cardBg: 'bg-white',
      border: 'border-blue-100',
      members: [
        "Keii-san", "Monty", "Jose", "Hiron", "Nokz", "Jam (New Hire)", 
        "Aldrin A.", "Paul", "Justine", "JM", "Abel", "Wassan", 
        "ADC", "Matt", "Laurence", "Risto", "Kimberly", "Diana", 
        "Pauline", "Aireen", "Keisha"
      ]
    },
    white: {
      name: 'White Team',
      leader: 'Mathew',
      color: 'from-slate-100 to-slate-200',
      textColor: 'text-blue-900',
      accent: 'text-blue-500/60',
      cardBg: 'bg-white',
      border: 'border-slate-200',
      members: [
        "Dane", "Raph", "Andre", "Rae", "Jhoren", "Marc", "Johnson", 
        "Neil", "Dren", "RM", "Johsua", "James", "Ethan", "Elijah", 
        "Alex", "Willand", "Analyn", "Cyrille", "Ly", "Yeesamine", 
        "Charie", "Jane"
      ]
    }
  };

  const VersusMatchup = ({ title, data, type = 'standard' }) => {
    if (type === 'table-tennis') {
      return (
        <div className="bg-[#f8f9fa] rounded-2xl overflow-hidden border border-slate-200 shadow-sm animate-in fade-in duration-300">
          <div className="bg-slate-100 px-4 py-2 border-b border-slate-200 flex justify-between items-center">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{title}</span>
            <div className="flex gap-4 text-[10px] font-bold text-slate-400 uppercase">
              <span>S1</span>
              <span>S2</span>
              <span>S3</span>
            </div>
          </div>
          <div className="divide-y divide-slate-100">
            {data.map((row, i) => (
              <div key={i} className="flex items-center h-20 group bg-white hover:bg-slate-50 transition-colors">
                {/* Time/Status Column */}
                <div className="w-16 flex flex-col items-center justify-center border-r border-slate-100 bg-white">
                  <span className="text-[10px] font-bold text-slate-400">00:00</span>
                  <span className="text-[10px] font-black text-slate-900 tracking-tighter uppercase">Upcoming</span>
                </div>
                
                {/* Players Column */}
                <div className="flex-grow px-6 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-400 truncate">
                      {row.blue.join(' / ')}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black text-slate-900 truncate">
                      {row.white.join(' / ')}
                    </span>
                  </div>
                </div>

                {/* Score Column */}
                <div className="w-24 flex justify-around px-2 text-sm font-black italic">
                   {[0, 1, 2].map((setIdx) => (
                     <div key={setIdx} className="flex flex-col items-center opacity-20">
                        <span>-</span>
                        <span>-</span>
                     </div>
                   ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    const { blue, white } = data;

    return (
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg overflow-hidden relative animate-in fade-in zoom-in-95 duration-300">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-5">
           <Swords size={120} className="text-slate-900" />
        </div>
        <h4 className="font-black italic text-xl uppercase text-slate-900 text-center mb-6">{title}</h4>
        
        <div className="grid grid-cols-11 items-center gap-2">
          {/* Blue Column */}
          <div className="col-span-5 rounded-2xl p-5 text-white bg-blue-600 shadow-lg shadow-blue-100 relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-[10px] font-black tracking-widest text-blue-100 uppercase mb-3">Blue Team</p>
              <div className="space-y-2">
                <div>
                  <span className="text-[8px] font-bold uppercase text-white/50 block mb-0.5 tracking-tighter">Primary</span>
                  <p className="text-lg font-black italic leading-tight">{blue.primary.join(', ')}</p>
                </div>
                {blue.reserve?.length > 0 && (
                  <div className="pt-2 border-t border-white/10 mt-2">
                    <span className="text-[8px] font-bold uppercase text-white/50 block mb-0.5 tracking-tighter">Reserve</span>
                    <p className="text-sm font-bold opacity-80">{blue.reserve.join(', ')}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="col-span-1 flex flex-col items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white text-[10px] font-black italic shadow-xl z-10 border-2 border-white">
              VS
            </div>
          </div>

          {/* White Column */}
          <div className="col-span-5 rounded-2xl p-5 border bg-slate-50 border-slate-200 relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-[10px] font-black tracking-widest text-slate-400 uppercase mb-3">White Team</p>
              <div className="space-y-2">
                <div>
                  <span className="text-[8px] font-bold uppercase text-slate-300 block mb-0.5 tracking-tighter">Primary</span>
                  <p className="text-lg font-black italic leading-tight text-slate-900">
                    {white.primary.join(', ')}
                  </p>
                </div>
                {white.reserve?.length > 0 && (
                  <div className="pt-2 border-t border-slate-100 mt-2">
                    <span className="text-[8px] font-bold uppercase text-slate-300 block mb-0.5 tracking-tighter">Reserve</span>
                    <p className="text-sm font-bold text-slate-500">{white.reserve.join(', ')}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Navigation = () => (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-blue-100 z-50 px-6 py-3 md:top-0 md:bottom-auto md:border-t-0 md:border-b">
      <div className="max-w-5xl mx-auto flex justify-around items-center h-12">
        <button
          onClick={() => setActiveTab('dashboard')}
          className={`flex items-center gap-2 transition-all duration-300 px-8 py-2.5 rounded-2xl ${
            activeTab === 'dashboard' 
              ? 'bg-blue-600 text-white shadow-xl shadow-blue-200 scale-105' 
              : 'text-slate-400 hover:text-blue-600 hover:bg-blue-50'
          }`}
        >
          <Activity size={20} strokeWidth={2.5} />
          <span className="text-xs font-black uppercase tracking-widest">Dashboard</span>
        </button>
        <button
          onClick={() => setActiveTab('teams')}
          className={`flex items-center gap-2 transition-all duration-300 px-8 py-2.5 rounded-2xl ${
            activeTab === 'teams' 
              ? 'bg-blue-600 text-white shadow-xl shadow-blue-200 scale-105' 
              : 'text-slate-400 hover:text-blue-600 hover:bg-blue-50'
          }`}
        >
          <Users size={20} strokeWidth={2.5} />
          <span className="text-xs font-black uppercase tracking-widest">Teams</span>
        </button>
      </div>
    </nav>
  );

  const Dashboard = () => (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-blue-600 p-10 text-white shadow-2xl shadow-blue-100 border-b-8 border-blue-700 mt-2">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i} 
              className="absolute top-1/2 left-1/2 w-[200%] h-32 bg-white blur-[120px] origin-left"
              style={{ transform: `rotate(${i * 60}deg) translate(-50%, -50%)` }}
            />
          ))}
        </div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left space-y-4">
            <div className="inline-block px-4 py-1 bg-yellow-400 text-blue-900 rounded-lg font-black text-xs tracking-widest uppercase mb-2">
              Season 2 • March 2026
            </div>
            <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-tight drop-shadow-lg">
              Olympics
            </h1>
            <p className="text-xl font-bold text-blue-100 flex items-center justify-center md:justify-start gap-2">
              LiKHA-iT <span className="opacity-50">by</span> freee
            </p>
          </div>
          <div className="p-6 bg-white/10 rounded-[2.5rem] backdrop-blur-md border border-white/20 rotate-3 shadow-2xl">
            <Trophy className="w-16 h-16 text-yellow-300" />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-xl shadow-slate-100 group">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-orange-100 rounded-2xl">
              <Timer className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-slate-400 font-black uppercase text-xs tracking-widest">Next Milestone</h3>
          </div>
          <p className="text-3xl font-black text-slate-900 italic mb-1">Opening Ceremony</p>
          <p className="text-blue-600 font-bold">March 12 • 9:00 AM @ HQ</p>
        </div>
        <div className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-xl shadow-slate-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-blue-100 rounded-2xl">
              <MapPin className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-slate-400 font-black uppercase text-xs tracking-widest">Main Venue</h3>
          </div>
          <p className="text-3xl font-black text-slate-900 italic mb-1">11th Floor</p>
          <p className="text-blue-600 font-bold">Competition Arena</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between px-2">
          <h2 className="text-3xl font-black italic text-slate-900 uppercase tracking-tight">Full Timeline</h2>
          <div className="h-1 flex-grow bg-slate-200 ml-4 rounded-full" />
        </div>
        <div className="space-y-4">
          {schedule.map((day, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <div 
                onClick={() => day.rosters ? setExpandedEvent(expandedEvent === idx ? null : idx) : null}
                className={`group relative bg-white rounded-[2.5rem] border border-slate-200 p-8 flex flex-col md:flex-row items-center md:items-start gap-8 hover:shadow-2xl hover:border-blue-500 transition-all ${day.rosters ? 'cursor-pointer' : ''}`}
              >
                <div className={`flex-shrink-0 w-20 h-20 rounded-[1.5rem] ${day.color} flex flex-col items-center justify-center text-white font-black shadow-xl group-hover:scale-105 transition-transform`}>
                  <span className="text-[10px] uppercase opacity-80">{day.date.split(' ')[0]}</span>
                  <span className="text-3xl leading-none">{day.date.split(' ')[1]}</span>
                </div>
                <div className="flex-grow text-center md:text-left pt-1">
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                    <span className="text-blue-600 font-black uppercase text-[10px] tracking-[0.2em] bg-blue-50 px-3 py-1 rounded-lg border border-blue-100">{day.tag}</span>
                    {day.rosters && (
                      <span className="text-[9px] font-black text-orange-500 uppercase bg-orange-50 px-2 py-1 rounded-md">Battle Cards</span>
                    )}
                  </div>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    {day.events.map((event, eIdx) => (
                      <span key={eIdx} className="px-5 py-2 bg-slate-50 border border-slate-100 text-slate-900 rounded-xl font-black text-xs shadow-sm hover:bg-white hover:border-blue-500 transition-colors">
                        {event}
                      </span>
                    ))}
                  </div>
                </div>
                {day.rosters && (
                  <div className="absolute right-8 top-1/2 -translate-y-1/2 text-slate-300 group-hover:text-blue-500 hidden md:block">
                    {expandedEvent === idx ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </div>
                )}
              </div>
              {expandedEvent === idx && day.rosters && (
                <div className="animate-in slide-in-from-top-4 duration-300 space-y-6">
                  {Object.entries(day.rosters).map(([sport, rosterData]) => (
                    <VersusMatchup 
                      key={sport}
                      title={sport} 
                      type={sport === 'Table Tennis' ? 'table-tennis' : 'standard'}
                      data={rosterData} 
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const Teams = () => {
    const activeTeam = teams[selectedTeam];
    return (
      <div className="space-y-8 animate-in slide-in-from-left-8 duration-500 pb-24">
        <div className="flex gap-4 p-2 bg-slate-100 rounded-3xl border border-slate-200 mt-2">
          <button onClick={() => setSelectedTeam('blue')} className={`flex-1 py-4 rounded-2xl font-black italic uppercase text-sm tracking-widest transition-all ${selectedTeam === 'blue' ? 'bg-blue-600 text-white shadow-xl ring-4 ring-white' : 'text-slate-500 hover:text-blue-600'}`}>
            Blue Team
          </button>
          <button onClick={() => setSelectedTeam('white')} className={`flex-1 py-4 rounded-2xl font-black italic uppercase text-sm tracking-widest transition-all ${selectedTeam === 'white' ? 'bg-white text-blue-900 shadow-xl ring-4 ring-white' : 'text-slate-500 hover:text-blue-600'}`}>
            White Team
          </button>
        </div>
        <div className={`rounded-[3rem] bg-gradient-to-br ${activeTeam.color} p-10 md:p-12 shadow-2xl transition-all duration-700 relative overflow-hidden group border-8 border-white`}>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 blur-[100px] rounded-full -mr-32 -mt-32" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className={activeTeam.textColor || 'text-white'}>
              <p className="uppercase font-black tracking-[0.5em] text-[10px] opacity-70 mb-2">Team Captain</p>
              <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-none mb-4 drop-shadow-xl">{activeTeam.leader}</h2>
              <div className={`inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl ${selectedTeam === 'blue' ? 'bg-black/20' : 'bg-slate-900/10'} text-xs font-black uppercase tracking-widest`}>
                <Users size={18} /> {activeTeam.members.length + 1} Elite Athletes
              </div>
            </div>
            <div className={`w-28 h-28 rounded-[2rem] flex items-center justify-center border-4 shadow-2xl -rotate-6 group-hover:rotate-0 transition-transform duration-500 ${selectedTeam === 'blue' ? 'border-white/40 bg-white/10' : 'border-slate-900/10 bg-white/30'}`}>
              {selectedTeam === 'blue' ? <Zap className="w-14 h-14 text-white fill-current" /> : <Star className="w-14 h-14 text-blue-900 fill-current" />}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {activeTeam.members.map((member, mIdx) => (
            <div key={mIdx} className={`bg-white border ${activeTeam.border} p-6 rounded-[2rem] hover:scale-105 transition-all group cursor-pointer hover:border-blue-500 shadow-xl shadow-slate-100`}>
              <div className="flex flex-col gap-1">
                <span className={`text-[10px] font-black uppercase tracking-widest ${activeTeam.accent}`}>#{String(mIdx + 1).padStart(2, '0')}</span>
                <div className="text-lg md:text-xl font-black italic text-slate-900 group-hover:text-blue-600 transition-colors">{member}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white pb-10">
      <div className="fixed inset-0 pointer-events-none opacity-40">
        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(#cbd5e1 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-10 pb-32 md:pt-24">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'teams' && <Teams />}
      </div>
      <Navigation />
    </div>
  );
};

export default App;