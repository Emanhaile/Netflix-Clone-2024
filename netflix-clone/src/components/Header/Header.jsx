// // import React from 'react'

// // import { Navbar, Nav } from 'react-bootstrap';
// // import NetflixLogo from '../../assets/images/netflix-logo-0.png';
// // import SearchIcon from '@mui/icons-material/Search';
// // import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// // import AccountBoxIcon from '@mui/icons-material/AccountBox';
// // import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// // import classes from '../Header/header.module.css'
// // import { useState } from 'react';
// // // import { RxHamburgerMenu } from "react-icons/rx";

// // function Header() {
// //   const [menuOpen, setMenuOpen] = useState()
// //   const toggleMenu = () => {
// //         setMenuOpen((prev) => !prev);
// //       }
// //   return (
// //     <div className={classes.header_outer_container}>
// //       <div className={classes.header_Container}>
// //         <div className={classes.header_left}>
// //             <div className={classes.dropdown1}>
// //                     <button onClick= {toggleMenu} className = {classes.menuToggle}> ☰ </button>
// //                 <ul
// //                   className={menuOpen ? classes.dropdownOpen : classes.dropdownClosed}
// //                 >
// //                     <li><img src={NetflixLogo} alt="Netflix Logo" width ="100"/></li>
// //                     <li>Home</li>
// //                     <li>TvShows</li>
// //                     <li>Movies</li>
// //                     <li>Latest</li>
// //                     <li>MyList</li>
// //                     <li>Browse by Languages</li>
// //                   </ul>
// //             </div>

// //         </div>
// //         <div className={classes.header_right}>
// //             <ul />
// //                 <li><SearchIcon/></li>
// //                 <li><NotificationsNoneIcon/></li>
// //                 <li><AccountBoxIcon/></li>
// //                 <li><ArrowDropDownIcon/></li>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Header;
// import React, { useState } from 'react';
// import { Navbar, Nav } from 'react-bootstrap';
// import NetflixLogo from '../../assets/images/netflix-logo-0.png';
// import SearchIcon from '@mui/icons-material/Search';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import AccountBoxIcon from '@mui/icons-material/AccountBox';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import classes from '../Header/header.module.css';

// function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen((prev) => !prev);
//   };

//   return (
//     <div className={classes.header_outer_container}>
//       <div className={classes.header_Container}>
//         <div className={classes.header_left}>
//           <div className={classes.dropdown1}>
//             {/* Menu Toggle Button */}
//             <li>
//                 <img src={NetflixLogo} alt="Netflix Logo" width="100" />
//               </li>
//             <button onClick={toggleMenu} className={classes.menuToggle}>
//               ☰
//             </button>
//             {/* Dropdown Menu */}
//             <ul
//               className={
//                 menuOpen ? classes.dropdownOpen : classes.dropdownClosed
//               }
//             >

//               <li>Home</li>
//               <li>TvShows</li>
//               <li>Movies</li>
//               <li>Latest</li>
//               <li>MyList</li>
//               <li>Browse by Languages</li>
//             </ul>
//           </div>
//         </div>
//         <div className={classes.header_right}>
//           <ul className={classes.iconMenu}>
//             <li>
//               <SearchIcon />
//             </li>
//             <li>
//               <NotificationsNoneIcon />
//             </li>
//             <li>
//               <AccountBoxIcon />
//             </li>
//             <li>
//               <ArrowDropDownIcon />
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;

import React, { useState } from "react";
import NetflixLogo from "../../assets/images/netflix-logo-0.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import classes from "../Header/header.module.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className={classes.header_outer_container}>
      <div className={classes.header_Container}>
        <div className={classes.header_left}>
          {/* Netflix Logo */}
          <img src={NetflixLogo} className={classes.logo} alt="Netflix Logo" width="100" />
          {/* Burger Menu Button */}
          <button onClick={toggleMenu} className={classes.menuToggle}>
            ☰
          </button>

          {/* Navigation Menu */}
          <ul
            className={`${classes.navMenu} ${
              menuOpen ? classes.menuOpen : classes.menuClosed
            }`}
          >
            <li>Home</li>
            <li>TvShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className={classes.header_right}>
        <ul >
          <li className={classes.iconMenu}>
            <SearchIcon />
          </li>
          <li className={classes.iconMenu}>
            <NotificationsNoneIcon />
          </li>
          <li className={classes.iconMenu}>
            <AccountBoxIcon />
          </li>
          <li className={classes.iconMenu}>
            <ArrowDropDownIcon />
          </li>
        </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
