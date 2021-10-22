import p from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

function Profile(){
    return (
        <div className={p.content}>
            <div>
                <img src="https://i.redd.it/bohmf1gew2y61.jpg" alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;