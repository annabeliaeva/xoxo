import s from "./ProfileInfo.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { UserData } from "@/types/userData";

const ProfileInfo = (props: UserData) => {

  return (
    <Container>
      <Row>
        <Col >
          <img
            className={`${s.avatar}`}
            src={props.avatar}
            alt='Shapka' />
        </Col>
        <Col xs={6}>
          <div className={`${s.infoBlock}`}>
            <div className={s.full_name}>
              {props.fullName}
            </div>
            <div>
              {props.location.city}, {props.location.country}
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