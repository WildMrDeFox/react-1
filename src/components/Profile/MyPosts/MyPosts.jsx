import s from './MyPosts.module.css'
import Post from "./Post/Post";

function MyPosts(){
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
                <Post message='Hi, how are you?' like='20'/>
                <Post message='It my first post' like='30'/>
                <Post />
            </div>
        </div>
    );
}

export default MyPosts;