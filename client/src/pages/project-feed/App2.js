import Navbar from './components/Navbarfeed'
import SearchProject from './components/Projectsearch'
import Projectspace from './components/ProjectSpace'
import Aboutproject from './components/ProjectsList'

function App() {
  return (
    <div className="App">
        <Navbar />
        <SearchProject />
        <div className="view_project">
          <Projectspace />
          <div className="project_deatil">
            <Aboutproject />
          </div>
        </div>
    </div>
  );
}

export default App;
