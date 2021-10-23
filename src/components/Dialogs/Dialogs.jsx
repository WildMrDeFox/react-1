import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

function DialogItem(props) {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

function Message(props) {
    return <div className={s.message}>{props.message}</div>
}

function Dialogs() {

    let dialogsData = [
        {id: 1, name: 'Nikita'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Valera'},
        {id: 5, name: 'Misha'}
    ]

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Nice, and you?'},
        {id: 4, message: 'I am fine'},
        {id: 5, message: 'Good'},
    ]

    let dialogsElements = dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> );
    let messagesElements = messagesData.map( message => <Message message={message.message}/>);


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