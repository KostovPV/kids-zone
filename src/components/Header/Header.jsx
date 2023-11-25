import { Link } from "react-router-dom";
import { useLogout} from'../../hooks/useLogout';
import { useAuthContext } from '../../hooks/useAuthContext'

import Avatar from '../Avatar/Avatar'

import './Header.css';

export default function Header(){
    const { logout, isPending } = useLogout()
    const { user } = useAuthContext()
    return(
        <header className="site-navbar site-navbar-target" role="banner">

        <div className="container mb-3">
          <div className="d-flex align-items-center">
            <div className="site-logo mr-auto">
              <a href="index.html">The Kid's Center<span className="text-primary"></span></a>
            </div>
            <div className="site-quick-contact d-none d-lg-flex ml-auto ">
              <div className="d-flex site-info align-items-center mr-5">
                <span className="block-icon mr-3"><span className="icon-map-marker text-yellow"></span></span>
                <span>4 Izgrev, Burgas, <br /> Bulgaria</span>
              </div>
              <div className="d-flex site-info align-items-center">
                <span className="block-icon mr-3"><span className="icon-clock-o"></span></span>
                <span>Mondey - Friday 10:00AM - 19:00PM <br /> Saturday 10:00AM - 15:00PM</span>
              </div>

            </div>
          </div>
        </div>


        <div className="container">
          <div className="menu-wrap d-flex align-items-center">
            <span className="d-inline-block d-lg-none"><a href="#" className="text-black site-menu-toggle js-menu-toggle py-5"><span className="icon-menu h3 text-black"></span></a></span>



            <nav className="site-navigation text-left mr-auto d-none d-lg-block" role="navigation">
              <ul className="site-menu main-menu js-clone-nav mr-auto ">
                <li className="active"><Link className="nav-link" to="/">Home</Link></li>
               
                {/* <li><Link className="nav-link" to="/gallery">Gallery</Link></li> */}
                {/* <li><Link className="nav-link" to="/prices">Pricing</Link></li> */}
                <li><Link className="nav-link" to="/contact">Contact</Link></li>
                {user && (
          <>
            {user.photoURL && (
              <li>
                <Avatar src={user.photoURL} />
              </li>
            )}
             <li><Link className="nav-link" to="/about">About</Link></li>
                <li><Link className="nav-link" to="/packages">Packages</Link></li>
            <li><Link className="nav-link" to="/profile">  Update Profile</Link></li>
            <li><Link className="nav-link" to="/create">Create party</Link></li>
            <li><Link className="nav-link" to="/list">Party's list</Link></li>
            {!isPending && <button className="btn" onClick={logout}>Logout</button>}
            {isPending && <button className="btn" disabled>Logging out...</button>}
          </>
        )
        }

{!user && (
          <>
            <li><Link className="nav-link" to="/login">Login</Link></li>
            <li><Link className="nav-link" to="/signup">Signup</Link></li>
          </>
        )}
              </ul>
            </nav>

            <div className="top-social ml-auto">
              <a href="#"><span className="icon-facebook text-teal"></span></a>
              <a href="#"><span className="icon-twitter text-success"></span></a>
              <a href="#"><span className="icon-linkedin text-yellow"></span></a>
            </div>
          </div>
        </div>



      </header>
    )
}