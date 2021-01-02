import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        return (
            <div>
                <div className="card">
                <img className="card-img-top" src={hinhAnh} alt />
                <div className="card-body">
                    <h4 className="card-title"> {tenSP}</h4>
                    <p className="card-text"> {giaBan}</p>
                </div>
                </div>
            </div>
        )
    }
}
