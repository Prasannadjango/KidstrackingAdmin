
import React, { useState } from "react";
import {
  RiHome4Line,
  RiTeamLine,
  RiCalendar2Line,
  RiFolder2Line,
  RiUserFollowLine,
  RiPlantLine,
  RiStackLine,
  RiUserUnfollowLine
} from "react-icons/ri";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi/";
import {
  Sidebar,
  SubMenu,
  Menu,
  MenuItem,
  useProSidebar
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
function Sidebars() {
  //const { collapseSidebar } = useProSidebar();
  const [collapsed, setCollapsed] = useState(false);

  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };
  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div>
      <Sidebar
        className={`app ${toggled ? "toggled" : ""}`}
        style={{ height: "100%", position: "absolute" }}
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
      >
        <main>
     

          <Menu>
          <MenuItem component={<Link to="/" />}> Dashboard</MenuItem>

            <SubMenu defaultOpen label={"Users"} >
              <MenuItem component={<Link to='/Parents'/>}   >Parents </MenuItem>
              <MenuItem component={<Link to='/Affiliate'/>}>Affilate</MenuItem>
              <MenuItem >Schools</MenuItem>
              <MenuItem component={<Link to='/Adduser'/>}>Add users</MenuItem>
            </SubMenu>
            <MenuItem component={<Link to="/Subscription" />}>Subscription</MenuItem>
            <MenuItem component={<Link to="/Transactionhistory" />}>Transaction history</MenuItem>
<MenuItem component={<Link to="/Withdrawlrequest" />}>Withdrawl Request</MenuItem>
<MenuItem component={<Link to="/Supportmessage" />}>Support message</MenuItem>


          </Menu>
        </main>
      </Sidebar>
    </div>
  );
}
export default Sidebars;
