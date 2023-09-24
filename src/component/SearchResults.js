import React, {useState}  from "react";
import PlayList from './PlayList'
import TrackList from "./Tracklist";
import data from '../assets/fake-data/data.json';


const SearchResults = () => {

    let tracks = JSON.stringify(data);
    tracks = JSON.parse(tracks);
    tracks = tracks.tracks.items;

    const [playlistData, setPlaylistData] = useState([]);

    
    const handleClick = (songname, artist, uri) => {
        const track = {
          name: songname,
          artist: artist,
          uri : uri
        };
        setPlaylistData(prevData => [...prevData, track]);

    };

    const handleRemove = (index) => {
        const updatedPlaylistData = [...playlistData];
        updatedPlaylistData.splice(index, 1);
        setPlaylistData(updatedPlaylistData);
    };

    const handleSaveToSpotify = () => {
        const uris = playlistData.map((track) => track.uri);

        setPlaylistData([uris])
    };


    return ( 
        <section className="Search Results">
            <TrackList tracks={tracks} handleClick={handleClick} />
            <PlayList playlistData={playlistData} handleRemove={handleRemove} />
            <button onClick={handleSaveToSpotify}>Save to Spotify</button>
        </section>
    );
}

export default SearchResults;