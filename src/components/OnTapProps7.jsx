import React, { Component } from 'react'
import ProductList from './ProductList'

export default class OnTapProps7 extends Component {
mangSanPham=
    [
        { maSP: 1, tenSP: "VinSmart Live", giaBan: 5700000, hinhAnh: "./images/vsphone.jpg"},
        { maSP: 2, tenSP: "Meizu 16Xs", giaBan: 7600000, hinhAnh: "./images/meizuphone.jpg"},
        { maSP: 3, tenSP: "Iphone XS Max", giaBan: 27000000, hinhAnh: "./images/applephone.jpg"}
    ]


    render() {
        return (
            <div className="container">
                <h5>Ôn tập props dùng sản phẩm và danh sách sản phẩm</h5>
                {/* this.mangSanPham là do mangSanPham bây giờ đang là property của class, chứ không phải variable của function */}
                <ProductList mangSanPham={this.mangSanPham}/>
            </div>
        )
    }
}
