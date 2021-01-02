import React, { Component } from 'react'
import sanpham from './../data/sanpham.json'
import SanPham_RCC from './SanPham_RCC';

// props là 1 đặc tính mặc định (default property) của component để nhận dữ liệu từ các component cha truyền vào
    // => để binding dữ liệu ra component con tại html tương ứng
//props của component chỉ nhận các property được truyền vào từ component cha của nó và không thể bị chỉnh sửa bên trong component
//LƯU Ý: đối với stateful component và stateless component có các cách sử dụng props khác nhau


export default class DungProps6 extends Component {
//property của class
constructor(params) {
    super(params);
    this.state= {
    //ta đưa những property có năng thay đổi vào đây
        mangSP: sanpham
    }
    
}


//method của class
renderSanPham=() =>{
    return this.state.mangSP.map((value, index)=>{
        // mọi khi ở đây return về 1 div, hay 1 tr, nói chung là hay return về luôn giao diện html chứa nó và nội dung động
        //bây giờ chỉ return về component
        return (<div className="col-md-4" key={index}>
            <SanPham_RCC sp={value}/>
        
        </div>);
    
    });

};



//render() function
    render() {
        return (
            <div className="container">
                <h5>Dùng props để truyền dữ liệu từ component cha vào component con</h5>
                <div className="row">
                    {this.renderSanPham()}
                </div>
            </div>
        )
    }
}
