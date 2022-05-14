import React from "react";

export default function Portfolio(){
    return (
        <div className="d-flex m-5 flex-wrap justify-content-between">
            <div className="card w-25 h-75 d-flex flex-column  my-2 mx-1">
                <img src="./graphics/bootlegsnapshot.png" className="card-img-top h-25 d-flex"alt="Bootleg snapshot"/>
                <div className="card-body h-75 p-3">
                    <p>
                        Bootleg is a website created by Alec, Chris, Alex, and Gerald. It is a full-stack app
                        using MySQL, Node, Bootstrap, and Sequelize. Once the user signs in or signs up, it will present the user 
                        the option to upload an image with an caption. Upon doing so, it will send the image renamed with the caption
                        to the server to be compressed and then displayed on the main page.
                    </p>
                    <div className="postion-absolute start-50">
                        <a href="https://group-project-bootleg.herokuapp.com/" target={"_blank"} rel="noreferrer">
                            <img style={{height:"40px"}} src="./graphics/hyperlinkicon.png" alt="hyperlink icon"/>
                        </a>
                        <a href="https://github.com/AlecRuin/Bootleg"  target={"_blank"} rel="noreferrer">
                            <img style={{height:"40px",width:"40px"}} src="./graphics/githublogo.png" alt="hyperlink icon"/>
                        </a>
                    </div>
                </div>   
            </div>
        </div>
    )
}