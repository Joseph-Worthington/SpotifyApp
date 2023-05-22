import './assets/css/style.css';
import SearchBar from './component/SearchBar';
import SearchResults from './component/SearchResults';
import TrackList from './component/Tracklist'
import PlayList from './component/PlayList';


function App() {
  return (
    <div className="App">
      <div className="App-header">
      </div>
      <div id="App">
        <div className="">
          <SearchBar />
        </div>
        <div className="tracks">
          <SearchResults />
        </div>
      </div>
    </div>
  );
}

export default App;
