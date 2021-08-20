import React from "react"
import ListItem from "./ListItem"

function List(props) {
    const handleDelete = props.handleDelete
    const listItems = props.filteredSongItems.map(function (item) {
        return <ListItem
            key={item.id}
            id={item.id}
            className="list-item"
            title={item.title}
            artist={item.artist}
            genre={item.genre}
            rating={item.rating}
            handleDelete={handleDelete}
        />
    })
    return (
        <table>
            <thead>
                <tr>
                    <th onClick={() => props.sortSongList("title")}>Title</th>
                    <th onClick={() => props.sortSongList("artist")}> Artist</th>
                    <th onClick={() => props.sortSongList("genre")}>Genre</th>
                    <th onClick={() => props.sortSongList("rating")}>Rating</th>
                </tr>
            </thead>
            <tbody>
                {listItems}
            </tbody>
        </table>
    )
}

export default List