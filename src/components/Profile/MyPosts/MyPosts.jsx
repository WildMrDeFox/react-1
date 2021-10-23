import s from './MyPosts.module.css'
import Post from "./Post/Post";

function MyPosts(){

    let postData = [
        {id: 1, message: 'Hi, how are you?', like: 12},
        {id: 2, message: 'It my first post', like: 11},
    ]

    let postElements = postData.map( p => <Post message={p.message} like={p.like} />)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;