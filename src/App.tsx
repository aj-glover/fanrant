import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Sports from './pages/Sports';
import NflTeams from './pages/NflTeams';
import TeamPage from './pages/TeamPage';
import Venues from './pages/Venues';
import Feed from './pages/Feed';
import VideoPlayer from './pages/VideoPlayer';
import OrderFood from './pages/OrderFood';
import LiveVenue from './pages/LiveVenue';
import StadiumMap from './pages/StadiumMap';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0a1628] text-white overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/nfl-teams" element={<NflTeams />} />
          <Route path="/team/:id" element={<TeamPage />} />
          <Route path="/venues" element={<Venues />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/video/:id" element={<VideoPlayer />} />
          <Route path="/order-food" element={<OrderFood />} />
          <Route path="/live-venue" element={<LiveVenue />} />
          <Route path="/stadium-map" element={<StadiumMap />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
