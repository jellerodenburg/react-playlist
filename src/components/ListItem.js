import React from "react"
import trashImg from "../trash.svg"

function ListItem(props) {
    const titleYouTube = props.title.replace(/\s/g, '+')
    const artistYouTube = props.artist.replace(/\s/g, '+')
    const titleAndArtistYouTube = titleYouTube + "+" + artistYouTube
    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.artist}</td>
            <td>{props.genre}</td>
            <td>{props.rating}</td>
            <td><img
                src={trashImg}
                alt="trash"
                className="delete-img"
                onClick={() => { props.handleDelete(props.id) }}
            ></img></td>
            <td>
                <a
                    href={`https://www.youtube.com/results?search_query=${titleAndArtistYouTube}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    YouTube</a>
            </td>
        </tr>
    )
}

export default ListItem