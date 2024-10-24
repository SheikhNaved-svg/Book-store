import react from 'react';
import { useState,useEffect } from 'react';
import {  FaBarsStaggered, FaXmark,FaBlog, FaX } from "react-icons/fa6";
import {Link} from 'react-router-dom'

export default function Navbar(){
    const[issticky,setIssticky]=useState(false)
    const[menutoggle,setMenutoggle]=useState(false)

    const toglehandler=()=>{
    setMenutoggle(!menutoggle)
    }

    useEffect(()=>{
        const scrollHandle=()=>{
            if(window.scrollY > 100){
                setIssticky(true)
            }
            else{
                setIssticky(false)
            }
        }

        window.addEventListener("scroll",scrollHandle)
        return ()=>{
            window.addEventListener("scroll",scrollHandle)
        }
    },[])
    const navitem=[
        {link:"Home", path:"/"},
        {link:"About", path:"/about"},
        {link:"Shop", path:"/shop"},
        {link:"Sell Your book", path:"/admin/dashboard"},
        {link:"Blog", path:"/blog"}

    ]
return(
      <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
        <nav className={`px-4 py-4 lg:px-24 ${issticky? 'sticky top-0 left-0 right-0 bg-blue-300' : ''}  `}>
            <div className='flex flex-row justify-between items-center gap-8 text-base'>
                {/* logo */}
                <Link to="/" className='flex text-2xl items-center text-blue-700 font-bold'><FaBlog/>Books</Link>

                {/* navite for lg screen */}
                <ul className='md:flex hidden gap-12'>
                    {
                     navitem.map((item) => <Link className='upperclass text-black text-base curser-pointer text-base hover:text-blue-700' key={item.path} to={item.path} > {item.link}</Link>)
                    }
                </ul>

                <div className='hidden lg:flex items-center'>
                    <button><FaBarsStaggered /></button>
                </div>

                {/* menu button for mobile device */}
                
                <div className='block md:hidden'>
                    <button onClick={()=>setMenutoggle(!menutoggle)}>
                        {menutoggle ? <FaXmark className='hover:text-blue-700 text-2xl'/> : <FaBarsStaggered className='hover:text-blue-700 text-2xl'/>}
                    </button>
                </div>





            </div>
            {/*nav item for sm deviced*/}
            <div className={`mt-14 px-4 py-7 bg-blue-700 ${menutoggle? 'block fixed top-0 right-0 left-0':'hidden'} flex-col md:hidden `}>
                {navitem.map((item)=>(
                    <Link className='uppercase hover:text-black  text-white text-xl flex cursor-pointer' to={item.path} key={item.path} >{item.link}</Link>
                ))}
            </div>
           
        </nav>
      </header>
    )
}