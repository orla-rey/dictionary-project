import React from "react";

export default function Synonyms(props) {
    if (props.synonyms) {

       return (
        <div className="Synonyms">
            <strong>Synonyms:</strong>
            <span>
            {props.synonyms.map(function (synonym, index) {
                return (
                    
                    <span key={index}>{synonym}</span>);
                   
            })}
        </span>
        </div>
       );
    } else {
        return null;
    }
}