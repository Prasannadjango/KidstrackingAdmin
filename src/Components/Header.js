import React, { useState } from "react";
import Logo from "../Assets/images/logo.png";
import Searchicon from "../Assets/images/icon/search-normal.svg";
import Header1icon from "../Assets/images/icon/maximize.svg";
import { Link } from "react-router-dom";
import Bellicon from "../Assets/images/icon/notification.svg";
import { Button, Offcanvas } from "react-bootstrap";

export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="Header-container d-flex align-items-center justify-content-between">
        <div className="d-flex  align-items-center ">
        
          <div className="Logo-container p-xl-4 p-1">
            <Button onClick={handleShow} className="Menu-btn p-0 me-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                fill="currentColor"
                class="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </Button>
            <img src={Logo} />
          </div>
          <div className="Searchbar col-xl-9 col-12  position-relative ps-xl-5 ps-0">
            <img src={Searchicon} />
            <input
              className="form-control broder-0 w-100 ps-5"
              placeholder="Search.."
            />
          </div>
        </div>
        <div>
          <span className="right-icon pe-5">
            <img src={Header1icon} />
          </span>
          <span className="right-icon pe-5">
            <img src={Bellicon} />
          </span>
        </div>
        {/* Responsive side menu */}
        <Offcanvas show={show} onHide={handleClose} className='px-4'>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              Menus
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="d-flex flex-column Responsive-links">
            <Link to='/'>Dashboard</Link>
            <Link to='/Subscription'>Subscription</Link>
            <ul>
              <li><Link to='/Parents'>Parents</Link></li>
              <li><Link to='/Affiliate'>Affilate</Link></li>
              <li><Link >school</Link></li>
              <li><Link to='/Adduser'>Add user</Link></li>
            </ul>
            <Link to='/Transactionhistory'>Transaction history</Link>
            <Link to='/Transactionhistory'>Withdrawl request</Link>
            <Link to='/Supportmessage'>Support message</Link>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}
