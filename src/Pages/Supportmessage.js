import React from "react";
import {
  Card,
  Col,
  Table,
  Form,
  Pagination,
  Row,
  Button,
  Dropdown,
} from "react-bootstrap";
import Header from "../Components/Header";
import inboxicon from "../Assets/images/icon/inbox-color.svg";
import Staricon from "../Assets/images/icon/star-line.svg";
import Important from "../Assets/images/icon/importent.svg";
import Deleticon from "../Assets/images/icon/trash.svg";
import Sidebars from "../Components/Sidebar";
import Searchicon from "../Assets/images/icon/search-normal.svg";
import Reloadicon from "../Assets/images/icon/reload.svg";
import Staricon2 from "../Assets/images/icon/mail-star.svg";
import Mailarchive from "../Assets/images/icon/mail-archive-tick.svg";
export default function Supportmessage() {
  return (
    <>
      <Header />
      <div className="d-flex">
        <div className="col-2  Sidebar-container">
          <Sidebars className="w-100" />
        </div>

        <div className="Homepage-maincontainer col-xl-10 col-12 px-xl-5 py-xl-2 py-0 px-2">
          <h2 className="fw-bold">Support Messages</h2>

          <Row>
            <Col xl={4} xs={12}>
              <Card className="my-4 p-4">
                <div>
                  <div className="d-flex justify-content-between mb-4">
                    <div className="d-flex">
                      <img src={inboxicon} />
                      <h5 className="m-0 ps-2">Inbox</h5>
                    </div>
                    <span>(321)</span>
                  </div>
                  <div className="d-flex justify-content-between mb-4">
                    <div className="d-flex">
                      <img src={Staricon} />
                      <h5 className="m-0 ps-2">Starred</h5>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mb-4">
                    <div className="d-flex">
                      <img src={Important} />
                      <h5 className="m-0 ps-2">Important</h5>
                    </div>
                    <span>(321)</span>
                  </div>
                  <div className="d-flex justify-content-between ">
                    <div className="d-flex">
                      <img src={Deleticon} />
                      <h5 className="m-0 ps-2">Trash</h5>
                    </div>
                  </div>
                </div>
                <hr className="my-3" />
              </Card>
            </Col>
            <Col xl={8} xs={12}>
              <Card className="my-4">
                <div className="Supportmessage-header p-4 d-flex align-items-center">
                  <div className="d-flex position-relative Searchbar2 ps-xl-5 ps-0">
                    <img src={Searchicon} />
                    <input
                      className="form-control broder-0 w-100 ps-5"
                      placeholder="Search.."
                    />
                  </div>
                  <div className="ps-5 d-flex align-items-center">
                    <Button className="Reload-btn border ">
                      <img src={Reloadicon} />
                    </Button>
                    <Dropdown className="mx-4">
                      <Dropdown.Toggle id="dropdown-basic" className="Dropbtn">
                        More
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic" className="Dropbtn">
                        All
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
                <div className=" Table-overflow">
                  <Table striped hover size="sm">
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <Form.Group
                              className="mt-1"
                              controlId="formBasicCheckbox"
                            >
                              <Form.Check type="checkbox" />
                            </Form.Group>
                            <div className="mx-3">
                              <img src={Staricon2} className="h-100" />
                            </div>
                            <div>
                              <img src={Mailarchive} className="h-100" />
                            </div>
                            <div>
                              <p className="m-0 fw-bold ps-3">
                                Anderson Coopers, EPR
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="m-0 text-secondary">
                            Lorem ipsum dolor sit amet,
                          </p>
                        </td>
                        <td>
                          <p className="m-0 fw-bold">03.15 AM</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <Form.Group
                              className="mt-1"
                              controlId="formBasicCheckbox"
                            >
                              <Form.Check type="checkbox" />
                            </Form.Group>
                            <div className="mx-3">
                              <img src={Staricon2} className="h-100" />
                            </div>
                            <div>
                              <img src={Mailarchive} className="h-100" />
                            </div>
                            <div>
                              <p className="m-0 fw-bold ps-3">Tyson Company</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="m-0 text-secondary">
                            Lorem ipsum dolor sit amet,
                          </p>
                        </td>
                        <td>
                          <p className="m-0 fw-bold">03.15 AM</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <Form.Group
                              className="mt-1"
                              controlId="formBasicCheckbox"
                            >
                              <Form.Check type="checkbox" />
                            </Form.Group>
                            <div className="mx-3">
                              <img src={Staricon2} className="h-100" />
                            </div>
                            <div>
                              <img src={Mailarchive} className="h-100" />
                            </div>
                            <div>
                              <p className="m-0 fw-bold ps-3">
                                Anderson Coopers, EPR
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="m-0 text-secondary">
                            Lorem ipsum dolor sit amet,
                          </p>
                        </td>
                        <td>
                          <p className="m-0 fw-bold">03.15 AM</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <Form.Group
                              className="mt-1"
                              controlId="formBasicCheckbox"
                            >
                              <Form.Check type="checkbox" />
                            </Form.Group>
                            <div className="mx-3">
                              <img src={Staricon2} className="h-100" />
                            </div>
                            <div>
                              <img src={Mailarchive} className="h-100" />
                            </div>
                            <div>
                              <p className="m-0 fw-bold ps-3">Tyson Company</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="m-0 text-secondary">
                            Lorem ipsum dolor sit amet,
                          </p>
                        </td>
                        <td>
                          <p className="m-0 fw-bold">03.15 AM</p>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <div className="p-3">
                  <nav aria-label="Page navigation example">
                    <ul class="pagination">
                      <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">&laquo;</span>
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">&raquo;</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
