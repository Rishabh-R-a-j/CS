import './css/App.css';
import './css/props.css';
import './css/uifont.css';
import HomePage from './screens/Home';
import Sidebar from './screens/Sidebar';
import Rightbar from './screens/Rightbar';
import CoursePage from './screens/Course';
import DiscoverPage from './screens/Discover';
import CategoriesPage from './screens/Categories';
import MyCoursesPage from './screens/Mycourses'
import {
  NavLink,
  Route,
  HashRouter
} from "react-router-dom";
function App() {
  return (
    <div className="App flex">
    <HashRouter>
      <Sidebar/>
      <div className="app-content">
    <Route exact path="/" component={HomePage}/>
     <Route path="/course/:courseid" component={CoursePage}/>
     <Route path="/discover" component={DiscoverPage}/>
     <Route path="/cates" component={CategoriesPage}/>
     <Route path="/my-courses" component={MyCoursesPage}/>
      </div>
      {/* <Rightbar/> */}
      </HashRouter>
    </div>
  );
}

export default App;
