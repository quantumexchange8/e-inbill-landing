import React from 'react';
import Video1 from '../Asset/Videos/whyEinbillVideo1.mp4';
import { HomeGroup1, WhyGroup1, Group13, Group71, Group72, Group73, Group74, Group18, Group84, Group85, Group86, Group87 } from '../Components/Outline.jsx';

const whyeinbill = () => {
  return (
    <div className='pt-[101px] pb-[100px] flex flex-col gap-[100px]'>
      {/* 1 */}
      <div className="relative text-white">
        <video autoPlay loop playsInline muted className='w-full rounded-br-[500px]'>
          <source src={Video1} type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="text-white/80 text-center text-[64px] font-bold leading-tight w-full max-w-[1000px] flex justify-center">
            <div className="w-[870px] flex justify-center">
              Choose us because you believe in our expertise
            </div>
          </div>
          <div className="absolute bottom-10 right-10 flex flex-col items-center">
            <HomeGroup1 className="w-[50px] h-[45px]" />
            <div className="text-[#0046BA] text-center text-sm  font-bold leading-normal w-[120px] ">
              Leave your contact here
            </div>
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className='w-full flex justify-center'>
        <div className='flex flex-col gap-[100px] justify-center max-w-[1000px] w-full'>
          {/* 2.1 */}
          <div className='flex flex-col w-[1000px] justify-center text-left text-[#0046BA] text-5xl  font-bold leading-tight'>
            We can elevate your business to new heights, helping you achieve your goals with ease.
          </div>
          {/* 2.2 */}
          <div className='w-[512px] text-left text-[#0060FF] text-[32px]  font-semibold leading-tight'>
            Why You Should Choose E-inbill?
          </div>
          {/* 2.3 */}
          <div className='flex flex-col gap-[100px]'> 
            {/* 2.3.1 */}
            <div className='flex gap-[50px]'>
              <div>
                <WhyGroup1 />
              </div>
              <div className='flex flex-col gap-5'>
                <div className='text-left w-[422px] text-[#000] text-2xl font-bold  leading-tight'>
                  Customizable and Scalable Solution
                </div>
                <div className='text-left w-[820px] text-[#000] text-xl  font-medium leading-tight'>
                  You have the freedom to choose from a variety of expansion modules, such as mobile ordering, kitchen management, reservations, membership management, or a payment system with integrated e-invoice functionality. 
                  Additionally, comprehensive third-party integration solutions are available to seamlessly incorporate all aspects of your operational management into a single system.
                </div>
              </div>
            </div>
            {/* 2.3.2 */}
            <div className='flex gap-[50px]'>
              <div>
                <Group71 />
              </div>
              <div className='flex flex-col gap-5'>
                <div className='text-left w-[218px] text-[#000] text-2xl font-bold  leading-tight'>
                  e-inbill Ecosystem
                </div>
                <div className='text-left w-[810px] text-[#000] text-xl  font-medium leading-tight'>
                  Experience unparalleled efficiency and adaptability with the E-inbill Ecosystem. 
                  With a robust core POS system, customisable expansion modules, and seamless integration across various technologies, 
                  you can empower every facet of your business operations for optimal performance and success.
                </div>
              </div>
            </div>
            {/* 2.3.3 */}
            <div className='flex gap-[50px]'>
              <div>
                <Group72 />
              </div>
              <div className='flex flex-col gap-5'>
                <div className='text-left w-[553px] text-[#000] text-2xl font-bold  leading-tight'>
                  Keeping Pace with Innovation and Optimisation
                </div>
                <div className='text-left w-[810px] text-[#000] text-xl  font-medium leading-tight'>
                  We continuously analyse market trends and integrate our findings into developing new products. 
                  Our goal is to help restaurants adapt to the evolving catering landscape quickly. 
                  Our R&D team introduces products aligned with industry trends, incorporating user feedback. 
                  All new features undergo rigorous testing. 
                  Our commitment to updates ensures both speed and quality.
                </div>
              </div>
            </div>
            {/* 2.3.4 */}
            <div className='flex gap-[50px]'>
              <div>
                <Group13 />
              </div>
              <div className='flex flex-col gap-5'>
                <div className='text-left w-[567px] text-[#000] text-2xl font-bold  leading-tight'>
                  System fully supports cloud-based functionality
                </div>
                <div className='text-left w-[810px] text-[#000] text-xl  font-medium leading-tight'>
                  A small footprint can yield substantial profits! Utilising a streamlined solution enables you to optimise operational efficiency, 
                  enhance productivity, and extend your brand's online footprint, positioning you as the preferred choice while maintaining cost-effectiveness!
                </div>
              </div>
            </div>
            {/* 2.3.5 */}
            <div className='flex gap-[50px]'>
              <div>
                <Group73 />
              </div>
              <div className='flex flex-col gap-5'>
                <div className='text-left w-[242px] text-[#000] text-2xl font-bold  leading-tight'>
                  Suitable for All Sizes
                </div>
                <div className='text-left w-[805px] text-[#000] text-xl  font-medium leading-tight'>
                  No matter if you run a single restaurant, a small or medium-sized chain, or an enterprise, implementing E-inbill's restaurant solution is easy and customisable. 
                  Our system supports different structures for restaurant groups, enabling remote monitoring of operational data for individual stores. 
                  You can track revenue, average order value, foot traffic, inventory, and more through comprehensive reports. 
                  Plus, you can manage multiple brands and locations effortlessly, empowering your restaurant's growth painlessly.
                </div>
              </div>
            </div>
            {/* 2.3.6 */}
            <div className='flex gap-[50px]'>
              <div>
                <Group74 />
              </div>
              <div className='flex flex-col gap-5'>
                <div className='text-left w-[275px] text-[#000] text-2xl font-bold  leading-tight'>
                  24/7 Technical Support
                </div>
                <div className='text-left w-[820px] text-[#000] text-xl  font-medium leading-tight'>
                  e-inbill provides round-the-clock technical support, offering in-store consultations, real-time multilingual online customer service, and on-site system training. 
                  Our transparent after-sales service includes hardware maintenance and equipment rental during repairs, ensuring prompt resolution of operational issues for our customers.
                </div>
              </div>
            </div>
            {/* 2.3.7 */}
            <div className='h-[1px] bg-[#0046BA] w-full'></div>
            {/* 2.3.8 */}
            <div className='flex flex-col w-[1000px] justify-center text-left text-[#0046BA] text-5xl  font-bold leading-tight'>
              Our system is fully equipped to match the characteristics of your industry, making us the ideal choice for you.
            </div>
            {/* 2.3.9 */}
            <div className='w-[512px] text-left text-[#0060FF] text-[32px]  font-semibold leading-tight'>
              Our point of sales.
            </div>
            {/* 2.3.10 */}
            <div className='flex gap-[50px]'>
              <div>
                <Group18 />
              </div>
              <div className='flex flex-col gap-5'>
                <div className='text-left w-[107px] text-[#000] text-2xl font-bold  leading-tight'>
                  Interface
                </div>
                <div className='text-left w-[800px] text-[#000] text-xl  font-medium leading-tight'>
                  Tailor the layout to your preferences, including product descriptions, customisable options, tax regulations, receipts, categories, and more. 
                  Enjoy complete control over your interface, ensuring it perfectly aligns with your business needs.
                </div>
              </div>
            </div>
            {/* 2.3.11 */}
            <div className='flex gap-[50px]'>
              <div>
                <Group84 />
              </div>
              <div className='flex flex-col gap-5'>
                <div className='text-left  w-[99px] text-[#000] text-2xl font-bold  leading-tight'>
                  Security
                </div>
                <div className='text-left w-[800px] text-[#000] text-xl  font-medium leading-tight'>
                  Safely store all your data on a local drive, ensuring it's accessible at any time, whether you have an internet connection or not. 
                  This guarantees that your information remains secure and readily available whenever you need it, providing peace of mind and uninterrupted access.
                </div>
              </div>
            </div>
            {/* 2.3.12 */}
            <div className='flex gap-[50px]'>
              <div>
                <Group85 />
              </div>
              <div className='flex flex-col gap-5'>
                <div className='text-left  w-[103px] text-[#000] text-2xl font-bold  leading-tight'>
                  Receipts
                </div>
                <div className='text-left w-[820px] text-[#000] text-xl  font-medium leading-tight'>
                  Provide your customers with the option to choose between environmentally-friendly digital receipts or classic printed ones. 
                  This flexibility caters to diverse customer preferences, promoting sustainability while still accommodating those who prefer traditional methods.
                </div>
              </div>
            </div>
            {/* 2.3.13 */}
            <div className='flex gap-[50px]'>
              <div>
                <Group86 />
              </div>
              <div className='flex flex-col gap-5'>
                <div className='text-left  w-[104px] text-[#000] text-2xl font-bold  leading-tight'>
                  Payment
                </div>
                <div className='text-left w-[820px] text-[#000] text-xl  font-medium leading-tight'>
                  Offer your customers a range of payment options, including cash, credit/debit cards, and eWallets. 
                  This diverse selection ensures convenience and flexibility for your customers, allowing them to choose the method that best suits their preferences and needs.
                </div>
              </div>
            </div>
            {/* 2.3.14 */}
            <div className='flex gap-[50px]'>
              <div>
                <Group87 />
              </div>
              <div className='flex flex-col gap-5'>
                <div className='text-left  w-[80px] text-[#000] text-2xl font-bold  leading-tight'>
                  Offline
                </div>
                <div className='text-left w-[820px] text-[#000] text-xl  font-medium leading-tight'>
                  Keep your operations running smoothly even in the face of an unstable internet connection. 
                  Your data will be automatically saved and synchronised once the connection is reestablished, ensuring seamless continuity and minimizing disruptions to your workflow.
                </div>
              </div>
            </div>
            {/* 2.3.15 */}
            <div className='h-[1px] bg-[#0046BA] w-full'></div>
          </div>
          {/* 2.4 */}
          <div className='flex flex-col gap-[100px] justify-center'>
            {/* 2.4.1 */}
            <div className="flex justify-center">
              <div className='w-[720px] text-center text-[#0060FF] text-[32px] font-semibold leading-tight'>
                Leave your contact information to discover how E-inbill empowers merchants to achieve more.
              </div>
            </div>
            {/* 2.4.2 */}
            <div className='flex flex-col gap-[100px]'>
              <div className='flex flex-col gap-[50px]'>
                {/* Full name */}
                <div className='flex flex-col gap-[10px]'>
                  <div className="text-[#000] text-base font-bold text-left" htmlFor="fullname">
                    Full name<span className="text-[#F00] text-base  font-bold">*</span>
                  </div>
                  <input
                    type="text"
                    id="fullname"
                    className="w-full h-[60px] border border-solid bg-[#D9E3F5] border-[#0060FF] rounded-[10px] focus:outline-none focus:border-blue-600"
                  />
                </div>
                {/* Company name */}
                <div className='flex flex-col gap-[10px]'> 
                  <label className="block text-[#000] text-base font-bold text-left " htmlFor="companyname">
                    Company name<span className="text-[#F00] text-base  font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    id="companyname"
                    className="w-full h-[60px] border border-solid bg-[#D9E3F5] border-[#0060FF] rounded-[10px] focus:outline-none focus:border-blue-600"
                  />
                </div>
                {/* Contact number */}
                <div className='flex flex-col gap-[10px]'>
                  <label className="block text-[#000] text-base  font-bold text-left " htmlFor="contactnumber">
                    Contact number<span className="text-[#F00] text-base  font-bold">*</span>
                  </label>
                  <input
                    type="tel"
                    id="contactnumber"
                    className="w-full h-[60px] border border-solid bg-[#D9E3F5] border-[#0060FF] rounded-[10px] focus:outline-none focus:border-blue-600"
                  />
                </div>
                {/* Email-address */}
                <div className='flex flex-col gap-[10px]'>
                  <label className="block text-[#000] text-base  font-bold text-left " htmlFor="email">
                    Email address<span className="text-[#F00] text-base  font-bold">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full h-[60px] border border-solid bg-[#D9E3F5] border-[#0060FF] rounded-[10px] focus:outline-none focus:border-blue-600"
                  />
                </div>
                {/* Your state or location */}
                <div className='flex flex-col gap-[10px]'>
                  <label className="block text-[#000] text-base  font-bold text-left " htmlFor="location">
                    Your state or location<span className="text-[#F00] text-base  font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    id="location"
                    className="w-full h-[60px] border border-solid bg-[#D9E3F5] border-[#0060FF] rounded-[10px] focus:outline-none focus:border-blue-600"
                  />
                </div>
                {/* Your business sector */}
                <div className='flex flex-col gap-[10px]'>
                  <label className="block text-[#000] text-base  font-bold text-left " htmlFor="sector">
                    Your business sector<span className="text-[#F00] text-base  font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    id="sector"
                    className="w-full h-[60px] border border-solid bg-[#D9E3F5] border-[#0060FF] rounded-[10px] focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>
            </div>
            {/* 2.4.3 */}
            <div className="flex items-center justify-center">
              <button className="w-[600px] h-[60px] rounded-[31px] border-2 border-black" type="submit">
                <div className='flex justify-center'>
                  <div className="w-[530px] text-black text-center text-xl font-semibold leading-tight">
                    Leave your contact to schedule a complimentary demo
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default whyeinbill;
