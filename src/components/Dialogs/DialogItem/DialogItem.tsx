import s from "./DialogItem.module.css"
import { faker } from "@faker-js/faker";
import { Card } from "react-bootstrap";
import Link from "next/link";

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <Card className={s.dialog}>
      <Card.Body className={s.card_body}>
        <Card.Img className={s.avatar}
          src={faker.image.avatar()}
          alt="avatar" />
        <Link
          href={path}
          className={s.name}>
          {props.name}
        </Link>
      </Card.Body>
    </Card>
  );
}

export default DialogItem;