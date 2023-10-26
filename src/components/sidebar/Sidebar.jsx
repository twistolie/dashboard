import "./sidebar.scss"
import DashboardIcon from "@mui/icons-material/Dashboard"
import People from "@mui/icons-material/People"
import Inventory from "@mui/icons-material/Inventory"
import ShoppingCart from "@mui/icons-material/ShoppingCart"
import { LocalShipping } from "@mui/icons-material"
import  BarChart  from "@mui/icons-material/BarChart"
import { Notifications} from "@mui/icons-material"
import { MonitorHeart } from "@mui/icons-material"
import { Logout } from "@mui/icons-material"
import { AccountCircle } from "@mui/icons-material"
import { Settings } from "@mui/icons-material"
import { Troubleshoot } from "@mui/icons-material"
import { Link } from "react-router-dom"
import {} from "@mui/icons-material"
import { DarkModeContext } from "../../context/darkModeContext"
import { useContext } from "react"


const Sidebar = () => {
  const {dispatch} = useContext(DarkModeContext)
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{textDecoration: "none" }}> 
          <span className="logo">Twisted</span>
        </Link>
      </div>
      <hr/>
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
            </li>
          <p className="title">Lists</p>
          <Link to="/users" style={{ textDecoration: "none", color:"gray"}}>
            <li>
            <People className="icon" />
            <span>Users</span>
            </li> 
         </Link>
         <Link to="/products" style={{ textDecoration: "none", color:"gray" }}>
            <li>
            <Inventory className="icon" />
            <span>Products</span>
            </li> 
         </Link>
           <li>
            <ShoppingCart className="icon" />
            <span>Orders</span> </li>
           <li><LocalShipping className="icon" /><span>Delivery</span></li>
           <p className="title">Useful Links</p>
          <li><BarChart className="icon" /><span>Stats</span></li>
          <li><Notifications className="icon" /><span>Notifications</span></li>
          <p className="title">Service</p>
          <li><MonitorHeart className="icon" /><span>System Health</span></li>
          <li><Troubleshoot className="icon" /><span>Logs</span></li>
          <li><Settings className="icon" /><span>Settings</span></li>
          <p className="title">User</p>
          <li><AccountCircle className="icon" /><span>Profile</span></li>
          <li><Logout className="icon" /><span>Logout</span></li>
        </ul>
      </div>

      <div className="bottom">
        <div className="colorOption" onClick={() => dispatch({type:"LIGHT"})}></div>
        <div className="colorOption" onClick={() => dispatch({type:"DARK"})}></div>
        
        </div>
    </div>
  )
}

export default Sidebar