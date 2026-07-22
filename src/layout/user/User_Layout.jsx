import { Outlet } from "react-router-dom";
import User_Footer from "./User_Footer";
import User_Header from "./User_Header";


export default function User_Layout(){
    return(
        <>
        <User_Header></User_Header>
        <Outlet></Outlet>
        <User_Footer></User_Footer>
        </>
    )
}

