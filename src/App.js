import './assets/css/style.css';
import SearchBar from './component/SearchBar';
import SearchResults from './component/SearchResults';
import Login from './component/Login';


function App() {
  return (
    <div className="App">
      <div className="App-header">
      </div>
      <div id="App">

        <div className="login">
          <Login />
        </div>
        
        {/* <div className="">
          <SearchBar />
        </div>
        <div className="tracks">
          <SearchResults />
        </div> */}
      </div>
    </div>
  );
}

export default App;
