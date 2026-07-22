function Gallery(){
    return(
        <>
  <div
    className="hero-wrap"
    style={{ backgroundImage: 'url("images/bg_2.jpg")' }}
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
            <span>Gallery</span>
          </p>
          <h1
            className="mb-3 bread"
            data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
          >
            Galleries
          </h1>
        </div>
      </div>
    </div>
  </div>
  <section className="ftco-section ftco-gallery">
    <div className="container">
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
      <div className="d-md-flex">
        <a
          href="images/event-1.jpg"
          className="gallery image-popup d-flex justify-content-center align-items-center img ftco-animate"
          style={{ backgroundImage: "url(images/event-1.jpg)" }}
        >
          <div className="icon d-flex justify-content-center align-items-center">
            <span className="icon-search" />
          </div>
        </a>
        <a
          href="images/event-2.jpg"
          className="gallery image-popup d-flex justify-content-center align-items-center img ftco-animate"
          style={{ backgroundImage: "url(images/event-2.jpg)" }}
        >
          <div className="icon d-flex justify-content-center align-items-center">
            <span className="icon-search" />
          </div>
        </a>
        <a
          href="images/image_1.jpg"
          className="gallery image-popup d-flex justify-content-center align-items-center img ftco-animate"
          style={{ backgroundImage: "url(images/image_4.jpg)" }}
        >
          <div className="icon d-flex justify-content-center align-items-center">
            <span className="icon-search" />
          </div>
        </a>
        <a
          href="images/image_2.jpg"
          className="gallery image-popup d-flex justify-content-center align-items-center img ftco-animate"
          style={{ backgroundImage: "url(images/event-4.jpg)" }}
        >
          <div className="icon d-flex justify-content-center align-items-center">
            <span className="icon-search" />
          </div>
        </a>
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

export default Gallery