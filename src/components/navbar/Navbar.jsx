
import './navbar.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
function Navbar() {

  const user=false;
  return (
    <div className='flex w-full align-center h-12 pb-4 mb-4  ' >
      <div className='w-1/3 flex ml-12 mt-6 space-x-4'>
        <FacebookIcon/>
        <InstagramIcon/>
        <TwitterIcon/>
        <WhatsAppIcon/>
      </div>
      <div className='w-1/3 '>
        <ul className='flex mt-6 space-x-6 text-2xl align-middle'>
            <li><Link  to={'/'}>Home</Link></li>
            <li>About</li>
            <li>Contact</li>
            <li><Link  to={'/publish'}>Write</Link></li>
           {
            user && (

              <li>Logout</li>
            )
           } 
        </ul>
      </div>
      <div className='w-1/3 flex '>
        

           {
            user ? (
              <Link to={'/settings'}>
        
        <img className='image ml-24 mt-3' src='https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="photo" />

        </Link>
            ): (<Link to={'/signin'}>
        
            <img className='image ml-24 mt-3' src='https://images.pexels.com/photos/2531709/pexels-photo-2531709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="photo" />
    
            </Link>)
           }

        
        <div className='mt-6 ml-4' >
        <SearchIcon/>

        </div>
      </div>
    </div>
  )
}

export default Navbar;



