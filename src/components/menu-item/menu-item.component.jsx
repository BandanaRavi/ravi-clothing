import './menu-item.styles.scss'
const MenuItem = ({title, image, size}) => (
    <div className='menu-item'>
    <img className='menu-image' src ={image} alt ='Shopping'/>
    
    <div className='content'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <span className='subtitle'>Shop Now</span>
    </div>
    </div>
);
export default MenuItem;
// style={{backgroundImage:`url(${image})`}} 
