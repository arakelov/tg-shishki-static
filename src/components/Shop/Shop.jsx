import React, { useState } from 'react';    
import Icon from '@mui/material/Icon';
import Cart from '@mui/icons-material/ShoppingCart';
import './Shop.css'

export default function SimpleBottomNavigation() {
    const [value, setValue] = useState(0);
  
    return (
        <div>
        <h3>
            Boost
        </h3>
        <div class="row">
            <div class="col s6">
                <div  class="card shop-products">
                <div  class="card-image">
                <img  src="https://www.eroticcity.cz/foto/katalog/full/LD.0301510503.jpg"  class="shop-product-img"/>
                <span><p><a  class="btn-floating halfway-fab waves-effect waves-light accent-3">
                <Icon component={Cart}></Icon></a></p></span>
                </div>
                <div  class="card-action accent-3 white-text">
                <p>
                    <span>$35.00</span>
                </p>
                </div>
                </div>
            </div>
            <div class="col s6">
            <div  class="card shop-products">
                <div  class="card-image">
                <img  src="data:image/jpeg;base64,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"  class="shop-product-img"/>
                <span><p><a  class="btn-floating halfway-fab waves-effect waves-light red accent-3">
                <Icon component={Cart}></Icon></a></p></span>
                </div>
                <div  class="card-action red accent-3 white-text">
                <p>
                    <span>$35.00</span>
                </p>
                </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col s6">
                <div  class="card shop-products">
                    <div  class="card-image">
                    <img  src="data:image/jpeg;base64,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"  class="shop-product-img"/>
                    <span><p><a  class="btn-floating halfway-fab waves-effect waves-light red accent-3">
                    <Icon component={Cart}></Icon></a></p></span>
                    </div>
                    <div  class="card-action red accent-3 white-text">
                    <p>
                        <span>$35.00</span>
                    </p>
                    </div>
                </div>
            </div>
            <div class="col s6">
            <div  class="card shop-products">
                    <div  class="card-image">
                    <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBFa57OcSF9vxDvwWzv2DWB3y2tbsTyyIY6Q&s"  class="shop-product-img"/>
                    <span><p><a  class="btn-floating halfway-fab waves-effect waves-light red accent-3">
                    <Icon component={Cart}></Icon></a></p></span>
                    </div>
                    <div  class="card-action red accent-3 white-text">
                    <p>
                        <span>$35.00</span>
                    </p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    );
  }