import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css'
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import { Container, Row } from "react-bootstrap";

const Profile = (props) => {
  return (<Container className={s.container}>
    <Row >
      <ProfileInfo />
      {props.id}
    </Row>
    <Row>
      <MyPostsContainer state = {props.state}/>
    </Row>
  </Container>);
}

export default Profile;