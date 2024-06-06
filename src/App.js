import './css/App.css';
import './css/props.css';
import './css/uifont.css';
import HomePage from './screens/Home';
import Sidebar from './screens/Sidebar';
function App() {
  return (
    <div className="App flex">
      <Sidebar/>
      <HomePage/>
    </div>
  );
}

export default App;
