export default function Prices(){
    return(
        <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <span className="text-cursive h5 text-red d-block">Pricing Plan</span>
              <h2 className="text-black">Our Pricing</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quis cupiditate fugit, voluptatibus ullam, non laboriosam alias veniam, ex inventore iure sed?</p>
            </div>
            <div className="col-md-4">
              <div className="pricing teal">
                <span className="price">
                  <span>$30</span>
                </span>
                <h3>Silver Pack</h3>
                <ul className="ul-check list-unstyled teal">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipisicing elit</li>
                  <li>Nemo quis cupiditate</li>
                </ul>
                <p><a href="#" className="btn btn-teal btn-custom-1 mt-4">Buy Now</a></p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pricing danger">
                <span className="price">
                  <span>$70</span>
                </span>
                <h3>Golden Pack</h3>
                <ul className="ul-check list-unstyled danger">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipisicing elit</li>
                  <li>Nemo quis cupiditate</li>
                </ul>
                <p><a href="#" className="btn btn-danger btn-custom-1 mt-4">Buy Now</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}