import { useEffect, useState } from "react";
import CampaignServices from "../../../services/CampaignServices";
import { toast } from "react-toastify";

export default function ManageCampaign() {

    const [Data, setData] = useState([]);

    useEffect(() => {
        FatchData()
    }, [])

    const FatchData = async () => {
        let data = await CampaignServices.all()
        console.log(data);
        setData(data)

    }

    const deleteCampaign = async (id) => {
        // console.log("Campaign deleted", id);

        let res = await CampaignServices.delete(id)

        if (res) {
            toast.success("Category Deleted")
            FatchData()

        } else {
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
                                <span>Manage Campaign</span>
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
                                <h4 className="mb-4">Campaign Details</h4>

                                <table className="table">

                                    <thead>
                                        <tr>
                                            <th scope="col">SNo</th>
                                            <th scope="col">Category ID</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Target Amount</th>
                                            <th scope="col">CollectedAmount</th>
                                            <th scope="col">Image</th>
                                            <th scope="col">Delete</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            Data.map((el, i) => (
                                                <tr>
                                                    <th scope="row">{i + 1}</th>
                                                    <td>{el?.CategoryId}</td>
                                                    <td>{el?.Title}</td>
                                                    <td>{el?.Description}</td>
                                                    <td>{el?.TargetAmount}</td>
                                                    <td>{el?.CollectedAmount}</td>
                                                    <td> <img width={100} src={el.ImageUrl} alt="" /> </td>
                                                    <td><button onClick={() => {
                                                        deleteCampaign(el.id)
                                                    }} className="btn btn-danger"> <i className="bi bi-trash3-fill"></i></button></td>
                                                    <td>{el?.Status ? "Active" : "Inactive"}</td>

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