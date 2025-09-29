import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card'
import TopFiveEasternCard from './components/TopFiveEasternCard'
import TopFiveWesternCard from './components/TopFiveWesternCard'
import DarkModeToggle from './components/DarkModeToggle'
function App() {
  // Theme state - default to light black background
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme === 'true';
  });

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  const easternMlsTeams = [
    { id: 1, teamName: "Atlanta United FC", teamLocation: "Atlanta, GA", teamImage: "https://images.mlssoccer.com/image/upload/t_q-best/v1747499879/assets/logos/mls-clubs/Club_Logo-Atlanta_jtk7ku.png" },
    { id: 2, teamName: "Charlotte FC", teamLocation: "Charlotte, NC", teamImage: "https://images.mlssoccer.com/image/upload/t_q-best/v1747500045/assets/logos/mls-clubs/Club_Logo-Charlotte_p7sznf.png" },
    { id: 3, teamName: "Chicago Fire FC", teamLocation: "Chicago, IL", teamImage: "https://images.mlssoccer.com/image/upload/t_q-best/v1747500178/assets/logos/mls-clubs/Club_Logo-Chicago_jm2yev.png" },
    { id: 4, teamName: "FC Cincinnati", teamLocation: "Cincinnati, OH", teamImage: "https://images.mlssoccer.com/image/upload/t_q-best/v1747500249/assets/logos/mls-clubs/Club_Logo-Cincinnati_jwgkps.png" },
    { id: 5, teamName: "Columbus Crew", teamLocation: "Columbus, OH", teamImage: "https://images.mlssoccer.com/image/upload/t_q-best/v1747500414/assets/logos/mls-clubs/Club_Logo-Columbus_light_z3eq8l.png" },
    { id: 6, teamName: "D.C. United", teamLocation: "Washington, D.C.", teamImage: "https://images.mlssoccer.com/image/upload/t_q-best/v1747500504/assets/logos/mls-clubs/Club_Logo-D.C_t03ekm.png" },
    { id: 7, teamName: "Inter Miami CF", teamLocation: "Fort Lauderdale, FL", teamImage: "https://images.mlssoccer.com/image/upload/t_q-best/v1747755405/assets/logos/mls-clubs/Club_Logo-Miami_tyqe64.png" },
    { id: 8, teamName: "CF Montreal", teamLocation: "Montreal, QC", teamImage: "https://images.mlssoccer.com/image/upload/t_q-best/v1747755806/assets/logos/mls-clubs/Club_Logo-Montreal_beeqnh.png" },
    { id: 9, teamName: "Nashville SC", teamLocation: "Nashville, TN", teamImage: "https://images.mlssoccer.com/image/upload/t_q-best/v1747755999/assets/logos/mls-clubs/Club_Logo-Nashville_rb9vwu.png" },
    { id: 10, teamName: "New England Revolution", teamLocation: "Foxborough, MA", teamImage: "https://images.mlssoccer.com/image/upload/t_q-best/v1747756191/assets/logos/mls-clubs/Club_Logo-new_England_g6pdoa.png" },
    { id: 11, teamName: "New York City FC", teamLocation: "New York, NY", teamImage: "https://images.mlssoccer.com/image/upload/t_q-best/v1747756306/assets/logos/mls-clubs/Club_Logo-New_York_City_xu6vax.png" },
    { id: 12, teamName: "New York Red Bulls", teamLocation: "Harrison, NJ", teamImage: "https://images.mlssoccer.com/image/upload/t_q-best/v1747771783/assets/logos/mls-clubs/Club_Logo-RBNY_dwawvt.png" },
    { id: 13, teamName: "Orlando City SC", teamLocation: "Orlando, FL", teamImage: "https://images.mlssoccer.com/image/upload/t_q-best/v1747769281/assets/logos/mls-clubs/Club_Logo-Orlando_ryyn7a.png" },
    { id: 14, teamName: "Philadelphia Union", teamLocation: "Chester, PA", teamImage: "https://images.mlssoccer.com/image/upload/t_q-best/v1747769446/assets/logos/mls-clubs/Club_Logo-Philadelphia_im7pqg.png" },
    { id: 15, teamName: "Toronto FC", teamLocation: "Toronto, ON", teamImage: "https://images.mlssoccer.com/image/upload/t_q-best/v1748265251/assets/logos/mls-clubs/Club_Logo-Toronto_vz6hao.png" }
  ];

  const westernMlsTeams = [
    { id: 16, teamName: "Austin FC", teamLocation: "Austin, TX", teamImage: "https://images.mlssoccer.com/image/upload/t_q-best/v1747499975/assets/logos/mls-clubs/Club_Logo-Austin_pa9xtu.png" },
    { id: 17, teamName: "Colorado Rapids", teamLocation: "Commerce City, CO", teamImage: "https://images.mlssoccer.com/image/upload/t_q-best/v1747500322/assets/logos/mls-clubs/Club_Logo-Colorado_n5kpss.png" },
    { id: 18, teamName: "FC Dallas", teamLocation: "Frisco, TX", teamImage: "https://images.mlssoccer.com/image/upload/t_q-best/v1747500567/assets/logos/mls-clubs/Club_Logo-Dallas_sysmtj.png" },
    { id: 19, teamName: "Houston Dynamo FC", teamLocation: "Houston, TX", teamImage: "https://images.mlssoccer.com/image/upload/t_q-best/v1747500939/assets/logos/mls-clubs/Club_Logo-Houston_oifm77.png" },
    { id: 20, teamName: "LAFC", teamLocation: "Los Angeles, CA", teamImage: "https://images.mlssoccer.com/image/upload/assets/logos/LAFC.svg" },
    { id: 21, teamName: "LA Galaxy", teamLocation: "Carson, CA", teamImage: "https://images.mlssoccer.com/image/upload/t_q-best/v1747755165/assets/logos/mls-clubs/Club_Logo-LA_Galaxy_fg0wjp.png" },
    { id: 22, teamName: "Minnesota United FC", teamLocation: "Saint Paul, MN", teamImage: "https://images.mlssoccer.com/image/upload/assets/logos/MIN.svg" },
    { id: 23, teamName: "Portland Timbers", teamLocation: "Portland, OR", teamImage: "https://images.mlssoccer.com/image/upload/v1626094359/assets/logos/POR-Logo_wviuqh.svg" },
    { id: 24, teamName: "Real Salt Lake", teamLocation: "Sandy, UT", teamImage: "https://images.mlssoccer.com/image/upload/v1625175975/assets/logos/RSL-Logo_l7qgl3" },
    { id: 25, teamName: "San Diego FC", teamLocation: "San Diego, CA", teamImage: "https://images.mlssoccer.com/image/upload/v1736288310/assets/sd_logo_pri_fc_rgb_480x480__1__720_1_ipr7gj.png" },
    { id: 26, teamName: "San Jose Earthquakes", teamLocation: "San Jose, CA", teamImage: "https://images.mlssoccer.com/image/upload/assets/logos/SJ.svg" },
    { id: 27, teamName: "Seattle Sounders FC", teamLocation: "Seattle, WA", teamImage: "https://images.mlssoccer.com/image/upload/v1702319240/assets/sea/logos/SEA2023-Full_Color-480x480_fk6mpu.png" },
    { id: 28, teamName: "Sporting Kansas City", teamLocation: "Kansas City, KS", teamImage: "https://images.mlssoccer.com/image/upload/assets/logos/SKC.svg" },
    { id: 29, teamName: "St. Louis City SC", teamLocation: "St. Louis, MO", teamImage: "https://images.mlssoccer.com/image/upload/v1610563329/assets/logos/STL.svg" },
    { id: 30, teamName: "Vancouver Whitecaps FC", teamLocation: "Vancouver, BC", teamImage: "https://images.mlssoccer.com/image/upload/assets/logos/VAN.svg" }
  ];

  return (
    <div className="App">
      <DarkModeToggle isDark={isDarkMode} onToggle={toggleDarkMode} />
      <h1>MLS Competitors</h1>
        <a 
          href="https://www.mlssoccer.com/standings/#season=MLS-SEA-0001K9&live=false" 
          target="_blank" 
          rel="noopener noreferrer"
          className="standings-button"
        >
          MLS Team Standings
        </a>
      
      <h2>Eastern Conference</h2>
      <div className="cards-container">
        {easternMlsTeams.map(team => (
          <Card 
            key={team.id}
            teamName={team.teamName} 
            teamLocation={team.teamLocation}
            teamImage={team.teamImage}
          />
        ))}
        <TopFiveEasternCard />
      </div>

      <h2>Western Conference</h2>
      <div className="cards-container">
        {westernMlsTeams.map(team => (
          <Card 
            key={team.id}
            teamName={team.teamName} 
            teamLocation={team.teamLocation}
            teamImage={team.teamImage}
          />
         ))}
         <TopFiveWesternCard />
       </div>
       <div className="trademark">
        <p>Inter Miami CF®</p>
      </div>
    </div>
    
  )
}

export default App;
