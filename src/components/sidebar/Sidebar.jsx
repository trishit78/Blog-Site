import React from 'react'

import './sidebar.css'

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SearchIcon from '@mui/icons-material/Search';

function Sidebar() {
  return (
    <div className='basis-1/3 mr-8 mb-40 '>
      
      <hr className='mt-2' style={{border: '0.5px',border: 'solid'}} />
      <h1 className='text-bold text-center text-2xl mt-2 mb-2'>ABOUT ME</h1>
        
      <hr className='mb-2' style={{border: '0.5px',border: 'solid'}} />
    <img className='aboutImg' src="https://images.pexels.com/photos/60778/pexels-photo-60778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="aboutmepic" />
    <p className='mt-3 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laborum ea, aliquid temporibus fugit accusantium blanditiis amet pariatur adipisci sequi numquam ipsa vero iusto commodi facere quasi asperiores fuga esse.</p>

    <div className='w-1/2 ml-24'>
    <hr className='mb-2' style={{border: '0.5px',border: 'solid'}} />
    <h1 className='text-bold text-center text-xl'>CATERGORY</h1>
    <hr className='mt-2' style={{border: '0.5px',border: 'solid'}} />
    
    </div>

    <ul className='flex flex-wrap flex-col text-center '>
       
       <li >Life</li>
        <li >Life</li>

        <li >Life</li>
        <li >Life</li>
        <li >Life</li>
        <li >Life</li>
      

    </ul>

    <hr className='mb-2' style={{border: '0.5px',border: 'solid'}} />
    <h1 className='text-bold text-center text-xl'>SOCIALS</h1>
    <hr className='mt-2' style={{border: '0.5px',border: 'solid'}} />

    <div className='text-center space-x-4 mt-4'>
    <FacebookIcon/>
        <InstagramIcon/>
        <TwitterIcon/>
        <WhatsAppIcon/>
    </div>
    
     </div>
  )
}

export default Sidebar
