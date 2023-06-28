import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Dialogs = (props) => {

  let dialogEL = props.dialogsPage.dialogsData.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />)
  let messageEl = props.dialogsPage.messagesData.map(m =>
    <Message id={m.id} key={m.id} message={m.message} isMine={m.isMine} name={m.name} />)

  let sendMessage = () => {
    props.sendMessage()
  }

  let onMessageChange = (e) => {
    let text = e.target.value
    props.onMessageChange(text)
  }

  return (
    <Container className={`${s.dialogs}`}>
      <Row className={s.dialogs_row}>
      <Col xs={3} className={`bg-light_grey ${s.dialog_items}`}>
          {dialogEL}
      </Col>
      <Col className={`${s.dialog_and_send_block}`}>
        <div className={`${s.messages} ${s.padAndMar} flex-col`}>
          {messageEl}
        </div>
        <Form className={`${s.send_message_block}`}>
          <Form.Control className={s.text_area}
            onChange={onMessageChange}
            value={props.dialogsPage.updatedMessage}>
          </Form.Control>
          <Button 
            className={s.button_send_message}
            onClick={sendMessage}
          >Send 
          </Button>
        </Form>
      </Col>
      </Row>
    </Container>
  );
}

export default Dialogs;