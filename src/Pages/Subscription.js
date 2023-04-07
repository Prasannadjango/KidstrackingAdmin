import React from "react";
import { Card, Col, Table, Form, Row, Button } from "react-bootstrap";
import { FaTimes,FaCheck } from "react-icons/fa";
import Header from "../Components/Header";
import user1 from "../Assets/images/user/user-1.png";
import user2 from "../Assets/images/user/user-2.png";
import user3 from "../Assets/images/user/user-3.png";
import user4 from "../Assets/images/user/user-4.png";
import Messageicon from "../Assets/images/icon/messages-2.svg";
import Deleteicon from "../Assets/images/icon/trash-2.svg";
import {
  FaDownload,
  FaUsers,
  FaSchool,
  FaUserEdit,
  FaDollarSign,
} from "react-icons/fa";
import Sidebars from "../Components/Sidebar";
import { Link } from "react-router-dom";

export default function Subscription() {
  return (
    <>
      <Header />

      <div className="d-flex">
        <div className="col-2">
          <Sidebars className="w-100" />
        </div>

        <div className="Homepage-maincontainer col-10 px-5 py-2">
         <div className="d-flex justify-content-between py-3 align-items-center">
             <div>
             <h2 className="fw-bold">Subscription</h2>
             </div>
             <div>
             <Link to='/Addplans'>
             <button className="Submit-btn btn text-white">Add New Plan</button>
             </Link>  
             </div>
         </div>

         <Row xl={3} xs={1}>
            <Col>
               <Card className="border-0 border p-4 Plans-card">
                  <h4 className='fw-bold'>Basic Package</h4>
                  <div>
                    <p className='m-0 text-secondary'>
                    Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec rutrum congue malesuada.
                    </p>
                  </div>
                  <h1 className="fw-bolder">
                    <sup className="Dollar-sign m-0">$</sup>
                    49
                    <sub className="per-month">/Per month</sub>
                  </h1>
                  <Button className='plan-btn'>Choose Plan</Button>

                  <div className="Plan-lists py-4">
                       <ul className="list-unstyled">
                        <li>5 Regular Listings <FaTimes/></li>
                        <li>Contact with agent <FaCheck/></li>
                        <li>5 Regular Listings <FaTimes/></li>
                        <li>Contact with agent <FaCheck/></li>
                        <li>5 Regular Listings <FaTimes/></li>
                        <li>Contact with agent <FaCheck/></li>
                       </ul>
                  </div>
               </Card>
            </Col>
             <Col>
               <Card className="border-0 border p-4 Plans-card">
                  <h4 className='fw-bold'>Gold Package</h4>
                  <div>
                    <p className='m-0 text-secondary'>
                    Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec rutrum congue malesuada.
                    </p>
                  </div>
                  <h1 className="fw-bolder">
                    <sup className="Dollar-sign m-0">$</sup>
                    89
                    <sub className="per-month">/Per month</sub>
                  </h1>
                  <Button className='plan-btn'>Choose Plan</Button>

                  <div className="Plan-lists py-4">
                       <ul className="list-unstyled">
                        <li>5 Regular Listings <FaTimes/></li>
                        <li>Contact with agent <FaCheck/></li>
                        <li>5 Regular Listings <FaTimes/></li>
                        <li>Contact with agent <FaCheck/></li>
                        <li>5 Regular Listings <FaTimes/></li>
                        <li>Contact with agent <FaCheck/></li>
                       </ul>
                  </div>
               </Card>
            </Col>
            <Col>
               <Card className="border-0 border p-4 Plans-card">
                  <h4 className='fw-bold'>Silver Package</h4>
                  <div>
                    <p className='m-0 text-secondary'>
                    Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec rutrum congue malesuada.
                    </p>
                  </div>
                  <h1 className="fw-bolder">
                    <sup className="Dollar-sign m-0">$</sup>
                    29
                    <sub className="per-month">/Per month</sub>
                  </h1>
                  <Button className='plan-btn'>Choose Plan</Button>

                  <div className="Plan-lists py-4">
                       <ul className="list-unstyled">
                        <li>5 Regular Listings <FaTimes/></li>
                        <li>Contact with agent <FaCheck/></li>
                        <li>5 Regular Listings <FaTimes/></li>
                        <li>Contact with agent <FaCheck/></li>
                        <li>5 Regular Listings <FaTimes/></li>
                        <li>Contact with agent <FaCheck/></li>
                       </ul>
                  </div>
               </Card>
            </Col>
         </Row>
         
        </div>
      </div>
    </>
  );
}
