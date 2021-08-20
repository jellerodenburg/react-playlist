import React from "react"
import List from "./List"

function SongList(props) {
    return (
        <div className="song-list">
            <List
                songItems={props.songItems}
                handleDelete={props.handleDelete}
                sortSongList={props.sortSongList} />
        </div>
    )
}

export default SongList