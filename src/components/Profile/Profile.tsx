import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css'
import { Container, Row } from "react-bootstrap";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer"

const Profile = (props) => {
  return (<Container className={s.container}>
    <Row >
      <ProfileInfo {...props.user} />
    </Row>
    <Row>
      <MyPostsContainer state={props.state} />
    </Row>
  </Container>);
}

export default Profile;