import React from "react"

function InputFields(props) {

    return (
        <div className="input-fields">
            <input
                placeholder="Song Title"
                value={props.newSongTitle}
                onChange={props.handleChange}
                name="newSongTitle"
                autoFocus={true}
            />

            <input
                placeholder="Artist"
                value={props.newSongArtist}
                onChange={props.handleChange}
                name="newSongArtist"
            />

            <select
                value={props.newSongGenre}
                onChange={props.handleChange}
                name="newSongGenre"
            >
                <option value="">--Genre--</option>
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

            <select
                value={props.newSongRating}
                onChange={props.handleChange}
                name="newSongRating"
            >
                <option value="">--Rating--</option>
                <option value="⭐">⭐</option>
                <option value="⭐⭐">⭐⭐</option>
                <option value="⭐⭐⭐">⭐⭐⭐</option>
                <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
                <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
            </select>

            <button onClick={() => { props.addNewItem(props.newTitleInput) }}>Add song</button>

        </div>
    )
}

export default InputFields