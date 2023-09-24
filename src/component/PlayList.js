import React from 'react';
import Track from './Track';
import EditablePlaylistName from './EditablePlaylistName';

const PlayList = ({ playlistData, handleRemove  }) => {

   const initialPlaylistName = 'My Playlist';


    const handleRemoveClick  = (index) => {    
        handleRemove(index)
    };

  

  return (
    <section className='playlist'>
        <EditablePlaylistName initialName={initialPlaylistName} />
        {playlistData.map((track, index) => (
            <div key={index} className="track-wrapper">
                <Track name={track.name} artist={track.artist} />
                <button onClick={() => handleRemoveClick(index)}>Remove</button>
            </div>     
        ))}
       
    </section>
  );
};

export default PlayList;