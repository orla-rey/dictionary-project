import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary () {
    const [keyword, setKeyword] = useState("");
    const [results, setResults] = useState(null);
    const [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response) {
        setResults(response.data);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function search(event) {
        event.preventDefault();

        //API documentation: https://www.shecodes.io/learn/apis/dictionary
        const apiKey = "1c21507bfe367ft66ea583e00ofa422f";
        const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        //API documentation: https://www.pexels.com/api/documentation/#photos-search
        const pexelsApiKey = "NUE1AuVoV3zMUsv6AgiETf8a6UbPbsmJMkUFuJWOozdJpi8xNVmQ8mfi";
        const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        const headers = { Authorization : `${pexelsApiKey}` };
        axios.get(pexelsApiUrl, { headers }).then(handlePexelsResponse);

    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <h5>What word do you want to search?</h5>
                <div className="row">
                    <div className="col-9">
                        <input type="search" onChange={handleKeywordChange} placeholder="Search for a word"/>
                        <div className="hint">e.g.: sunset, total, conscious...</div>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-custom">Search</button>
                    </div>
                </div>
            </form>
            <Results results={results}/>
            <Photos photos={photos}/>
        </div>
    ) ;
}