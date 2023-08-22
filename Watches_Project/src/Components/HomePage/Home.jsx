import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap';
import Watchdata from '../../Utils/Watchdata.json'

import './Home.css';
import Navibar from '../Navigationbar/Navibar';
import Dealinfo from '../Dealinfo';
import SellerProduct from '../BestSeller/SellerProduct';
import '../BestSeller/SellerProduct.css'
import FooterCom from '../FooterPage/FooterCom';

let Home = () => {
    let [data, setData] = useState(Watchdata)
    return (
        <>
            <Navibar search={false} />
            <div style={{ overflow: "hidden" }} className="hero-content">
                <div className="row">
                    <div className="bg-img-main">
                        <div className="rightside-img">
                            <Container>
                                <div className="leftside-txt">
                                    <h4>Exclusive Offer 30% off This Week</h4>
                                    <h1>Hawthrone Timepieces:</h1>
                                    <h1>Exquisite Watches</h1>
                                    <h1>for Every Occasion</h1>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime tenetur animi harum, distinctio tempora cum, quae labore at eos asperiores voluptatem quos facilis consequuntur provident. Id libero voluptate perspiciatis accusantium?</p>
                                    <p style={{ paddingBottom: '30px' }}>Starting at <strong>$1,099.00</strong></p>
                                    <div className="btn-shop">
                                        <Button className='btn-shoppy' variant="danger" style={{ backgroundColor: 'transparent' }}>SHOP NOW</Button>
                                    </div>
                                </div>

                            </Container>
                        </div>

                    </div>
                </div>
                <Dealinfo />
                <h3 style={{ marginLeft: '305px', padding: '80px 0px 20px 0px' }}>Best Seller Product</h3>
                <div className='card-flex'>
                    {
                        data?.map?.((e) => {

                            return <SellerProduct data={e} />
                        })
                    }
                </div>
            </div>
            <FooterCom />

        </>
    )
}



export default Home