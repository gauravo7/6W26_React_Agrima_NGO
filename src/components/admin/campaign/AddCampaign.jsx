import { useState } from "react";
import CampaignServices from "../../../services/CampaignServices";
import { toast } from "react-toastify";
import CloudinaryServices from "../../../services/CloudinaryServices";
import { log } from "firebase/firestore/pipelines";

export default function AddCampaign() {

    const [categoryId, setCategoryId]= useState()
    const [title, setTitle]= useState()
    const [discription, setDiscription] = useState()
    const [targetamount, setTargetAmount]= useState()
    const [collectedamount, setCollectedAmount]= useState()
    const [ImageUrl, setImageUrl] = useState()

    const HandleForm = async (e) => {
        e.preventDefault()

        let url= await CloudinaryServices.ImageUpload(ImageUrl)
        console.log(url)

        let data = {
            CategoryId: categoryId,
            Title: title,
            Description:discription,
            TargetAmount:targetamount,
            CollectedAmount: collectedamount,
            ImageUrl:url,

        }


        console.log(data)

        let res = await CampaignServices.Campaign(data)
        if (res) {
            toast.success("campaign added")
        }
        else {
            toast.error("try again")
        }
        // console.log(name);
        // console.log(description);
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
                                <span>Campaign</span>
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
                                <form onSubmit={HandleForm} action="#">

                                    <div className="form-group">
                                        <input
                                            type="text"
                                            value={categoryId}
                                            onChange={(e) => {
                                                setCategoryId(e.target.value)
                                            }}
                                            className="form-control"
                                            placeholder="Category Id"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            value={title}
                                            onChange={(e) => {
                                                setTitle(e.target.value)
                                            }}
                                            className="form-control"
                                            placeholder="Campaign title"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            value={discription}
                                            onChange={(e) => {
                                                setDiscription(e.target.value)
                                            }}
                                            className="form-control"
                                            placeholder="Campaign discription"
                                        />
                                    </div>
                                    
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            value={targetamount}
                                            onChange={(e) => {
                                                setTargetAmount(e.target.value)
                                            }}
                                            className="form-control"
                                            placeholder="target amount"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            value={collectedamount}
                                            onChange={(e) => {
                                                setCollectedAmount(e.target.value)
                                            }}
                                            className="form-control"
                                            placeholder="Collected Amount"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="file"
                                            onChange={(e) => {
                                                setImageUrl(e.target.files[0])
                                            }}
                                            className="form-control"
                                            placeholder="Campaign discription"
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