import s from './../Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

function Dialogs(props) {




    let dialogsElements = props.dialogData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> );
    let messagesElements = props.messageData.map( message => <Message message={message.message}/>);


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;