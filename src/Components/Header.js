import React from 'react';

function Header() {
    return (
        <div>
            <header>

                <nav className="navbar navbar-expand-lg navbar-light bg-black">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon "></span>
                    </button>
                    <a className="navbar-brand text-white ms-3" href="#">TripAdvisor</a>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link text-white" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled text-white" href="#">Contact</a>
                            </li>
                        </ul>
                        
                    </div>
                </nav>

            </header>

        </div>
    )
}

export default Header;