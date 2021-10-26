const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', like: 12},
                {id: 2, message: 'It my first post', like: 11},
            ],
            newPostText: 'first-text',

        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Nice, and you?'},
                {id: 4, message: 'I am fine'},
                {id: 5, message: 'Good'},
            ],
            newMessageText: 'New message',
            dialogs: [
                {id: 1, name: 'Nikita'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sasha'},
                {id: 4, name: 'Valera'},
                {id: 5, name: 'Misha'}
            ],
        },
    },
    _callSubscriber () {},

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if(action.type === 'ADD_POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                like: 0,
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE_NEW_POST_TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD_MESSAGE') {
            let newMessage = {
                id: 6,
                message: this._state.dialogsPage.newMessageText,
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE_NEW_MESSAGE_TEXT') {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export function addPostActionCreator() {
    return {
        type: ADD_POST,
    }
}

export function updateNewPostTextActionCreator(text) {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
}

export function addMessageActionCreator() {
    return {
        type: ADD_MESSAGE,
    }
}

export function addUpdateNewMessageTextActionCreator(text) {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text,
    }
}

export default store;