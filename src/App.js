import './css/App.css';
import './css/props.css';
import './css/uifont.css';
import HomePage from './screens/Home';
import Sidebar from './screens/Sidebar';
import Rightbar from './screens/Rightbar';
function App() {
  return (
    <div className="App flex">
      <Sidebar/>
      <div className="app-content">
      <HomePage/>
      </div>
      <Rightbar/>
    </div>
  );
}

export default App;
