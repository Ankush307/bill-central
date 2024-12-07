import React, { useState, useEffect } from 'react'
import { HERDER_LIST } from '../utils/Helper'
import { ButtonArrow } from '../utils/Icons'
import PageLogo from '../assets/image/webp/page-logo.webp'

const Header = () => {

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(!open)

    const closeNavbar = () => {
        setOpen(false);
    };

    useEffect(() => {
        const handleOverflow = () => {
            if (open && window.innerWidth < 1024) {
                document.body.classList.add("overflow-hidden");
            } else {
                document.body.classList.remove("overflow-hidden");
            }
        };
        handleOverflow();
        window.addEventListener("resize", handleOverflow);
        return () => {
            window.removeEventListener("resize", handleOverflow);
        };
    }, [open]);

    return (
        <div className='bg-smoky-back -mb-24'>
            <div className='flex justify-between items-center pt-4 container max-w-[1140px] mx-auto max-xl:px-5 '>    
                <div className='items-center'>
                    <a href="/" className='z-50 relative'>
                        <img src={PageLogo} alt="Page_Logo" /></a>
                </div>
                <button
                    onClick={handleOpen}
                    className={`hidden size-7 justify-center relative z-50 max-lg:flex flex-col overflow-hidden`} >
                    <span
                        className={`w-7 transition-all duration-300 h-[3px] bg-white mb-1 rounded-md ${open ? 'translate-x-10' : ''}`}
                    ></span>
                    <span
                        className={`w-7 transition-all duration-300 h-[3px] bg-white mb-1 rounded-md relative after:w-full after:h-full after:bg-white after:absolute after:top-0 after:left-0 after:rounded-md ${open ? 'rotate-45 after:rotate-90' : ''}`}
                    ></span>
                    <span
                        className={`w-7 transition-all duration-300 h-[3px] bg-white rounded-md ${open ? '-translate-x-10' : ''}`}
                    ></span>
                </button>
                <div className={`flex gap-6 max-lg:flex-col max-lg:fixed max-lg:top-0 max-lg:w-full max-lg:h-screen max-lg:justify-center z-10 max-lg:items-center max-lg:bg-[#00A8E8] max-lg:transition-all max-lg:duration-300 ${open ? 'max-lg:left-0' : 'left-full'}`}>
                    {HERDER_LIST.map((data, i) => (
                        <a onClick={closeNavbar} className='whitespace-nowrap transition-all duration-300 text-white leading-150 text-[18px] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] max-lg:text-[22px] after:bg-ferrari-red after:transition-all after:duration-300 hover:after:w-full after:' href={data.link} key={i}>{data.name}</a>
                    )
                    )}
                    <button className='flex lg:hidden items-center gap-1 py-3 px-[27px] !text-lg font-bold text-base rounded-[0_50px_50px_20px] bg-white'>
                        Get Started
                        <ButtonArrow />
                    </button>
                </div>
                <button className='flex max-lg:hidden items-center gap-1 py-3 px-[27px] font-bold text-base rounded-[0_50px_50px_20px] bg-white'>
                    Get Started
                    <ButtonArrow />
                </button>
            </div>
        </div>
    )
}

export default Header