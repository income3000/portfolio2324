import React from "react";
import './NavBar.css'
import { NavLink } from "react-router-dom";



export default function NavBar(){

return(
	<div class="fixed-bottom" >
<ul className="nav nav-pills nav-fill">
  <li className="nav-item">
  <button className="button"><NavLink to='Bio'>Work History</NavLink></button>
  </li>
  <li className="nav-item">
  <button className="button"><NavLink to='Home'>Skills</NavLink></button>
  </li>
  <li className="nav-item">
  <button className="button"><NavLink to='Accomplishments'>Projects</NavLink></button>
  </li>
</ul>
</div>
)
}

