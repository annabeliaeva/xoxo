import { Button, Card, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap"
import s from './Registration.module.css'

export const Registration = () => {
    return <section className={`vh-100 ${s.gradient_custom}`}>
        <Container fluid className="justify-content-center align-items-center h-100 d-flex py-5">
            <Row className="justify-content-center align-items-center h-100">
                <Col xs={12} className="lg-9 xl-7">
                    <Card className={`shadow-2-strong ${s.card_registration}`}>
                        <Card.Body className="p-4 p-md-5">
                            <Card.Title className={`mb-4 pb-2 pb-md-0 mb-md-5 ${s.title}`}>Sign Up</Card.Title>
                            <Form>
                                <Row>
                                    <Col className="md-6 mb-4">
                                        <FloatingLabel label="First Name" >
                                            <Form.Control className="lg" type="text" placeholder="First Name">
                                            </Form.Control>
                                        </FloatingLabel>
                                    </Col>
                                    <Col className="md-6 mb-4">
                                        <FloatingLabel label="Last Name" >
                                            <Form.Control className="lg" type="text" placeholder="Last Name">
                                            </Form.Control>
                                        </FloatingLabel>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="md-6 mb-4">
                                        <FloatingLabel label="Country" >
                                            <Form.Control list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
                                            <datalist id="datalistOptions" placeholder="Country" className="lg">
                                                <option value="Russia">Russia</option>
                                                <option value="UK">UK</option>
                                                <option value="USA">USA</option>
                                            </datalist>
                                        </FloatingLabel>
                                    </Col>
                                    <Col className="md-6 mb-4">
                                        <FloatingLabel label="City" >
                                            <Form.Control className="lg" type="text" placeholder="City">
                                            </Form.Control>
                                        </FloatingLabel>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="md-6 mb-4">
                                        <FloatingLabel label="Birthday" >
                                            <Form.Control className="lg" type="text" placeholder="Birthday">
                                            </Form.Control>
                                        </FloatingLabel>
                                    </Col>
                                    <Col className="md-6 mb-4">
                                        <div key="inline-radio" className="mb-3">
                                            <Form.Check inline label="Female" value="Female" name="group1" type="radio" id="inline-radio-1" />
                                            <Form.Check inline label="Male" value="Female" name="group1" type="radio" id="inline-radio-2" />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="md-6 mb-4">
                                        <FloatingLabel label="Email" >
                                            <Form.Control className="lg" type="email" placeholder="Email">
                                            </Form.Control>
                                        </FloatingLabel>
                                    </Col>
                                    <Col className="md-6 mb-4">
                                        <FloatingLabel label="Username" >
                                            <Form.Control className="lg" type="email" placeholder="Username">
                                            </Form.Control>
                                        </FloatingLabel>
                                    </Col>
                                </Row>
                                <Row >
                                    <Col className={s.col_for_button}>
                                        <Button className="btn btn-primary btn-lg">Submit</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </section>

}