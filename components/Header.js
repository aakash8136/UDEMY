import React from 'react';
import { Link } from 'react-router-dom';
import * as FontAwesome from 'react-icons/lib/fa'
import '../components/style/Header.css';

const Header = () => {
	return (
		<nav>
			<div className="container-fluid">
				<div className="navigation-header">
					<div className="navbar-header">
						<Link to="/" className="navbar-logo">
							<img
								className="udemy-logo"
								src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
								alt="Udemy"
								style={{ height: 32, width: 110 }}
							/>
						</Link>
					</div>
					<div className="header-left">
						<div className="navbar-category">
							<Link to="/">
                           
                            <span className="fontawsome">  <FontAwesome.FaTh/></span>
								<span>Categories</span>
							</Link>
						</div>
					</div>

                    <div className="navbar-search">
                            <span className="input-group">
                                <input type="text" maxLength="200" placeholder="Search for anything" style={{width:700,height:40,backgroundColor:"lightgrey",color:"black"}} />
                            </span>
                    </div>
           
            <div className="header-right" >
                        <div className="navbar-udemy-business">
                        <Link to="/" className="udemy">
                        Udemy for Business
                        </Link>
                        </div>
                        <div className="navbar-udemy-business">
                            <Link className="udemy">Teach on Udemy </Link>
                        </div>
                        <div className="divide">
                        </div>
                        <div className="cart">
                            <div className="cart-font">
                            <FontAwesome.FaShoppingCart className="font" />
                            </div>
                        </div>
                        <div className="login">
                        <button type="button" className="btn-LogIn">Log In</button>
                        </div>
                        <div className="signup">
                        <button type="button" className="btn-SignUp">Sign Up</button>
                        </div>
                    </div>
                </div>	
			</div>
		</nav>   
	);
};

export default Header;
