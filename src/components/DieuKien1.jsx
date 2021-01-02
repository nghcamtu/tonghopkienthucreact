import React, { Component } from 'react'

export default class DieuKien1 extends Component {
    //1. Đây là class nên có property và method 
            //lưu ý là property của class có cú pháp khác với property của object JS, coi chừng lộn
            //property class thì viết như kiểu viết biến, ví dụ:
            //class Employee {
                //setName (name) {
                    //this.name = name;
                //}
                //getName () {
                    //return this.name;
                //}
            //};
            //class xuất hiện ở ES6, mệt chưa, đó giờ toàn xài ES5
            
    //a). PROPERTY
    name= 'tú';
    product= {
        id: 1,
        name: 'iphone 12',
        price: '20000000',
        status: false
    };
    //b). METHOD 
    showInfoProduct = (prod) => {
        if (prod.status) {
            return (<div className="card-body">
                        <h4 className="card-title"> Tên sản phẩm: {this.product.name}</h4>
                        <p className="card-text">Gía: {this.product.price} </p>
                        <p className="card-text">Trạng thái: {this.product.status ? 'Còn hàng' : 'Hết hàng'}</p>
                    </div>);
        }
    }

    render() { //render() function là function mượn của Component, 
        //chính xác hơn thì render() nó là của ReactDOM, cho phép chúng ta render 1 javascript function dưới dạng 1 component thành 1 cái DOM thực sự,   
        //ở đây thuộc phạm vi function-hàm, cụ thể là render() nên ở đây chỉ có thể là variable-biến
        //không thể có function khác ở đây
        
        var a = 2020;
        const product= {
            id: 1,
            name: 'iphone 12',
            price: '20000000',
            status: false
        };

        //Internal CSS viết ở đây cũng được
        const tieude = {
            // display: "flex",
            color: "yellow",
            margin: "0 auto"
        };


        return (
            <div className="container">
                <div className="row">
                    {/* đây gọi là binding data, lấy dữ liệu thẳng luôn mà không cần DOM tới như bình thường */}
                    <h4>Xin chào {this.name}, {a}</h4>
                </div>
                <div className="row">
                    <h5 style={tieude}>Một số sản phẩm</h5>
                </div>
                <div className="row">
                    <div className="card-deck">
                        <div className="card">
                            <img className="card-img-top" src="./images/applephone.jpg" alt="" />
                            <div className="card-body">
                                {/* đây là binding data từ biến product của function render() */}
                                <h4 className="card-title"> Tên sản phẩm: {product.name}</h4>
                                <p className="card-text">Gía: {product.price} </p>
                                <p className="card-text">Trạng thái: {product.status ? 'Còn hàng' : 'Hết hàng'}</p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src="./images/applephone.jpg" alt="" />
                            {/* đây là binding data gọi tới property product của class DieuKien */}
                            { this.showInfoProduct(product) }
                            
                        </div>
                        <div className="card">
                            <img className="card-img-top" src="./images/applephone.jpg" alt="" />
                            <div className="card-body">
                                {/* <h4 className="card-title"> Tên sản phẩm: {product.name}</h4>
                                <p className="card-text">Gía: {product.price} </p>
                                <p className="card-text">Trạng thái: {product.status ? 'Còn hàng' : 'Hết hàng'}</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}
