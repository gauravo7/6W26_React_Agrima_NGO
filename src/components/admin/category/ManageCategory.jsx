import { useEffect, useState } from "react";
import CategoryServices from "../../../services/CategoryServices";
import { toast } from "react-toastify";

export default function AddCategory() {

    const [Data, setData] = useState([]);


    useEffect(() => {
        FatchData()
    }, [])

    const FatchData = async () => {
        let data = await CategoryServices.all()
        setData(data)

    }

    const deleteCategory= async (id)=>{
        // console.log("Category deleted", id);

       let res= await CategoryServices.delete(id)

       if(res){
        toast.success("Category Deleted")
        FatchData()

       }else{
        toast.error("There is an error")
       }


        
    }

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
                                <span>Manage Category</span>
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

                                <table class="table">

                                    <thead>
                                        <tr>
                                            <th scope="col">SNo</th>
                                            <th scope="col">Category Name</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Delete</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            Data.map((el, i) => (
                                                <tr>
                                                    <th scope="row">{i + 1}</th>
                                                    <td>{el.CategoryName}</td>
                                                    <td>{el.Description}</td>
                                                    <td><button onClick={()=>{
                                                        deleteCategory(el.id)
                                                    }} className="btn btn-danger"> <i class="bi bi-trash3-fill"></i></button></td>
                                                    <td>{el.Status ? "Active" : "Inactive"}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>


                                </table>
                            </div>
                            <div className="col-md-6" id="map" />
                        </div>
                    </div>
                </section>
            </>

        </>
    )
}