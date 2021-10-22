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
                <Post/>
                <Post />
                <Post />
            </div>
        </div>
    );
}

export default MyPosts;