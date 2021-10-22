import s from './Post.module.css'

function Post() {
    return (
        <div className={s.item}>
            <img src="https://w7.pngwing.com/pngs/336/946/png-transparent-avatar-user-medicine-surgery-patient-avatar-face-heroes-head.png" alt=""/>
            <div>Text</div>
            <div>
                <span>Like</span>
            </div>
        </div>
    )
}

export default Post;