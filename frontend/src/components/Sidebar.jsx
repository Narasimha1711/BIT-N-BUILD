import "./sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BloodtypeSharpIcon from "@mui/icons-material/BloodtypeSharp";
import MedicalInformationSharpIcon from "@mui/icons-material/MedicalInformationSharp";
import PersonAddAltSharpIcon from "@mui/icons-material/PersonAddAltSharp";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SellerSidebar = () => {
  const location = useLocation(); // Get the current location
  const [activeLink, setActiveLink] = useState(location.pathname); // Set initial active link based on the current path

  // Handle navigation and active state change
  const handleLinkClick = (path) => {
    setActiveLink(path); // Update active link state
  };

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/home" onClick={() => handleLinkClick("/home")}>
          <span className="logo">Insightix</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/home" onClick={() => handleLinkClick("/home")}>
            <li className={activeLink === "/home" ? "active" : ""}>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>

          <p className="title">LISTS</p>
          
          <Link
            to="/getCompanies"
            onClick={() => handleLinkClick("/getCompanies")}
          >
            <li className={activeLink === "/getCompanies" ? "active" : ""}>
              <BloodtypeSharpIcon className="icon" />
              <span>Companies</span>
            </li>
          </Link>

          <Link
            to="/getCompaniesPending"
            onClick={() => handleLinkClick("/getCompaniesPending")}
          >
            <li className={activeLink === "/getCompaniesPending" ? "active" : ""}>
              <MedicalInformationSharpIcon className="icon" />
              <span>Pending Requests</span>
            </li>
          </Link>

          <Link to="/addFund" onClick={() => handleLinkClick("/addFund")}>
            <li className={activeLink === "/addFund" ? "active" : ""}>
              <PersonAddAltSharpIcon className="icon" />
              <span>Add Grants</span>
            </li>
          </Link>

          {/* <p className="title">USER</p>
          <Link to="/profile" onClick={() => handleLinkClick("/profile")}>
            <li className={activeLink === "/profile" ? "active" : ""}>
              <PersonSharpIcon className="icon" />
              <span>Profile</span>
            </li>
          </Link>

          <li
            className={activeLink === "/logout" ? "active" : ""}
            onClick={() => {
              handleLinkClick("/logout");
              // Handle logout logic here if necessary
            }}
          >
            <LogoutSharpIcon className="icon" />
            <span>Logout</span>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default SellerSidebar;
