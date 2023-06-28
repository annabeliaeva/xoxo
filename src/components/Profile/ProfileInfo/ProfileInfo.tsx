import React from "react";
import s from "./ProfileInfo.module.css";
import { Col, Container, Row } from "react-bootstrap";

const ProfileInfo = () => {
  return (
    <Container>
      <Row>
        <Col >
          <img
            className={`${s.avatar}`}
            src='http://www.ytcovers.ru/wp-content/uploads/2016/12/art-skull.png'
            alt='Shapka' />
        </Col>
        <Col xs={6}>
          <div className={`${s.infoBlock}`}>
            <div className={s.full_name}>
              Anna Belyaeva
            </div>
            <div>
              Saint-Petersburg, Russia
            </div>
          </div>
        </Col>
        <Col className={`${s.statusBlock}`}>
          <div className={`${s.status}`}>
            online
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProfileInfo;