import React from "react";
import { Card, Col, Table, Pagination} from "react-bootstrap";
import Header from "../Components/Header";
import user1 from "../Assets/images/user/user-1.png";
import user2 from "../Assets/images/user/user-2.png";
import user3 from "../Assets/images/user/user-3.png";
import user4 from "../Assets/images/user/user-4.png";
import Messageicon from "../Assets/images/icon/book.svg";
import Deleteicon from "../Assets/images/icon/trash-2.svg";
import {
  FaDownload,
  FaUsers,
  FaSchool,
  FaUserEdit,
  FaDollarSign,
} from "react-icons/fa";
import Sidebars from "../Components/Sidebar";

export default function Transacationhistory() {
  return (
    <>
      <Header />
      <div className="d-flex">
        <div className="col-2">
          <Sidebars className="w-100" />
        </div>

        <div className="Homepage-maincontainer col-10 px-5 py-2">
          <h2 className="fw-bold">Transaction history</h2>

          <Col>
            <Card className="my-4">
              <Table striped>
                <thead>
                  <tr className="text-center">
                    <th>#</th>
                    <th>Date</th>
                    <th>Transaction ID</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center">
                    <td>
                    1
                    </td>
                    <td>
                     12-2-22
                    </td>
                    <td>ID0000001</td>
                    <td>Lorem Ipsum</td>
                    <td>Rs.1000</td>
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
                    2
                    </td>
                    <td>
                     12-2-22
                    </td>
                    <td>ID0000002</td>
                    <td>Lorem Ipsum</td>
                    <td>Rs.1000</td>
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
                    1
                    </td>
                    <td>
                     12-2-22
                    </td>
                    <td>ID0000007</td>
                    <td>Lorem Ipsum</td>
                    <td>Rs.1000</td>
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
                    2
                    </td>
                    <td>
                     12-2-22
                    </td>
                    <td>ID0000004</td>
                    <td>Lorem Ipsum</td>
                    <td>Rs.1000</td>
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

            <div>
            <Pagination>
      <Pagination.First />
      
      <Pagination.Item>{1}</Pagination.Item>
  

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
  

     
   
      <Pagination.Last />
    </Pagination>
            </div>
          </Col>
        </div>
      </div>
    </>
  );
}
