import { useState } from "react";

const shows = [
  { id: 1,   title: "Wayward",                       network: "Netflix",      genre: "Drama",      status: "pending",  nextEpisode: "Sept 25, 2025",   season: "S1" },
  { id: 2,   title: "Percy Jackson",                 network: "Disney+",      genre: "Fantasy",    status: "renewed",  nextEpisode: "2026",            season: "S3" },
  { id: 3,   title: "Fallout",                       network: "Prime Video",  genre: "Sci-Fi",     status: "renewed",  nextEpisode: "TBD",             season: "S3" },
  { id: 4,   title: "Industry",                      network: "HBO",          genre: "Drama",      status: "renewed",  nextEpisode: "TBD",             season: "S5 (Final)" },
  { id: 5,   title: "Steal",                         network: "Prime Video",  genre: "Thriller",   status: "pending",  nextEpisode: "Jan 21, 2026",    season: "S1" },
  { id: 6,   title: "Wonder Man",                    network: "Disney+",      genre: "Action",     status: "pending",  nextEpisode: "Jan 27, 2026",    season: "S1" },
  { id: 7,   title: "The Pitt",                      network: "HBO Max",      genre: "Drama",      status: "renewed",  nextEpisode: "Jan 8, 2026",     season: "S2" },
  { id: 8,   title: "Memory of a Killer",            network: "Fox",          genre: "Crime",      status: "pending",  nextEpisode: "Jan 25, 2026",    season: "S1" },
  { id: 9,   title: "The 'Burbs",                    network: "Peacock",      genre: "Comedy",     status: "pending",  nextEpisode: "Feb 8, 2026",     season: "S1" },
  { id: 10,  title: "Lincoln Lawyer",                network: "Netflix",      genre: "Legal",      status: "renewed",  nextEpisode: "Early 2027",      season: "S5" },
  { id: 11,  title: "Paradise",                      network: "Hulu",         genre: "Thriller",   status: "renewed",  nextEpisode: "Feb 23, 2026",    season: "S2" },
  { id: 12,  title: "DTF in St. Louis",              network: "HBO Max",      genre: "Comedy",     status: "pending",  nextEpisode: "Mar 1, 2026",     season: "S1" },
  { id: 13,  title: "Night Agent",                   network: "Netflix",      genre: "Action",     status: "renewed",  nextEpisode: "Feb 19, 2026",    season: "S3" },
  { id: 14,  title: "Can You Keep a Secret?",        network: "Paramount+",   genre: "Comedy",     status: "pending",  nextEpisode: "Feb 12, 2026",    season: "S1" },
  { id: 15,  title: "Ted",                           network: "Peacock",      genre: "Comedy",     status: "pending",  nextEpisode: "Mar 5, 2026",     season: "S2" },
  { id: 16,  title: "The Act",                       network: "Hulu",         genre: "Crime",      status: "limited",  nextEpisode: "—",               season: "S1 (Limited)" },
  { id: 17,  title: "Surreal Estate",                network: "Syfy",         genre: "Comedy",     status: "limited",  nextEpisode: "—",               season: "S2 (Final)" },
  { id: 18,  title: "Culprits",                      network: "Disney+",      genre: "Thriller",   status: "limited",  nextEpisode: "—",               season: "S1 (Limited)" },
  { id: 19,  title: "Crazy Fun Park",                network: "Peacock",      genre: "Comedy",     status: "canceled", nextEpisode: "—",               season: "S1" },
  { id: 20,  title: "I'm a Virgo",                   network: "Prime Video",  genre: "Drama",      status: "canceled", nextEpisode: "—",               season: "S1" },
  { id: 21,  title: "The Brothers Sun",              network: "Netflix",      genre: "Action",     status: "canceled", nextEpisode: "—",               season: "S1" },
  { id: 22,  title: "Mr. & Mrs. Smith",              network: "Prime Video",  genre: "Action",     status: "renewed",  nextEpisode: "TBD 2026",        season: "S2" },
  { id: 23,  title: "True Detective",                network: "HBO",          genre: "Crime",      status: "renewed",  nextEpisode: "2027",            season: "S5" },
  { id: 24,  title: "Criminal Record",               network: "Apple TV+",    genre: "Crime",      status: "limited",  nextEpisode: "—",               season: "S1 (Limited)" },
  { id: 25,  title: "Tulsa King",                    network: "Paramount+",   genre: "Crime",      status: "renewed",  nextEpisode: "Sept 2026",       season: "S4" },
  { id: 26,  title: "Echo",                          network: "Disney+",      genre: "Action",     status: "limited",  nextEpisode: "—",               season: "S1 (Limited)" },
  { id: 27,  title: "Life & Beth",                   network: "Hulu",         genre: "Comedy",     status: "limited",  nextEpisode: "—",               season: "S2 (Final)" },
  { id: 28,  title: "Avatar: Last Airbender",        network: "Netflix",      genre: "Fantasy",    status: "canceled", nextEpisode: "—",               season: "S3 (Final)" },
  { id: 29,  title: "Boat Story",                    network: "Prime Video",  genre: "Thriller",   status: "limited",  nextEpisode: "—",               season: "S1 (Limited)" },
  { id: 30,  title: "The Gentlemen",                 network: "Netflix",      genre: "Crime",      status: "renewed",  nextEpisode: "TBD 2026",        season: "S2" },
  { id: 31,  title: "Constellation",                 network: "Apple TV+",    genre: "Sci-Fi",     status: "canceled", nextEpisode: "—",               season: "S1" },
  { id: 32,  title: "Dark",                          network: "Netflix",      genre: "Sci-Fi",     status: "canceled", nextEpisode: "—",               season: "S3 (Final)" },
  { id: 33,  title: "Ghosts (CBS)",                  network: "CBS",          genre: "Comedy",     status: "renewed",  nextEpisode: "Fall 2026",       season: "S5-6" },
  { id: 34,  title: "Apples Never Fall",             network: "Peacock",      genre: "Mystery",    status: "limited",  nextEpisode: "—",               season: "S1 (Limited)" },
  { id: 35,  title: "Resident Alien",                network: "Syfy/USA",     genre: "Sci-Fi",     status: "canceled", nextEpisode: "—",               season: "S4 (Final)" },
  { id: 36,  title: "American Rust",                 network: "Prime Video",  genre: "Drama",      status: "limited",  nextEpisode: "—",               season: "S2 (Final)" },
  { id: 37,  title: "3 Body Problem",                network: "Netflix",      genre: "Sci-Fi",     status: "renewed",  nextEpisode: "TBD 2026",        season: "S2" },
  { id: 38,  title: "Palm Royale",                   network: "Apple TV+",    genre: "Comedy",     status: "renewed",  nextEpisode: "TBD 2026",        season: "S2" },
  { id: 39,  title: "Sugar",                         network: "Apple TV+",    genre: "Crime",      status: "renewed",  nextEpisode: "TBD 2026",        season: "S2" },
  { id: 40,  title: "Baby Reindeer",                 network: "Netflix",      genre: "Drama",      status: "limited",  nextEpisode: "—",               season: "S1 (Limited)" },
  { id: 41,  title: "Tourist",                       network: "Netflix",      genre: "Thriller",   status: "renewed",  nextEpisode: "TBD",             season: "S3" },
  { id: 42,  title: "Chucky",                        network: "Syfy/USA",     genre: "Horror",     status: "canceled", nextEpisode: "—",               season: "S3 (Final)" },
  { id: 43,  title: "Dead Boy Detectives",           network: "Netflix",      genre: "Fantasy",    status: "canceled", nextEpisode: "—",               season: "S1" },
  { id: 44,  title: "Dark Matter",                   network: "Apple TV+",    genre: "Sci-Fi",     status: "renewed",  nextEpisode: "TBD 2026",        season: "S2" },
  { id: 45,  title: "Loot",                          network: "Apple TV+",    genre: "Comedy",     status: "limited",  nextEpisode: "—",               season: "S2 (Final)" },
  { id: 46,  title: "Bodkin",                        network: "Netflix",      genre: "Mystery",    status: "canceled", nextEpisode: "—",               season: "S1" },
  { id: 47,  title: "A Man in Full",                 network: "Netflix",      genre: "Drama",      status: "limited",  nextEpisode: "—",               season: "S1 (Limited)" },
  { id: 48,  title: "Under the Bridge",              network: "Hulu",         genre: "Crime",      status: "limited",  nextEpisode: "—",               season: "S1 (Limited)" },
  { id: 49,  title: "Tires",                         network: "Netflix",      genre: "Comedy",     status: "renewed",  nextEpisode: "TBD 2026",        season: "S2" },
  { id: 50,  title: "Outer Range",                   network: "Prime Video",  genre: "Mystery",    status: "renewed",  nextEpisode: "TBD 2026",        season: "S3" },
  { id: 51,  title: "The Veil",                      network: "FX/Hulu",      genre: "Thriller",   status: "limited",  nextEpisode: "—",               season: "S1 (Limited)" },
  { id: 52,  title: "The Outlaws",                   network: "Prime Video",  genre: "Crime",      status: "canceled", nextEpisode: "—",               season: "S3 (Final)" },
  { id: 53,  title: "Sweet Tooth",                   network: "Netflix",      genre: "Fantasy",    status: "canceled", nextEpisode: "—",               season: "S3 (Final)" },
  { id: 54,  title: "The Bear",                      network: "FX/Hulu",      genre: "Drama",      status: "renewed",  nextEpisode: "TBD 2026",        season: "S4" },
  { id: 55,  title: "The Big Door Prize",            network: "Apple TV+",    genre: "Comedy",     status: "limited",  nextEpisode: "—",               season: "S2 (Final)" },
  { id: 56,  title: "Clipped",                       network: "Hulu",         genre: "Drama",      status: "limited",  nextEpisode: "—",               season: "S1 (Limited)" },
  { id: 57,  title: "Those About to Die",            network: "Peacock",      genre: "Drama",      status: "renewed",  nextEpisode: "TBD 2025",        season: "S2" },
  { id: 58,  title: "Acapulco",                      network: "Apple TV+",    genre: "Comedy",     status: "canceled", nextEpisode: "—",               season: "S4 (Final)" },
  { id: 59,  title: "The Acolyte",                   network: "Disney+",      genre: "Sci-Fi",     status: "canceled", nextEpisode: "—",               season: "S1" },
  { id: 60,  title: "The Boys",                      network: "Prime Video",  genre: "Action",     status: "canceled", nextEpisode: "—",               season: "S4 (Final)" },
  { id: 61,  title: "Sausage Party: Foodtopia",      network: "Prime Video",  genre: "Comedy",     status: "canceled", nextEpisode: "—",               season: "S1" },
  { id: 62,  title: "Franklin",                      network: "Apple TV+",    genre: "Historical", status: "limited",  nextEpisode: "—",               season: "S1 (Limited)" },
  { id: 63,  title: "Umbrella Academy",              network: "Netflix",      genre: "Action",     status: "canceled", nextEpisode: "—",               season: "S3 (Final)" },
  { id: 64,  title: "Presumed Innocent",             network: "Apple TV+",    genre: "Legal",      status: "renewed",  nextEpisode: "TBD 2026",        season: "S2" },
  { id: 65,  title: "Mayor of Kingstown",            network: "Paramount+",   genre: "Crime",      status: "renewed",  nextEpisode: "TBD 2026",        season: "S4" },
  { id: 66,  title: "Sunny",                         network: "Apple TV+",    genre: "Thriller",   status: "renewed",  nextEpisode: "TBD 2026",        season: "S2" },
  { id: 67,  title: "Interview w/ the Vampire",      network: "AMC+",         genre: "Horror",     status: "renewed",  nextEpisode: "TBD 2026",        season: "S3" },
  { id: 68,  title: "House of the Dragon",           network: "HBO",          genre: "Fantasy",    status: "renewed",  nextEpisode: "2028",            season: "S4 (Final)" },
  { id: 69,  title: "Kaos",                          network: "Netflix",      genre: "Fantasy",    status: "canceled", nextEpisode: "—",               season: "S1" },
  { id: 70,  title: "The Perfect Couple",            network: "Netflix",      genre: "Mystery",    status: "limited",  nextEpisode: "—",               season: "S1 (Limited)" },
  { id: 71,  title: "Time Bandits",                  network: "Apple TV+",    genre: "Sci-Fi",     status: "canceled", nextEpisode: "—",               season: "S1" },
  { id: 72,  title: "Colin From Accounts",           network: "Paramount+",   genre: "Comedy",     status: "renewed",  nextEpisode: "TBD 2026",        season: "S3" },
  { id: 73,  title: "Snowpiercer",                   network: "AMC",          genre: "Sci-Fi",     status: "canceled", nextEpisode: "—",               season: "S4 (Final)" },
  { id: 74,  title: "Rings of Power",                network: "Prime Video",  genre: "Fantasy",    status: "renewed",  nextEpisode: "TBD",             season: "S3" },
  { id: 75,  title: "Agatha All Along",              network: "Disney+",      genre: "Fantasy",    status: "limited",  nextEpisode: "—",               season: "S1 (Limited)" },
  { id: 76,  title: "Cobra Kai",                     network: "Netflix",      genre: "Action",     status: "canceled", nextEpisode: "—",               season: "S6 (Final)" },
  { id: 77,  title: "Slow Horses",                   network: "Apple TV+",    genre: "Thriller",   status: "renewed",  nextEpisode: "TBD 2026",        season: "S5" },
  { id: 78,  title: "English Teacher",               network: "FX",           genre: "Comedy",     status: "renewed",  nextEpisode: "TBD 2026",        season: "S2" },
  { id: 79,  title: "The Penguin",                   network: "HBO Max",      genre: "Crime",      status: "limited",  nextEpisode: "—",               season: "S1 (Limited)" },
  { id: 80,  title: "The Franchise",                 network: "HBO",          genre: "Comedy",     status: "canceled", nextEpisode: "—",               season: "S1" },
  { id: 81,  title: "The Old Man",                   network: "FX/Hulu",      genre: "Thriller",   status: "renewed",  nextEpisode: "TBD 2026",        season: "S3" },
  { id: 82,  title: "From",                          network: "MGM+",         genre: "Sci-Fi",     status: "renewed",  nextEpisode: "TBD 2026",        season: "S4" },
  { id: 83,  title: "Mr. Mercedes",                  network: "Peacock",      genre: "Crime",      status: "canceled", nextEpisode: "—",               season: "S3 (Final)" },
  { id: 84,  title: "The Diplomat",                  network: "Netflix",      genre: "Drama",      status: "renewed",  nextEpisode: "TBD 2026",        season: "S3" },
  { id: 85,  title: "Teacup",                        network: "Peacock",      genre: "Thriller",   status: "canceled", nextEpisode: "—",               season: "S1" },
  { id: 86,  title: "Where's Wanda",                 network: "Prime Video",  genre: "Comedy",     status: "renewed",  nextEpisode: "TBD",             season: "S2" },
  { id: 87,  title: "Doctor Odyssey",                network: "ABC",          genre: "Drama",      status: "canceled", nextEpisode: "—",               season: "S1" },
  { id: 88,  title: "The Jackal",                    network: "Peacock",      genre: "Thriller",   status: "pending",  nextEpisode: "TBD 2026",        season: "S1" },
  { id: 89,  title: "Disclaimer",                    network: "Apple TV+",    genre: "Thriller",   status: "limited",  nextEpisode: "—",               season: "S1 (Limited)" },
  { id: 90,  title: "What We Do in the Shadows",     network: "FX",           genre: "Comedy",     status: "canceled", nextEpisode: "—",               season: "S6 (Final)" },
  { id: 91,  title: "Somebody Somewhere",            network: "HBO",          genre: "Comedy",     status: "canceled", nextEpisode: "—",               season: "S3 (Final)" },
  { id: 92,  title: "Lioness",                       network: "Paramount+",   genre: "Thriller",   status: "renewed",  nextEpisode: "TBD 2026",        season: "S3" },
  { id: 93,  title: "Shrinking",                     network: "Apple TV+",    genre: "Comedy",     status: "renewed",  nextEpisode: "TBD 2026",        season: "S3" },
  { id: 94,  title: "Sweetpea",                      network: "Starz",        genre: "Thriller",   status: "renewed",  nextEpisode: "TBD 2026",        season: "S2" },
  { id: 95,  title: "Cross",                         network: "Prime Video",  genre: "Crime",      status: "renewed",  nextEpisode: "TBD 2026",        season: "S2" },
  { id: 96,  title: "The Edge of Sleep",             network: "Prime Video",  genre: "Thriller",   status: "limited",  nextEpisode: "—",               season: "S1 (Limited)" },
  { id: 97,  title: "Black Doves",                   network: "Netflix",      genre: "Thriller",   status: "renewed",  nextEpisode: "TBD 2026",        season: "S2" },
  { id: 98,  title: "The Sticky",                    network: "Prime Video",  genre: "Crime",      status: "renewed",  nextEpisode: "TBD",             season: "S2" },
  { id: 99,  title: "The Madness",                   network: "Netflix",      genre: "Thriller",   status: "canceled", nextEpisode: "—",               season: "S1" },
  { id: 100, title: "A Man on the Inside",           network: "Netflix",      genre: "Comedy",     status: "renewed",  nextEpisode: "TBD 2026",        season: "S3" },
  { id: 101, title: "Landman",                       network: "Paramount+",   genre: "Drama",      status: "renewed",  nextEpisode: "TBD 2026",        season: "S2" },
  { id: 102, title: "Bad Sisters",                   network: "Apple TV+",    genre: "Drama",      status: "renewed",  nextEpisode: "TBD 2026",        season: "S3" },
  { id: 103, title: "La Palma",                      network: "Netflix",      genre: "Drama",      status: "limited",  nextEpisode: "—",               season: "S1 (Limited)" },
  { id: 104, title: "Laid",                          network: "Peacock",      genre: "Comedy",     status: "renewed",  nextEpisode: "TBD",             season: "S2" },
  { id: 105, title: "Squid Game",                    network: "Netflix",      genre: "Thriller",   status: "canceled", nextEpisode: "—",               season: "S3 (Final)" },
  { id: 106, title: "Earth Abides",                  network: "MGM+",         genre: "Sci-Fi",     status: "pending",  nextEpisode: "TBD",             season: "S1" },
  { id: 107, title: "No Good Deed",                  network: "Netflix",      genre: "Comedy",     status: "canceled", nextEpisode: "—",               season: "S1" },
  { id: 108, title: "A Good Girl's Guide to Murder", network: "Netflix",      genre: "Mystery",    status: "renewed",  nextEpisode: "TBD 2026",        season: "S2" },
  { id: 109, title: "Bad Monkey",                    network: "Apple TV+",    genre: "Comedy",     status: "renewed",  nextEpisode: "TBD 2026",        season: "S2" },
  { id: 110, title: "Last Days of Space Age",        network: "Prime Video",  genre: "Drama",      status: "limited",  nextEpisode: "—",               season: "S1 (Limited)" },
  { id: 111, title: "Hysteria!",                     network: "Netflix",      genre: "Comedy",     status: "pending",  nextEpisode: "TBD 2026",        season: "S1" },
  { id: 112, title: "Silo",                          network: "Apple TV+",    genre: "Sci-Fi",     status: "canceled", nextEpisode: "—",               season: "S4 (Final/2027)" },
  { id: 113, title: "AP Bio",                        network: "Peacock",      genre: "Comedy",     status: "canceled", nextEpisode: "—",               season: "S4 (Final)" },
  { id: 114, title: "The Agency",                    network: "Paramount+",   genre: "Thriller",   status: "renewed",  nextEpisode: "TBD 2026",        season: "S2" },
  { id: 115, title: "Dexter: Original Sin",          network: "Paramount+",   genre: "Crime",      status: "renewed",  nextEpisode: "TBD 2026",        season: "S2" },
  { id: 116, title: "The Head",                      network: "HBO Max",      genre: "Thriller",   status: "renewed",  nextEpisode: "TBD 2026",        season: "S3" },
];

