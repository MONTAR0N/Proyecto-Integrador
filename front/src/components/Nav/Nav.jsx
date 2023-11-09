import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css'

const Nav = ({ onSearch, random }) => {

    //FUNCIONES

    const handleRandomClick = () => {
        const randomId = Math.floor(Math.random() * 826) + 1;
        random(randomId);
    };

    //RENDER

    return (
        <div className={styles.navContainer}>
            <div className={styles.linksContainer}>
                <Link to='/home' className={styles.link}>
                    <h3>Home</h3>
                </Link>
                <Link to='/about' className={styles.link}>
                    <h3>About</h3>
                </Link>
                <Link to='/favorites' className={styles.link}>
                    <h3>Favorites</h3>
                </Link>
            </div>
            <div className={styles.formContainer}>
                <SearchBar onSearch={onSearch} handleRandomClick={handleRandomClick} />
            </div>
        </div>
    )

}

export default Nav