import React from "react";
export default function AboutMe(){
    return (
        <div className="h-50 d-flex mx-5 my-5 justify-content-start">
            <figure className="figure d-flex flex-column align-items-start w-50">
                <img src="../graphics/me-programming.png" alt="Me programming" className="figure-img image-fluid w-50 rounded d-flex"></img>
                <figcaption className="figure-caption text text-color d-flex">Me, programming</figcaption>
            </figure>
            <div className="text text-color">
                <h4>About Me</h4>
                <p>
                    I am Alec, a full-stack developer based in Missouri! I have been programming since 6th grade, approx 10 years from now. I started out making simple HTML sites,
                    eventually adding CSS and JS into them. I have a strong desire to create games and have since been creating small games on Roblox. I have a thorough understanding of 
                    OOP and algorithms but I am extremely terrible with CSS.  
                </p>
            </div>
        </div>
    )
}