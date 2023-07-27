import { Button, Card, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap"
import s from './Registration.module.css'
import * as formik from 'formik';
import * as yup from 'yup';

export const Registration = ({ onSubmit }) => {

    const { Formik } = formik;

    const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
    // min 5 characters, 1 upper case letter, 1 numeric digit.

    const schema = yup.object().shape({
        firstName: yup.string().required("this field is required"),
        lastName: yup.string().required("this field is required"),
        username: yup.string().required("this field is required").test('Unique username', 'username already exists, please type another', async (value) => {
            let resp = await fetch(`/api/checkusername?username=${value}`).then(response => response.json())

            console.log(resp.exists)
            return resp.exists == 0
        }),
        city: yup.string().required("this field is required"),
        country: yup.string().required("this field is required"),
        email: yup.string().required("this field is required"),
        sex: yup.string().required("this field is required"),
        password: yup.string().required("No password provided").matches(passwordRules, 'Password can only contain Latin letters, have min 5 characters, , 1 upper case letter, 1 numeric digit'),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match").required("Required"),
    });


    return <Formik
        validationSchema={schema}
        onSubmit={onSubmit}
        initialValues={{
            firstName: '',
            lastName: '',
            username: '',
            city: '',
            country: '',
            email: '',
            sex: '',
            password: '',
            confirmPassword: ''
        }}
    >
        {({ touched, errors, values, handleChange, handleSubmit }) => (<section className={`vh-100 ${s.gradient_custom}`}>
            <Container fluid className="justify-content-center align-items-center h-100 d-flex py-5">
                <Row className="justify-content-center align-items-center h-100">
                    <Col xs={12} className="lg-9 xl-7">
                        <Card className={`shadow-2-strong ${s.card_registration}`}>
                            <Card.Body className="p-4 p-md-5">
                                <Card.Title className={`mb-4 pb-2 pb-md-0 mb-md-5 ${s.title}`}>Sign Up</Card.Title>
                                <Form noValidate onSubmit={handleSubmit}>
                                    <Row>
                                        <Col className="md-6 mb-4">
                                            <FloatingLabel label="First Name" >
                                                <Form.Control
                                                    id="firstName"
                                                    value={values.firstName}
                                                    onChange={handleChange}
                                                    className="lg"
                                                    type="text"
                                                    name="firstName"
                                                    placeholder="First Name"
                                                    isValid={touched.firstName && !errors.firstName}
                                                    isInvalid={!!errors.firstName} />
                                                <Form.Control.Feedback type="invalid">
                                                    <>{errors.firstName}</>
                                                </Form.Control.Feedback>
                                            </FloatingLabel>
                                        </Col>
                                        <Col className="md-6 mb-4">
                                            <FloatingLabel label="Last Name" >
                                                <Form.Control
                                                    id="lastName"
                                                    value={values.lastName}
                                                    onChange={handleChange}
                                                    className="lg"
                                                    type="text"
                                                    name="lastName"
                                                    placeholder="Last Name"
                                                    isValid={touched.lastName && !errors.lastName}
                                                    isInvalid={!!errors.lastName} />
                                                <Form.Control.Feedback type="invalid">
                                                    <>{errors.lastName}</>
                                                </Form.Control.Feedback>
                                            </FloatingLabel>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="md-6 mb-4">
                                            <FloatingLabel label="Country" >
                                                <Form.Control
                                                    id="country"
                                                    list="datalistOptions"
                                                    name="country"
                                                    placeholder="Type to search..."
                                                    value={values.country}
                                                    onChange={handleChange}
                                                    isValid={touched.country && !errors.country}
                                                    isInvalid={!!errors.country} />
                                                <datalist id="datalistOptions" placeholder="Country" className="lg">
                                                    <option value="Russia">Russia</option>
                                                    <option value="UK">UK</option>
                                                    <option value="USA">USA</option>
                                                </datalist>
                                                <Form.Control.Feedback type="invalid">
                                                    <>{errors.country}</>
                                                </Form.Control.Feedback>
                                            </FloatingLabel>
                                        </Col>
                                        <Col className="md-6 mb-4">
                                            <FloatingLabel label="City" >
                                                <Form.Control
                                                    id="city"
                                                    className="lg"
                                                    type="text"
                                                    name="city"
                                                    placeholder="City"
                                                    value={values.city}
                                                    onChange={handleChange}
                                                    isValid={touched.city && !errors.city}
                                                    isInvalid={!!errors.city} />
                                                <Form.Control.Feedback type="invalid">
                                                    <>{errors.city}</>
                                                </Form.Control.Feedback>
                                            </FloatingLabel>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="md-6 mb-4">
                                            <FloatingLabel label="Birthday" >
                                                <Form.Control
                                                    id="bday"
                                                    className="lg"
                                                    type="text"
                                                    name="bday"
                                                    placeholder="Birthday" />
                                            </FloatingLabel>
                                        </Col>
                                        <Col className="md-6 mb-4">
                                            <div key="inline-radio" id="sex" className="mb-3">
                                                <Form.Check
                                                    onChange={handleChange}
                                                    isValid={values.sex == 'Female' || values.sex == 'Male'}
                                                    isInvalid={touched.sex && values.sex != 'Female' && values.sex != 'Male'} inline label="Female" value="Female"
                                                    name="sex" type="radio" />
                                                <Form.Check
                                                    onChange={handleChange}
                                                    isValid={values.sex == 'Female' || values.sex == 'Male'}
                                                    isInvalid={touched.sex && values.sex != 'Female' && values.sex != 'Male'} inline label="Male" value="Male"
                                                    name="sex" type="radio" />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="md-6 mb-4">
                                            <FloatingLabel label="Email" >
                                                <Form.Control
                                                    className="lg"
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    isValid={touched.email && !errors.email}
                                                    isInvalid={!!errors.email} />
                                                <Form.Control.Feedback type="invalid">
                                                    <>{errors.email}</>
                                                </Form.Control.Feedback>
                                            </FloatingLabel>
                                        </Col>
                                        <Col className="md-6 mb-4">
                                            <FloatingLabel label="Username" >
                                                <Form.Control
                                                    className="lg"
                                                    type="text"
                                                    name="username"
                                                    placeholder="Username"
                                                    value={values.username}
                                                    onChange={handleChange}
                                                    isValid={touched.username && !errors.username}
                                                    isInvalid={!!errors.username} />
                                                <Form.Control.Feedback type="invalid">
                                                    <>{errors.username}</>
                                                </Form.Control.Feedback>
                                            </FloatingLabel>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="md-6 mb-4">
                                            <FloatingLabel label="Password" >
                                                <Form.Control
                                                    className="lg"
                                                    type="password"
                                                    name="password"
                                                    placeholder="Password"
                                                    value={values.password}
                                                    onChange={handleChange}
                                                    isValid={touched.password && !errors.password}
                                                    isInvalid={!!errors.password} />
                                                <Form.Control.Feedback type="invalid">
                                                    <>{errors.password}</>
                                                </Form.Control.Feedback>
                                            </FloatingLabel>
                                        </Col>
                                        <Col className="md-6 mb-4">
                                            <FloatingLabel label="Password again" >
                                                <Form.Control
                                                    className="lg"
                                                    type="password"
                                                    name="confirmPassword"
                                                    placeholder="confirmPassword"
                                                    value={values.confirmPassword}
                                                    onChange={handleChange}
                                                    isValid={touched.confirmPassword && !errors.confirmPassword}
                                                    isInvalid={!!errors.confirmPassword} />
                                                <Form.Control.Feedback type="invalid">
                                                    <>{errors.confirmPassword}</>
                                                </Form.Control.Feedback>
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
        )}
    </Formik >
}