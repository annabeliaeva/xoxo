import s from "./Message.module.css"

const Message = (props) => {
  return (
    <div className={`${s.message} ${props.isMine === false ? s.isMine : s.isNotMine}`}>
      <div className={`${s.name} flex-col`}> {props.name}</div>
      <div >{props.message}
      </div>
    </div>

  );
}

export default Message;