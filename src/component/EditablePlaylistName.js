import React, { useState } from 'react';

const EditablePlaylistName = ({ initialName }) => {
  const [playlistName, setPlaylistName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (event) => {
    setPlaylistName(event.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleKeyDown = (event) => {
        if (event.key === 13) {
            setIsEditing(false);
        }
    }


  const handleSaveClick = () => {
    setIsEditing(false);
    // Perform any additional actions with the updated playlist name here
  };

  return (
    <div>
      {isEditing ? (
        <input type="text" value={playlistName} onChange={handleInputChange} onKeyDown={handleKeyDown} />
      ) : (
        <h2>{playlistName}</h2>
      )}
      {isEditing ? (
        <button onClick={handleSaveClick}>Save</button>
      ) : (
        <button onClick={handleEditClick}>Edit</button>
      )}
    </div>
  );
};

export default EditablePlaylistName;
