import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[url('/iSmart/public/img/seruse.png')]  bg-cover bg-center h-64 md:h-80 rounded-lg shadow-sm shadow-black flex items-center justify-center lg:h-[300px] ">
        <p className="text-white text-outline text-3xl md:text-5xl lg:text-6xl font-medium text-center px-4">
          Our Services Includes
        </p>
      </div>

      {/* Services Section */}
      <div className="px-4 md:px-8 lg:px-16 py-6">
        {/* Service 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center pb-10">
          <div>
            <p className="text-lg md:text-xl font-medium text-bblue">
              Sales Of New/Uk Used Phones
            </p>
            <p className="pt-2 md:pt-4 pb-4 md:pb-6 text-sm md:text-base leading-relaxed">
              Need a phone that won’t break the bank? Check out our selection of
              brand-new phones with all the latest features, plus full
              warranties. If you’re looking to save a bit, we also offer
              certified UK and Nigeria used phones that are in great condition
              and fully tested. You get great value without sacrificing quality,
              and they come with a limited warranty for extra reassurance.
            </p>
          </div>
          <img
            src=""
            alt="pic of service"
            className="w-full h-40 md:h-56 lg:h-64 object-cover rounded-lg"
          />
        </div>

        {/* Service 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center pb-10">
          <img
            src=""
            alt="pic of service"
            className="w-full h-40 md:h-56 lg:h-64 object-cover rounded-lg"
          />
          <div>
            <p className="text-lg md:text-xl font-medium text-bblue">
              Sales Of New/Uk Used Laptops
            </p>
            <p className="pt-2 md:pt-4 pb-4 md:pb-6 text-sm md:text-base leading-relaxed">
              Looking for a laptop that fits your needs and budget? We have a
              range of options, from brand-new models with the latest technology
              to certified UK or Nigeria used laptops that offer great value.
            </p>
          </div>
        </div>

        {/* Service 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center pb-10">
          <div>
            <p className="text-lg md:text-xl font-medium text-bblue">
              Sales Of Gadgets and Accessories
            </p>
            <p className="pt-2 md:pt-4 pb-4 md:pb-6 text-sm md:text-base leading-relaxed">
              Looking for the latest gadgets or accessories to go with your
              tech? We’ve got everything from cutting-edge smart devices to
              must-have accessories that’ll enhance your experience.
            </p>
          </div>
          <img
            src=""
            alt="pic of service"
            className="w-full h-40 md:h-56 lg:h-64 object-cover rounded-lg"
          />
        </div>

        {/* Service 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center pb-10">
          <img
            className="w-full h-40 md:h-56 lg:h-64 object-contain rounded-lg"
            src="/iSmart/public/img/Product teardown-amico.svg"
            alt="pic of service"
          />
          <div>
            <p className="text-lg md:text-xl font-medium text-bblue">
              Repair Of iPhones and MacBooks
            </p>
            <p className="pt-2 md:pt-4 pb-4 md:pb-6 text-sm md:text-base leading-relaxed">
              Got an iPhone or MacBook that's giving you trouble? We’re here to
              help! Whether it's a cracked screen, battery issues, or software
              glitches, our expert technicians are ready to fix it.
            </p>
          </div>
        </div>

        {/* Service 5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
          <div>
            <p className="text-lg md:text-xl font-medium text-bblue">
              Customer Support
            </p>
            <p className="pt-2 md:pt-4 pb-4 md:pb-6 text-sm md:text-base leading-relaxed">
              Need help with your tech? Our customer support team is here to
              make sure you get the assistance you need. Whether for products or
              repairs, we’re always ready to assist.
            </p>
          </div>
          <img
            className="w-full h-40 md:h-56 lg:h-64 object-contain rounded-lg"
            src="/iSmart/public/img/Active Support-cuate.svg"
            alt="pic of service"
          />
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="pt-10 py-24">
        <p className="text-2xl md:text-4xl font-medium text-darkblue text-center pb-6">
          Testimonials
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-16">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-darkblue p-6 rounded-lg text-white">
              <p className="font-medium text-base md:text-lg">Name</p>
              <p className="pt-4 text-sm md:text-base leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem aspernatur neque aliquid eius doloribus fugit.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER SECTION */}

      <div className="bg-[url('/src/assets/img/Use.png')] bg-cover bg-center h-full rounded-lg py-7 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 text-center lg:text-left py-10 px-6 md:px-10 lg:px-16">
          <div className="text-white text-center">
            <div className="flex justify-center  mb-4 px-90 ">
              <img
                src="/iSmart/public/img/Group 1logo.svg"
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

