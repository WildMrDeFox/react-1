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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Nikita" id="1" />
                <DialogItem name="Angel" id="2" />
                <DialogItem name="Misha" id="3" />
                <DialogItem name="Sasha" id="4" />
                <DialogItem name="Valera" id="5" />
            </div>
            <div className={s.messages}>
                <Message message="Hi" />
                <Message message="How are you?" />
                <Message message="I fine" />
                <Message message="Good" />
            </div>
        </div>
    )
}

export default Dialogs;