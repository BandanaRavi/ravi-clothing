import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './main-menu.stlyles.scss';
class MainMenu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            menu:[
                {
                  title: 'hats',
                  image: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  url: '/hats'
                },
                {
                  title: 'jackets',
                  image: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  url: '/jackets'
                },
                {
                  title: 'sneakers',
                  image: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  url: '/sneakers'
                },
                {
                  title: 'womens',
                  image: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'l',
                  id: 4,
                  url: '/womens'
                },
                {
                  title: 'mens',
                  image: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'l',
                  id: 5,
                  url: '/mens'
                }
              ],
              
        }
    }
    render() {
        return (
            <div className='main-menu'>
            {
                this.state.menu.map(({id, ...otherSectionProps}) => 
                (<MenuItem key={id} {...otherSectionProps}/>))
            }
            </div>
        );
    }
}
export default MainMenu;