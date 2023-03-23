import { Link } from "react-router-dom";
import SelectNav from "./Select";

import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <ul class="nav-links">
        <li class="nav-item">
          <Link to="/fragmentos">FRAGMENTOS</Link>
        </li>
        <li class="nav-item">
          <Link to="/frases">FRASES</Link>
        </li>
        <li class="nav-item">
          <Link to="/escritos">ESCRITOS</Link>
        </li>
        {/* <SelectNav /> */}
      </ul>
    </nav>
  );
}
