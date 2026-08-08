import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FadeLoader } from "react-spinners"
import { toast } from "react-toastify"
import UserServices from "../../services/UserServices";

export default function Register() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState("");

    const [load, setLoad] = useState(false);
    const nav = useNavigate();

    const HandleForm =async (e) => {
        e.preventDefault()
       

        // if (password !== confirmPassword) {
        //     toast.error("Passwords do not match");
        //     return;
        // }
        setLoad(true)

        let data={
            name,
            email,
            password
        }

         let res=await   UserServices.Register(data)
         if(res==1){
            toast.success("register successfully")
            nav("/")
         }else{
            toast.error("Try again")
         }

       setLoad(false)
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
                                <span>Registration</span>
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
                        height: "100vh"
                    }} className=" d-flex justify-content-center align-items-center">
                        <FadeLoader />
                    </div>
                    :
                    <>
                        <section className="ftco-section contact-section ftco-degree-bg">
                            <div className="container  d-flex justify-content-center" >
                                <div className="row " style={{ width: "500px" }}>
                                    <div className="col-md-12 pr-md-5">
                                        <h4 className="mb-4">Your Login Details</h4>
                                        <form onSubmit={HandleForm} action="#">

                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    value={name}
                                                    onChange={(e) => {
                                                        setName(e.target.value)
                                                    }}
                                                    className="form-control"
                                                    placeholder="Your name"
                                                />
                                            </div>

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
                                                    type="password"
                                                    value={password}
                                                    onChange={(e) => {
                                                        setPassword(e.target.value)
                                                    }}
                                                    className="form-control"
                                                    placeholder="confirm password"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="submit"
                                                    defaultValue="Send Message"
                                                    className="btn btn-primary py-3 px-5"
                                                />
                                            </div>

                                            <p className="text-center mt-3"> Already have an account?
                                            <Link to="/login" className="font-weight-bold"> Login </Link>
                                            </p>


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