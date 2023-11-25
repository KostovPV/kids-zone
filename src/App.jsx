import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';


import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Events from './pages/Events/Events'
import About from './pages/About/About'
import Packages from './pages/Packages/Packages'
import Prices from './pages/Prices/Prices'
import Testemonials from './pages/Testimonials/Testemonials'
import GetStarted from './pages/GetStarted/GetStarted'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile';
import Create from './pages/Create/Create';
import List from './pages/List/List';
import Details from './pages/Details/Details';
import Edit from './pages/Edit/Edit';
function App() {

  const { user, authIsReady } = useAuthContext();
  return (
    <div className="site-wrap" id="home-section">

      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>

      <>
        {authIsReady && (
          <BrowserRouter>

            <Header />
            <main id="main-content" className='mainBox'>
              {/* {user && <Sidebar />} */}
              <Routes>
                <>
                  <Route path="/" element={<Home />} >

                  </Route>
                  <Route path="/about" element={<About />} >

                  </Route>
                  <Route path="/packages" element={<Packages />} >

                  </Route> <Route path="/prices" element={<Prices />} >

                  </Route> <Route path="/contact" element={<About />} >

                  </Route>
                  <Route path="/profile" element={<Profile />} >

                  </Route>
                  <Route path="/create" element={<Create />} >

                  </Route>
                  <Route path="/list" element={<List />} >

                  </Route>
                  <Route path="/list/:id" element={<Details />} >

                  </Route>
                  <Route path="/list/:id/edit" element={<Edit />} >

                  </Route>
                </>


                <Route path="/signup"
                  element={!user ? <Signup /> : <Navigate to="/" />}>
                  {/* {!user && <Signup />}
           {user && <Navigate to="/"/>} */}
                </Route>
                <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />}>
                  {/* {!user && <Login />}
           {user && <Navigate to="/"/>} */}

                </Route>
              </Routes>
            </main>

            <Footer />
          </BrowserRouter>
        )}




        {/* <Events />
    <About />
     <Packages />
      <Prices />
    <Testemonials />
     <GetStarted /> */}




      </>
    </div>
  )
}

export default App
