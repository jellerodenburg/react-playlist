import React from 'react'

function Nav(props) {
    return (
        <div className="nav">
            <h1>Jelle's Songlist</h1>
            <button onClick={props.aboutLinkClick} className="about-button">About</button>
        </div>
    )
}

export default Nav