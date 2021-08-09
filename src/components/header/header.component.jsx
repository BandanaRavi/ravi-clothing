import './header.styles.scss'
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
const Header = ({currentUser}) =>(
    <div className='header'>
    <Link className='logo-container' to='/home'>
    <Logo className='logo'/>
    </Link>
    <div className='options'>
    <Link className='options' to='/home/shop'>
    SHOP
    </Link>
    <Link className='option' to='/home/shop'>
    CONTACT
    </Link>
    {currentUser?
    <div className='option' onClick={()=>auth.signOut()} >
    SIGN OUT
    </div>
    :
    <Link className='option'>SIGN IN</Link>}
    </div>
    </div>
)
export default Header;