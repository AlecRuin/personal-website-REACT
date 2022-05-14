import React from "react";

export default function Resume(){
    return (
        <div>
            <a href="./graphics/Resume.pdf" download={true}>
                <button className="btn btn-primary m-5">
                    Download resume
                </button>
            </a>
        </div>
    )
}