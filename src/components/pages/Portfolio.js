import React from "react";

export default function Portfolio(){
    return (
        <div className="d-flex m-5 flex-wrap justify-content-between">
            <div className="card w-25 h-75 d-flex flex-column  my-2 mx-1">
                <img src="./graphics/bootlegsnapshot.png" className="card-img-top h-25 d-flex"alt="Bootleg snapshot"/>
                <div className="card-body h-75 p-3">
                    <p>
                        Bootleg is a website created by Alec, Chris, Alex, and Gerald. It is a full-stack app
                        using MySQL, Node, Handlebars, and Sequelize. Once the user signs in or signs up, it will present the user 
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

            <div className="card w-25 h-75 d-flex flex-column  my-2 mx-1">
                <img src="./graphics/blogpostsnapshot.PNG" className="card-img-top h-25 d-flex"alt="Blogpost snapshot"/>
                <div className="card-body h-75 p-3">
                    <p>
                        As a test of skill, I created Blog Posts. Its a full stack application using Node, Handlebars, Express, MySQL, and Node.
                        Once a user signs up or logs in, it will allow the user to create simple blog posts with a title and a body. They may visit the dashboard
                        and view all their previous posts and delete them if need be. 
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
            
            <div className="card w-25 h-75 d-flex flex-column  my-2 mx-1">
                <img src="./graphics/watchlistsnapshot.PNG" className="card-img-top h-25 d-flex"alt="watch list snapshot"/>
                <div className="card-body h-75 p-3">
                    <p>
                        Movie Watchlist is a simple site utilizing the Watchmode api. Upon searching a movie, the API will return all streaming options of said movie. It will 
                        also sort the streaming options based on price, on demand, 1 time purchase, and even give a hyperlin to purchase it on the site. It will then save all this info
                        as a JSON object within the localstorage to prevent spamming the API key. I created the Javascript whilst the rest of my team developed the front end with Bulma
                    </p>
                    <div className="postion-absolute start-50">
                        <a href="https://joetroester.github.io/Movie_Watchlist/" target={"_blank"} rel="noreferrer">
                            <img style={{height:"40px"}} src="./graphics/hyperlinkicon.png" alt="hyperlink icon"/>
                        </a>
                        <a href="https://github.com/JoeTroester/Movie_Watchlist"  target={"_blank"} rel="noreferrer">
                            <img style={{height:"40px",width:"40px"}} src="./graphics/githublogo.png" alt="hyperlink icon"/>
                        </a>
                    </div>
                </div>   
            </div>

            <div className="card w-25 h-75 d-flex flex-column  my-2 mx-1">
                <img src="./graphics/workdayschedulersnapshot.PNG" className="card-img-top h-25 d-flex"alt="workday scheduler snapshot"/>
                <div className="card-body h-75 p-3">
                    <p>
                        This is a very simple app that will log saved messages into localstorage and then color-code the blocks according to the time of day. No backend programming used.
                    </p>
                    <div className="postion-absolute start-50">
                        <a href="https://alecruin.github.io/workday-scheduler/" target={"_blank"} rel="noreferrer">
                            <img style={{height:"40px"}} src="./graphics/hyperlinkicon.png" alt="hyperlink icon"/>
                        </a>
                        <a href="https://github.com/AlecRuin/workday-scheduler"  target={"_blank"} rel="noreferrer">
                            <img style={{height:"40px",width:"40px"}} src="./graphics/githublogo.png" alt="hyperlink icon"/>
                        </a>
                    </div>
                </div>   
            </div>

            <div className="card w-25 h-75 d-flex flex-column  my-2 mx-1">
                <img src="./graphics/programmingquizsnapshot.PNG" className="card-img-top h-25 d-flex"alt="programming quiz snapshot"/>
                <div className="card-body h-75 p-3">
                    <p>
                        The programming quiz is a simple site using HTML, Javascript, and CSS. It was made back when I had 0 understanding on how Javascript works. 
                        It was made with pure malice. 
                    </p>
                    <div className="postion-absolute start-50">
                        <a href="https://alecruin.github.io/ProgrammerQuizChallenge/" target={"_blank"} rel="noreferrer">
                            <img style={{height:"40px"}} src="./graphics/hyperlinkicon.png" alt="hyperlink icon"/>
                        </a>
                        <a href="https://github.com/AlecRuin/ProgrammerQuizChallenge"  target={"_blank"} rel="noreferrer">
                            <img style={{height:"40px",width:"40px"}} src="./graphics/githublogo.png" alt="hyperlink icon"/>
                        </a>
                    </div>
                </div>   
            </div>
            <div className="card w-25 h-75 d-flex flex-column  my-2 mx-1">
                <img src="./graphics/notetakersnapshot.PNG" className="card-img-top h-25 d-flex"alt="note taker snapshot"/>
                <div className="card-body h-75 p-3">
                    <p>
                        Note Taker is a "half" stack app that uses Express. Once the user inserts a title and body for the note, it will save the info to a JSON file on the server end. 
                    </p>
                    <div className="postion-absolute start-50">
                        <a href="https://note-take-alec.herokuapp.com/notes" target={"_blank"} rel="noreferrer">
                            <img style={{height:"40px"}} src="./graphics/hyperlinkicon.png" alt="hyperlink icon"/>
                        </a>
                        <a href="https://github.com/AlecRuin/Note-Taker"  target={"_blank"} rel="noreferrer">
                            <img style={{height:"40px",width:"40px"}} src="./graphics/githublogo.png" alt="hyperlink icon"/>
                        </a>
                    </div>
                </div>   
            </div>
        </div>
    )
}