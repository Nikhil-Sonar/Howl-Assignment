import {useState} from 'react';
import './Header.css';
import webLogo from 'D:/nikhil sonar/NIKHIL SONAR BACKUP/Nodejsprac/HowlAssignment/howl/src/assets/wolf-logo.png';
import hamburger from 'D:/nikhil sonar/NIKHIL SONAR BACKUP/Nodejsprac/HowlAssignment/howl/src/assets/menu-icon.png';

 const HeaderComp = () => {
    const [countMenu, SetCountMenu] = useState();
    const [mobileview , setMobileview] = useState();



    const openNav = () => {
        document.getElementById("mySidenav").style.width = "300px";
        SetCountMenu("d-none");
        setMobileview("sidenav-bar");
      }
      
      const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
        SetCountMenu("");
        setMobileview("");
      }

  return (
    <section className='header'>
        <div className='header-card'>
            <div className="header-img">
                <img src={webLogo} alt="website Logo" />
            </div>
            <div className={`header-hamburger ${countMenu}`}>
                <img className={`header-right ${countMenu}`} onClick={openNav} src={hamburger} alt=""/>
            </div>
            <div id="mySidenav" className={`sidenav ${mobileview}`}>
                <a href="javascript:void(0)" className="closebtn" onClick={closeNav} >&times;</a>
                <a className="about-txt" to={`/About`} onClick={closeNav}>About Us</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
                <a href="#">Our Work</a>
                <a href="#">Projects</a>
            </div>
        </div>

    </section>
  )
}

export default HeaderComp;
