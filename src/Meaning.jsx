import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";


export default function Meaning(props) {
    return (
        <div className="Meaning">
            <h4>{props.meaning.partOfSpeech}</h4>
            <h6 className="definition">{props.meaning.definition}</h6>
            <h6 className="example">{props.meaning.example && (
                    <div><em>
                        "{props.meaning.example}"
                    </em></div>
            )}
            </h6>
            
            <Synonyms synonyms={props.meaning.synonyms} />
        </div>
    );
}