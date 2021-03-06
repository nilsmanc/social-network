import React from 'react';
import { InitialStateType } from '../../redux/dialogs-reducer';
import AddMessageForm from './AddMessageForm/AddMessageForm';
import DialogsItem from './DialogItem/DialogsItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

type PropsType = {
  dialogsPage: InitialStateType;
  sendMessage: (messageText: string) => void;
};

export type NewMessageFormValuesType = {
  newMessageBody: string;
};

const Dialogs: React.FC<PropsType> = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogsItem name={d.name} key={d.id} id={d.id} />
  ));
  let messagesElements = state.messages.map((m) => <Message message={m.message} key={m.id} />);

  let addNewMessage = (values: NewMessageFormValuesType) => {
    props.sendMessage(values.newMessageBody);
    values.newMessageBody = '';
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
      </div>
      <AddMessageForm onSubmit={addNewMessage} />
    </div>
  );
};

export default Dialogs;
