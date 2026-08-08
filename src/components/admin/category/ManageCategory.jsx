import { useEffect, useState } from "react";
import CategoryServices from "../../../services/CategoryServices";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function AddCategory() {

    const [Data, setData] = useState([]);

    const nav = useNavigate();

    useEffect(() => {
        FatchData()
    }, [])

    const FatchData = async () => {
        let data = await CategoryServices.all()
        setData(data)

    }

    const deleteCategory = async (id) => {


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {

                let res = await CategoryServices.delete(id)

                if (res) {
                    toast.success("Category Deleted")
                    FatchData()

                } else {
                    toast.error("There is an error")
                }
            }
        });

        // console.log("Category deleted", id);


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
                        <div className="row">
                            <div className="col-md-12 pr-md-5">
                                <h4 className="mb-4">Category Details</h4>

                                <table class="table table-striped table-bordered ">

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
                                                    <td><button onClick={() => {
                                                        deleteCategory(el.id)
                                                    }} className="btn btn-danger mx-3"> <i class="bi bi-trash3-fill"></i></button>
                                                    
                                                     <button className="btn btn-warning" onClick={() =>{
                                                        nav(`/admin/category/updatecategory/${el.id}`)
                                                     }}>
                                                        <i class="bi bi-pencil-fill"></i>
                                                      </button>
                                                    </td>
                                                    <td>{el.Status ? "Active" : "Inactive"}


                                                     

                                                    </td>
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