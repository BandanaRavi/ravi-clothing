
import ShopPageData from './shoppage.data.js'
import React from 'react'
import ShoppingPreview from '../../components/shopping-preview.component/shopping-preview.component.jsx';
class ShopPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            shopItems: ShopPageData
                    
        }
    }
    render(){
        const {shopItems} = this.state;
        return(
            <div className='shop-page'>
            {shopItems.map(({id, ...remainingprops}) => <ShoppingPreview key={id} {...remainingprops}/>)}
            </div>
        )
    }
}
export default ShopPage;
// 