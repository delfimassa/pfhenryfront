import React from 'react';
import loading from "../assets/loading.gif"

const Loading = () => {
    return (
        <div className="loading">
            <img src={loading} alt="loading gif"></img>
        </div>
    );
};

export default Loading;