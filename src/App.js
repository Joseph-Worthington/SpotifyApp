import './assets/css/style.css';
import SearchBar from './component/SearchBar';
import SearchResults from './component/SerachResults';
import TrackList from './component/Tracklist'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body id="App">
        <div class="">
          <SearchBar />
        </div>
        <div class="tracks">
          <SearchResults />
          <TrackList />
        </div>
      </body>
    </div>
  );
}

export default App;
