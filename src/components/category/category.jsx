import React from 'react'

function category() {
    return (
        <div className="category">
            <a href="/" className="anchor">
                <div className="order">
                    <div className="image">
                        <img src={require('../../../src/images/category/order-online.avif')} alt="" />
                    </div>
                    <div className="content">
                        <h2 className='heading-category'>Order Online</h2>
                        <p className="description">Stay home and order to your doorstep</p>
                    </div>
                </div>
            </a>
            <a href="/" className="anchor">
                <div className="dining">
                    <div className="image">
                        <img src={require('../../../src/images/category/dining.avif')} alt="" />
                    </div>
                    <div className="content">
                        <h2 className='heading-category'>Dining</h2>
                        <p className="description">View the city's favourite dining venues</p>
                    </div>
                </div>
            </a>
            <a href="/" className="anchor">
                <div className="nightlife">
                    <div className="image">
                        <img src={require('../../../src/images/category/nightlife.avif')} alt="" />
                    </div>
                    <div className="content">
                        <h2 className='heading-category'>Nightlife and Clubs</h2>
                        <p className="description">Explore the city's top nightlife outlets</p>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default category
