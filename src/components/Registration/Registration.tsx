import { Button, Card, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap"
import s from './Registration.module.css'
import { useState } from "react"

interface RegData {
    firstName: string;
    lastName: string;
    country: string;
    city: string;
    sex: string;
    bday: string;
    email: string;
    username: string;
    password: string;
}
export const Registration = () => {

    const [state, setState] = useState<RegData>({
        firstName: null, lastName: null, country: null,
        city: null, sex: null, bday: null, email: null, username: null, password: null
    })

    return <section className={`vh-100 ${s.gradient_custom}`}>
        <Container fluid className="justify-content-center align-items-center h-100 d-flex py-5">
            <Row className="justify-content-center align-items-center h-100">
                <Col xs={12} className="lg-9 xl-7">
                    <Card className={`shadow-2-strong ${s.card_registration}`}>
                        <Card.Body className="p-4 p-md-5">
                            <Card.Title className={`mb-4 pb-2 pb-md-0 mb-md-5 ${s.title}`}>Sign Up</Card.Title>
                            <Form action="/api/register" method="post">
                                <Row>
                                    <Col className="md-6 mb-4">
                                        <FloatingLabel label="First Name" >
                                            <Form.Control onChange={(e) => setState({ ...state, firstName: e.target.value })} id="firstName" className="lg" type="text" name="firstName" placeholder="First Name">
                                            </Form.Control>
                                        </FloatingLabel>
                                    </Col>
                                    <Col className="md-6 mb-4">
                                        <FloatingLabel label="Last Name" >
                                            <Form.Control onChange={(e) => setState({ ...state, lastName: e.target.value })} id="lastName" className="lg" type="text" name="lastName" placeholder="Last Name">
                                            </Form.Control>
                                        </FloatingLabel>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="md-6 mb-4">
                                        <FloatingLabel label="Country" >
                                            <Form.Control onChange={(e) => setState({ ...state, country: e.target.value })} id="country" list="datalistOptions" name="country" placeholder="Type to search..." />
                                            <datalist id="datalistOptions" placeholder="Country" className="lg">
                                                <option value="Russia">Russia</option>
                                                <option value="UK">UK</option>
                                                <option value="USA">USA</option>
                                            </datalist>
                                        </FloatingLabel>
                                    </Col>
                                    <Col className="md-6 mb-4">
                                        <FloatingLabel label="City" >
                                            <Form.Control onChange={(e) => setState({ ...state, city: e.target.value })} id="city" className="lg" type="text" name="city" placeholder="City">
                                            </Form.Control>
                                        </FloatingLabel>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="md-6 mb-4">
                                        <FloatingLabel label="Birthday" >
                                            <Form.Control onChange={(e) => setState({ ...state, bday: e.target.value })} id="bday" className="lg" type="text" name="bday" placeholder="Birthday">
                                            </Form.Control>
                                        </FloatingLabel>
                                    </Col>
                                    <Col className="md-6 mb-4">
                                        <div key="inline-radio" id="sex" className="mb-3">
                                            <Form.Check onChange={(e) => setState({ ...state, sex: e.target.value })} inline id="sex" label="Female" value="Female" name="sex" type="radio" />
                                            <Form.Check onChange={(e) => setState({ ...state, sex: e.target.value })} inline id="sex" label="Male" value="Male" name="sex" type="radio" />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="md-6 mb-4">
                                        <FloatingLabel label="Email" >
                                            <Form.Control onChange={(e) => setState({ ...state, email: e.target.value })} className="lg" type="email" name="email" placeholder="Email">
                                            </Form.Control>
                                        </FloatingLabel>
                                    </Col>
                                    <Col className="md-6 mb-4">
                                        <FloatingLabel label="Username" >
                                            <Form.Control onChange={(e) => setState({ ...state, username: e.target.value })} className="lg" type="text" name="username" placeholder="Username">
                                            </Form.Control>
                                        </FloatingLabel>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="md-6 mb-4">
                                        <FloatingLabel label="Password" >
                                            <Form.Control onChange={(e) => setState({ ...state, password: e.target.value })} className="lg" type="password" name="password" placeholder="Email">
                                            </Form.Control>
                                        </FloatingLabel>
                                    </Col>
                                    <Col className="md-6 mb-4">
                                        <FloatingLabel label="Password again" >
                                            <Form.Control className="lg" type="text" name="username" placeholder="Username">
                                            </Form.Control>
                                        </FloatingLabel>
                                    </Col>
                                </Row>
                                <Row >
                                    <Col className={s.col_for_button}>
                                        <Button type="submit" className="btn btn-primary btn-lg">Submit</Button>
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