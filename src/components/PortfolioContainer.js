import React,{useState} from "react";
import NavBar from "./NavBar"
import AboutMe from "./pages/AboutMe"
import ContactMe from "./pages/ContactMe";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
export default function PortfolioContainer(){
    const [CurrentPage,setCurrentPage]=useState("AboutMe")
    
    const RenderCurrentPage=()=>{
        switch(CurrentPage){
            case "AboutMe":
                return <AboutMe/>
            case "Portfolio":
                return <Portfolio/>
            case "Resume":
                return <Resume/>
            case "ContactMe":
                return <ContactMe/>     
            default:
                return <AboutMe/>
        }
    }
    const ChangeCurrentPage=(page)=>{setCurrentPage(page)}
    return(
        <div>
            <NavBar CurrentPage={CurrentPage} ChangeCurrentPage={ChangeCurrentPage} />
            {RenderCurrentPage()}
        </div>
    );
}