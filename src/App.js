import Navbar from './components/Navbarhome';
import Collaborate from './components/collaborate';

function App() {
  return (
      <div className="App">
        <Navbar />
        <div className="content">
          <Collaborate />
        </div>
      </div>
  );
}

export default App;
