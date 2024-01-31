import "./header.css";
import "./../../style/common.css";
import logoImg from "./../../assets/icon/logo.svg";
import userImg from "./../../assets/icon/user.svg";

function Header() {
   return (
      <div className="header">
         <div className="container">
            <div className="header-row">
               <div className="navbar">
                  <div className="logo">
                     <span>Create</span>
                     <img src={logoImg} alt="Logo" />
                  </div>
                  <nav className="nav">
                     <ul>
                        <li>
                           <a href="#">About Us</a>
                        </li>
                        <li>
                           <a href="#">Courses</a>
                        </li>
                        <li>
                           <a href="#">Events</a>
                        </li>
                        <li>
                           <a href="#">Blog</a>
                        </li>
                        <li>
                           <a href="#">Contacts</a>
                        </li>
                     </ul>
                  </nav>
               </div>
               <div className="user-block">
                  <button>Get consultation</button>
                  <a href="#">
                     <img src={userImg} alt="" />
                     <span>Log in / Register</span>
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Header;
