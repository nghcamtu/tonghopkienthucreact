import React, { Component } from 'react'

export default class SanPham_RCC extends Component {
    render() {
        // CÁCH 2: 
        // a) bóc tách phần tử cách 1:
        // const { sp } = this.props;
        //b) bóc tách phần tử cách 2:
        const { hinhAnh, tenSP, giaBan } = this.props.sp; //lưu ý là chỗ này phải viết dựa theo chuỗi data (json hay mảng), tức là viết đúng tên property của nó
        //đặt const chứ ko phải let, là để ko gán lại giá trị của props á
        return (

            // CÁCH 1:
            // <div className="card">
            //     <img className="card-img-top" src={this.props.sp.hinhAnh} alt />
            //     <div className="card-body">
            //         <h4 className="card-title"> {this.props.sp.tenSP}</h4>
            //         <p className="card-text"> {this.props.sp.giaBan}</p>
            //     </div>
            // </div>

            // CÁCH 2: Dùng bóc tách phần tử để khỏi khai báo lặp nhiều lần cho mệt
            // a) bóc tách cách 1
            // <div className="card">
            //     <img className="card-img-top" src={sp.hinhAnh} alt />
            //     <div className="card-body">
            //         <h4 className="card-title"> {sp.tenSP}</h4>
            //         <p className="card-text"> {sp.giaBan}</p>
            //     </div>
            // </div>
            // b) bóc tách cách 2 
            <div className="card">
                <img className="card-img-top" src={hinhAnh} alt />
                <div className="card-body">
                    <h4 className="card-title"> {tenSP}</h4>
                    <p className="card-text"> {giaBan}</p>
                </div>
            </div>
        )
    }
}
