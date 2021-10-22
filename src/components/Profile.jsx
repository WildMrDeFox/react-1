import p from './Profile.module.css'

function Profile(){
    return (
        <div className={p.content}>
            <div>
                <img src="https://i.redd.it/bohmf1gew2y61.jpg" alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div className='item'>post 1</div>
                    <div className='item'>post 2</div>
                    <div className='item'>post 3</div>
                </div>
            </div>
        </div>
    );
}

export default Profile;