import React, { useState } from "react";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

  const [state, updateAndSendMessage] = useState(props.state)

  let onSendMessageClick = () => {
    updateAndSendMessage(state => {
      return {
        ...state,
        dialogs_page: {
          ...state.dialogs_page,
          messagesData: [...state.dialogs_page.messagesData, { id: 4, message: state.dialogs_page.updatedMessage, isMine: true, name: 'Anna Belyaeva' }],
          updatedMessage: ''
        }
      }
    })
  }

  let updateMessageChange = (text) => {
    updateAndSendMessage(state => {
      return {
        ...state,
        dialogs_page: {
          ...state.dialogs_page,
          updatedMessage: text
        }
      }
    })
  }

  return <Dialogs sendMessage={onSendMessageClick}
    onMessageChange={updateMessageChange}
    dialogsPage={state.dialogs_page} />
}

export default DialogsContainer;