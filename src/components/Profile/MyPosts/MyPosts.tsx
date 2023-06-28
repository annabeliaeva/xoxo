import React, { useRef } from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Col, Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button"


const MyPosts = (props) => {

  let postsEl = props.postData.map(p => <Post 
    id={p.id}
    avatar={p.avatar}
    fullName={p.fullName}
    key={p.id}
    message={p.message}
    likeImage={p.likeImage}
    likesCount={p.likesCount}
    likePost = {props.likePost} />)

  let onPostAdd = () => {
    props.addPost()
  }

  return (
    <Container className={`${s.post_block}`}>
      <Col>
        <Form className={`${s.new_post} flex-col`}>
          <label>My blog</label>
          <Form.Control 
            className={`${s.postText}`}
            value={props.newPostText}
            rows={3}
            onChange={(e) => {props.updateNewPostText(e.target.value)}} >
          </Form.Control>
          <Button
            className={`${s.send_button}`}
            onClick={onPostAdd}>Add post</Button>
        </Form>
      </Col>
      <Col>
        <Container className={s.posts}>
          {postsEl}
        </Container>
      </Col>
    </Container>
  );
}

export default MyPosts;