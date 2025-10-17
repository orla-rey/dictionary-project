import React from "react";
import "./Photos.css";

export default function Photos(props) {
    if (props.photos) {
        return (<div className="Photos">
            <section>
                <div className="row">
                    {props.photos.map(function(photo, index) {
                        return (
                            <div className="col-4" key={index}>
                                <a href={photo.url} target="_blank">
                                    <img src={photo.src.landscape} alt={photo.alt} className="img-fluid img-thumbnail"/>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
        );
    } else {
        return null;
    }
    
}