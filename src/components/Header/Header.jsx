// import React from 'react'
// import { Link } from 'react-router-dom'
// import logo from "../../assets/logo 2.svg"
// import Search from "../../assets/iconsearch.svg"
// import Cart from "../../assets/iconcart.svg"
// import User from "../../assets/iconuser.svg"
// import "./Header.css"

// function Header() {
//   return (
//     <div className='container'>
//        <div className="navbar-collapse">
//             <ul className='pages'>
//               <li className="active">
//                 <Link to="/"><img src={logo} alt="logo" /></Link>
//               </li>
//               <li className="smartphone">
//                 <Link to="/smartphone">Smartphone</Link>
//               </li>
//               <li className="tv">
//                <Link to="/tv">TV</Link>
//               </li>
//               <li className='laptop'>
//                 <Link to="/laptop">Laptop</Link>
//               </li>
//               <li className='ksesoris'>
//                 <Link to="/aksesoris">Aksesoris</Link>
//               </li>
//             </ul>
//             <div className='icons'>
//               <img src={Search} alt="iconsearch" className='iconsearch' />
//               <img src={Cart} alt="iconcart" className='iconcart'/>
//               <img src={User} alt="iconuser" className='iconuser' />
//             </div>
//           </div>
//     </div>
//   )
// }

// export default Header
import React from 'react'

function Header() {
  return (
    <div>
              <header class="header container">
                <div class="header_links">
                    <a href="/" class="logo">
                        <h2>greenmind</h2>
                    </a>

                    <nav class="nav">
                        <ul class="nav_list">
                            <li class="nav_item">
                                <a class="nav_link linked" href="/">Home</a>
                            </li>
                            <li class="nav_item">
                                <a class="nav_link" href="#">Products</a>
                            </li>
                            <li class="nav_item">
                                <a class="nav_link" href="#">Contacts</a>
                            </li>
                        </ul>
                    </nav>
                </div>

               
            </header>
    </div>
  )
}

export default Header