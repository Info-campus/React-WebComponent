import React from 'react';
import './Header.css';

const Header = ()=>{
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="navbar navbar-inverse">
                        <div className="navbar-header">
                            <a href="Coffee" id="brand" className="navbar-brand">Transport</a>
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navcollapse" aria-expanded="false">
                                Menu
		      			</button>
                        </div>

                        <div className="collapse navbar-collapse" id="navcollapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <a href="Home">Home</a></li>
                                <li><a href="Service">Service</a></li>
                                <li><a href="Blog">Blog</a></li>
                                <li><a href="SignUp">SignUp</a></li>
                                <li><a href="Login">Login</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;