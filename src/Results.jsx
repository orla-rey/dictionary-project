import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
    if (props.results) {
return  <div className="Results"> 
    <section>
    <h2>{props.results.word}</h2>
    <div className="Phonetic">
        Phonetic: {props.results.phonetic}
    </div>
    </section>
    {props.results.meanings.map(function(meaning, index) {
        return (
            <div key={index}>
                <Meaning meaning={meaning} />
            </div>    
        );
        })}
    </div>
    } else {
        return null;
    }
}