// import { Link } from "react-router-dom";

// export default function Services() {
//   return (
//     <div>
//       <div className="bg-[url('/src\assets\img\seruse.png')] bg-cover bg-center h-full rounded-lg shadow-sm shadow-black ">
//         <p className="py-[152px] text-white text-outline text-6xl font-medium text-center">
//           Our Services Includes
//         </p>
//       </div>
//       <div className=" px-[32px]">
//         <div className="px-[42px] py-[64px] ">
//           <div className="grid grid-cols-2 gap-6 justify-items-center pb-[34px]">
//             <div>
//               <p className="text-xl font-medium text-bblue">
//                 Sales Of New/Uk Used Phones
//               </p>
//               <p className="pt-[12px] pb-[24px] ">
//                 Need a phone that won’t break the bank? Check out our selection
//                 of brand-new phones with all the latest features, plus full
//                 warranties. If you’re looking to save a bit, we also offer
//                 certified UK and Nigeria used phones that are in great condition
//                 and fully tested. You get great value without sacrificing
//                 quality, and they come with a limited warranty for extra
//                 reassurance. Whether you want something fresh or a reliable
//                 pre-owned model, we’ve got just what you need!
//               </p>
//             </div>
//             <img src="" alt="pic of service" />
//           </div>
//           <div className="grid grid-cols-2 gap-6 justify-items-center pb-[70px]">
//             <img src="" alt="pic of service" />
//             <div>
//               <p className="text-xl font-medium text-bblue">
//                 Sales Of New/Uk Used Laptops
//               </p>
//               <p className="pt-[12px] pb-[24px]">
//                 Looking for a laptop that fits your needs and budget? We have a
//                 range of options, from brand-new models with the latest
//                 technology to certified UK or Nigeria used laptops that offer
//                 great value. Our new laptops come with full warranties, while
//                 our used ones are carefully checked to ensure they are in great
//                 condition. Whether you are after something fresh out of the box
//                 or a reliable pre-owned option, we've got the perfect laptop for
//                 you!
//               </p>
//             </div>
//           </div>
//           <div className="grid grid-cols-2 gap-6 justify-items-center pb-[70px]">
//             <div>
//               <p className="text-xl font-medium text-bblue">
//                 Sales Of Gadgets and Accessories
//               </p>
//               <p className="pt-[12px] pb-[24px] ">
//                 Looking for the latest gadgets or accessories to go with your
//                 tech? We’ve got everything from cutting-edge smart devices to
//                 must-have accessories that’ll enhance your experience. Whether
//                 you're after the newest headphones, chargers, or stylish phone
//                 cases, we have it all. Our products are designed to complement
//                 your lifestyle and tech, ensuring both quality and
//                 functionality. With a variety of options at different price
//                 points, you're sure to find something that fits your needs
//                 perfectly!
//               </p>
//             </div>
//             <img />
//           </div>
//           <div className="grid grid-cols-2 gap-6 justify-items-center pb-[70px]">
//             <img
//               className="h-80"
//               src="/src\assets\img\Product teardown-amico.svg"
//               alt="pic of service"
//             />
//             <div>
//               <p className="text-xl font-medium text-bblue">
//                 Repair Of iPhones and MacBooks
//               </p>
//               <p className="pt-[12px] pb-[24px] ">
//                 Got an iPhone or MacBook that's giving you trouble? We’re here
//                 to help! Whether it's a cracked screen, battery issues, or
//                 software glitches, our expert technicians are ready to fix it.
//                 We use quality parts and offer fast, reliable repairs to get
//                 your device back to working like new. With affordable prices and
//                 a focus on customer satisfaction, you can trust us to handle all
//                 your iPhone and MacBook repair needs.
//               </p>
//             </div>
//           </div>
//           <div className="grid grid-cols-2 gap-6 justify-items-center">
//             <div>
//               <p className="text-xl font-medium text-bblue">Customer Support</p>
//               <p className="pt-[12px] pb-[24px] ">
//                 Need help with your tech? Our customer support team is here to
//                 make sure you get the assistance you need, whenever you need it.
//                 Whether you have a question about a product, need help with a
//                 repair, or just want some guidance, we’re ready to assist with
//                 friendly and knowledgeable service. We’re committed to making
//                 your experience smooth and hassle-free, so don’t hesitate to
//                 reach out. Your satisfaction is our priority, and we’re always
//                 just a message or call away!
//               </p>
//             </div>
//             <img
//               className="h-80"
//               src="/src\assets\img\Active Support-cuate.svg"
//               alt="pic of service"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="pt-[24px]">
//         <p className="text-6xl font-medium text-darkblue text-center">
//           Testimonials
//         </p>
//         <div className="testimonials grid gap-4 grid-cols-3 grid-flow-row text-center py-[64px] px-[64px] ">
//           <div className="bg-darkblue px-[12px] py-[12px] rounded-md">
//             <p className="text-white font-medium text-lg">Name</p>
//             <p className="text-white py-[12px] ">
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//               Voluptatem aspernatur neque aliquid eius doloribus fugit vero
//               laudantium, nostrum dolor porro repudiandae totam saepe fugiat rem
//               nam incidunt? Magni, animi modi!
//             </p>
//           </div>
//           <div className="bg-darkblue px-[12px] py-[12px] rounded-md">
//             <p className="text-white font-medium text-lg">Name</p>
//             <p className="text-white py-[12px] ">
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//               Voluptatem aspernatur neque aliquid eius doloribus fugit vero
//               laudantium, nostrum dolor porro repudiandae totam saepe fugiat rem
//               nam incidunt? Magni, animi modi!
//             </p>
//           </div>
//           <div className="bg-darkblue px-[12px] py-[12px] rounded-md">
//             <p className="text-white font-medium text-lg">Name</p>
//             <p className="text-white py-[12px] ">
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//               Voluptatem aspernatur neque aliquid eius doloribus fugit vero
//               laudantium, nostrum dolor porro repudiandae totam saepe fugiat rem
//               nam incidunt? Magni, animi modi!
//             </p>
//           </div>
//           <div className="bg-darkblue px-[12px] py-[12px] rounded-md">
//             <p className="text-white font-medium text-lg">Name</p>
//             <p className="text-white py-[12px] ">
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//               Voluptatem aspernatur neque aliquid eius doloribus fugit vero
//               laudantium, nostrum dolor porro repudiandae totam saepe fugiat rem
//               nam incidunt? Magni, animi modi!
//             </p>
//           </div>
//           <div className="bg-darkblue px-[12px] py-[12px] rounded-md">
//             <p className="text-white font-medium text-lg">Name</p>
//             <p className="text-white py-[12px] ">
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//               Voluptatem aspernatur neque aliquid eius doloribus fugit vero
//               laudantium, nostrum dolor porro repudiandae totam saepe fugiat rem
//               nam incidunt? Magni, animi modi!
//             </p>
//           </div>
//           <div className="bg-darkblue px-[12px] py-[12px] rounded-md">
//             <p className="text-white font-medium text-lg">Name</p>
//             <p className="text-white py-[12px] ">
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//               Voluptatem aspernatur neque aliquid eius doloribus fugit vero
//               laudantium, nostrum dolor porro repudiandae totam saepe fugiat rem
//               nam incidunt? Magni, animi modi!
//             </p>
//           </div>
//         </div>
//       </div>
