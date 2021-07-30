import './shopping-item.styles.scss';
const ShoppingItem =({id, name, price, imageUrl}) =>(
    <div className='shopping-item'>
    <img className='image' src ={imageUrl} alt ='Shopping'/>
    <div className='collection-footer'>
    <span className='name'>{name}</span>
    <span className='price'>{price}</span>
    </div>
    </div>
    
);
export default ShoppingItem;