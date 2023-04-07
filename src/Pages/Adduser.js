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

export default function Adduser() {
  return (
    <>
      <Header />

      <div className="d-flex">
        <div className="col-2">
          <Sidebars className="w-100" />
        </div>

        <div className="Homepage-maincontainer col-10 px-5 py-2">
          <h2 className="fw-bold">Add New user</h2>
          <Form>
            <Row className="Adduser-forms py-4">
              <Col>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label className="fs-6 text-secondary">
                    Select User Category
                  </Form.Label>
                  <Form.Select defaultValue="---">
                    <option>---</option>
                    <option>Parents</option>
                    <option>School</option>
                    <option>Affilate</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
              <Form.Label className="fs-6 text-secondary">
                Name/School
                  </Form.Label>
                <Form.Control />
              </Col>
              
            </Row>
            <Row className="Adduser-forms py-4">
              <Col>
              <Form.Label className="fs-6 text-secondary">
              Mail
                  </Form.Label>
                <Form.Control />
              </Col>
              <Col>
              <Form.Label className="fs-6 text-secondary">
               Mobile number
                  </Form.Label>
                <Form.Control />
              </Col>
              
            </Row>
            <Row className="Adduser-forms py-4">
              <Col xl={6}>
              <Form.Label className="fs-6 text-secondary">
              Password
                  </Form.Label>
                <Form.Control type='password'/>
              </Col>
            
              
            </Row>
            <Button className='Submit-btn px-4 py-2' type='submit'>Submit</Button>
          </Form>
        </div>
      </div>
    </>
  );
}
