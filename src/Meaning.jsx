import React from "react";
import Synonyms from "./Synonyms";


export default function Meaning(props) {
    console.log(props.meaning);
    return (
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            <p><strong>Definition:</strong> {props.meaning.definition}
            {props.meaning.example && (
                <>
                    <br/>
                    <em>
                        <strong>Example:</strong> {props.meaning.example}
                    </em>
                </>
            )}
            </p>
            
            <Synonyms synonyms={props.meaning.synonyms} />
        </div>
    );
}