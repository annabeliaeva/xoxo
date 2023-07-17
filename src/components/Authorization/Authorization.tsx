import Link from "next/link"
import s from './Authorization.module.css'
import { Button, Card, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap"

export const Authorization = () => {
    return <section className={`vh-100 ${s.gradient_custom}`}>
        <Container fluid className="justify-content-center align-items-center h-100 d-flex py-5">
            <Row className="justify-content-center align-items-center h-100">
                <Col xs={12} className="lg-9 xl-7">
                    <Card className={`shadow-2-strong w-70 ${s.card_registration}`}>
                        <Card.Body className="p-4 p-md-5">
                            <Card.Title className={`mb-4 pb-2 pb-md-0 ${s.title}`}>Sign In</Card.Title>
                            <Form>
                                <Row >
                                    {/* <Col className="md-9 lg-6 xl-5">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                        className="img-fluid" alt="Sample image" />
                </Col> */}
                                    <Col>
                                        <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                                            <Form.Control type="email" placeholder="name@example.com" />
                                        </FloatingLabel>
                                        <FloatingLabel controlId="floatingInput" label="Password" className="mb-3">
                                            <Form.Control type="password" placeholder="Password" />
                                        </FloatingLabel>
                                    </Col>
                                </Row>
                                <Row >
                                    <Col className={s.column}>
                                        <Button className={`btn btn-primary btn-lg`}>Login</Button>
                                    </Col>
                                </Row>
                            </Form>
                            <Card.Footer className="my-2">
                                <Col> Do not have an account?</Col>
                                <Col className="text-accent">
                                    <Link href="/registration" className="link-accent">Register</Link>
                                </Col>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </section>
}