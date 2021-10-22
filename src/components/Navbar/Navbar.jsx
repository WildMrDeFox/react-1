import s from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={s.nav}>
            <ul>
                <li><a href="/profile" className={`${s.nav_link} ${s.active}`}>Profile</a></li>
                <li><a href="/dialogs">Messages</a></li>
                <li><a href="/news">News</a></li>
                <li><a href="/music">Music</a></li>
                <li><a href="/settings">Settings</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;