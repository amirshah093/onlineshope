import React from 'react';
import MenuItem from '../menuItems/menu-items';
import './directory.style.scss';

class Directory extends React.Component{
    constructor(){
        super()
        
        this.state ={
            section: [{
                title: 'hats',
                imageUrl: 'https://cdn.shopify.com/s/files/1/2121/1571/files/WOMEN_S_FEDORA_HATS_10TH_STREET_360X600_HERO_600x.jpg?v=1561416259',
                linkUrl: 'hats',
                id: 1

            },
            {
                title: 'Jackets',
                imageUrl: 'https://i.ibb.co/PNnfjtw/66355645-662869480848281-5704416038871891968-n.jpg',
                linkUrl: '',
                id: 2
            },
            {
                title: 'Womens',
                imageUrl: 'https://hips.hearstapps.com/ell.h-cdn.co/assets/16/47/1479838479-pernille-teisbaek-velvet-blazer.jpg',
                linkUrl: '',
                id: 3
            },
            {
                title: 'Manns',
                imageUrl: 'https://cdn2.stylecraze.com/wp-content/uploads/2017/12/4.-Bomber-Jacket.jpg',
                size: 'large',
                linkUrl: '',
                id: 4

            },
            {
                title: 'Jackets',
                imageUrl: 'https://i.ibb.co/PNnfjtw/66355645-662869480848281-5704416038871891968-n.jpg',
                size: 'large',
                linkUrl: '',
                id: 5

            },
        ]
        }
    }
    render() {
        return(
            <div className="directory-menu">
               { 
                   this.state.section.map(({id, ...otherSectionProps}) =>(
                       <MenuItem key={id} {...otherSectionProps} />
                   ))
                }

            </div>
        )
    }
}

export default Directory;

