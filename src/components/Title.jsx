import React from 'react'
import "../stylesheets/title/title.css";

const Title = ({word1, word2}) => {
    return (
        <div class="container">
            <h2 class="title">
                <span class="title-word title-word-1">{word1}</span>
                <span class="title-word title-word-2">{word2}</span>
            </h2>
        </div>
    )
}

export default Title