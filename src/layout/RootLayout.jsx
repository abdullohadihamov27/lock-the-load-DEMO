import { NavLink, Outlet } from "react-router-dom"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram } from '@fortawesome/free-solid-svg-icons';
import "./RootLayout.css"
import { Box } from "@mui/material"

export default function RootLayout() {
    return (
        <>
            <header className="header">
                <nav className="nav-container">
                    <div className="logo">
                        <a href="/"> <img src="https://www.locktheload.com/static/media/logo.53fa8ac9fdd3341b4ab2ef9844475e67.svg" alt="" /></a>
                    </div>
                    <div className="nav_right">
                        <ul className="list">
                            <li><a href="/">Features</a></li>
                            <li><a href="/">Prices</a></li>
                            <li><a href="/">About Us</a></li>
                            <li><NavLink to="/blog" >Blog</NavLink></li>
                            <li><a href="/"> FAQ</a></li>
                        </ul>
                        <button className="chrome_btn">Add To Chrome</button>
                    </div>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Box sx={{
                    padding: 2,
                    width: 1350,
                    margin: 1,
                    borderRadius: 1
                }}>
                    <div className="main-footer">
                        <img src="https://locktheload.com/static/media/cycle3.22237ea66caf35a9e78a.png" className="footer-circle" alt="" />
                        <div className="footer">
                            <div className="logo">
                                <a href="/">
                                    <img src="https://locktheload.com/static/media/logo.53fa8ac9fdd3341b4ab2ef9844475e67.svg" alt="" />
                                </a>
                            </div>
                            {/* <FontAwesomeIcon icon={faInstagram} className="footer-icon" /> */}
                            <div className="section-one-btn footer-btn">
                                <svg className="svg" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PlayArrowIcon" >
                                    <path d="M8 5v14l11-7z"></path></svg><button id="start-free">Start For Free!</button>
                            </div>
                            <hr className="footer-hr" />
                            <div className="footer-ul">
                                <ul className="list footer-list">
                                    <li><a href="#">Features</a></li>
                                    <li><a href="#">Prices</a></li>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">FAQ</a></li>
                                </ul>
                            </div>
                            <div className="last-part">
                                <p>© 2023 LockTheLoad</p>
                                <a target="_blank" rel="noopener noreferrer">Privacy Policy &amp; Terms Conditions</a>
                            </div>
                        </div>
                    </div>
                </Box>
            </footer>
        </>
    )
}
