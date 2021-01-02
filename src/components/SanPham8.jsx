import React, { Component } from 'react'

export default class SanPham8 extends Component {
    render() {
        // này là gọi lại thôi, chứ setup tên prop bên file cha rồi
        let {sp} = this.props; //lưu ý là chỗ này phải viết dựa theo chuỗi data (json hay mảng), tức là viết đúng tên property của nó
        
        return (
            <div>
                <div className="card">
                <img className="card-img-top" src={sp.hinhAnh} alt />
                <div className="card-body">
                    <h4 className="card-title">{sp.tenSP} </h4>
                    <p className="card-text">{sp.giaBan} </p>
                        {/* do ở đây là props riêng để truyền function, nên ko dùng sp.xemChiTiet như trên, do sp là 1 custom prop mình đặt để lấy dữ liệu */}
                    <button className="btn btn-success" onClick={()=>{this.props.xemChiTiet(sp)}}>Xem chi tiết</button>
                </div>
                </div>
            </div>
        )
    }
}
