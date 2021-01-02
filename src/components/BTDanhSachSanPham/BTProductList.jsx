import React, { Component } from 'react'
import BTGioHang from './BTGioHang'
import BTProduct from './BTProduct'



export default class BTProductList extends Component {
state={
    gioHang: [],
    productDetails: [{
        "maSP": 3,
        "tenSP": "Iphone XS Max",
        "giaBan": 27000000,
        "hinhAnh": "./images/applephone.jpg",
        "soLuong": 5
    }
    
    ]
};
//set state của sản phẩm chi tiết

    

    //Viết phương thức thêm giỏ hàng tại component chứa state giỏ hàng
    themGioHang= (spClick)=>{
        console.log('spClick: ',spClick);
        this.setState({
            productDetails: spClick
        });
    
    };
    
    renderProduct=() =>{
        return this.state.mangSP.map((value, index)=>{
            // mọi khi ở đây return về 1 div, hay 1 tr, nói chung là hay return về luôn giao diện html chứa nó và nội dung động
            //bây giờ chỉ return về component
            return (<div className="col-md-4" key={index}>
                <BTProduct sp={value}/>
            </div>);
        
        });
    
    };
    

    render() {
        return (
            <div className="container-fluid">
                <h1 className="text-center">BEST SMARTPHONE</h1>
               
                <div className="row">
                    <div className="col-12 text-right">
                        <span className="btn btn-primary btn-lg mb-5" data-toggle="modal" data-target="#modelId" style={{ cursor: "pointer" }}>
                            Giỏ Hàng(0)
                        </span>
                        <BTGioHang gioHang={this.state.gioHang} />
                    </div>
        
                </div>
                <div className="row">
                    <div className="col-3">
                        <BTProduct />
                    </div>
                    <div className="col-3">
                        <BTProduct />
                    </div>
                    <div className="col-3">
                        <BTProduct />
                    </div>
                    <div className="col-3">
                        <BTProduct />
                    </div>
                </div>

            </div>
        )
    }
}
