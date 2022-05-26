import React, {Component} from "react";

class FooterComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <footer class="section-footer bg-secondary">
                    <div class="container">
                        <section class="footer-top padding-y-lg text-white">
                            <div class="row">
                                <aside class="col-md col-6">
                                    <h6 class="title">Company</h6>
                                    <ul class="list-unstyled">
                                        <li> <a href="#">About us</a></li>
                                        <li> <a href="#">Career</a></li>
                                        <li> <a href="#">Rules and terms</a></li>
                                    </ul>
                                </aside>
                                <aside class="col-md col-6">
                                    <h6 class="title">Help</h6>
                                    <ul class="list-unstyled">
                                        <li> <a href="#">Contact us</a></li>
                                        <li> <a href="#">Order status</a></li>
                                        <li> <a href="#">Shipping info</a></li>
                                    </ul>
                                </aside>
                                <aside class="col-md col-6">
                                    <h6 class="title">Account</h6>
                                    <ul class="list-unstyled">
                                        <li> <a href="#"> My Orders </a></li>
                                    </ul>
                                </aside>
                                <aside class="col-md">
                                    <h6 class="title">Social</h6>
                                    <ul class="list-unstyled">
                                        <li><a href="#"> <i class="fab fa-facebook"></i> Facebook </a></li>
                                        <li><a href="#"> <i class="fab fa-twitter"></i> Twitter </a></li>
                                        <li><a href="#"> <i class="fab fa-instagram"></i> Instagram </a></li>
                                        <li><a href="#"> <i class="fab fa-youtube"></i> Youtube </a></li>
                                    </ul>
                                </aside>
                            </div> 
                        </section>  
                
                        <section class="footer-bottom text-center">
                        
                            
                                <p class="text-muted"> &copy; 2022 Rabbit, All rights reserved </p>
                                <br />
                        </section>
                    </div>
                </footer>
        )
    }
}

export default FooterComponent;