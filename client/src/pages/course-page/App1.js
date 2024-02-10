import Coursepage from './components/course_page';

function App({user}) {
  return (
    <div className="App">
      <Coursepage user={user}/>
    </div>
  );
}

export default App;
