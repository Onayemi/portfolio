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
// import learn_img from "../assets/images/cover_3.jpg";


const Portfolio = () => {
  return (
    <>
      <section
        className="bg-dark text-light p-5 text-center text-sm-start"
        id="Home"
      >
        <div className="container py-5">
            <div className="row g-4">
                <div className="col-lg-6 col-md-6 mt-3">
                    <div className="py-5">
                        <h2 className="my-4 py-3">
                        <span className="text-warning">Onayemi Samuel</span>. I design desktop, web and mobile application.
                        </h2>
                        <p className="lead my-4">
                          I am a fullstack developer located in Lagos, Nigeria.
                          with a demonstrated history in Software Development. Skilled in React.Js, Vue.Js, HTML/CSS & JavaScript, C#.Net, Mysql, MongoDB, MSSQL Server, PHP (Laravel), Node.Js, Styled Components  and Wordpress.
                        </p>
                        <a href="#contact" className="btn btn-primary btn-lg">Contact Me</a>
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

            <div className="col-md-6 col-lg-3">
              <div className="card bg-dark text-light p-5">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i className="bi bi-file-earmark-code-fill"></i>
                  </div>
                  <h3 className="card-title mb-3">Web Developer</h3>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className="card bg-dark text-light p-5">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i className="bi bi-database-fill-gear"></i>
                  </div>
                  <h3 className="card-title mb-3">Software Developer</h3>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card bg-dark text-light p-5">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i className="bi bi-easel-fill"></i>
                  </div>
                  <h3 className="card-title mb-3">Online Training</h3>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card bg-dark text-light p-5">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i className="bi bi-graph-up-arrow"></i>
                  </div>
                  <h3 className="card-title mb-3">Digital Marketing</h3>
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
      <section className="p-5 bg-light" id="contact">
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
              <h5 className="py-2">
                 Are you working on something great? I would love to help make it happen! Drop me a letter and start your project right now! Just do it.
              </h5>
              <h5 className="py-2">
                  <strong>EMAIL :</strong>    onayemi18@gmail.com
              </h5>
              <h5 className="pb-2">
                  <strong>LOCATION :</strong>   Lagos, Nigeria
              </h5>
              
              <a href="https://www.linkedin.com/in/onayemi-samuel" target="_blank">
                <i className="bi bi-linkedin text-dark mx-1 lead"></i>
              </a>
              <a href="https://github.com/onayemi" target="_blank">
                <i className="bi bi-github text-dark mx-1 lead"></i>
              </a>
              <a href="#">
                <i className="bi bi-facebook text-dark mx-1 lead"></i>
              </a>

            </div>
          </div>
        </div>
      </section>


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
                {/* About Me */}
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
                <h4 className="py-4">Hello! My name is Onayemi Samuel. I am a fullstack developer located in Lagos, Nigeria.
                  I currently work as a full time Senior Developer for Remlex Technologies, located in Lagos Nigeria.</h4>
                <p>
                    EMAIL: onayemi18@gmail.com 
                </p>
                <p>
                    LOCATION: Lagos, Nigeria
                </p>
                <p><strong>SOCIAL</strong></p>

                <a href="https://www.linkedin.com/in/onayemi-samuel" target="_blank">
                  <i className="bi bi-linkedin text-dark mx-1 lead"></i>
                </a>
                <a href="https://github.com/onayemi" target="_blank">
                  <i className="bi bi-github text-dark mx-1 lead"></i>
                </a>
                <a href="#">
                  <i className="bi bi-facebook text-dark mx-1 lead"></i>
                </a>
                <br/><br/>
                <img src={profile_img3} className="img-fluid profile_align" width="500" alt="profile" />

                <h2 className="py-3">Experience</h2>    
                <div className="my-3">
                    <h4><strong>FullStack Developer, Remlex Technologies</strong></h4>
                    <p>
                      My responsibilities involve creating the database, be involved and participate in the overall application lifecycle, collaborate with front-end developers with instruction with API
                    </p>
                    <p>February 2019 – Present</p>
                </div>

                <div className="my-5">
                    <h4><strong> FullStack Developer, Indent Resource Solution</strong></h4>
                    <p>
                      My responsibilities involve design the database for the application, be involved and participate in design and implementation of the application and inteprete technical and functional design the overall application lifecycle
                    </p>
                    <p>August 2017 – May 2019</p>
                </div>

                <div className="my-3">
                    <h4><strong> Software Developer, TEXTNIGERIA </strong></h4>
                    <p>
                      Collaborate with my team to building reminder portal application, subscription portal application, be involved and participate in the overall application lifecycle Collaborate with backend 
                      Developers, define and communicate technical and design requirements, build high-quality reusable code that can be used in the future, collaborate with multidisciplinary team of designers, developers and system administrators
                    </p>
                    <p>March 2016 – June 2017 </p>
                </div>

                <div className="my-5">
                    <h4> <strong>Backend Developer, Hologram Africa</strong></h4>
                    <p>
                      My responsibilities involve creating the Database for vehicle authentication.
                    </p>
                    <p>September 2015 – February 2016  </p>
                </div>

                <div className="my-3">
                    {/* <h4> Backend Developer, Hologram Africa</h4> */}
                    {/* <a href="#contact" className="btn btn-primary btn-lg border-radius">  <i className="bi bi-download text-white mx-1 lead"></i> Download CV</a> */}
                </div>

            </div>
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

export default Portfolio;
