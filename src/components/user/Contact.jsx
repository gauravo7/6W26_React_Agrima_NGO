import { useState } from "react";
import "./contact.css";
import { toast } from "react-toastify";


export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [supportType, setSupportType] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            name === "" ||
            email === "" ||
            phone === "" ||
            supportType === "" ||
            message === ""
        ) {
            toast.error("Please fill all fields.");
            return;
        }

        switch (supportType) {
            case "Become a Volunteer":
                toast.success("Thanks for volunteering! We'll contact you soon.");
                break;

            case "Donate":
                toast.success("Thank you for your willingness to donate!");
                break;

            case "Request Help":
                toast.success("We've received your request for assistance.");
                break;

            default:
                toast.success("Your message has been sent successfully.");
        }

        // toast.success("Thank you! Your message has been sent.");

        // Clear Form
        setName("");
        setEmail("");
        setPhone("");
        setSupportType("");
        setMessage("");
    };


    return (
        <>
            {/* Hero Section */}

            <section
                className="contact-hero d-flex align-items-center justify-content-center text-center text-white"
                style={{
                    background:
                        "linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)), url('images/bg_2.jpg') center/cover",
                    height: "70vh",
                }}
            >
                <div>

                    <h1 className="display-3 fw-bold text-light">
                        Contact Us
                    </h1>

                    <p className="lead">
                        Together we can make a difference in someone's life.
                    </p>

                </div>
            </section>

            {/* Contact Cards */}

            <section className="container py-5">

                <div className="text-center mb-5">

                    <h2 className="fw-bold">
                        Get In Touch
                    </h2>

                    <p className="text-muted">
                        We are always happy to hear from you.
                    </p>

                </div>

                <div className="row g-4">

                    {/* Address */}

                    <div className="col-lg-3 col-md-6">

                        <div className="card contact-card shadow text-center p-4 h-100">

                            <i className="bi bi-geo-alt-fill fs-1 text-danger"></i>

                            <h5 className="mt-3">
                                Address
                            </h5>

                            <p className="text-muted">
                                Sector-15,
                                <br />
                                Panipat, Haryana
                            </p>

                        </div>

                    </div>

                    {/* Phone */}

                    <div className="col-lg-3 col-md-6">

                        <div className="card contact-card shadow text-center p-4 h-100">

                            <i className="bi bi-telephone-fill fs-1 text-success"></i>

                            <h5 className="mt-3">
                                Phone
                            </h5>

                            <p className="text-muted">
                                +91 98765 43210
                            </p>

                        </div>

                    </div>

                    {/* Email */}

                    <div className="col-lg-3 col-md-6">

                        <div className="card contact-card shadow text-center p-4 h-100">

                            <i className="bi bi-envelope-fill fs-1 text-primary"></i>

                            <h5 className="mt-3">
                                Email
                            </h5>

                            <p className="text-muted">
                                help@ngo.org
                            </p>

                        </div>

                    </div>

                    {/* Hours */}

                    <div className="col-lg-3 col-md-6">

                        <div className="card contact-card shadow text-center p-4 h-100">

                            <i className="bi bi-clock-fill fs-1 text-warning"></i>

                            <h5 className="mt-3">
                                Working Hours
                            </h5>

                            <p className="text-muted">
                                Mon - Sat
                                <br />
                                9 AM - 6 PM
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* Statistics */}

            <section className="bg-light py-5">

                <div className="container">

                    <div className="row text-center">

                        <div className="col-md-3 col-6 mb-4">

                            <h1 className="text-success fw-bold">
                                500+
                            </h1>

                            <p>Volunteers</p>

                        </div>

                        <div className="col-md-3 col-6 mb-4">

                            <h1 className="text-primary fw-bold">
                                1200+
                            </h1>

                            <p>Families Helped</p>

                        </div>

                        <div className="col-md-3 col-6 mb-4">

                            <h1 className="text-danger fw-bold">
                                75+
                            </h1>

                            <p>Projects</p>

                        </div>

                        <div className="col-md-3 col-6 mb-4">

                            <h1 className="text-warning fw-bold">
                                ₹15L+
                            </h1>

                            <p>Donations</p>

                        </div>

                    </div>

                </div>

            </section>

            {/* Contact Form */}

            <section className="container py-5">

                <div className="row justify-content-center">

                    <div className="col-lg-8">

                        <div className="card shadow border-0 p-4">

                            <h2 className="text-center mb-4">
                                Send Us a Message
                            </h2>

                            <form onSubmit={handleSubmit}>

                                {/* Name */}

                                <div className="mb-3">

                                    <label className="form-label">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />

                                </div>

                                {/* Email */}

                                <div className="mb-3">

                                    <label className="form-label">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />

                                </div>

                                {/* Phone */}

                                <div className="mb-3">

                                    <label className="form-label">
                                        Phone Number
                                    </label>

                                    <input
                                        type="tel"
                                        className="form-control"
                                        placeholder="Enter your phone number"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />

                                </div>

                                {/* Support Type */}

                                <div className="mb-3">

                                    <label className="form-label">
                                        I Want To
                                    </label>

                                    <select
                                        className="form-select"
                                        value={supportType}
                                        onChange={(e) => setSupportType(e.target.value)}
                                    >

                                        <option value="">
                                            Select an Option
                                        </option>

                                        <option>
                                            Become a Volunteer
                                        </option>

                                        <option>
                                            Donate
                                        </option>

                                        <option>
                                            Request Help
                                        </option>

                                        <option>
                                            Partner With NGO
                                        </option>

                                        <option>
                                            General Inquiry
                                        </option>

                                    </select>

                                </div>

                                {/* Message */}

                                <div className="mb-3">

                                    <label className="form-label">
                                        Message
                                    </label>

                                    <textarea
                                        rows="5"
                                        className="form-control"
                                        placeholder="Write your message..."
                                        maxLength="500"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    ></textarea>

                                    <small className="text-muted">
                                        {message.length}/500 Characters
                                    </small>

                                </div>

                                {/* Button */}

                                <div className="text-center">

                                    <button
                                        className="btn btn-success px-5 py-2"
                                        type="submit"
                                    >
                                        Send Message
                                    </button>

                                </div>

                            </form>

                        </div>

                    </div>

                </div>

            </section>

            {/* Volunteer CTA */}

            <section className="py-5 bg-success text-white">

                <div className="container">

                    <div className="row align-items-center">

                        <div className="col-lg-8">

                            <h2 className="fw-bold">
                                Become a Volunteer
                            </h2>

                            <p className="mb-0">
                                Every helping hand brings hope. Join our NGO family and
                                help us create a better tomorrow.
                            </p>

                        </div>

                        <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">

                            <button className="btn btn-light btn-lg me-3">
                                Join Now
                            </button>

                            <button className="btn btn-outline-light btn-lg">
                                Donate
                            </button>

                        </div>

                    </div>

                </div>

            </section>

            {/* Why Connect With Us */}

            <section className="py-5 bg-light">

                <div className="container">

                    <div className="text-center mb-5">

                        <h2 className="fw-bold">
                            Why Connect With Us?
                        </h2>

                        <p className="text-muted">
                            Every conversation has the power to create change.
                        </p>

                    </div>

                    <div className="row g-4">

                        <div className="col-lg-3 col-md-6">

                            <div className="feature-card text-center p-4">

                                <i className="bi bi-people-fill display-4 text-success"></i>

                                <h4 className="mt-3">
                                    Volunteer
                                </h4>

                                <p className="text-muted">
                                    Join passionate people who are making a difference every day.
                                </p>

                            </div>

                        </div>

                        <div className="col-lg-3 col-md-6">

                            <div className="feature-card text-center p-4">

                                <i className="bi bi-heart-fill display-4 text-danger"></i>

                                <h4 className="mt-3">
                                    Donate
                                </h4>

                                <p className="text-muted">
                                    Your contribution helps us reach more people in need.
                                </p>

                            </div>

                        </div>

                        <div className="col-lg-3 col-md-6">

                            <div className="feature-card text-center p-4">

                                <i className="bi bi-hand-thumbs-up-fill display-4 text-primary"></i>

                                <h4 className="mt-3">
                                    Partnership
                                </h4>

                                <p className="text-muted">
                                    Collaborate with us to create long-term social impact.
                                </p>

                            </div>

                        </div>

                        <div className="col-lg-3 col-md-6">

                            <div className="feature-card text-center p-4">

                                <i className="bi bi-chat-dots-fill display-4 text-warning"></i>

                                <h4 className="mt-3">
                                    Support
                                </h4>

                                <p className="text-muted">
                                    We're always here to answer your questions and guide you.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* Volunteer Stories */}

            {/* <section className="py-5">

                <div className="container">

                    <div className="text-center mb-5">

                        <h2 className="fw-bold">
                            Volunteer Stories
                        </h2>

                        <p className="text-muted">
                            Hear what our volunteers have to say.
                        </p>

                    </div>

                    <div className="row g-4">

                        <div className="col-lg-4">

                            <div className="testimonial-card">

                                <i className="bi bi-quote display-4 text-success"></i>

                                <p>
                                    Joining this NGO gave me the opportunity to make a real
                                    difference while meeting amazing people.
                                </p>

                                <h5 className="mt-4">
                                    Rahul Sharma
                                </h5>

                                <small className="text-muted">
                                    Volunteer
                                </small>

                            </div>

                        </div>

                        <div className="col-lg-4">

                            <div className="testimonial-card">

                                <i className="bi bi-quote display-4 text-success"></i>

                                <p>
                                    Every event reminds me that even small acts of kindness
                                    can change someone's life.
                                </p>

                                <h5 className="mt-4">
                                    Priya Kapoor
                                </h5>

                                <small className="text-muted">
                                    Volunteer
                                </small>

                            </div>

                        </div>

                        <div className="col-lg-4">

                            <div className="testimonial-card">

                                <i className="bi bi-quote display-4 text-success"></i>

                                <p>
                                    Working here has been one of the most meaningful
                                    experiences of my life.
                                </p>

                                <h5 className="mt-4">
                                    Aman Verma
                                </h5>

                                <small className="text-muted">
                                    Volunteer
                                </small>

                            </div>

                        </div>

                    </div>

                </div>

            </section> */}

            {/* Our Impact */}

            <section className="py-5">

                <div className="container">

                    <div className="text-center mb-5">

                        <h2 className="fw-bold">
                            Our Impact
                        </h2>

                        <p className="text-muted">
                            Together, we've created thousands of smiles and transformed lives.
                        </p>

                    </div>

                    <div className="row g-4">

                        {/* Children */}

                        <div className="col-lg-3 col-md-6">

                            <div className="impact-card">

                                <div className="impact-icon">

                                    <i className="bi bi-mortarboard-fill"></i>

                                </div>

                                <h2 className="fw-bold text-success">
                                    500+
                                </h2>

                                <h5>
                                    Children Educated
                                </h5>

                                <p className="text-muted">
                                    Providing education and learning opportunities.
                                </p>

                            </div>

                        </div>

                        {/* Meals */}

                        <div className="col-lg-3 col-md-6">

                            <div className="impact-card">

                                <div className="impact-icon">

                                    <i className="bi bi-cup-hot-fill"></i>

                                </div>

                                <h2 className="fw-bold text-danger">
                                    15K+
                                </h2>

                                <h5>
                                    Meals Served
                                </h5>

                                <p className="text-muted">
                                    Nutritious meals distributed to families in need.
                                </p>

                            </div>

                        </div>

                        {/* Trees */}

                        <div className="col-lg-3 col-md-6">

                            <div className="impact-card">

                                <div className="impact-icon">

                                    <i className="bi bi-tree-fill"></i>

                                </div>

                                <h2 className="fw-bold text-success">
                                    2,000+
                                </h2>

                                <h5>
                                    Trees Planted
                                </h5>

                                <p className="text-muted">
                                    Promoting a greener and healthier environment.
                                </p>

                            </div>

                        </div>

                        {/* Families */}

                        <div className="col-lg-3 col-md-6">

                            <div className="impact-card">

                                <div className="impact-icon">

                                    <i className="bi bi-house-heart-fill"></i>

                                </div>

                                <h2 className="fw-bold text-primary">
                                    1,200+
                                </h2>

                                <h5>
                                    Families Supported
                                </h5>

                                <p className="text-muted">
                                    Helping families through healthcare and social initiatives.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* Stay Connected */}

            <section className="py-5 bg-light">

                <div className="container">

                    <div className="text-center mb-5">

                        <h2 className="fw-bold">
                            Stay Connected
                        </h2>

                        <p className="text-muted">
                            Follow our journey and see how your support changes lives.
                        </p>

                    </div>

                    <div className="row g-4">

                        <div className="col-lg-3 col-md-6">

                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noreferrer"
                                className="social-card"
                            >

                                <i className="bi bi-facebook display-4"></i>

                                <h4 className="mt-3">
                                    Facebook
                                </h4>

                                <p>
                                    Latest updates and events.
                                </p>

                            </a>

                        </div>

                        <div className="col-lg-3 col-md-6">

                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noreferrer"
                                className="social-card"
                            >

                                <i className="bi bi-instagram display-4"></i>

                                <h4 className="mt-3">
                                    Instagram
                                </h4>

                                <p>
                                    Photos and inspiring stories.
                                </p>

                            </a>

                        </div>

                        <div className="col-lg-3 col-md-6">

                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                                className="social-card"
                            >

                                <i className="bi bi-linkedin display-4"></i>

                                <h4 className="mt-3">
                                    LinkedIn
                                </h4>

                                <p>
                                    Professional partnerships.
                                </p>

                            </a>

                        </div>

                        <div className="col-lg-3 col-md-6">

                            <a
                                href="https://wa.me/919876543210"
                                target="_blank"
                                rel="noreferrer"
                                className="social-card"
                            >

                                <i className="bi bi-whatsapp display-4"></i>

                                <h4 className="mt-3">
                                    WhatsApp
                                </h4>

                                <p>
                                    Chat directly with our team.
                                </p>

                            </a>

                        </div>

                    </div>

                </div>

            </section>

            {/* Google Map */}

            {/* <section className="container-fluid p-0">

                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.48198716095!2d76.763558!3d28.527280"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>

            </section> */}

            <section className="py-4 text-center bg-secondary text-white">

                <h4 className="mb-2"> ❤️ Small Actions. Big Impact.</h4>

                <p className="mb-0"> Together, we can build stronger communities and brighter futures. </p>

            </section>



        </>
    );
}