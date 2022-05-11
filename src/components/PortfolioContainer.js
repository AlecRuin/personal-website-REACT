import React,{useState} from "react";
import NavBar from "./NavBar"
import Home from "./pages/Home"
export default function PortfolioContainer(){
    const [CurrentPage,setCurrentPage]=useState("Home")
    const ChangeCurrentPage=(page)=>{setCurrentPage(page)}
    const RenderCurrentPage=()=>{
        switch(CurrentPage){
           case "Home":
                return <Home/>
            default:
                return <Home/>
        }
    }
    return(
        <div>
            <NavBar CurrentPage={CurrentPage} ChangeCurrentPage={ChangeCurrentPage} />
            {RenderCurrentPage()}
        </div>
    );
}