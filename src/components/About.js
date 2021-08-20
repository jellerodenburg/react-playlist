import React from 'react'

function About(props) {
    return (
        <div id="about" className={props.aboutClass}>
            <div className="about-text">
                <h3>About this app</h3>
                <p>Click the table headers (Title, Artist, Genre, Rating) to sort.</p>
                <p>This app was built in React as an excerise using state and input elements.
                    I have used concepts I learned from Bob Ziroll's Scrimba course about React.</p>
                <p>While building this app I found out that with
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <code>localeCompare</code>
                    </a>
                    you can sort numerically and alphabetically,
                    but also based on the number of emoji's in a string
                    (like the stars I used in this app for the rating).
                </p>
            </div>
        </div>
    )
}

export default About