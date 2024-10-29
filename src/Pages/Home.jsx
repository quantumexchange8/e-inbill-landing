import React from 'react';
import { useTranslation } from 'react-i18next';
import { HomeGroup1, GroupM, GroupMS, Tablet, TabletS, KFGroup1, KFGroup1S, Pos, PosS, Group11, Group11S, Group12, Group12S, Group6, Group6S, KFGroup2, KFGroup2S, Startup, StartupS, Arrow, ArrowS } from '../Components/Outline.jsx';
import beautyImage from '../Asset/Images/beautician-with-brush-applies-white-moisturizing-mask-face-young-girl-client-spa-beauty-salon-1.png';
import barista from '../Asset/Images/young-woman-barista-working-modern-coffee-shop-1.png';
import food from '../Asset/Images/couple-enjoying-food-restaurant-1.png';
import dentist from '../Asset/Images/woman-patient-dentist-1.png';
import retail from '../Asset/Images/smart-attractive-asian-female-enjoy-choose-ffitting-dress-cloth-with-cloth-rack-boutique-shop-shopping-mall-background-1.png';
import pets from '../Asset/Images/vet-with-brush-animals-woman-black-t-shirt-cat-couch-1.png';
import education from '../Asset/Images/asian-college-students-back-school-wear-facemask-keep-distance-studying-classroom-1.png';
import service from '../Asset/Images/unidentified-car-mechanic-serviceman-disassembly-checking-car-alloy-chrome-wheel-1.png';
import stock from '../Asset/Images/warehouse-managers-walking-large-storage-department-controlling-distribution-market-1.png';
import basic from '../Asset/Images/basic.png';
import standard from '../Asset/Images/standard.png';
import advanced from '../Asset/Images/advanced.png';
import Video1 from '../Asset/Videos/homeVideo1.mp4';
import Video2 from '../Asset/Videos/homeVideo2.mp4';

