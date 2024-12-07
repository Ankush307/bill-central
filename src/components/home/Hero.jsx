import React from 'react'
import HeroImg from '../../assets/image/webp/hero-sec-img.webp'
import {ButtonLogoWhite } from '../../utils/Icons'
const Hero = () => {
  return (
    <div className='bg-no-repeat bg-center'>
      <div className="container mx-auto max-w-[1140px] max-xl:px-5">
        <div className="flex flex-wrap items-center justify-center w-full">
          <div className="lg:w-1/2 justify-center flex flex-col pt-[75px]">
            <h1 className='lg:text-[64px] md:text-5xl sm:text-4xl text-3xl text-white leading-[110%] lg:text-start text-center max-lg:max-w-[638px] max-lg:mt-10'>Easily Compare <span className='font-bold'>Energy, Gas, And Internet</span> Plans</h1>
            <p className='text-[#E6EDF0] opacity-[90%] pt-4 pb-[42px] max-w-[630px] lg:mx-0 mx-auto lg:text-start text-center lg:pr-3'>Find and switch to the best energy, gas, and internet plans with ease. Our platform simplifies your search, letting you compare providers and make informed decisions, all in one place.</p>
            <form>
              <div className="bg-white py-[9px] pl-[22px] pr-[9px] flex rounded-r-[50px] rounded-bl-[20px] max-w-[476px] gap-4 lg:mx-0 mx-auto">
                <input className='w-full outline-none text-[#7F8A8E]' type="email" placeholder='Start typing your address ' required />
                <button className='bg-[#00A8E8] text-white flex px-5 py-3 rounded-r-[50px] rounded-bl-[50px]'>Compare <ButtonLogoWhite/> </button>
              </div>
            </form>
          </div>
          <div className="lg:w-1/2 items-center relative justify-center flex flex-col">
            <img className='max-w-[621px] py-10 w-full lg:translate-y-[120px]' src={HeroImg} alt="hero img" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero