import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import HomeIcon from '@material-ui/icons/Home';
import NewsFeed from './Components/NewsFeed/NewsFeed';
import Widgets from './Components/Widgets/Widgets';

function App() {
  return (
    <div className="App">
      {/*Sidebar*/}
      <Sidebar />
      {/*News Feed*/}
      <NewsFeed />
      {/*Widgets*/}
      <Widgets />
    </div>
  );
}

export default App;
