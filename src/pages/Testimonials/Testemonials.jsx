export default function Testemonials(){
    return (
        <div className="site-section bg-light">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <span className="text-cursive h5 text-red d-block">Testimonial</span>
              <h2 className="text-black">What Our Client Says About Us</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="testimonial-3-wrap">


                <div className="owl-carousel nonloop-block-13">
                  <div className="testimonial-3 d-flex">
                    <div className="vcard-wrap mr-5">
                      <img src="images/person_1.jpg" alt="Image" className="vcard img-fluid" />
                    </div>
                    <div className="text">
                      <h3>Jeff Woodland</h3>
                      <p className="position">Partner</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam earum libero rem maxime magnam. Similique esse ab earum, autem consectetur.</p>
                    </div>
                  </div>

                  <div className="testimonial-3 d-flex">
                    <div className="vcard-wrap mr-5">
                      <img src="images/person_3.jpg" alt="Image" className="vcard img-fluid" />
                    </div>
                    <div className="text">
                      <h3>Jeff Woodland</h3>
                      <p className="position">Partner</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam earum libero rem maxime magnam. Similique esse ab earum, autem consectetur.</p>
                    </div>
                  </div>

                  <div className="testimonial-3 d-flex">
                    <div className="vcard-wrap mr-5">
                      <img src="images/person_2.jpg" alt="Image" className="vcard img-fluid" />
                    </div>
                    <div className="text">
                      <h3>Jeff Woodland</h3>
                      <p className="position">Partner</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam earum libero rem maxime magnam. Similique esse ab earum, autem consectetur.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="row mt-5 justify-content-center">

            <div className="col-md-8">


              <div className="row">
                <div className="col-lg-3 text-center">
                  <span className="text-teal h2 d-block">3423</span>
                  <span>Happy Client</span>
                </div>
                <div className="col-lg-3 text-center">
                  <span className="text-yellow h2 d-block">4398</span>
                  <span>Members</span>
                </div>
                <div className="col-lg-3 text-center">
                  <span className="text-success h2 d-block">50+</span>
                  <span>Staffs</span>
                </div>
                <div className="col-lg-3 text-center">
                  <span className="text-danger h2 d-block">2000+</span>
                  <span>Our Followers</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
}