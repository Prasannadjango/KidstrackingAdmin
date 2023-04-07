import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Header from "../Components/Header";

import { FaDownload, FaUsers, FaSchool, FaUserEdit, FaDollarSign } from "react-icons/fa";
import Sidebars from "../Components/Sidebar";


export default function Homepage() {
    return (
        <>
            <Header />

            <div className="d-flex">
                <div className="col-2 Sidebar-container">
                    <Sidebars className='w-100' />
                </div>

                <div className="Homepage-maincontainer col-xl-10 col-12 p-xl-5 p-3">
                    <Row xl={3} xs={1}>
                        <Col>
                            <Card className='Homepage-counts p-3'>
                                <div className="d-flex align-items-center">
                                    <div className="Card-icon">
                                        <FaDownload className="fs-5" />
                                    </div>
                                    <h6 className="m-0 ps-3">
                                        No of Downloads
                                    </h6>
                                </div>
                                <h1 className="m-0 pt-3">100</h1>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='Homepage-counts p-3'>
                                <div className="d-flex align-items-center">
                                    <div className="Card-icon">
                                        <FaUsers className="fs-5" />
                                    </div>
                                    <h6 className="m-0 ps-3">
                                        No of Users
                                    </h6>
                                </div>
                                <h1 className="m-0 pt-3">80</h1>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='Homepage-counts p-3'>
                                <div className="d-flex align-items-center">
                                    <div className="Card-icon">
                                        <FaSchool className="fs-5" />
                                    </div>
                                    <h6 className="m-0 ps-3">
                                        No of schools
                                    </h6>
                                </div>
                                <h1 className="m-0 pt-3">132</h1>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='Homepage-counts p-3'>
                                <div className="d-flex align-items-center">
                                    <div className="Card-icon">
                                        <FaUserEdit className="fs-5" />
                                    </div>
                                    <h6 className="m-0 ps-3">
                                        No of Affilates
                                    </h6>
                                </div>
                                <h1 className="m-0 pt-3">12</h1>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='Homepage-counts p-3'>
                                <div className="d-flex align-items-center">
                                    <div className="Card-icon">
                                        <FaUserEdit className="fs-5" />
                                    </div>
                                    <h6 className="m-0 ps-3">
                                        No of Referals
                                    </h6>
                                </div>
                                <h1 className="m-0 pt-3">12</h1>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='Homepage-counts p-3'>
                                <div className="d-flex align-items-center">
                                    <div className="Card-icon">
                                        <FaDollarSign className="fs-5" />
                                    </div>
                                    <h6 className="m-0 ps-3">
                                        No of Earnings
                                    </h6>
                                </div>
                                <h1 className="m-0 pt-3">3000</h1>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='Homepage-counts p-3'>
                                <div className="d-flex align-items-center">
                                    <div className="Card-icon">
                                        <FaUserEdit className="fs-5" />
                                    </div>
                                    <h6 className="m-0 ps-3">
                                        Total commissions given
                                    </h6>
                                </div>
                                <h1 className="m-0 pt-3">12</h1>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='Homepage-counts p-3'>
                                <div className="d-flex align-items-center">
                                    <div className="Card-icon">
                                        <FaDollarSign className="fs-5" />
                                    </div>
                                    <h6 className="m-0 ps-3">
                                        withdrawl Request today
                                    </h6>
                                </div>
                                <h1 className="m-0 pt-3">3000</h1>
                            </Card>
                        </Col>
                    </Row>
                    <Row xl={2} xs={1}>
                        <Col></Col>
                        <Col>
                            <Card>

                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>



        </>
    );
}