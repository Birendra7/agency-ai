import React from 'react'
import assets from '../assets/assets'

export default function Navbar({theme, setTheme}) {

    const [sidebar, setSidebar] = React.useState(false)
  return (
    <div className='flex justify-between items-center px-4 sm:px-12
    lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-mediu bg-white/50 dark:bg-gray-900/70'>

    <img src={theme === 'dark'? assets.logo_dark : assets.logo} className='w-32 sm:w-40' alt='Logo' />

    <div className={`text-gray-700 dark:text-white sm:text-sm ${!sidebar ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed 
    top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white
    max-sm:pt-20 flex sm:items-center gap-5 transition-all`}>

        <img src={assets.close_icon} alt='close icon' className='w-5  absolute top-4 right-4 cursor-pointer sm:hidden' onClick={() => setSidebar(false)} />

        <a onClick={() => setSidebar(false)} href='#' className='sm:hover:border-b'>Home</a>
        <a onClick={() => setSidebar(false)} href='#' className='sm:hover:border-b'>Services</a>
        <a onClick={() => setSidebar(false)} href='#' className='sm:hover:border-b'>Our Work</a>
        <a onClick={() => setSidebar(false)} href='#' className='sm:hover:border-b'>Contact Us</a>
    </div>
    <div className='flex items-center gap-2 sm:gap-4'>

        <img src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon} alt='theme icon' className='w-8 sm:hidden' onClick={() => setSidebar(true)} />

        <a href= '#contact-us' className='text-sm max-sm:hidden  flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full cursor-pointer hover:scale-103 transition-all'>
        contact <img src={assets.arrow_icon} alt='arrow icon' className='w-3.5 h-3.5' />
        </a>
    </div>

    </div>
  )
}
