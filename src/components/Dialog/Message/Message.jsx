import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLength15 } from '../../../utils/validators/validators';
import { ElementHOC } from '../../hoc/element';

import s from './../Dialog.module.css';


const Message = ({ dialogPage, addMessage }) => {

  let messageElement = dialogPage.map(m => 
      <p key ={dialogPage.indexOf(m)}>{m.message}</p>
    );

  const submit = (value) => addMessage(value.message);
  
  return (
    <div className={s.message}>
      <div className={s.dialog}>
        {messageElement}
      </div>
      <div className={s.messageInput}>
        <LoginReduxForm onSubmit={submit} />
      </div>
    </div>
  );
}

const LoginForm = (props) => {
  const { handleSubmit } = props;
  const Textarea = ElementHOC('textarea'); 

  return <div>
    <form onSubmit={handleSubmit}>
      <Field 
        component={Textarea}
        type='text'
        name='message'
        validate={[maxLength15]}  
        placeholder='input new message' 
      />
      <button type='submit' >Submit</button>
    </form>
  </div>
}


const LoginReduxForm = reduxForm({
  form: 'message',
})(LoginForm);


export default Message;