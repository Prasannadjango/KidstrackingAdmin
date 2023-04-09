import React from "react";
import { Card, Col, Table, Form, Row, Button } from "react-bootstrap";
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

export default function Addplans() {
  return (
    <>
      <Header />

      <div className="d-flex">
        <div className="col-2  Sidebar-container">
          <Sidebars className="w-100" />
        </div>

        <div className="Homepage-maincontainer col-xl-10 col-12 px-xl-5 px-3 py-2">
          <h2 className="fw-bold">Add New Plan</h2>
          <Form>
            <Row className="Adduser-forms py-4">
             
              <Col>
              <Form.Label className="fs-6 text-secondary">
                Plan Name
                  </Form.Label>
                <Form.Control />
              </Col>
              <Col>
              <Form.Label className="fs-6 text-secondary">
              Plan Description
                  </Form.Label>
                <Form.Control />
              </Col>
              <Col>
              <Form.Label className="fs-6 text-secondary">
              Plan Price
                  </Form.Label>
                <Form.Control />
              </Col>
              
            </Row>
          
              <Col className="color-form">
              <Form.Label className="fs-6 text-secondary">
             Plan Features
                  </Form.Label>
                <Form.Control className="mb-4"/>
                <Form.Control className="mb-4"/>
                <Form.Control className="mb-4"/>
                <Form.Control className="mb-4"/>
              </Col>
              <Col>
              
               
              </Col>
              
        
            
            <Button className='Submit-btn px-4 py-2' type='submit'>Submit</Button>
          </Form>
        </div>
      </div>
    </>
  );
}
