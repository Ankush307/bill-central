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
        <div className='bg-smoky-back'>
            <div className='flex justify-between items-center container py-4 mx-auto max-lg:px-5'>
                <div className='items-center'>
                    <a href="/">
                        <img src={PageLogo} alt="Page_Logo" /></a>
                </div>
                <button
                    onClick={handleOpen}
                    className={`hidden size-6 justify-center relative z-50 max-lg:flex flex-col overflow-hidden`} >
                    <span
                        className={`w-6 transition-all duration-300 h-0.5 bg-white mb-1 rounded-md ${open ? 'translate-x-10' : ''}`}
                    ></span>
                    <span
                        className={`w-6 transition-all duration-300 h-0.5 bg-white mb-1 rounded-md relative after:w-full after:h-full after:bg-white after:absolute after:top-0 after:left-0 after:rounded-md ${open ? 'rotate-45 after:rotate-90' : ''}`}
                    ></span>
                    <span
                        className={`w-6 transition-all duration-300 h-0.5 bg-white rounded-md ${open ? '-translate-x-10' : ''}`}
                    ></span>
                </button>
                <div className={`flex gap-10 max-lg:flex-col max-lg:fixed max-lg:top-0 max-lg:w-full max-lg:h-screen max-lg:justify-center max-lg:items-center max-lg:bg-ball-blue max-lg:transition-all max-lg:duration-300 ${open ? 'max-lg:left-0' : 'left-full'}`}>
                    {HERDER_LIST.map((data, i) => (
                        <a onClick={closeNavbar} className='whitespace-nowrap hover:text-ferrari-red transition-all duration-300 text-blue-chalk leading-150 text-[22px] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-ferrari-red after:transition-all after:duration-300 hover:after:w-full after:' href={data.link} key={i}>{data.name}</a>
                    )
                    )}
                    <button className='flex lg:hidden items-center gap-1 py-3 px-[27px] font-bold text-base rounded-[0_50px_50px_20px] bg-white'>
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