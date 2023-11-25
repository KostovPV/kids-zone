import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div>
            <h2 className="footer-heading mb-3">About Us</h2>
            </div>
           
            {/* <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p> */}
            <div>
            <h2 className="footer-heading mb-4">Newsletter</h2>
            <form action="#" className="d-flex" classNameName="subscribe" >
              <input type="text" className="form-control mr-3" placeholder="Email" />
              <input type="submit" value="Send" className="btn btn-primary" />
            </form>
            </div>
           
          </div>

        </div>
        
      </div>
    </footer>
  )
}