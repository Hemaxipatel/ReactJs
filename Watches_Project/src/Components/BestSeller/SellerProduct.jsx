import { Heart, ShoppingCart } from 'lucide-react'
import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { CardBody, CardSubtitle, CardTitle } from 'reactstrap'

function SellerProduct({ data }) {
    return (
        <>
            <Card
                style={{
                    width: '18rem'
                }}
            >
                <img className='card-img-box'
                    alt="Sample"
                    src={data?.imageURL} />
                <hr />
                <CardBody style={{ textAlign: 'center' }}>
                    <CardTitle style={{ paddingBottom: '15px' }} tag="h5">{data?.name}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >{data?.price}</CardSubtitle>
                    <div className="shopping-icons">
                        <div className='shopping-icon1'>
                            <ShoppingCart />
                        </div>
                        <div className='shopping-icon2'>
                            <Heart />
                        </div>
                    </div>
                </CardBody>
            </Card>
        </>
    )
}

export default SellerProduct