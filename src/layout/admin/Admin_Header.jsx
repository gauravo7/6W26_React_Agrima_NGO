import { Link } from "react-router-dom";

export default function Admin_Header() {
    return (

        <>
            <nav
                className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
                id="ftco-navbar"
            >
                <div className="container">
                    <Link className="navbar-brand" to="index.html">
                        Welfare
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#ftco-nav"
                        aria-controls="ftco-nav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="oi oi-menu" /> Menu
                    </button>
                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link to="/admin" className="nav-link"> Dashboard </Link>
                            </li>

                            <li className="nav-item active">
                                <Link to="/admin/category/addcategory" className="nav-link"> Add Category </Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/admin/category/managecategory" className="nav-link"> Manage Category </Link>
                            </li>

                            

                            <li className="nav-item active">
                                <Link to="/admin/campaign/addcampaign" className="nav-link"> Add Campaign </Link>
                            </li>

                            <li className="nav-item active">
                                <Link to="/admin/campaign/managecampaign" className="nav-link"> Manage Campaign </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            {/* END nav */}
        </>
    )
}