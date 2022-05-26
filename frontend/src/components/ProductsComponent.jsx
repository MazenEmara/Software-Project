import React, {Component, useState, useEffect} from "react";

function CardComponent(props){
    return (<div class="col-xl-2 col-lg-3 col-md-4 col-6">
    <div class="card card-sm card-product-grid">
        <a href="#" class="img-wrap"> <img src='${props.image}' /> </a>
        <figcaption class="info-wrap">
            <a href="#" class="title">{props.name}</a>
            <div class="price mt-1">${props.price}</div> 
        </figcaption>
    </div>
</div>
)

}


class ProductsComponent extends Component {

    constructor(props) {
        super(props)

        // const ulr = 'http://localhost:3000/products'
        // const [Product_name, setProduct_name] = useState([]);
        // const [page, setPage] = useState(1);

        // fetch(`http://localhost:3000/products?page=${page}`, {
        //   "method": "GET"
        // })
        // .then(response => response.json())
        // .then(response => {
        //     setProduct_name(response)
        // }).catch(err => { console.log(err); 
        // });
        
        // list = response.map()

        //console.log(response)
        //console.log(list)
        // this.list = [<CardComponent  name="Strawberry" price="12.00" image="assets/images/items/2.jpg"/>,
        // <CardComponent name="Strawberry" price="12.00" image="assets/images/items/2.jpg"/>,
        // <CardComponent name="Strawberry" price="12.00" image="assets/images/items/2.jpg"/>]

        this.state = {

        }
    }

    


    render() {
       
        
        return (
            <div className="Container">
                <div className="row p">
                {/* {data} */}
                <CardComponent  name="Strawberry" price="12.00" image="assets/images/items/2.jpg"/>
                <CardComponent  name="Strawberry" price="12.00" image="assets/images/items/2.jpg"/>
                <CardComponent  name="Strawberry" price="12.00" image="assets/images/items/2.jpg"/>
                <CardComponent  name="Strawberry" price="12.00" image="assets/images/items/2.jpg"/>
                </div>

                <div>
                    <ul class="pagination justify-content-center">
                        <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ProductsComponent;