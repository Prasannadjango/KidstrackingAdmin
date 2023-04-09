import React from "react";
import { Card, Col, Table, Form } from "react-bootstrap";
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

export default function Affilate() {
  return (
    <>
      <Header />

      <div className="d-flex">
        <div className="col-2 Sidebar-container">
          <Sidebars className="w-100" />
        </div>

        <div className="Homepage-maincontainer col-xl-10 col-12 px-xl-5 px-2 py-2">
          <h2 className="fw-bold">Affilate Details</h2>

          <Col>
            <Card className="my-4 overflow-table">
              <Table striped>
                <thead>
                  <tr className="text-center">
                    <th>#</th>
                    <th>Name & Email</th>
                    <th>No of Referals</th>
                    <th>Earned amount</th>
                   
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center">
                    <td>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Check type="checkbox" />
                      </Form.Group>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="Table-img">
                          <img src={user1} className="w-100 h-100" />
                        </div>
                        <div className="ps-2 text-start">
                          <h6 className="m-0 fw-bold">Harry potter</h6>
                          <p className="m-0 text-secondary Tableimg-text pt-1">
                            Harry@gmail.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>20</td>
                    <td>1000</td>
                   
                  </tr>
                  <tr className="text-center">
                    <td>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Check type="checkbox" />
                      </Form.Group>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="Table-img">
                          <img src={user2} className="w-100 h-100" />
                        </div>
                        <div className="ps-2 text-start">
                          <h6 className="m-0 fw-bold">Harry potter</h6>
                          <p className="m-0 text-secondary Tableimg-text pt-1">
                            Harry@gmail.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>20</td>
                    <td>1000</td>
                   
                  </tr>
                  <tr className="text-center">
                    <td>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Check type="checkbox" />
                      </Form.Group>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="Table-img">
                          <img src={user3} className="w-100 h-100" />
                        </div>
                        <div className="ps-2 text-start">
                          <h6 className="m-0 fw-bold">Harry potter</h6>
                          <p className="m-0 text-secondary Tableimg-text pt-1">
                            Harry@gmail.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>20</td>
                    <td>1000</td>
                   
                  </tr>
               
                </tbody>
              </Table>
            </Card>
          </Col>
        </div>
      </div>
    </>
  );
}
