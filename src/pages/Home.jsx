import React from "react";
// import Web_Developer from "../assets/images/web_developer.png";
// import profile_img1 from "../assets/images/1.png";
import profile_img3 from "../assets/images/sam_profile1.png";
import project1 from "../assets/project/1.png";
import project2 from "../assets/project/2.png";
import project3 from "../assets/project/3.png";
import project4 from "../assets/project/4.png";
// import profile_img3 from "../assets//mages/sam_profile2.png";
import profile_img from "../assets/images/blog_post3.png";
import learn_img from "../assets/images/cover_3.jpg";


const Home = () => {
  return (
    <>
      <section
        className="bg-dark text-light p-5 text-center text-sm-start"
        id="Home"
      >
        <div className="container py-5">
            <div className="row g-4">
                <div className="col-lg-6 col-md-6 mt-5">
                    <div className="mt-5 py-5">
                        <h1>
                            Become a <span className="text-warning">Web Developer</span>
                        </h1>
                        <h3 className="my-4">UI/UX Designer</h3>
                        <p className="lead my-4">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Debitis veritatis possimus quos? Itaque inventore rem quibusdam
                            voluptatem eligendi saepe nisi, minima dolore eum, commodi
                            impedit nam laboriosam quasi? A, sint!
                        </p>
                        <a
                                className="btn btn-primary btn-md"
                                data-bs-toggle="modal"
                                href="#exampleModalToggle"
                                role="button"
                            >
                            <i className="bi bi-arrow-right"></i>  Contact
                        </a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 align-items-center justify-content-between py-5">
                    <a href="#">
                        <img
                            src={profile_img3}
                            className="img-fluid mt-3"
                            width="600"
                            alt="web Developer"
                        />
                    </a>
                </div>
            </div>
        </div>
      </section>
      {/* End of header */}

      {/* End of Newsletter */}

      {/* Begining of Services */}
      <section className="p-5" id="services">
        <div className="container py-5">
          <div className="row text-center g-5">
            <div className="col-md-6 col-lg-4">
              <div className="card bg-dark text-light p-5">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i className="bi bi-laptop"></i>
                  </div>
                  <h3 className="card-title mb-3">Web Design</h3>
                  <p className="card-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Asperiores cum esse nisi ex blanditiis, voluptas ratione!
                  </p>
                  <a href="#" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card bg-dark text-light p-5">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i className="bi bi-file-earmark-code-fill"></i>
                  </div>
                  <h3 className="card-title mb-3">Web Developer</h3>
                  <p className="card-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Asperiores cum esse nisi ex blanditiis, voluptas ratione!
                  </p>
                  <a href="#" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card bg-dark text-light p-5">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i className="bi bi-database-fill-gear"></i>
                  </div>
                  <h3 className="card-title mb-3">Software Design</h3>
                  <p className="card-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Asperiores cum esse nisi ex blanditiis, voluptas ratione!
                  </p>
                  <a href="#" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Start Project section */}
      <section className="p-5 bg-secondary text-white" id="project">
        <div className="container py-5">
          <h1>Projects</h1>
          <div className="row justify-content-between align-items-center my-3">
            <div className="col-md-6 profile mb-5">
              <img src={project1} className="img-fluid pb-4 profile_img" alt="" />
              <a href="https://zarephathwidows.com" target="_blank">
                <strong className="text-light">NGO Zarephath Widows Site</strong>
              </a>
            </div>
            <div className="col-md-6 profile mb-5">
              <img src={project2} className="img-fluid pb-4 profile_img" alt="" />
              <a href="https://www.mfmlekkiyc.org/" target="_blank">
                <strong className="text-light">MFMLekkiYC Region3 Site</strong>
              </a>
            </div>
          </div>
          <div className="row justify-content-between align-items-center my-3">
             <div className="col-md-6 profile mb-5">
                <img src={project3} className="img-fluid pb-4 profile_img" alt="" />
                <a href="https://mfmgvva.com/" target="_blank">
                  <strong className="text-light">MFMGVVA Site</strong>
                </a>
              </div>
              <div className="col-md-6 profile mb-5">
                <img src={project4} className="img-fluid pb-4 profile_img" alt="" />
                <a href="https://gen218singleshangout.com/" target="_blank">
                  <strong className="text-light">Singles HangOut Site</strong>
                </a>
              </div>
          </div>
        </div>
      </section>

      {/* Start Contact section */}
      <section className="p-5 bg-light" id="about">
        <div className="container py-5">
          <h1>Contact</h1>
          <div className="row justify-content-between align-items-center">
            <div className="col-md-6">
              <a href="#">
                <img src={profile_img} className="img-fluid" alt="" />
              </a>
            </div>
            <div className="col-md-6">
              <h2 className="mb-3"><strong>Contact Me</strong></h2>
              <p className="py-2">
                 Are you working on something great? I would love to help make it happen! Drop me a letter and start your project right now! Just do it.
              </p>
              <p className="py-3">
                  <strong>EMAIL :</strong>    onayemi18@gmail.com<br/>
                  <strong>LOCATION :</strong>   Lagos, Nigeria
              </p>
              <a href="#">
                <i className="bi bi-facebook text-dark mx-1 lead"></i>
              </a>
              <a href="#">
                <i className="bi bi-twitter text-dark mx-1 lead"></i>
              </a>
              <a href="#">
                <i className="bi bi-youtube text-dark mx-1 lead"></i>
              </a>
              <a href="#">
                <i className="bi bi-instagram text-dark mx-1 lead"></i>
              </a>
              <a href="#">
                <i className="bi bi-linkedin text-dark mx-1 lead"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Start About section */}
      {/* <section className="p-5 bg-light" id="about">
        <div className="container py-5">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-6">
              <a href="#">
                <img src={profile_img} className="img-fluid" alt="" />
              </a>
            </div>
            <div className="col-md-6">
              <h2 className="mb-3">Learning the Basics</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis saepe dolor vel molestiae cumque repellat iusto.
                Quidem dolorem voluptatem dolore necessitatibus consequatur
                quasi, optio eveniet.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis saepe dolor vel molestiae cumque repellat iusto.
                Quidem dolorem voluptatem dolore necessitatibus consequatur
                quasi, optio eveniet.
              </p>
              <a href="#" className="btn btn-primary mt-3">
                {" "}
                <i className="bi bi-chevron-right"></i> Read More
              </a>
            </div>
          </div>
        </div>
      </section> */}

      {/* Start Learning section */}
      <section className="p-5 bg-dark text-light" id="learn">
        <div className="container py-5">
          <div className="row justify-content-between align-items-center">
            <div className="col-md">
              <h2 className="mb-3">Learning The React</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis saepe dolor vel molestiae cumque repellat iusto.
                Quidem dolorem voluptatem dolore necessitatibus consequatur
                quasi, optio eveniet.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis saepe dolor vel molestiae cumque repellat iusto.
                Quidem dolorem voluptatem dolore necessitatibus consequatur
                quasi, optio eveniet.
              </p>
              <a href="#" className="btn btn-primary mt-3">
                {" "}
                <i className="bi bi-chevron-right"></i> Read More
              </a>
            </div>
            <div className="col-md">
              <a href="#">
                <img src={learn_img} className="img-fluid" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently ask question */}
      <section className="p-5" id="questions">
        <div className="container py-5">
          <h2 className="text-center mb-4">Frequently Ask Question</h2>

          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Accordion Item #1
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It
                  is shown by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Accordion Item #2
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Accordion Item #3
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classNamees that we use to style each element. These
                  classNamees control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Accordion Item #4
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Start Instructions Section */}
      <section className="p-5 bg-primary" id="questions">
        <div className="container py-5">
          <h2 className="text-center text-white">Our Instructions</h2>
          <p className="lead text-center text-white mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo beatae
            blanditiis animi dolorem enim ducimus consequatur dignissimos!
            Eaque, possimus alias?
          </p>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <div className="card-body text-center p-5">
                  <img
                    src={learn_img}
                    className="img-fluid rounded-circle mb-3"
                    alt="details"
                  />
                  <h3 className="card-title mb-3">Onayemi Sam</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <a href="#">
                    <i className="bi bi-facebook text-dark mx-1 lead"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-twitter text-dark mx-1 lead"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-youtube text-dark mx-1 lead"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-instagram text-dark mx-1 lead"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-linkedin text-dark mx-1 lead"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <div className="card-body text-center p-5">
                  <img
                    src={learn_img}
                    className="img-fluid rounded-circle mb-3"
                    alt="details"
                  />
                  <h3 className="card-title mb-3">Onayemi Sam</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <a href="#">
                    <i className="bi bi-facebook text-dark mx-1 lead"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-twitter text-dark mx-1 lead"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-youtube text-dark mx-1 lead"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-instagram text-dark mx-1 lead"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-linkedin text-dark mx-1 lead"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <div className="card-body text-center p-5">
                  <img
                    src={learn_img}
                    className="img-fluid rounded-circle mb-3"
                    alt="details"
                  />
                  <h3 className="card-title mb-3">Onayemi Sam</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <a href="#">
                    <i className="bi bi-facebook text-dark mx-1 lead"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-twitter text-dark mx-1 lead"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-youtube text-dark mx-1 lead"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-instagram text-dark mx-1 lead"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-linkedin text-dark mx-1 lead"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <div className="card-body text-center p-5">
                  <img
                    src={learn_img}
                    className="img-fluid rounded-circle mb-3"
                    alt="details"
                  />
                  <h3 className="card-title mb-3">Onayemi Sam</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <a href="#">
                    <i className="bi bi-facebook text-dark mx-1 lead"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-twitter text-dark mx-1 lead"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-youtube text-dark mx-1 lead"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-instagram text-dark mx-1 lead"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-linkedin text-dark mx-1 lead"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Start Footer Section */}
      <footer className="page-footer p-5 text-md-left" id="contact">
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <h5 className="text-uppercase font-weight-bold mb-4">
                <strong>Wp$hopM@rt</strong>
              </h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <a href="#">
                <i className="bi bi-facebook text-dark mx-1 lead"></i>
              </a>
              <a href="#">
                <i className="bi bi-twitter text-dark mx-1 lead"></i>
              </a>
              <a href="#">
                <i className="bi bi-youtube text-dark mx-1 lead"></i>
              </a>
              <a href="#">
                <i className="bi bi-instagram text-dark mx-1 lead"></i>
              </a>
              <a href="#">
                <i className="bi bi-linkedin text-dark mx-1 lead"></i>
              </a>
            </div>

            <div className="col-lg-3 col-md-6 mx-auto">
              <h5 className="text-uppercase font-weight-bold mb-4"><strong>Services</strong></h5>
              <ul className="list-unstyled">
                <li className="mb-1">
                  <a href="#">Web Design</a>
                </li>
                <li className="mb-1">
                  <a href="#">Web Development</a>
                </li>
                <li className="mb-1">
                  <a href="#">Software Development</a>
                </li>
                <li className="mb-1">
                  <a href="#">UI/UX Design</a>
                </li>
                <li className="mb-1">
                  <a href="#">E-commerce</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mx-auto">
              <h5 className="text-uppercase font-weight-bold mb-4">
                <strong>Page Links</strong>
              </h5>
              <ul className="list-styled">
                <li className="mb-1">
                  <a href="#">Home</a>
                </li>
                <li className="mb-1">
                  <a href="#">About Us</a>
                </li>
                <li className="mb-1">
                  <a href="#">Services</a>
                </li>
                <li className="mb-1">
                  <a href="#">FAQ</a>
                </li>
                <li className="mb-1">
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 location">
              <h5 className="text-uppercase font-weight-bold mb-4"><strong>Location</strong></h5>
              <p className="d-flex">
                <i className="bi bi-geo-alt text-primary mx-2 lead"></i> Lorem
                ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="d-flex">
                <i className="bi bi-phone text-primary mx-2 lead"></i>
                +234-806-131-253
              </p>
              <p className="d-flex">
                <i className="bi bi-envelope text-primary mx-2 lead"></i>
                info@example.com
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* End of Footer */}


      {/* Start Modal */}
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel">
                Contact To Me
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">                
                <p>Fill Form and we will get back to you!</p>
                <form>
                    <div className="mb-3">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" className="form-control" id="first_name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="firstname">Last Name</label>
                        <input type="text" className="form-control" id="last_name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="firstname">Email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="firstname">Mobile No</label>
                        <input type="text" className="form-control" id="phone" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" className="form-control" id="firstname" />
                    </div>
                </form>
            </div>
            <div className="modal-footer">
              {/* <button className="btn btn-primary" data-bs-toggle="modal" data-bs-dismiss="modal">
                Close
              </button> */}
              <button type="button" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
      {/* End of Modal */}



      {/* Start Modal for Portfolio About */}
      <div
        className="modal fade"
        id="about_portfolio"
        aria-hidden="true"
        aria-labelledby="about_portfolioLabel"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="about_portfolioLabel">
                About Me
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
                <h1>About me</h1>
                <h5>Hello! My name is Samuel Ewenu. I am a product designer located in Lagos Nigeria. I currently work as a full time Senior Product Designer for INITS Limited, located in Lagos Nigeria.</h5>
                <p>
                    EMAIL <br/>
                    sam.ewenu@gmail.com
                    LOCATION<br/>
                    Lagos, Nigeria
                </p>
                <img src={profile_img3} className="img-fluid profile_align" width="500" alt="profile" />

                <hr/>
                    <h3>Experience</h3>
                <hr/>
                <div>
                    <h4>Senior Product Designer, INITS Limited</h4>
                    <p>
                        Leading the design team using agile methodology. I walk through the user experience journey with project managers and product owners in the creation of valuable business features and breaking new ground in local technology using design sprints.
                    </p>
                    <p>March 2019 — present</p>
                </div>
                <div>
                    <h4> Senior Product Designer, INITS Limited</h4>
                    <p>
                       
                        Leading the design team using agile methodology. I walk through the user experience journey with project managers and product owners in the creation of valuable business features and breaking new ground in local technology using design sprints.
                    </p>
                    <p>March 2019 — present</p>
                </div>



            </div>
            {/* <div className="modal-footer">
              <button className="btn btn-primary" data-bs-toggle="modal" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary">Submit</button>
            </div> */}
          </div>
        </div>
      </div>
      {/* End of Modal */}


      {/* Start  footer bottom */}

      <footer className="p-3 bg-dark text-white text-center position-relative">
        <div className="container">
          <p className="mb-0">Copyright &copy; 2022 Onayemi Samuel</p>

          <a href="#" className="position-absolute bottom-0 end-0 p-2">
            <i className="bi bi-arrow-up-circle h1 text-white"></i>
          </a>
        </div>
      </footer>
      {/* End footer bottom */}

    </>
  );
};

export default Home;
