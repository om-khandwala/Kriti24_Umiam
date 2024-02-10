import { useRef } from 'react';
import Navbar from './components/Navbarhome';
import Collaborate from './components/collaborate';

function Homepage() {
  return (
      <div className="App">
        <Navbar />
        <div className="content">
          <Collaborate/>
        </div>
      </div>
  );
}

export default Homepage;
