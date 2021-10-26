import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

function Dialogs(props) {




    let dialogsElements = props.state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> );
    let messagesElements = props.state.messages.map( message => <Message message={message.message}/>);

    let newMessageElement = React.createRef();

    function addMessage() {
        props.dispatch({type : 'ADD-MESSAGE'});

    }

    function onMessageChange() {
        let text = newMessageElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text});
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea ref={newMessageElement} onChange={onMessageChange} value={props.newMessageText} />
                <button onClick={addMessage}>Add Message</button>
            </div>
        </div>
    )
}

export default Dialogs;