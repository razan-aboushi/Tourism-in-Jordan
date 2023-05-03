import React from 'react';

function Footer() {
  return (
    <div className="container1 mt-5">
  <footer
          className="text-center text-lg-start text-white bg-black"
          style={{backgroundColor: "#45526e"}}
          >
    <div className="container p-4 pb-0">
      <section className="">
        <div className="row">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
            TripAdvisor
            </h6>
           
          </div>

          <hr className="w-100 clearfix d-md-none" />

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Places</h6>
            <p>
              <a className="text-white">Petra</a>
            </p>
            <p>
              <a className="text-white">Jarash</a>
            </p>
            <p>
              <a className="text-white">BrandFlow</a>
            </p>
            <p>
              <a className="text-white">Bootstrap Angular</a>
            </p>
          </div>

          <hr className="w-100 clearfix d-md-none" />

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Useful links
            </h6>
            <p>
              <a className="text-white">Your Account</a>
            </p>
            <p>
              <a className="text-white">Become an Advisor</a>
            </p>
            <p>
              <a className="text-white">Our careers</a>
            </p>
            <p>
              <a className="text-white">Help</a>
            </p>
          </div>

          <hr className="w-100 clearfix d-md-none" />

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p><i className="fas fa-home mr-3"></i> Zarqa , Jordans</p>
            <p><i className="fas fa-envelope mr-3"></i> info@TripAdvisor.com</p>
            <p><i className="fas fa-print mr-3"></i> +962 780577727</p>
          </div>
        </div>
      </section>

      <hr className="my-3"/>

      <section className="p-3 pt-0">
        <div className="row d-flex align-items-center">
          <div className="col-md-7 col-lg-8 text-center text-md-start">
            <div className="p-3">
              © 2023 Copyright: TripAdvisor
              
            </div>
          </div>

          <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
            <a
               className="btn btn-outline-light btn-floating m-1 text-white"
              
               role="button"
               ><i className="fab fa-facebook-f"></i
              ></a>

            <a
               className="btn btn-outline-light btn-floating m-1 text-white"
              
               role="button"
               ><i className="fab fa-twitter"></i
              ></a>

            <a
               className="btn btn-outline-light btn-floating m-1 text-white"
              
               role="button"
               ><i className="fab fa-google"></i
              ></a>

            <a className="btn btn-outline-light btn-floating m-1 text-white" 
               role="button"
               ><i className="fab fa-instagram"></i
              ></a>
          </div>
        </div>
      </section>
    </div>
  </footer>
</div>
  )
}

export default Footer;