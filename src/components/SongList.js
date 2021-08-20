import React from "react"
import List from "./List"

function SongList(props) {
    return (
        <div className="song-list">
            <div>
                Display:
                <select
                    value={props.filterGenre}
                    onChange={props.handleSelectDisplayGenre}
                    name="filterGenre"
                    id="display-genre-select"
                >
                    <option value="">--All Genres--</option>
                    <option value="Blues">Blues</option>
                    <option value="Classical">Classical</option>
                    <option value="Country">Country</option>
                    <option value="Dance">Dance</option>
                    <option value="Hip hop">Hip hop</option>
                    <option value="Jazz">Jazz</option>
                    <option value="Kids">Kids</option>
                    <option value="Metal">Metal</option>
                    <option value="Pop">Pop</option>
                    <option value="Reggae">Reggae</option>
                    <option value="Rock">Rock</option>
                </select>
            </div>
            <List
                songItems={props.songItems}
                filteredSongItems={props.filteredSongItems}
                handleDelete={props.handleDelete}
                sortSongList={props.sortSongList} />
        </div>
    )
}

export default SongList