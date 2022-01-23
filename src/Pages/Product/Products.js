import React, { Component } from 'react';

import axios from 'axios';

export default class Products extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            text: "Test"
        }
    }

    async componentDidMount() {
        const response = await axios.get("http://localhost:4000/app/getproducts")
        if (response.status === 200) {
            this.setState({
                data: response.data
            })
            console.log(this.state.data);
        }
    }
    render() {
        return (
            <div>
                <div className='container'>
                    <div className="card my-5">
                        <div className="card-header bg-dark text-light">
                            <h3>Products</h3>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                {this.state.data.map(data => (
                                    <div className='col col-sm-12 col-lg-4 col-md-6' key={data._id}>
                                        <div className="card card-products">
                                            <img src={data.productImage} alt={data.productName} className='card-img-top' />
                                            <div className="card-body">
                                                <div className="card-title">
                                                    <h6>{data.productName}</h6>
                                                </div>
                                                <div className="card-text">
                                                    <p>Brand: {data.productBrand}</p>
                                                    <p>Price: {data.productPrice}฿</p>
                                                    <p>Descripton: {data.productDescription}</p>
                                                </div>
                                                <div className="text-center">
                                                    <button className='btn btn-success btn-block'>Buy</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
