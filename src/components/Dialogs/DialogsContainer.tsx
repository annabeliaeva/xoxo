import React, { useState } from "react";
import { sendMessageActionCreator, updateMessageActionCreator } from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import { state as initialState } from '@/store'

const DialogsContainer = () => {

  const [state, updateAndSendMessage] = useState(initialState)

  let onSendMessageClick = () => {
    updateAndSendMessage(state => {
      return {
        ...state,
        dialogs_page: {
          ...state.dialogs_page,
          messagesData: [...state.dialogs_page.messagesData, { id: 4, message: state.dialogs_page.updatedMessage, isMine: true, name: 'Anna Belyaeva' }]
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