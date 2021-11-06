import React from 'react';
import s from './Dialog.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialog = (props) => {

  return (
    <div className={s.dialogs}>
      <DialogItem dialogData={props.dialogPage.dialogData} />
      <Message 
        dialogPage={props.dialogPage.messageData}
        addMessage = {props.addMessage} 
      />
    </div>
  )
}

export default Dialog;