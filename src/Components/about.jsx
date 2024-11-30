// import { Link } from "react-router-dom";

// export default function About() {
//   return (
//     <div>
//       <div className="bg-[url('/src\assets\img\modern-stationary-collection-arrangement.jpg')] bg-cover bg-center h-full rounded-lg shadow-sm shadow-black ">
//         <p className="py-[152px] text-white text-outline text-6xl font-medium text-center">
//           About iSmartTech
//         </p>
//       </div>
//       {/*
//       <h1
//         className="text-2xl z-1  "
//         style={{ fontFamily: "helvetica-bold, sans-serif" }}
//       ></h1> */}

//       <div className="min-h-screen px-10">
//         <section className="container mx-auto p-8 flex flex-col md:flex-row items-start md:items-center">
//           <div className="w-full md:w-1/2 text-left absolute z-[-10]">
//             <h1 className="text-5xl font-bold text-blue-900">iSmartTech</h1>
//             <h2 className="text-3xl font-semibold text-gray-800 pb-24">
//               Everything Gadgets
//             </h2>
//             <div className="bg-gray-100 p-8">
//               <h2 className="text-3xl font-bold text-gray-800 mb-4 ">
//                 Our Journey
//               </h2>
//               <p className="text-lg text-gray-600 mb-4">
//                 Established with an unwavering commitment to excellence, our
//                 team is committed to turning architectural designs into reality
//                 with a focus on detail. We monitor every construction phase for
//                 a seamless and efficient process. No project is too big or small
//                 for us. Let us bring your vision to life. We offer you:
//               </p>
//               <ul className="list-disc list-inside space-y-2 text-gray-600 ">
//                 <li>
//                   <span className="font-semibold">Premium Quality</span>
//                 </li>
//                 <li>
//                   <span className="font-semibold">Reliability and Trust</span>
//                 </li>
//                 <li>
//                   <span className="font-semibold">Enduring Value</span>
//                 </li>
//               </ul>
//               <p className="mt-4 text-lg text-gray-600 ">
//                 Moreover, we expand our offerings with a diverse range of
//                 products, including premium Turkish doors, door accessories, and
//                 tiles.
//               </p>
//             </div>
//           </div>
//           {/* Image Section */}
//           <div className="w-full mb-8 md:mb-0 z-[-11] pl-80">
//             <img
//               src="/src\assets\img\seruse.png"
//               alt="Construction site"
//               className="w-full"
//             />
//           </div>
//         </section>
//       </div>

import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[url('/img/modern-stationary-collection-arrangement.jpg')] bg-cover bg-center h-64 md:h-80 rounded-lg shadow-sm shadow-black flex items-center justify-center lg:h-[300px]">
        <p className="text-white text-outline text-3xl md:text-5xl lg:text-6xl font-medium text-center px-4">
          About iSmartTech
        </p>
      </div>

      {/* About Section */}
      <div className="min-h-screen px-6 md:px-10 py-10 md:py-16">
        <section className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Text Section */}
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">
              iSmartTech
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              Everything Gadgets
            </h2>
            <div className="bg-gray-100 p-6 md:p-8 rounded-lg shadow-md">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Our Journey
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-4 leading-relaxed">
                Established with an unwavering commitment to excellence, our
                team is committed to turning architectural designs into reality
                with a focus on detail. We monitor every construction phase for
                a seamless and efficient process. No project is too big or small
                for us. Let us bring your vision to life. We offer you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>
                  <span className="font-semibold">Premium Quality</span>
                </li>
                <li>
                  <span className="font-semibold">Reliability and Trust</span>
                </li>
                <li>
                  <span className="font-semibold">Enduring Value</span>
                </li>
              </ul>
              <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
                Moreover, we expand our offerings with a diverse range of
                products, including premium Turkish doors, door accessories, and
                tiles.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/img/seruse.png"
              alt="Construction site"
              className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-lg shadow-md"
            />
          </div>
        </section>
      </div>

      {/* FOOTER SECTION */}

      <div className="bg-[url('/img/Use.png')] bg-cover bg-center h-full rounded-lg py-7 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 text-center lg:text-left py-10 px-6 md:px-10 lg:px-16">
          <div className="text-white text-center">
            <div className="flex justify-center  mb-4 px-90 ">
              <img
                src="/img/Group 1logo.svg"
                alt=""
                className="h-10"
              />
            </div>
            <p>
              18a Arala street, Airport Rd, <br />
              opposite Keystone Bank, Benin City, Edo
            </p>
            <p>+234 704 605 9363</p>
            <p>amadinfestus@gmail.com</p>
          </div>
          <div className="text-white mt-8 lg:mt-0 text-center">
            <p className="text-2xl font-medium mb-4">Quick Links</p>
            <ul>
              <li className="mb-2">
                <Link to="/" className="hover:text-blue">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/services" className="hover:text-blue">
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="hover:text-blue">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-white text-center py-4">
          @Copyright iSmartTech Devices
        </p>
      </div>
    </div>
  );
}
