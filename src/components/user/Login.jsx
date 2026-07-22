import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import { toast } from "react-toastify";
import UserServices from "../../services/UserServices";

export default function Login() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const [load, setLoad] = useState(false)

    const nav= useNavigate()

    const HandleForm = async (e) => {
        e.preventDefault()
        setLoad(true)
        console.log(email);
        console.log(password);

        let res= await UserServices.login(email, password)

console.log(res);


        if(res===1){
            toast.success("Admin logined")
            nav("/admin")
            setLoad(false)
        }else if(res===2){
            toast.success("user logined")
            nav("/login")
            setLoad(false)
        }else{
            toast.error("Login Fail")
        }

        // if (email == "admin@gmail.com" && password == "1234") {

        //     setTimeout(() => {
        //         setLoad(false)
        //         toast.success("Login Successfully")
        //         nav("/admin")

        //     }, 3000);

        // } else {
        //     setLoad(false)
        //     toast.error("Login Fail")
        // }
    }


    return (
        <>
            <div
                className="hero-wrap"
                style={{ backgroundImage: 'url("images/bg_2.jpg")' }}
                data-stellar-background-ratio="0.5"
            >
                <div className="overlay" />
                <div className="container">
                    <div
                        className="row no-gutters slider-text align-items-center justify-content-center"
                        data-scrollax-parent="true"
                    >
                        <div
                            className="col-md-7 ftco-animate text-center"
                            data-scrollax=" properties: { translateY: '70%' }"
                        >
                            <p
                                className="breadcrumbs"
                                data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
                            >
                                <span className="mr-2">
                                    <Link to="/">Home</Link>
                                </span>{" "}
                                <span>Login</span>
                            </p>
                            <h1
                                className="mb-3 bread"
                                data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
                            >
                                Login Page
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            {
                load ?
                    <div style={{
                        height:"100vh"
                    }} className=" d-flex justify-content-center align-items-center">
                        <FadeLoader />
                    </div>
                    :
                    <>
                        <section className="ftco-section contact-section ftco-degree-bg">
                            <div className="container  d-flex justify-content-center" >
                                <div className="row " style={{width:"500px"}}>
                                    <div className="col-md-12 pr-md-5">
                                        <h4 className="mb-4">Your Login Details</h4>
                                        <form onSubmit={HandleForm} action="#">

                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    value={email}
                                                    onChange={(e) => {
                                                        setEmail(e.target.value)
                                                    }}
                                                    className="form-control"
                                                    placeholder="Your Email"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="password"
                                                    value={password}
                                                    onChange={(e) => {
                                                        setPassword(e.target.value)
                                                    }}
                                                    className="form-control"
                                                    placeholder="Your Password"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="submit"
                                                    defaultValue="Send Message"
                                                    className="btn btn-primary py-3 px-5"
                                                />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-6" id="map" />
                                </div>
                            </div>
                        </section>
                    </>
            }

        </>
    )
}