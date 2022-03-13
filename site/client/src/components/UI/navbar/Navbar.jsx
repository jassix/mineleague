import React, {useContext, useState, useEffect} from 'react'
import './Navbar.scss';
import { Link } from 'react-router-dom'
import { FaAngleDoubleUp, FaQuidditch, FaHome, FaAccessibleIcon, FaUserCircle, FaKey, FaInfo, FaUserPlus, FaLink, FaSearch, FaAddressCard,FaAngleRight, FaMoon, FaSun } from "react-icons/fa";
import { CgLogOut } from "react-icons/cg";
import 'jquery'

const Navbar = () => {
 
    const bodyElement = document.body
    
    //

    const [isActive, setIsActive] = useState(() => {
        try {
            const savedActive = localStorage.getItem("isActive");
            const initialValueActive = JSON.parse(savedActive);
            return initialValueActive || "";
        } catch (e) {
            
        }
    });
    const handleToggle = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        localStorage.setItem("isActive", isActive);
    }, [isActive]);

    //

    const [Head, setHead] = useState(() => {
        try {
            const savedHead = localStorage.getItem("Head");
            const initialValueHead = JSON.parse(savedHead);
            return initialValueHead || "";
        } catch (e) {
            
        }
    });
    const changeHead = () => {
        setHead(!Head);
    };
    
    useEffect(() => {
        localStorage.setItem("Head", Head);
    }, [Head]);

    //

    const [Theme, setTheme] = useState(() => {
        try {
            const savedTheme = localStorage.getItem("Theme");
            const initialValueTheme = JSON.parse(savedTheme);
            return initialValueTheme || "";
        } catch (e) {
            
        }
    });
    const changeTheme = () => {
        setTheme(!Theme);
    };

    useEffect(() => {
        localStorage.setItem("Theme", Theme);
    }, [Theme]);

    //

    const [Dropdown, setDropdown] = useState(() => {
        try {
            const savedDropdown = localStorage.getItem("Dropdown");
            const initialValueDropdown = JSON.parse(savedDropdown);
            return initialValueDropdown || "";
        } catch (e) {
            
        }
    });
    const changeDropdown = () => {
        setDropdown(!Dropdown);
    };

    useEffect(() => {
        localStorage.setItem("Dropdown", Dropdown);
    }, [Dropdown]);

    if (Theme == true) {
        bodyElement.classList.add("dark");
    } else {
        bodyElement.classList.remove("dark");
    }

    if (isActive === true) {
        bodyElement.classList.add("close");
    } else {
        bodyElement.classList.remove("close");
    }

    // NAVBAR END

    return (
            <nav className={`sidebar ${isActive ? "close" : ""}`}>
                    <header>
                        <div className="image-text">
                            <span className="image" style={{opacity: `${isActive && window.screen.width <= 800 ? "0" : "1"}`}}>
                                <img src={Head ? 'https://skin.vimeworld.ru/helm/Jassix/64.png' : 'https://skin.vimeworld.ru/helm/3d/Jassix.png'} alt="" onClick={changeHead}></img>
                            </span>
                            
                            <div className="text logo-text">
                                <span className="name">Jassix</span>
                                <span className="profession">Dev</span>
                            </div>
                        </div>

                        <i className='bx bx-chevron-right toggle' onClick={handleToggle}><FaAngleRight/></i>
                    </header>

                    <div className="menu-bar">
                        <div className="menu">
                            <ul className="menu-links">
                                <li className="nav-link">
                                    <Link to="/">
                                        <i className='bx bx-bar-chart-alt-2 icon' ><FaHome/></i>
                                        <span className="text nav-text">Home</span>
                                    </Link>
                                </li>

                                <li className="nav-link">
                                    <Link to="/rating">
                                        <i className='bx bx-home-alt icon' ><FaAngleDoubleUp/></i>
                                        <span className="text nav-text">Rating</span>
                                    </Link>
                                </li>

                                <li className="nav-link">
                                    <Link to="/rules">
                                        <i className='bx bx-bell icon'><FaInfo/></i>
                                        <span className="text nav-text">Rules</span>
                                    </Link>
                                </li>

                                <li className="nav-link">
                                    <Link to="/socials">
                                        <i className='bx bx-pie-chart-alt icon' ><FaLink/></i>
                                        <span className="text nav-text">Socials</span>
                                    </Link>
                                </li>

                                <li className="nav-link">
                                    <div className="dropdown">
                                        <div className="dropdownMain">
                                                <a href="#" onClick={changeDropdown}>
                                                    <i className='bx bx-heart icon' ><FaUserPlus/></i>
                                                    <span className="text nav-text">Support Pages</span>
                                                </a>
                                        </div>

                                        <div className="dropdownContent" style={Dropdown ? {'display' : 'block'} : {'display' : 'none'}}>
                                                <Link to="/support/addmatch">
                                                    <i className='bx bx-bar-chart-alt-2 icon' ><FaAddressCard/></i>
                                                    <span className="text nav-text">AddMatch</span>
                                                </Link>

                                                <Link to="/support/software">
                                                    <i className='bx bx-bar-chart-alt-2 icon' ><FaQuidditch/></i>
                                                    <span className="text nav-text">Software</span>
                                                </Link>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bottom-content">
                            <li>
                                <a href="/auth">
                                    <i className='bx bx-log-out icon'><FaKey/></i>
                                    <span className="text nav-text">Auth</span>
                                </a>
                            </li>

                            <li className="mode">
                                <div className="sun-moon">
                                    <i className='bx bx-moon icon moon'><FaMoon/></i>
                                    <i className='bx bx-sun icon sun'><FaSun/></i>
                                </div>
                                <span className="mode-text text">Dark mode</span>

                                <div className="toggle-switch">
                                    <span className="switch" onClick={changeTheme}></span>
                                </div>
                            </li>
            
                        </div>
                    </div>

            </nav>
    )
}
export default Navbar;