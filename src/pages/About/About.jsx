// export default function About(){
//     return (
//       <div className="site-section bg-light">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-6 mb-5 mb-md-0">
//             <img src="images/img_1.jpg" alt="Image" className="img-fluid" />
//           </div>
//           <div className="col-md-5 ml-auto pl-md-5">
//             <span className="text-cursive h5 text-red">About Us</span>
//             <h3 className="text-black">Bring Fun Life To Your Kids</h3>
//             <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et harum, magni sequi nostrum maxime enim.</span><span>Magnam id atque dicta deleniti, ipsam ipsum distinctio. Facilis praesentium voluptatem accusamus, earum veritatis, laudantium.</span></p>

//             <p className="mt-5"><a href="#" className="btn btn-warning py-4 btn-custom-1">More About Us</a></p>
//           </div>
//         </div>
//       </div>
//     </div>
//     )
// }

import React from 'react';

export default function About() {
  return (
    <div className="ftco-blocks-cover-1">
      <div className="site-section-cover overlay">
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-md-6 mb-5 mb-md-0">
              <img src="images/img_1.jpg" alt="Image" className="img-fluid" />
            </div>
            <div className="col-md-5 ml-auto pl-md-5">
              <span className="text-cursive h5 text-red">About Us</span>
              <h3 className="text-black">Bring Fun Life To Your Kids</h3>
              <p>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et harum, magni sequi nostrum maxime enim.
                </span>
                <span>Magnam id atque dicta deleniti, ipsam ipsum distinctio. Facilis praesentium voluptatem accusamus, earum veritatis, laudantium.</span>
              </p>

              <p className="mt-5">
                <a href="#" className="btn btn-warning py-4 btn-custom-1">
                  More About Us
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
