import './shopping-preview.styles.scss'
import React from 'react'
import ShoppingItem from '../shopping-item/shopping-item.component'
const ShoppingPreview = ({title, items}) =>(

    <div className='shopping-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
    {items.filter((item, index)=>index<4).map(({id, ...rest}) =>
    (<ShoppingItem key={id} {...rest}/> ))}
    </div>
    </div>
);
export default ShoppingPreview;
// {items.map(item =>
//     (<div key={item.id}>item.name</div>))}