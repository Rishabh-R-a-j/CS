import './css/App.css';
import './css/props.css';
import './css/uifont.css';
import HomePage from './screens/Home';
import Sidebar from './screens/Sidebar';
import Rightbar from './screens/Rightbar';
import CoursePage from './screens/Course'
function App() {
  return (
    <div className="App flex">
      <Sidebar/>
      <div className="app-content">
      <CoursePage/>
      </div>
      {/* <Rightbar/> */}
    </div>
  );
}

export default App;
