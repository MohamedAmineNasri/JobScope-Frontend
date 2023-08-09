// import React, { useEffect } from "react";
// // import { Link } from "react-router-dom";
// import './style.css'
// // import { FaFacebookF } from "react-icons/fa";
// // import './Login_signup'

// const Loginsignup = () => {
//         useEffect(() => {
//         const container = document.getElementById('container');
//         const overlayCon = document.getElementById('overlayCon');
//         const overlayBtn = document.getElementById('overlayBtn');

//         overlayBtn.addEventListener('click', () => {
//         container.classList.toggle('right-panel-active');
//         });

//         overlayBtn.classList.remove('btnScaled');
//         window.requestAnimationFrame(() => {
//         overlayBtn.classList.add('btnScaled');
//         });
//     }, []);
//   return (
//     <>
//       <div className="bodylogin">
//         <div class="container" id="container">
//           <div class="form-container sign-up-container">
//             <form action="#">
//               <h1 className="h1login">Create Account</h1>
//               <div class="social-container">
//                 <a href="#" class="socail">
//                   <i class="fab fa-facebook-f"></i>
//                 </a>
//                 <a class="social-Link">
//                   <i class="fab fa-facebook-f"></i>
//                 </a>

//                 <a href="#" class="social">
//                   <i class="fab fa-google-plus-g"></i>
//                 </a>
//                 <a href="#" class="social">
//                   <i class="fab fa-linkedin-in"></i>
//                 </a>
//               </div>
//               <span classname="spanlogin">or use eamil for registration</span>
//               <div class="infeild">
//                 <input className="inputlogin" type="text" placeholder="Name" />
//                 <label className="label"></label>
//               </div>
//               <div class="infeild">
//                 <input
//                   className="inputlogin"
//                   type="email"
//                   placeholder="Email"
//                   name="email"
//                 />
//                 <label className="label"></label>
//               </div>
//               <div class="infeild">
//                 <input
//                   className="inputlogin"
//                   type="password"
//                   placeholder="Password"
//                 />
//                 <label className="label"></label>
//               </div>
//               <button className="buttonlog">Sign UP</button>
//             </form>
//           </div>
//           <div class="form-container sign-in-container">
//             <form action="#">
//               <h1 className="h1login">Sign in</h1>
              
//               <span classname="spanlogin">or use your account</span>
//               <div class="infeild">
//                 <input
//                   className="inputlogin"
//                   type="email"
//                   placeholder="Email"
//                   name="email"
//                 />
//                 <label className="label"></label>
//               </div>
//               <div class="infeild">
//                 <input
//                   className="inputlogin"
//                   type="password"
//                   placeholder="Password"
//                 />
//                 <label className="label"></label>
//               </div>
//               <a href="#" class="forgot">
//                 Forgot your password?
//               </a>
//               <a className="buttonlogsignin"> Sign in</a>
//             </form>
//           </div>
//           <div class="overlay-container" id="overlayCon">
//             <div class="overlay">
//               <div class="overlay-panel overlay-left">
//                 <h1 className="h1login">Welcome Back!</h1>
//                 <p className="p">
//                   To keep connected with us please login with your personal info
//                 </p>
//                 <a className="buttonlog">Sign Up</a>
//               </div>
//               <div class="overlay-panel overlay-right">
//                 <h1 className="h1login">Hello, Friend!</h1>
//                 <p className="pk">
//                   Enter your personal details and start journey with us
//                 </p>
//                 <a className="buttonlog">Sign Up</a>
//               </div>
//             </div>
//             <button id="overlayBtn"></button>
//           </div>

//           {/* <!--  <footer>
//         <mark>Contect us on <a href="https://www.facebook.com/mohamed.nasri.750/">Nasri</a></mark>
//         </footer> --> */}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Loginsignup;
