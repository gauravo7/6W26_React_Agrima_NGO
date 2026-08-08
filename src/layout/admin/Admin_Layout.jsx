import { Outlet, useNavigate } from "react-router-dom";
import Admin_Footer from "./Admin_Footer";
import Admin_Header from "./Admin_Header";
import { useEffect } from "react";
import AuthServices from "../../services/AuthServices";
import { toast } from "react-toastify";

export default function AdminLayout() {

    let UserType = AuthServices.getUserType()
    const nav=useNavigate()

    useEffect(() => {
        if (UserType != 1) {
            AuthServices.clear()
            toast.warning("Access denied")
            nav("/login")
        }
    }, [])
    return (
        <>
            <Admin_Header></Admin_Header>
            <Outlet></Outlet>
            <Admin_Footer></Admin_Footer>
        </>
    )
}

