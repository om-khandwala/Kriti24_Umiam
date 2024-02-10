import { useRef } from 'react';
import Navbar from './components/Navbarhome';
import Collaborate from './components/collaborate';
import './index.css'

function Homepage() {
  return (
      <div className="home-page">
        <Navbar />
        <div className="content">
          <Collaborate/>
        </div>
      </div>
  );
}

export default Homepage;
