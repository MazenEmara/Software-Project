import React, {Component} from "react";

class CategoriesComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <section class="section-main padding-y">
                <main class="card">
                    <div class="card-body">
                
                <div class="row">
                    <aside class="col-lg col-md-3 flex-lg-grow-0">
                        <nav class="nav-home-aside">
                            <h6 class="title-category">MY MARKETS <i class="d-md-none icon fa fa-chevron-down"></i></h6>
                            <ul class="menu-category">
                                <li><a href="#">Milk products</a></li>
                                <li><a href="#">Meat</a></li>
                                <li><a href="#">Chicken</a></li>
                                <li><a href="#">Snacks</a></li>
                                <li><a href="#">Fruits and vegetables</a></li>
                                <li><a href="#">Home products</a></li>
                                <li class="has-submenu"><a href="#">More items</a>
                                    <ul class="submenu">
                                        <li><a href="#">Chocolates</a></li>
                                        <li><a href="#">Car accessories</a></li>
                                        <li><a href="#">Another menu</a></li>
                                        <li><a href="#">Some others</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </aside>
                    <div class="col-md-9 col-xl-7 col-lg-7">
                
            
                <div id="carousel1_indicator" class="slider-home-banner carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carousel1_indicator" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel1_indicator" data-slide-to="1"></li>
                    <li data-target="#carousel1_indicator" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="assets/images/banners/slide1.jpg" alt="First slide" /> 
                    </div>
                    <div class="carousel-item">
                    <img src="assets/images/banners/slide2.jpg" alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                    <img src="assets/images/banners/slide3.jpg" alt="Third slide" />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carousel1_indicator" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carousel1_indicator" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
                </div> 
            
                
                    </div> 
                    <div class="col-md d-none d-lg-block flex-grow-1">
                        <aside class="special-home-right">
                            <h6 class="bg-blue text-center text-white mb-0 p-2">Popular category</h6>
                            
                            <div class="card-banner border-bottom">
                            <div class="py-3" style={{width:80}}>
                                <h6 class="card-title">Milk products</h6>
                                <a href="#" class="btn btn-secondary btn-sm"> Source now </a>
                            </div> 
                            <img src="assets/images/items/1.jpg" height="80" class="img-bg" />
                            </div>
                
                            <div class="card-banner border-bottom">
                            <div class="py-3" style={{width:80}}>
                                <h6 class="card-title">Fruits and vegetables </h6>
                                <a href="#" class="btn btn-secondary btn-sm"> Source now </a>
                            </div> 
                            <img src="assets/images/items/2.jpg" height="80" class="img-bg" />
                            </div>
                
                            <div class="card-banner border-bottom">
                            <div class="py-3" style={{width:80}}>
                                <h6 class="card-title">Chicken</h6>
                                <a href="#" class="btn btn-secondary btn-sm"> Source now </a>
                            </div> 
                            <img src="assets/images/items/6.jpg" height="80" class="img-bg" />
                            </div>
                
                        </aside>
                    </div>
                </div> 
                
                    </div> 
                </main> 
                
                </section>
        )
    }
}

export default CategoriesComponent;