const statusConfig = {
  renewed:  { label: "RENEWED",   bg: "#0d2b1a", border: "#1a5c38", text: "#4ade80", dot: "#22c55e" },
  canceled: { label: "CANCELED",  bg: "#2b0d0d", border: "#5c1a1a", text: "#f87171", dot: "#ef4444" },
  pending:  { label: "PENDING",   bg: "#2b2200", border: "#5c4a00", text: "#fbbf24", dot: "#f59e0b" },
  limited:  { label: "LIMITED-C", bg: "#2b0d0d", border: "#7c1a1a", text: "#fca5a5", dot: "#f87171" },
};

const genreColors = {
  Thriller:"#7c3aed", Drama:"#0891b2", Fantasy:"#059669", Historical:"#b45309",
  Comedy:"#d97706", Mystery:"#6d28d9", Crime:"#dc2626", "Sci-Fi":"#0284c7",
  Action:"#e11d48", Legal:"#0369a1", Horror:"#7f1d1d",
};

export default function TVTracker() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = shows.filter(s => {
    const mf = filter === "all" || s.status === filter;
    const ms = s.title.toLowerCase().includes(search.toLowerCase()) ||
               s.network.toLowerCase().includes(search.toLowerCase());
    return mf && ms;
  });

  return (
    <div style={{ minHeight:"100vh", background:"#080b10", fontFamily:"'Georgia','Times New Roman',serif", color:"#e2e8f0", padding:"40px 24px" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Mono:wght@300;400&display=swap');
        * { box-sizing:border-box; }
        .show-row { display:grid; grid-template-columns:1fr 140px 200px; gap:12px; align-items:center; padding:16px 20px; border:1px solid #1e2a38; border-radius:4px; background:#0c1118; transition:all 0.2s ease; }
        .show-row:hover { border-color:#2e4a6a; background:#0f1822; transform:translateX(4px); }
        .pill { display:inline-flex; align-items:center; gap:6px; padding:5px 12px; border-radius:3px; font-family:'DM Mono',monospace; font-size:10px; letter-spacing:0.12em; border:1px solid; }
        .dot { width:6px; height:6px; border-radius:50%; animation:pulse 2s infinite; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.4} }
        .filter-btn { padding:7px 18px; border-radius:3px; font-family:'DM Mono',monospace; font-size:11px; letter-spacing:0.1em; border:1px solid #1e2a38; background:transparent; color:#64748b; cursor:pointer; transition:all 0.15s; }
        .filter-btn.active { background:#1e2a38; color:#e2e8f0; border-color:#2e4a6a; }
        .filter-btn:hover:not(.active) { border-color:#2e3a50; color:#94a3b8; }
        .search-input { background:#0c1118; border:1px solid #1e2a38; border-radius:3px; padding:9px 16px; color:#e2e8f0; font-family:'DM Mono',monospace; font-size:12px; width:240px; outline:none; transition:border-color 0.15s; }
        .search-input::placeholder { color:#334155; }
        .search-input:focus { border-color:#2e4a6a; }
        .header-label { font-family:'DM Mono',monospace; font-size:10px; letter-spacing:0.15em; color:#334155; text-transform:uppercase; }
        .next-ep { font-family:'DM Mono',monospace; font-size:12px; color:#64748b; }
        .next-ep.has-date { color:#94a3b8; }
        .genre-tag { display:inline-block; padding:2px 8px; border-radius:2px; font-family:'DM Mono',monospace; font-size:10px; letter-spacing:0.08em; margin-left:8px; opacity:0.7; }
      `}</style>

      {/* Header */}
      <div style={{ maxWidth:900, margin:"0 auto 48px" }}>
        <div style={{ display:"flex", alignItems:"baseline", gap:16, marginBottom:8 }}>
          <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:48, fontWeight:900, margin:0, letterSpacing:"-0.02em", color:"#f1f5f9", lineHeight:1 }}>TV TRACKER</h1>
          <span style={{ fontFamily:"'DM Mono',monospace", fontSize:11, color:"#334155", letterSpacing:"0.15em" }}>2026 SEASON</span>
        </div>
        <div style={{ width:60, height:2, background:"#1e3a5c", marginBottom:8 }} />
        <p style={{ fontFamily:"'DM Mono',monospace", fontSize:12, color:"#334155", margin:0, letterSpacing:"0.08em" }}>
          {shows.filter(s=>s.status==="renewed").length} renewed · {shows.filter(s=>s.status==="canceled").length} canceled · {shows.filter(s=>s.status==="limited").length} limited · {shows.filter(s=>s.status==="pending").length} pending
        </p>
      </div>

      {/* Controls */}
      <div style={{ maxWidth:900, margin:"0 auto 28px", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:12 }}>
        <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
          {["all","renewed","canceled","limited","pending"].map(f => (
            <button key={f} className={`filter-btn ${filter===f?"active":""}`} onClick={() => setFilter(f)}>
              {f==="limited"?"LIMITED-C":f.toUpperCase()}
            </button>
          ))}
        </div>
        <input className="search-input" placeholder="Search shows or networks..." value={search} onChange={e => setSearch(e.target.value)} />
      </div>

      {/* Column Headers */}
      <div style={{ maxWidth:900, margin:"0 auto 8px" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 140px 200px", gap:12, padding:"0 20px" }}>
          <span className="header-label">Series</span>
          <span className="header-label">Status</span>
          <span className="header-label">Next Episode</span>
        </div>
      </div>
      <div style={{ maxWidth:900, margin:"0 auto 12px", height:1, background:"#1e2a38" }} />

      {/* Show List */}
      <div style={{ maxWidth:900, margin:"0 auto", display:"flex", flexDirection:"column", gap:6 }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign:"center", padding:48, fontFamily:"'DM Mono',monospace", fontSize:13, color:"#334155" }}>No shows found.</div>
        ) : filtered.map(show => {
          const sc = statusConfig[show.status] || statusConfig.pending;
          const gc = genreColors[show.genre] || "#475569";
          const hasDate = show.nextEpisode !== "—";
          return (
            <div key={show.id} className="show-row">
              <div>
                <div style={{ display:"flex", alignItems:"center" }}>
                  <span style={{ fontFamily:"'Playfair Display',serif", fontSize:17, fontWeight:700, color:"#f1f5f9", letterSpacing:"-0.01em" }}>{show.title}</span>
                  <span className="genre-tag" style={{ background:gc+"20", color:gc }}>{show.genre}</span>
                </div>
                <div style={{ display:"flex", alignItems:"center", gap:10, marginTop:3 }}>
                  <span style={{ fontFamily:"'DM Mono',monospace", fontSize:11, color:"#475569" }}>{show.network}</span>
                  <span style={{ fontFamily:"'DM Mono',monospace", fontSize:11, color:"#2e4a6a" }}>·</span>
                  <span style={{ fontFamily:"'DM Mono',monospace", fontSize:11, color:"#2e4a6a" }}>{show.season}</span>
                </div>
              </div>
              <div>
                <div className="pill" style={{ background:sc.bg, borderColor:sc.border, color:sc.text }}>
                  <span className="dot" style={{ background:sc.dot }} />{sc.label}
                </div>
              </div>
              <div>
                <span className={`next-ep ${hasDate?"has-date":""}`}>{hasDate?"🗓 ":"✕ "}{show.nextEpisode}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div style={{ maxWidth:900, margin:"40px auto 0", paddingTop:20, borderTop:"1px solid #0f1822" }}>
        <p style={{ fontFamily:"'DM Mono',monospace", fontSize:10, color:"#1e2a38", letterSpacing:"0.1em", textAlign:"center", margin:0 }}>
          DATA UPDATED MARCH 2026 · SUBJECT TO NETWORK CHANGES
        </p>
      </div>
    </div>
  );
}
