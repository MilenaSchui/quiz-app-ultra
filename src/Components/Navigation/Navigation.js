import '../Navigation/Navigation.css'
import HomeIcon from '../../assets/home-icon.png';
import FormIcon from '../../assets/form-icon.png';
import ProfileIcon from '../../assets/profile-icon.png';
import BookmarkIcon from '../../assets/bookmark-icon.png';
import FullHomeIcon from '../../assets/home-icon-fullblack.png';

function Navigation({navState, setNavState}) {
    return (
        <footer className="navbar" >
            <div>
                <img 
                className={navState === 'home' ? 'hide' : ''}
                onClick={() => setNavState('home')}
                src={HomeIcon}
                alt="home icon"
                />
                <img src={FullHomeIcon} className={navState === 'home' ? '' : 'hide'} alt="home icon"/>
            </div>
            <div>
                <img
                onClick={() => setNavState('bookmark')}
                src={BookmarkIcon}
                alt="bookmark icon"
                />
            </div>
            <div><img
                onClick={() => setNavState('form')}
                src={FormIcon}
                alt="form icon"
                />
            </div>
           <div>
            <img
                onClick={() => setNavState('profile')}
                src={ProfileIcon}
                alt="profile icon"
            />
            </div>
        </footer>
    )
}

export default Navigation