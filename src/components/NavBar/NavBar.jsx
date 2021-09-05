
import React, {useState} from "react";
import { NavLink } from 'react-router-dom';

function NavBar(){
    const setDisplay = useState("hidden")
    return( 
      <div>
        <div>
          <NavLink onClick={() => setDisplay("hidden")} to="/">
            logo
          </NavLink>

          <div>
            <div>
              <NavLink
                to="/categoria/Bows"
              >
                Bows
              </NavLink>
              <NavLink
              to="/categoria/Weapon"
              >
                Weapon
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    )
}
export default NavBar

