import './menu-item.styles.scss'
import {withRouter} from 'react-router-dom'
const MenuItem = ({title, image, url, history, match}) => (
    <div className='menu-item' onClick={()=>history.push(match.url+url)}>

    <img className='menu-image' src ={image} alt ='Shopping'/>
    
    <div className='content'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <span className='subtitle'>Shop Now</span>
    </div>
    </div>
);
export default withRouter(MenuItem);
// style={{backgroundImage:`url(${image})`}} 
// {console.log(history.push(match.url+url))}
// 