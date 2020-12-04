import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import './navbarStyle.css';

const Navbars = () => {
    return(
        <>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div class="col-lg-3 col-md-4 col-8">
                        <a className="navbar-brand ml-5" href="/"><span>BukaBuku<FontAwesomeIcon className='icons-books ml-2' icon={faBookOpen} /></span></a>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className='nav-search col-lg-5 col-4 d-md-inline'>
                            <form className="row" action='/' method="GET">
                                <div class="input-group col-16">
                                    <input className="form-control" type="search" placeholder="Search Books" aria-label="Search" />
                                    <button className="btn btn-outline-info my-2 my-sm-0 search" type="submit"><FontAwesomeIcon className='icons-search' icon={faSearch} /></button>
                                </div>    
                            </form>
                        </div>
                        <ul className="navbar-nav mx-auto ml-5">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Kategori
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="/">Action</a>
                                    <a className="dropdown-item" href="/">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="/">Something else here</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbars;