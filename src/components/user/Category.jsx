import { useEffect, useState } from "react";
import CampaignServices from "../../services/CampaignServices";
import CategoryServices from "../../services/CategoryServices";

export default function Category() {

  const [Category, setCategory] = useState([]);

  useEffect(() => {
    FatchCategory();
  }, [])

  const FatchCategory= async () => {
    try {
      const data = await CategoryServices.all();
      setCategory(data);

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div
        className="hero-wrap"
        style={{ backgroundImage: 'url("images/bg_5.jpg")' }}
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
                  <a href="index.html">Home</a>
                </span>{" "}
                <span>Category</span>
              </p>
              <h1
                className="mb-3 bread"
                data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
              >
                Category
              </h1>
            </div>
          </div>
        </div>
      </div>


      <section className="ftco-section">
        <div className="container">
          <div className="row">

            {
              Category.map((item) => {

                return (
                  <div className="col-md-4 ftco-animate">
                    <div className="cause-entry">

                      <div className="text p-3 p-md-4">
                        <h3>
                          <a href="#">{item.CategoryName}</a>
                        </h3>
                        <p>{item.Description}</p>

                      </div>
                    </div>
                  </div>
                );
              })
            }

          </div>
          <div className="row mt-5">
            <div className="col text-center">
              <div className="block-27">
                <ul>
                  <li>
                    <a href="#">&lt;</a>
                  </li>
                  <li className="active">
                    <span>1</span>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">5</a>
                  </li>
                  <li>
                    <a href="#">&gt;</a>
                  </li>
                </ul>
              </div>
            </div>
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

