
let rerenderEntireTree = () => {

}
let state = {
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
}

export function addPost() {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        like: 0,
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export function updateNewPostText(newText) {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export function addMessage() {
    let newMessage = {
        id: 6,
        message: state.dialogsPage.newMessageText,
    }
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}

export function updateNewMessageText(newText) {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
}

export function subscribe(observer) {
    rerenderEntireTree = observer;
}

export default state;