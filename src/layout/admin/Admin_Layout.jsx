import { Outlet } from "react-router-dom";
import Admin_Footer from "./Admin_Footer";
import Admin_Header from "./Admin_Header";

export default function AdminLayout(){
    return(
        <>
        <Admin_Header></Admin_Header>
        <Outlet></Outlet>
        <Admin_Footer></Admin_Footer>
        </>
    )
}

