import './assets/css/style.css';
import SearchBar from './component/SearchBar';
import SearchResults from './component/SerachResults';
import TrackList from './component/Tracklist'


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
          <TrackList />
        </div>
      </div>
    </div>
  );
}

export default App;
