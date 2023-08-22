import { Container } from 'react-bootstrap'
import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { CardText, CardTitle } from 'reactstrap'

function Dealinfo() {
    return (
        <>
            <Container>
                <Row style={{paddingTop:'80px'}}>
                    <Col sm="6">
                        <Card>
                            <a href=""><Card.Img variant="top" src="https://technofet.com/timemart/assets/images/banner/banner-01.jpg" /></a>
                        </Card>
                    </Col>
                    <Col sm="6">
                        <Card>
                            <a href=""><Card.Img variant="top" src="https://technofet.com/timemart/assets/images/banner/banner-02.jpg" /></a>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Dealinfo