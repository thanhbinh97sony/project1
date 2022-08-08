import React, { useState } from 'react';
import {
    Nav, Button,
    NavItem,
    NavLink, CardText,
    TabContent, TabPane, Row, Col, Card, CardTitle

} from 'reactstrap';
import './style.css'

export default function Container() {
    const [clickTitle, setClickTitle] = useState(["1"])
    return (
        <div>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className="tin"
                        onClick={function noRefCheck() { setClickTitle("1") }}
                    >
                        Tin
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className="active"
                        onClick={function noRefCheck1() { setClickTitle("2") }}
                    >
                        Reels
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={clickTitle}>
                <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                            <h4>
                                Tab 1 Contents
                            </h4>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <Col sm="6">
                            <Card body>
                                <CardTitle>
                                    Special Title Treatment
                                </CardTitle>
                                <CardText>
                                    With supporting text below as a natural lead-in to additional content.
                                </CardText>
                                <Button>
                                    Go somewhere
                                </Button>
                            </Card>
                        </Col>
                        <Col sm="6">
                            <Card body>
                                <CardTitle>
                                    Special Title Treatment
                                </CardTitle>
                                <CardText>
                                    With supporting text below as a natural lead-in to additional content.
                                </CardText>
                                <Button>
                                    Go somewhere
                                </Button>
                            </Card>
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </div>
    )
}
