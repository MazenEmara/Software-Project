import React, {Component} from "react";


class CardComponent extends Component {

    constructor(props) {
        super(props)
        console.log(props)
        this.state = {

        }
    }
    
    render() {
        return (<div class="col-xl-2 col-lg-3 col-md-4 col-6">
                    <div class="card card-sm card-product-grid">
                        <a href="#" class="img-wrap"> <img src="assets/images/items/2.jpg" /> </a>
                        <figcaption class="info-wrap">
                            <a href="#" class="title">Strawberry</a>
                            <div class="price mt-1">$17.00</div> 
                        </figcaption>
                    </div>
                </div>
        )
    }
}