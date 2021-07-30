import './header.styles.scss'
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
const Header = () =>(
    <div className='header'>
    <Link className='logo-container' to='/home'>
    <Logo className='logo'/>
    </Link>
    <div className='options'>
    <Link className='options' to='/home/shop'>
    SHOP
    </Link>
    <Link className='options' to='/home/shop'>
    CONTACT
    </Link>
    </div>
    </div>
)
export default Header;