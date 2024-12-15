import React, { forwardRef } from "react";

const Footer = forwardRef((props, ref)=> {
  return (
    <footer className="bg-red-500 text-white py-8 text-center">
     
     <div className="grid md:grid-cols-2 gap-1 mb-8 p-10">
  
  <div ref={ref} className="flex flex-col justify-center pl-10">
    <h2 className="text-3xl text-left font-bold mb-2">
      SO WHY LATE? ONE STEP FAR <br /> FROM A TOUR
    </h2>
  </div>

  
  
  
  <div className="flex items-center justify-end pr-10">
    <input
      type="email"
      placeholder="Your mail address"
      className="w-1/2 p-3 rounded-md text-gray-800 outline-none mr-2 "
    />
    <button className="bg-white text-black font-bold px-4 py-3 rounded-md hover:bg-gray-200">
      Send
    </button>
  </div>
</div>
    
    <div className="pl-20 pr-20">
      <hr className=""/>  
    </div>
   

    
      <div className="grid grid-cols-5 gap-3 p-20">
        
        <div className="col-span-2 text-left">
          <h3 className="text-xl font-extrabold mb-3">Logo Here</h3>
          <p className="text-sm mb-4 ">
            Immerse yourself in stunning visuals and <br/> captivating stories as you
            navigate through our website.
          </p>
          <div className="flex justify-start gap-4">
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z" clip-rule="evenodd"/>
            </svg>
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
            </svg>
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"/>
            </svg>
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
            </svg>
          </div>

          <div className="flex space-x-4 pl-10">
            <a
              href="#"
              className="text-white hover:text-gray-300"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i> {/* Replace with your icon */}
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook"></i> {/* Replace with your icon */}
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i> {/* Replace with your icon */}
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300"
              aria-label="Pinterest"
            >
              <i className="fab fa-pinterest"></i> {/* Replace with your icon */}
            </a>
          </div>
        </div>

        {/* About Section */}
        <div className="text-left">
          <h4 className="text-lg font-bold mb-3">About Us</h4>
          <ul className="text-sm space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Destination
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="text-left">
          <h4 className="text-lg font-bold mb-3">Services</h4>
          <ul className="text-sm space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Explore
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Get in Touch
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Testimonials
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="text-left">
          <h4 className="text-lg font-bold mb-3">Contact Info</h4>
          <ul className="text-sm space-y-2">
            <li>20, Guze Ellul Mercer Str, Iklin IKL1371 MALTA</li>
            <li>📞 123-456-789</li>
            <li>📧 maltaexplore@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 text-sm text-gray-300">
        © maltaxplore 2024, All Rights Reserved
      </div>
    </footer>
  );
});

export default Footer;