const Home = () => {

  const { t, i18n } = useTranslation();
  
  return (
    <div className='pt-[54px] md:pt-[113px] pb-[75px] md:pb-[100px] flex flex-col gap-[75px] md:gap-[100px]'>
      {/* 1 */} 
      <div className='flex flex-col gap-[50px] md:gap-[100px]'>
        {/* 1.2 */}
        <div className="relative text-white">
          <video autoPlay loop playsInline muted className='w-full rounded-br-[150px] md:rounded-br-[500px]'>
            <source src={Video1} type="video/mp4" />
          </video>
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-full max-w-[1000px] flex justify-center">
              <div className="w-[218px] md:w-[704px] hidden md:flex flex-col justify-center text-white/80 text-center text-2xl md:text-[64px] font-bold leading-tight">
                <div>
                  A solution to
                </div> 
                <div>
                  make payments easier
                </div>
              </div>
              <div className="md:hidden w-[218px] flex flex-col justify-center text-white/80 text-center text-2xl font-bold leading-tight">
                A solution to make payments easier
              </div>
            </div>
            <div className="absolute bottom-10 right-10 md:flex flex-col items-center hidden">
              <HomeGroup1 className="w-[50px] h-[45px]" />
              <div className="text-[#0046BA] text-center text-sm  font-bold leading-normal w-[120px] ">
                Leave your Contact
              </div>
            </div>
          </div>
        </div>
        {/* 1.3 */}
        <div className='w-full flex justify-center'>
          <div className='flex flex-col gap-[50px] md:gap-[100px] justify-center max-w-[1000px] md:w-full '>
            {/* About Us */}
            <div className='flex flex-col gap-[10px] md:gap-5 max-w-[1000px] md:w-full'>
                <div className='text-[#0046BA] w-[91px] md:w-[218px] text-xl md:text-5xl font-bold'>
                  {t('about_us')}
                </div>
                <div className='text-[#0060FF] w-[333px] md:w-[960px] text-base md:text-2xl font-medium text-left leading-tight flex flex-col gap-5 md:gap-10'> 
                  <div className='hidden md:block'>
                    <div>
                    {t('we_are_einbill')}, a division of Current Tech Industries Sdn Bhd.
                    </div>
                    <div>
                      As a technology-driven company, our core mission at E-inbill is to simplify financial processes and foster connectivity among businesses. Our objective is to streamline financial operations and facilitate seamless interactions between companies.
                    </div>
                  </div>
                  <div className='md:hidden'>
                    <div>
                      We are E-inbill, a division of
                    </div> 
                    <div>
                      Current Tech Industries Sdn Bhd.
                      As a technology-driven company, our core mission at E-inbill is to simplify financial processes and foster connectivity among businesses. 
                      Our objective is to streamline financial operations and facilitate seamless interactions between companies.
                    </div>
                  </div>
                  <div className='hidden md:block'>
                    In Malaysia, we have introduced e-invoicing products that comply with LHDN standards, serving over 300 businesses. 
                    Our clientele spans various sectors, from retail to manufacturing, with a focus on providing support to small businesses and medium-sized tech enterprises. 
                    Our solutions adhere to LHDN regulations, PEPPOL, and MDEC compliance requirements. 
                    Through close collaboration with regulatory bodies, we have achieved success in the first phase of e-invoicing implementation, positioning us as one of the few companies prepared for the second phase. 
                    Our cloud infrastructure, hosted in Malaysia, ensures data security and compliance.
                  </div>
                  <div className='md:hidden'>
                    <div>
                      In Malaysia, we have introduced
                    </div> 
                    <div>
                      e-invoicing products that comply with LHDN standards, serving over 300 businesses. 
                      Our clientele spans various sectors, from retail to manufacturing, 
                    </div>
                    <div>
                      with a focus on providing support to small businesses and medium-sized tech enterprises. 
                      Our solutions adhere to 
                    </div>
                    <div>
                      LHDN regulations, PEPPOL, and MDEC compliance requirements. 
                      Through close collaboration with regulatory bodies, we have achieved success in the first phase of e-invoicing implementation, positioning us as one of the few companies prepared for the second phase. 
                      Our cloud infrastructure, hosted in Malaysia, ensures data security and compliance.
                    </div>
                  </div>
                </div>
            </div>
            {/* Key Features */}
            <div className='flex flex-col gap-[50px] md:gap-[100px] max-w-[1000px] md:w-full'>
              <div className='flex justify-center'>
                <div className='md:w-[685px] text-[#0046BA] text-xl md:text-5xl font-bold text-center flex flex-col md:flex-row md:gap-3'>
                  <div>
                    Key Features
                  </div>
                  <div>
                    of Our Products
                  </div> 
                </div> 
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-[50px] md:gap-[200px]">
                <div className="order-2 md:order-none flex flex-col items-center gap-[10px] md:gap-[30px]">
                  <div className="hidden md:block">
                    <Tablet />
                  </div>
                  <div className="md:hidden">
                    <TabletS />
                  </div>
                  <div className="order-2 md:order-none text-black text-center text-xl font-bold leading-tight w-[198px]">Completing the transaction requires just a few clicks.</div>
                </div>
                <div className="order-3 md:order-none flex flex-col items-center gap-[10px] md:gap-[30px]">
                  <div className="hidden md:block">
                    <KFGroup1 />
                  </div>
                  <div className="md:hidden">
                    <KFGroup1S />
                  </div>
                  <div className="text-black text-center text-xl font-bold leading-tight w-[149px]">Fully compliant tax e-invoice functionality</div>
                </div>
                <div className="order-4 md:order-none flex flex-col items-center gap-[10px] md:gap-[30px]">
                  <div className='hidden md:block'>
                    <Pos />
                  </div>
                  <div className='md:hidden'>
                    <PosS />
                  </div>
                  <div className="text-black text-center text-xl font-bold leading-tight w-[140px]">Fully supports all payment methods</div>
                </div>
                <div className="order-5 md:order-none flex flex-col items-center gap-[10px] md:gap-[30px]">
                  <div className="hidden md:block">
                    <Group11 />
                  </div>
                  <div className="md:hidden">
                    <Group11S />
                  </div>
                  <div className="text-black text-center text-xl  font-bold leading-tight w-[157px]">
                    <div>
                      Unbeatable
                    </div> 
                    <div>
                      low prices you wouldn’t expect
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-none flex flex-col col-span-2 md:col-span-1 items-center gap-[30px] justify-center">
                  <div className=" flex flex-col items-center rounded-[30px] w-[150px] h-[150px] justify-center">
                    <div className='hidden md:block'>
                      <GroupM />
                    </div>
                    <div className='md:hidden'>
                      <GroupMS />
                    </div>
                  </div>
                </div>
                <div className="order-6 md:order-none flex flex-col items-center gap-[10px] md:gap-[30px]">
                  <div className="hidden md:block">
                    <Group12 />
                  </div>
                  <div className="md:hidden">
                    <Group12S />
                  </div>
                  <div className="text-black text-center text-xl font-bold leading-tight w-[218px]">Absolutely secure cloud synchronization and storage</div>
                </div>
                <div className="order-7 md:order-none flex flex-col items-center gap-[10px] md:gap-[30px]">
                  <div className="hidden md:block">
                    <Group6 />
                  </div>
                  <div className="md:hidden">
                    <Group6S />
                  </div>
                  <div className="text-black text-center text-xl  font-bold leading-tight w-[173px]">User-friendly and easy-to-use interface</div>
                </div>
                <div className="order-8 md:order-none flex flex-col items-center gap-[10px] md:gap-[30px]">
                  <div className="hidden md:block">
                    <KFGroup2 />
                  </div>
                  <div className="md:hidden">
                    <KFGroup2S />
                  </div>
                  <div className="text-black text-center text-xl  font-bold leading-tight w-[145px]">Set up and start selling within minutes</div>
                </div>
                <div className="order-9 md:order-none flex flex-col items-center gap-[10px] md:gap-[30px]">
                  <div className="hidden md:block">
                    <Startup />
                  </div>
                  <div className="md:hidden">
                    <StartupS />
                  </div>
                  <div className="text-black text-center text-xl  font-bold leading-tight w-[198px]">Customer support seven days a week for quick assistance</div>
                </div>
              </div>
              <div className='h-[1px] bg-[#0046BA] w-full' />
            </div>
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className='w-full flex justify-center'>
        <div className='flex flex-col gap-[75px] md:gap-[100px] justify-center max-w-[1000px] md:w-full '>
          {/* 2.3 */}
          <div className="flex flex-col gap-[75px] md:gap-[150px]">
            {/* 2.3.1 */}
            <div className='flex flex-col gap-[10px] md:gap-[30px]'>
              <div className='flex justify-center'>
                <div className='w-[170px] md:w-[779px] text-[#0046BA] text-xl md:text-5xl font-bold text-center '>
                  No matter what industry you're in
                </div>
              </div>
              <div>
                <div className='text-black text-base md:text-2xl font-medium text-center leading-tight flex flex-col gap-6'>
                  <div className='flex justify-center'>
                    <div className='w-[333px] md:w-[960px]'>
                      Whether a small street vendor or a large restaurant chain, E-inbill always supports your business. 
                      Hardware, software, payments, and technical support are unified under one E-inbill solution.
                    </div>
                  </div>
                  <div className='flex justify-center'>
                    <div className='w-[300px] md:w-[830px]'>
                      The E-inbill framework ensures that the entire ecosystem works seamlessly together. 
                      That is the E-inbill goal - to provide the best user experience for you and your customers.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 2.3.2 */}
            <div className='flex flex-col justify-center gap-[50px] md:gap-[100px]'>
              <div className='w-full flex justify-center'>
                <div className='w-[300px] md:w-[744px] text-[#0060FF] text-base md:text-[32px] font-semibold text-center leading-tight'>
                  The e-inbill solution is robust enough to support your business growth from small to large.
                </div>
              </div>
              <div className='flex flex-col gap-[30px] md:gap-[50px]'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-[50px]'>
                  {/* g1 */}
                  <div className="relative w-[333px] md:w-[300px] h-[501px] md:h-[600px] border-2 border-[#00A6CA] rounded-lg flex flex-col items-center justify-center md:justify-normal gap-10 md:gap-8 px-[17px] md:px-[25px] pt-[60px] pb-[40px] md:py-8">
                    <div className='absolute -top-5 inset-x-0 flex justify-center'>
                      <div className=" bg-[#00A6CA] text-white text-xl font-semibold leading-tight rounded-[10px] py-2 w-[200px] flex justify-center">Basic</div>
                    </div>
                    <div className='w-full md:min-h-[200px] flex justify-center items-center'>
                      <img src={basic} alt="Basic Plan" className="w-[243px] md:w-[200px] h-[170px] md:h-[140px]" />
                    </div>
                    <div className='text-black text-base font-bold text-left leading-tight flex flex-col gap-3 md:gap-5'>
                      <div>
                        For small shops or stalls, this is undoubtedly great news.
                      </div>
                      <div>
                        The Basic plan is extremely convenient and practical. 
                      </div>
                      <div>
                        Merchants simply need to download the E-inbill app, log in to account, and connect a Bluetooth receipt printer to start using it immediately.
                      </div>
                    </div>
                  </div>
                  {/* g2 */}
                  <div className="relative w-[333px] md:w-[300px] h-[525px] md:h-[600px] border-2 border-[#0073F6] rounded-lg flex flex-col items-center gap-3 md:gap-8 px-[17px] md:px-[25px] pt-[60px] pb-[40px] md:py-8">
                    <div className='absolute -top-5 inset-x-0 flex justify-center'>
                      <div className=" bg-[#0073F6] text-white text-xl font-semibold leading-tight rounded-[10px] py-2 w-[200px] flex justify-center">Standard</div>
                    </div>
                    <div className='w-full md:min-h-[200px] flex justify-center items-center'>
                      <img src={standard} alt="Basic Plan" className="w-[200px] h-[140x]" />
                    </div>
                    <div className='text-black text-base font-bold text-left leading-tight flex flex-col gap-3 md:gap-5'>
                      <div>
                        For small to medium-sized food and beverage establishments, we understand that providing a comfortable experience for customers is absolutely crucial.
                      </div>
                      <div>
                        The Standard plan fully addresses this concern. 
                      </div>
                      <div>
                        With mobile devices, customers can complete their payments without the hassle of waiting in long lines.
                      </div>
                    </div>
                  </div>
                  {/* g3 */}
                  <div className="relative w-[333px] md:w-[300px] h-[534px] md:h-[600px] border-2 border-[#0046BA] rounded-lg flex flex-col items-center gap-5 md:gap-8 px-[17px] md:px-[25px] pt-[40px] pb-[40px] md:py-8">
                    <div className='absolute -top-5 inset-x-0 flex justify-center'>
                      <div className=" bg-[#0046BA] text-white text-xl font-semibold leading-tight rounded-[10px] py-2 w-[200px] flex justify-center">Advanced</div>
                    </div>
                    <div className='w-full md:h-[200px] flex justify-center items-center'>
                      <img src={advanced} alt="Basic Plan" className="w-[200px] h-[140x]" />
                    </div>
                    <div className='text-black text-base font-bold text-left leading-tight flex flex-col gap-3 md:gap-5'>
                      <div>
                        Restaurant management necessitates choosing a POS system that integrates all functions.
                      </div>
                      <div>
                        Whether it's cross-departmental communication, branch performance reports, or providing exceptional customer service, our POS system puts restaurant technology in your hands. 
                      </div>
                      <div>
                        enabling you to impress customers, reduce workload, and stand out!
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <button className="w-[260px] md:w-[400px] h-[40px] md:h-[60px] rounded-[31px] border-2 border-black shadow-submit flex items-center justify-center gap-[20px] md:gap-[30px]">
                    <div className="w-[181px] md:w-[226px] text-black text-center text-base md:text-[20px] font-semibold">See all products details</div>
                    <div className='hidden md:block'>
                      <Arrow />
                    </div>
                    <div className='md:hidden'>
                      <ArrowS />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3 */}
      <div className="relative text-white">
        <video autoPlay loop playsInline muted className='w-full'>
          <source src={Video2} type="video/mp4" />
        </video>
        <div className="absolute inset-0 md:flex justify-center items-center hidden">
          <div className="text-white/80 text-center text-[64px] font-bold leading-tight w-full max-w-[1000px]">
            <div>
              Don't let tedious steps
            </div> 
            <div>
              hinder your business progress
            </div>
          </div>
        </div>
      </div>

      {/* 4 */}
      <div className="w-full flex justify-center">
        <div className="flex flex-col gap-[50px] md:gap-[100px] justify-center max-w-[1000px] md:w-full">
          {/* 4.1 */}
          <div className='flex flex-col gap-[30px] md:gap-[100px] justify-center max-w-[1000px] w-full'>
            {/* 4.1.1 */}
            <div className='flex flex-col gap-[10px] md:gap-[30px]'>
              <div className='flex justify-center'>
                <div className='w-[327px] md:w-[784px] text-[#0046BA] text-center text-xl md:text-5xl font-bold'>
                  You cannot resist the advantages that the product offers you
                </div>
              </div>
              <div className='w-[333px] md:w-full text-black text-base md:text-2xl font-medium leading-tight'>
                We offer more than just a POS, payment terminal, or e-invoice. 
                The E-inbill solution can be customised for F&B, beauty, and retail stores. 
                No matter what type of business you have, choosing E-inbill is the start of leveraging your advantages.
              </div>
            </div>
            {/* 4.1.2 */}
            <div className='flex flex-col gap-[30px] md:gap-[50px]'>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px] md:gap-[50px]">
                <div className="relative w-[333px] md:w-[300px] h-[100px] md:h-[200px] flex-shrink-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center rounded-md"
                        style={{ backgroundImage: `url(${beautyImage})` }}
                    />
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="flex md:flex-col text-white text-center text-sm md:text-xl font-bold leading-tight gap-[3px] md:gap-0">
                          <div>
                            Beauty, 
                          </div>
                          <div>
                            Salon & Spas
                          </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-[333px] md:w-[300px] h-[100px] md:h-[200px] flex-shrink-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center rounded-md"
                        style={{ backgroundImage: `url(${barista})` }}
                    />
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="flex md:flex-col text-white text-center text-sm md:text-xl font-bold leading-tight gap-[3px] md:gap-0">
                          <div>
                            Cafes, Beverage
                          </div> 
                          <div>
                            & Quick Service
                          </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-[333px] md:w-[300px] h-[100px] md:h-[200px] flex-shrink-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center rounded-md"
                        style={{ backgroundImage: `url(${food})` }}
                    />
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="flex md:flex-col text-white text-center text-sm md:text-xl font-bold leading-tight gap-[3px] md:gap-0">
                          <div>
                            Food, Restaurant,
                          </div>
                          <div>
                            Bar & Bistros
                          </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-[333px] md:w-[300px] h-[100px] md:h-[200px] flex-shrink-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center rounded-md"
                        style={{ backgroundImage: `url(${dentist})` }}
                    />
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="flex md:flex-col text-white text-center text-sm md:text-xl font-bold leading-tight gap-[3px] md:gap-0">
                          <div>
                            Health
                          </div> 
                          <div>
                            & Medical
                          </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-[333px] md:w-[300px] h-[100px] md:h-[200px] flex-shrink-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center rounded-md"
                        style={{ backgroundImage: `url(${retail})` }}
                    />
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="flex md:flex-col text-white text-center text-sm md:text-xl font-bold leading-tight">
                        Retail Shops
                        </div>
                    </div>
                </div>
                <div className="relative w-[333px] md:w-[300px] h-[100px] md:h-[200px] flex-shrink-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center rounded-md"
                        style={{ backgroundImage: `url(${pets})` }}
                    />
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="flex md:flex-col text-white text-center text-sm md:text-xl font-bold leading-tight gap-[3px] md:gap-0">
                          <div>
                            Pets & 
                          </div>
                          <div>
                            Grooming
                          </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-[333px] md:w-[300px] h-[100px] md:h-[200px] flex-shrink-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center rounded-md"
                        style={{ backgroundImage: `url(${education})` }}
                    />
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="flex md:flex-col text-white text-center text-sm md:text-xl font-bold leading-tight gap-[3px] md:gap-0">
                          <div>
                            Courses, Tuitions 
                          </div>
                          <div>
                            & Education
                          </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-[333px] md:w-[300px] h-[100px] md:h-[200px] flex-shrink-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center rounded-md"
                        style={{ backgroundImage: `url(${service})` }}
                    />
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="flex md:flex-col text-white text-center text-sm md:text-xl font-bold leading-tight gap-[3px] md:gap-0">
                          <div>
                            Automotive 
                          </div>
                          <div>
                            & Service
                          </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-[333px] md:w-[300px] h-[100px] md:h-[200px] flex-shrink-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center rounded-md"
                        style={{ backgroundImage: `url(${stock})` }}
                    />
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="flex md:flex-col text-white text-center text-sm md:text-xl font-bold leading-tight gap-[3px] md:gap-0">
                          <div>
                            Wholesales
                          </div> 
                          <div>
                            & Stock
                          </div>
                        </div>
                    </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button className="w-[260px] md:w-[400px] h-10 md:h-[60px] rounded-[31px] border-2 border-black shadow-submit flex items-center justify-center gap-5 md:gap-[30px]">
                  <div className="text-black text-center text-base md:text-xl font-semibold">See all products details</div>
                  <div className='hidden md:block'>
                    <Arrow />
                  </div>
                  <div className='md:hidden'>
                    <ArrowS />
                  </div>
                </button>
              </div>
            </div>
          </div>
          {/* 4.2 */}
          <div className='h-[1px] bg-[#0046BA] w-full' />
        </div>
      </div>

      {/* 5 */}
      <div className='w-full flex justify-center'>
        <div className='flex flex-col gap-[100px] justify-center max-w-[1000px] w-full'>
          <div className='flex flex-col gap-[50px] md:gap-[100px] justify-center'>
            {/* 5.1 */}
            <div className="flex justify-center">
              <div className='w-[280px] md:w-[763px] text-center text-[#0060FF] text-base md:text-[32px] font-semibold leading-tight'>
                Join millions of successful E-inBill merchants and usher in a new era for your business
              </div>
            </div>
            {/* 5.2 */}
            <div className='flex flex-col'>
              <form className='flex flex-col gap-[50px] md:gap-[100px]'>
                {/* Content */}
                <div className='flex flex-col items-center gap-[30px] md:gap-[50px]'>
                  {/* Full name */}
                  <div className='flex flex-col gap-[10px] w-full'>
                    <div className="text-[#000] text-sm md:text-base font-bold text-left" htmlFor="fullname">
                      Full name<span className="text-[#F00] text-sm md:text-base font-bold">*</span>
                    </div>
                    <input
                      type="text"
                      id="fullname"
                      className="w-[300px] md:w-full h-10 md:h-[60px] border border-solid bg-[#D9E3F5] border-[#0060FF] rounded-[5px] md:rounded-[10px] focus:outline-none focus:border-blue-600"
                    />
                  </div>
                  {/* Company name */}
                  <div className='flex flex-col gap-[10px]  w-full'> 
                    <label className="block text-[#000] text-sm md:text-base font-bold text-left " htmlFor="companyname">
                      Company name<span className="text-[#F00] text-sm md:text-base font-bold">*</span>
                    </label>
                    <input
                      type="text"
                      id="companyname"
                      className="w-[300px] md:w-full h-10 md:h-[60px] border border-solid bg-[#D9E3F5] border-[#0060FF] rounded-[5px] md:rounded-[10px] focus:outline-none focus:border-blue-600"
                    />
                  </div>
                  {/* Contact number */}
                  <div className='flex flex-col gap-[10px] w-full'>
                    <label className="block text-[#000] text-sm md:text-base font-bold text-left " htmlFor="contactnumber">
                      Contact number<span className="text-[#F00] text-sm md:text-base font-bold">*</span>
                    </label>
                    <input
                      type="tel"
                      id="contactnumber"
                      className="w-[300px] md:w-full h-10 md:h-[60px] border border-solid bg-[#D9E3F5] border-[#0060FF] rounded-[5px] md:rounded-[10px] focus:outline-none focus:border-blue-600"
                    />
                  </div>
                  {/* Email-address */}
                  <div className='flex flex-col gap-[10px] w-full'>
                    <label className="block text-[#000] text-sm md:text-base font-bold text-left " htmlFor="email">
                      Email address<span className="text-[#F00] text-sm md:text-base font-bold">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-[300px] md:w-full h-10 md:h-[60px] border border-solid bg-[#D9E3F5] border-[#0060FF] rounded-[5px] md:rounded-[10px] focus:outline-none focus:border-blue-600"
                    />
                  </div>
                  {/* Your state or location */}
                  <div className='flex flex-col gap-[10px] w-full'>
                    <label className="block text-[#000] text-sm md:text-base font-bold text-left " htmlFor="location">
                      Your state or location<span className="text-[#F00] text-sm md:text-base font-bold">*</span>
                    </label>
                    <input
                      type="text"
                      id="location"
                      className="w-[300px] md:w-full h-10 md:h-[60px] border border-solid bg-[#D9E3F5] border-[#0060FF] rounded-[5px] md:rounded-[10px] focus:outline-none focus:border-blue-600"
                    />
                  </div>
                  {/* Your business sector */}
                  <div className='flex flex-col gap-[10px] w-full'>
                    <label className="block text-[#000] text-sm md:text-base font-bold text-left " htmlFor="sector">
                      Your business sector<span className="text-[#F00] text-sm md:text-base font-bold">*</span>
                    </label>
                    <input
                      type="text"
                      id="sector"
                      className="w-[300px] md:w-full h-10 md:h-[60px] border border-solid bg-[#D9E3F5] border-[#0060FF] rounded-[5px] md:rounded-[10px] focus:outline-none focus:border-blue-600"
                    />
                  </div>
                </div>
                {/* Submit */}
                <div className="flex items-center justify-center">
                  <button className="w-[333px] md:w-[600px] h-[60px] rounded-[31px] border-2 border-black shadow-submit" type="submit">
                    <div className='flex justify-center'>
                      <div className="w-[243px] md:w-[530px] text-black text-center md:text-xl text-base font-semibold leading-tight">
                        Leave your contact to schedule a complimentary demo
                      </div>
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;

