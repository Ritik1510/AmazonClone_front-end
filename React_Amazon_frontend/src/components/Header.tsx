import { navbarOptions } from "../data/appData";

function Header() {
    return (
        <header>
            <div className="navbar flex justify-between items-center">
                <div className="nav-logo border">
                    <div className="logo"></div>
                </div>

                <div className="nav-address border">
                    <p className="add-frist">Hello</p>
                    <div className="add-icon">
                        <i className="fa-solid fa-location-dot"></i>
                        <p className="add-second">Select your address</p>
                    </div>
                </div>

                <div className="search">
                    <select className="search-type">
                        <option>All</option>
                    </select>
                    <input placeholder="Search Amazon" className="search-input" />
                    <button className="search-icon">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
                <div className="signin border">
                    <p><span className="nav-signIn-frist">Hello, sign in</span></p>
                    <p className="nav-signIn-second">Accounts & list</p>

                </div>
                <div className="Return-order-box border">
                    <p><span className="RO-frist">Returns </span></p>
                    <p className="RO-second">& Orders</p>
                </div>

                <div className="nav-cart border">
                    <i className="fa-solid fa-cart-shopping"></i>
                    Cart
                </div>
            </div>

            <div className="panel">
                <a className="panel-icon">
                    <i className="fa-solid fa-bars"></i>
                    <span className="panel-icon-selector">All</span>
                </a>
                
                {navbarOptions.map((item, index) => {
                    return (
                        <p className="PO-forPointer border" key={index}>{item}</p>
                    )
                })}

                <div className="panel-deals-right border">
                    New Launches From Mobiles, Eloctronics & more | Shop now
                </div>
            </div>
        </header>
    )
}

export default Header