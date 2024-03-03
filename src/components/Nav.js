/* import Logo from '../icons_assets/Logo.svg'; */
/* import Hamburgermenu from '../icons_assets/🦆 icon _hamburger menu_.svg'; */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
/* import '../styles/style.css'; */
import { Outlet, Link } from "react-router-dom";
function Nav() {
    const collapse=()=>{
        document.querySelector('#menu').classList.toggle('hidden');
       }
    return(
        <>
        <nav className='container-fluid w-full bg-[#5e5e5e] md:flex md:flex-row md:justify-between'>
            <div className="p-2 grid content-center">
                <div className='h-[42px] grid content-center'>{/* <img src={Logo} alt='brand Logo' /> */}Logo</div>
                <div className='col-start-12 grid content-center' ><button className='md:hidden' onClick={collapse}><FontAwesomeIcon className='bar-icon' icon={faBars} /></button></div>
            </div>
            <div className='hidden md:grid md:col-span-5' id='menu'>
                <ul className='menu md:flex md:justify-center md:flex-row my-auto'>
                    <li className='py-2 md:px-2' ><Link to='/'>Books</Link></li>
                    <li className='py-2 md:px-2' ><Link to='/addBooks'>Add Books</Link></li>
                    <li className='py-2 md:px-2'><Link to='/customerBooks'>customer Books</Link></li>
                    <li className='py-2 md:px-2'><Link to='/Orders'>Orders</Link></li>
                    <li className='py-2 md:px-2'><Link to='/orderNew'>Order New</Link></li>
                    <li className='py-2 md:px-2'><Link to='/About'>About</Link></li>
                </ul>
            </div>

        </nav>
         <Outlet />
         </>

    );
}

export default Nav;