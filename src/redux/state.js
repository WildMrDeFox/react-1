let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', like: 12},
            {id: 2, message: 'It my first post', like: 11},
        ],

    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Nice, and you?'},
            {id: 4, message: 'I am fine'},
            {id: 5, message: 'Good'},
        ],
        dialogs: [
            {id: 1, name: 'Nikita'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Sasha'},
            {id: 4, name: 'Valera'},
            {id: 5, name: 'Misha'}
        ],
    },
}

export function addPost(postMessage) {
    let newPost = {
        id: 5,
        message: postMessage,
        like: 0,
    }
    state.profilePage.posts.push(newPost)
}

export default state;