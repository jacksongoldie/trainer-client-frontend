import { NavLink } from "react-router-dom";

function Header() {
    return(
        <div>
            <NavLink
                className=''
                to='/'
                exact
            >
                Dashboard
            </NavLink>
            <NavLink
                className=''
                to='/trainers'
                exact
            >
                Trainers
            </NavLink>
            <NavLink
                className=''
                to='/clients'
                exact
            >
                Clients
            </NavLink>
        </div>
    )
}

export default Header;