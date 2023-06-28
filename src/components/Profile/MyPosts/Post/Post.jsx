import React from "react";
import s from "./Post.module.css";
import { Button, Card, Col} from "react-bootstrap";

const Post = (props) => {
  
  return (
    <Card className={s.post} bg="light_grey">
      <Card.Header className={s.card_header}>
        <Col>
          <img className={s.avatar}
            src={props.avatar}
            alt='avatarka' />
        </Col>
        <Col xs={11}>
          <div className={s.full_name}>
            {props.fullName}
          </div>
        </Col>
      </Card.Header>
      <Card.Body >
          <div className={s.post_message}>
            {props.message}
          </div>
          <Button onClick={() =>{props.likePost(props.id)}} size="sm" className={s.like_post} variant="light">
            <img src={props.likeImage} alt="like" className={s.likeImage} />
            <div>{props.likesCount}</div>
          </Button>
      </Card.Body>
    </Card>
  );
}

export default Post;