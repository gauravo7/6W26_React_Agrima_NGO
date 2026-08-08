import { useEffect, useState } from "react";
import CategoryServices from "../../../services/CategoryServices";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateCategory() {

    const[name,setname] = useState("");
    const[desc,setDesc] =  useState("");

    const nav = useNavigate();

    const {id} = useParams();

    const HandleForm = async (e) => {
        e.preventDefault()

        let data = {
            CategoryName: name,
            Description: desc
        }

        let res = await CategoryServices.Update(data, id)

        if (res) {

            toast.success("category updated")
            nav("/admin/category/managecategory")
        }
        else {
            toast.error("try again")
        }
        
    }



    const fetchcategory = async() => {
    try {
        
        let data1  = await CategoryServices.Single(id);

        console.log(data1);
        
        setname(data1.CategoryName);
        setDesc(data1.Description)
    } catch (error) {
        console.log(error);
    }
    }


    useEffect(() =>{
        fetchcategory();
    },[])


    return (
        <>
            <div
                className="hero-wrap"
                style={{ backgroundImage: 'url("/images/bg_7.jpg")' }}
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
                                    <a href="index.html">Dashboard</a>
                                </span>{" "}
                                <span>Category</span>
                            </p>
                            <h1
                                className="mb-3 bread"
                                data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
                            >

                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <>
                <section className="ftco-section contact-section ftco-degree-bg">
                    <div className="container  d-flex justify-content-center" >
                        <div className="row " style={{ width: "500px" }}>
                            <div className="col-md-12 pr-md-5">
                                <h4 className="mb-4">Category Details</h4>
                                <form onSubmit={HandleForm} action="#">

                                    <div className="form-group">
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => {
                                                 setname(e.target.value)
                                            }}
                                            className="form-control"
                                            placeholder="category name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            value={desc}
                                            onChange={(e) => {
                                                 setDesc(e.target.value)
                                            }}
                                            className="form-control"
                                            placeholder="Category description"
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

        </>
    )
}