import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary () {
    const [keyword, setKeyword] = useState("");

    function handleResponse(response) {
        console.log(response.data[0]);
    }

    
    function search(event) {
        event.preventDefault();

        //API documentation: https://www.shecodes.io/learn/apis/dictionary
        const apiKey = "1c21507bfe367ft66ea583e00ofa422f";
        const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);

    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange} />
            </form>
        </div>
    ) ;
}