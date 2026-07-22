import "./contact.css";
export default function Contact() {
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

                    <h1 className="display-3 fw-bold">
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

        </>
    );
}