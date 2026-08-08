import { useEffect, useState } from "react";
import CampaignServices from "../../services/CampaignServices";

function Home() {
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        fetchCampaigns();
    }, [])

    const fetchCampaigns = async () => {
        try {
            const data = await CampaignServices.all();
            setCampaigns(data);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div
                className="hero-wrap"
                style={{ backgroundImage: 'url("images/bg_7.jpg")' }}
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
                            <h1
                                className="mb-4"
                                data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
                            >
                                Together We Can Build a Better Tomorrow
                            </h1>

                            <p
                                className="mb-5"
                                data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
                            >
                                Join us in supporting education, healthcare, environmental conservation,
                                hunger relief, and elderly care. Every donation creates hope and transforms lives.
                            </p>

                            <p data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">
                                <a
                                    href="/causes"
                                    className="btn btn-white btn-outline-white px-4 py-3"
                                >
                                    Explore Campaigns
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <section className="ftco-counter ftco-intro" id="section-counter">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-md-5 d-flex justify-content-center counter-wrap ftco-animate">
                            <div className="block-18 color-1 align-items-stretch">
                                <div className="text">
                                    <span>Supporting</span>

                                    <strong className="number">
                                        {campaigns.length}
                                    </strong>

                                    <span>Active Campaigns</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                            <div className="block-18 color-2 align-items-stretch">
                                <div className="text">
                                    <h3 className="mb-4">Donate Today</h3>

                                    <p>
                                        Your contribution helps provide education, food, healthcare, clean water,
                                        and support to those who need it most.
                                    </p>

                                    <p>
                                        <a href="/causes" className="btn btn-white px-3 py-2 mt-2">
                                            Donate Now
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                            <div className="block-18 color-3 align-items-stretch">
                                <div className="text">
                                    <h3 className="mb-4">Become a Volunteer</h3>

                                    <p>
                                        Join our dedicated team of volunteers and help create lasting positive
                                        change in communities through meaningful social initiatives.
                                    </p>

                                    <p>
                                        <a href="/contact" className="btn btn-white px-3 py-2 mt-2">
                                            Join Us
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                            <div className="media block-6 d-flex services p-3 py-4 d-block">
                                <div className="icon d-flex mb-3">
                                    <span className="flaticon-donation-1" />
                                </div>
                                <div className="media-body pl-4">
                                    <h3 className="heading">Support a Cause</h3>
                                    <p>
                                        Every donation helps provide education, healthcare, food, clean water,
                                        and essential resources to people in need. Together, we can create a
                                        lasting impact.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                            <div className="media block-6 d-flex services p-3 py-4 d-block">
                                <div className="icon d-flex mb-3">
                                    <span className="flaticon-charity" />
                                </div>
                                <div className="media-body pl-4">
                                    <h3 className="heading">Become a Volunteer</h3>
                                    <p>
                                        Join our passionate volunteers in organizing campaigns, supporting
                                        communities, and making a real difference through your time and skills.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                            <div className="media block-6 d-flex services p-3 py-4 d-block">
                                <div className="icon d-flex mb-3">
                                    <span className="flaticon-donation" />
                                </div>
                                <div className="media-body pl-4">
                                    <h3 className="heading">Our Mission</h3>
                                    <p>
                                        We strive to empower communities by supporting education, environmental
                                        conservation, healthcare, elderly care, and hunger relief through
                                        transparent and impactful initiatives.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section bg-light">
                <div className="container-fluid">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-5 heading-section ftco-animate text-center">
                            <h2 className="mb-4">Our Impact</h2>

                            <p>
                                We are committed to creating positive change through education,
                                environmental conservation, healthcare, hunger relief, elderly care,
                                and animal welfare. Every initiative brings hope to those who need it
                                the most.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 ftco-animate">
                            <div className="row">
                                <div className="col-md-4 mb-4">
                                    <div className="cause-entry">
                                        <a
                                            href="#"
                                            className="img"
                                            style={{ backgroundImage: "url(images/education.jpg)" }}
                                        />
                                        <div className="text p-3 p-md-4">
                                            <h3>Education for Every Child</h3>
                                            <p>
                                                Providing books, school supplies, scholarships, and quality education
                                                to children from underprivileged communities.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="cause-entry">
                                        <a
                                            href="#"
                                            className="img"
                                            style={{ backgroundImage: "url(images/environment.jpg)" }}
                                        />
                                        <div className="text p-3 p-md-4">
                                            <h3>Protect Our Environment</h3>
                                            <p>
                                                Supporting tree plantation drives, waste reduction, and awareness
                                                programs to build a cleaner and greener future.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="cause-entry">
                                        <a
                                            href="#"
                                            className="img"
                                            style={{ backgroundImage: "url(images/water.jpg)" }}
                                        />
                                        <div className="text p-3 p-md-4">
                                            <h3>Clean Water for All</h3>
                                            <p>
                                                Helping communities gain access to safe drinking water through
                                                sustainable water conservation and purification projects.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="cause-entry">
                                        <a
                                            href="#"
                                            className="img"
                                            style={{ backgroundImage: "url(images/food.jpg)" }}
                                        />
                                        <div className="text p-3 p-md-4">
                                            <h3>Hunger Relief</h3>
                                            <p>
                                                Providing nutritious meals and food kits to families facing hunger
                                                through community kitchens and food distribution drives.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="cause-entry">
                                        <a
                                            href="#"
                                            className="img"
                                            style={{ backgroundImage: "url(images/elderly.jpg)" }}
                                        />
                                        <div className="text p-3 p-md-4">
                                            <h3>Care for Senior Citizens</h3>
                                            <p>
                                                Supporting elderly people with healthcare, nutritious meals, shelter,
                                                and emotional care to improve their quality of life.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="cause-entry">
                                        <a
                                            href="#"
                                            className="img"
                                            style={{ backgroundImage: "url(images/animal.jpeg)" }}
                                        />
                                        <div className="text p-3 p-md-4">
                                            <h3>Animal Welfare</h3>
                                            <p>
                                                Rescuing, treating, and providing shelter for abandoned and injured
                                                animals while promoting compassion and responsible care.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section ftco-animate text-center">
                            <h2 className="mb-4">Success Stories</h2>

                            <p>
                                Every campaign we complete creates a lasting impact on individuals,
                                families, and communities. Here are some of the positive changes made
                                possible through the support of our volunteers and donors.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 d-flex mb-sm-4 ftco-animate">
                            <div className="staff">
                                <div className="d-flex mb-4">
                                    <div
                                        className="img"
                                        style={{ backgroundImage: "url(images/education1.jpg)" }}
                                    />
                                    <div className="info ml-4">
                                        <h3>
                                            Education for Every Child
                                        </h3>
                                        <div className="text">
                                            <p>
                                                With the support of generous donors, hundreds of children received school supplies, books, uniforms, and scholarships, giving them a chance to continue their education with confidence.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 d-flex mb-sm-4 ftco-animate">
                            <div className="staff">
                                <div className="d-flex mb-4">
                                    <div
                                        className="img"
                                        style={{ backgroundImage: "url(images/greener.jpg)" }}
                                    />
                                    <div className="info ml-4">
                                        <h3>
                                            Greener Tomorrow
                                        </h3>
                                        <div className="text">
                                            <p>
                                                Our environmental campaign helped plant thousands of trees and inspired local communities to participate in keeping their surroundings clean and green.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 d-flex mb-sm-4 ftco-animate">
                            <div className="staff">
                                <div className="d-flex mb-4">
                                    <div
                                        className="img"
                                        style={{ backgroundImage: "url(images/food1.png)" }}
                                    />
                                    <div className="info ml-4">
                                        <h3>
                                            Meals for Families
                                        </h3>
                                        <div className="text">
                                            <p>
                                                Food distribution drives provided nutritious meals to families facing hardship, ensuring that no one in the community had to sleep hungry.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="ftco-gallery">
                <div className="d-md-flex">
                    <a
                        href="images/cause-2.jpg"
                        className="gallery image-popup d-flex justify-content-center align-items-center img ftco-animate"
                        style={{ backgroundImage: "url(images/cause-2.jpg)" }}
                    >
                        <div className="icon d-flex justify-content-center align-items-center">
                            <span className="icon-search" />
                        </div>
                    </a>
                    <a
                        href="images/cause-3.jpg"
                        className="gallery image-popup d-flex justify-content-center align-items-center img ftco-animate"
                        style={{ backgroundImage: "url(images/cause-3.jpg)" }}
                    >
                        <div className="icon d-flex justify-content-center align-items-center">
                            <span className="icon-search" />
                        </div>
                    </a>
                    <a
                        href="images/cause-4.jpg"
                        className="gallery image-popup d-flex justify-content-center align-items-center img ftco-animate"
                        style={{ backgroundImage: "url(images/cause-4.jpg)" }}
                    >
                        <div className="icon d-flex justify-content-center align-items-center">
                            <span className="icon-search" />
                        </div>
                    </a>
                    <a
                        href="images/cause-5.jpg"
                        className="gallery image-popup d-flex justify-content-center align-items-center img ftco-animate"
                        style={{ backgroundImage: "url(images/cause-5.jpg)" }}
                    >
                        <div className="icon d-flex justify-content-center align-items-center">
                            <span className="icon-search" />
                        </div>
                    </a>
                </div>
                <div className="d-md-flex">
                    <a
                        href="images/cause-6.jpg"
                        className="gallery image-popup d-flex justify-content-center align-items-center img ftco-animate"
                        style={{ backgroundImage: "url(images/cause-6.jpg)" }}
                    >
                        <div className="icon d-flex justify-content-center align-items-center">
                            <span className="icon-search" />
                        </div>
                    </a>
                    <a
                        href="images/image_3.jpg"
                        className="gallery image-popup d-flex justify-content-center align-items-center img ftco-animate"
                        style={{ backgroundImage: "url(images/image_3.jpg)" }}
                    >
                        <div className="icon d-flex justify-content-center align-items-center">
                            <span className="icon-search" />
                        </div>
                    </a>
                    <a
                        href="images/image_1.jpg"
                        className="gallery image-popup d-flex justify-content-center align-items-center img ftco-animate"
                        style={{ backgroundImage: "url(images/image_1.jpg)" }}
                    >
                        <div className="icon d-flex justify-content-center align-items-center">
                            <span className="icon-search" />
                        </div>
                    </a>
                    <a
                        href="images/image_2.jpg"
                        className="gallery image-popup d-flex justify-content-center align-items-center img ftco-animate"
                        style={{ backgroundImage: "url(images/image_2.jpg)" }}
                    >
                        <div className="icon d-flex justify-content-center align-items-center">
                            <span className="icon-search" />
                        </div>
                    </a>
                </div>
            </section> */}
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section ftco-animate text-center">
                            <h2 className="mb-4">Upcoming Events</h2>
                            <p>
                                Join us in our upcoming community initiatives and be a part of creating
                                positive change. Every event is an opportunity to make a difference.
                            </p>
                        </div>
                    </div>
                    <div className="row d-flex">
                        <div className="col-md-4 d-flex ftco-animate">
                            <div className="blog-entry align-self-stretch">
                                <a
                                    href="blog-single.html"
                                    className="block-20"
                                    style={{ backgroundImage: 'url("images/tree-plantation.jpg")' }}
                                ></a>
                                <div className="text p-4 d-block">
                                    <div className="meta mb-3">
                                        <div>
                                            <a href="#">15 August 2026</a>
                                        </div>
                                        <div>
                                            <a href="#">Green Earth Team</a>
                                        </div>
                                        <div>
                                            <a href="#" className="meta-chat">
                                                <span className="icon-chat" /> 3
                                            </a>
                                        </div>
                                    </div>
                                    <h3 className="heading mt-3">
                                        <a href="#">Tree Plantation Drive</a>
                                    </h3>
                                    <p>
                                        Join us in planting over 500 trees to promote a greener environment and create a healthier future for our community.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex ftco-animate">
                            <div className="blog-entry align-self-stretch">
                                <a
                                    href="blog-single.html"
                                    className="block-20"
                                    style={{ backgroundImage: 'url("images/education-drive.webp")' }}
                                ></a>
                                <div className="text p-4 d-block">
                                    <div className="meta mb-3">
                                        <div>
                                            <a href="#">28 August 2026</a>
                                        </div>
                                        <div>
                                            <a href="#">Education Team</a>
                                        </div>
                                        <div>
                                            <a href="#" className="meta-chat">
                                                <span className="icon-chat" /> 3
                                            </a>
                                        </div>
                                    </div>
                                    <h3 className="heading mt-3">
                                        <a href="#">Back to school campaign</a>
                                    </h3>
                                    <p>
                                        Help distribute books, school bags, and learning materials to children from underprivileged families.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex ftco-animate">
                            <div className="blog-entry align-self-stretch">
                                <a
                                    href="blog-single.html"
                                    className="block-20"
                                    style={{ backgroundImage: 'url("images/health-camp.jpg")' }}
                                ></a>
                                <div className="text p-4 d-block">
                                    <div className="meta mb-3">
                                        <div>
                                            <a href="#">10 September 2026</a>
                                        </div>
                                        <div>
                                            <a href="#">Medical Volunteers</a>
                                        </div>
                                        <div>
                                            <a href="#" className="meta-chat">
                                                <span className="icon-chat" /> 3
                                            </a>
                                        </div>
                                    </div>
                                    <h3 className="heading mt-3">
                                        <a href="#">Free Health Check-up Camp</a>
                                    </h3>
                                    <p>
                                        A free medical camp offering health check-ups, consultations, and essential medicines for senior citizens and low-income families.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
                    
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section ftco-animate text-center">
                            <h2 className="mb-4">Causes</h2>
                            <p>
                                Join us in our upcoming community initiatives and be a part of creating
                                positive change. Every event is an opportunity to make a difference.
                            </p>
                        </div>
                    </div>
                    <div className="row">

                        {
                            campaigns.slice(0,6).map((item) => {
                                const progress =
                                    Number(item.TargetAmount) > 0
                                        ? Math.min(
                                            (Number(item.CollectedAmount) / Number(item.TargetAmount)) * 100,
                                            100
                                        )
                                        : 0;


                                console.log(progress);

                                console.log("Target:", item.TargetAmount);
                                console.log("Collected:", item.CollectedAmount);
                                console.log(typeof item.TargetAmount);
                                console.log(typeof item.CollectedAmount);

                                return (
                                    <div className="col-md-4 ftco-animate" key={item.id}>
                                        <div className="cause-entry">
                                            <a
                                                href="#"
                                                className="img"
                                                style={{
                                                    backgroundImage: `url(${item.ImageUrl})`,
                                                }}
                                            />

                                            <div className="text p-3 p-md-4">
                                                <h3>
                                                    <a href="#">{item.Title}</a>
                                                </h3>

                                                <p>{item.Description}</p>

                                                <div className="progress custom-progress-success">
                                                    <div
                                                        className="progress-bar bg-primary"
                                                        role="progressbar"
                                                        style={{ width: `${progress}%` }}
                                                        aria-valuenow={progress}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    >
                                                        {/* {progress.toFixed(0)} */}
                                                    </div>
                                                </div>

                                                <span className="fund-raised d-block">
                                                    ₹{item.CollectedAmount} raised of ₹ {item.TargetAmount}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }

                    </div>
                </div>
            </section>
            <section
                className="ftco-section-3 img"
                style={{ backgroundImage: "url(images/bg_3.jpg)" }}
            >
                <div className="overlay" />
                <div className="container">
                    <div className="row d-md-flex">
                        <div className="col-md-6 d-flex ftco-animate">
                            <div
                                className="img img-2 align-self-stretch"
                                style={{ backgroundImage: "url(images/bg_4.jpg)" }}
                            />
                        </div>
                        <div className="col-md-6 volunteer pl-md-5 ftco-animate">
                            <h3 className="mb-3">Be a volunteer</h3>
                            <form action="#" className="volunter-form">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Your Email"
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        name=""
                                        id=""
                                        cols={30}
                                        rows={3}
                                        className="form-control"
                                        placeholder="Message"
                                        defaultValue={""}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="submit"
                                        defaultValue="Send Message"
                                        className="btn btn-white py-3 px-5"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Home