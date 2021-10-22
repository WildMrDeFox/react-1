import s from './MyPosts.module.css'
import Post from "./Post/Post";

function MyPosts(){
    return (
        <div>
            My posts
            <div>
                New post
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