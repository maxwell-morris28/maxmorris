import React from 'react';
import ReactDOM from 'react-dom/client';
import './Banner.css'

function Banner(props) {
    return (
        <div className="container">
            <h1>{props.pageName}</h1>
        </div>

    );
}

export default Banner
