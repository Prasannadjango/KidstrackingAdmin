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

export default function Parents() {
  return (
    <>
      <Header />
      <div className="d-flex">
        <div className="col-2">
          <Sidebars className="w-100" />
        </div>

        <div className="Homepage-maincontainer col-10 px-5 py-2">
          <h2 className="fw-bold">Parents Details</h2>

          <Col>
            <Card className="my-4">
              <Table striped>
                <thead>
                  <tr className="text-center">
                    <th>#</th>
                    <th>Name & Email</th>
                    <th>Subscription Plan</th>
                    <th>Reg.Date</th>
                    <th>Exp.Date</th>
                    <th>Action</th>
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
                    <td>Plan c</td>
                    <td>Feb 02, 2023</td>
                    <td>Feb 02, 2024</td>
                    <td>
                      <div className="d-flex justify-content-center align-items-center">
                        <button className="btn">
                          <img src={Messageicon} />
                        </button>
                        <button className="btn">
                          <img src={Deleteicon} />
                        </button>
                      </div>
                    </td>
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
                          <h6 className="m-0 fw-bold">Laura</h6>
                          <p className="m-0 text-secondary Tableimg-text pt-1">
                            Laura@gmail.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>Plan A</td>
                    <td>Feb 02, 2023</td>
                    <td>Feb 02, 2024</td>
                    <td>
                      <div className="d-flex justify-content-center align-items-center">
                        <button className="btn">
                          <img src={Messageicon} />
                        </button>
                        <button className="btn">
                          <img src={Deleteicon} />
                        </button>
                      </div>
                    </td>
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
                          <h6 className="m-0 fw-bold">Prasanna</h6>
                          <p className="m-0 text-secondary Tableimg-text pt-1">
                            Prasanna@gmail.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>Plan A</td>
                    <td>Feb 02, 2023</td>
                    <td>Feb 02, 2024</td>
                    <td>
                      <div className="d-flex justify-content-center align-items-center">
                        <button className="btn">
                          <img src={Messageicon} />
                        </button>
                        <button className="btn">
                          <img src={Deleteicon} />
                        </button>
                      </div>
                    </td>
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
                          <img src={user4} className="w-100 h-100" />
                        </div>
                        <div className="ps-2 text-start">
                          <h6 className="m-0 fw-bold">Olivia</h6>
                          <p className="m-0 text-secondary Tableimg-text pt-1">
                            Olivia@gmail.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>Plan A</td>
                    <td>Feb 02, 2023</td>
                    <td>Feb 02, 2024</td>
                    <td>
                      <div className="d-flex justify-content-center align-items-center">
                        <button className="btn">
                          <img src={Messageicon} />
                        </button>
                        <button className="btn">
                          <img src={Deleteicon} />
                        </button>
                      </div>
                    </td>
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
