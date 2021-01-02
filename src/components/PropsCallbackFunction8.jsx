import React, { Component } from 'react'
import DanhSachSanPham8 from './DanhSachSanPham8'


export default class PropsCallbackFunction8 extends Component {
    render() {
        return (
            <div>
                <h5>TRUYỀN FUNCTION VỚI PROPS</h5>
                {/* tạm xem đây là page bự (ví dụ trang chủ, hay trang chứa tất cả sản phẩm) */}
                {/* gọi component DanhSachSanPham hiển thị ở đây */}
                {/* ta đặt props (property) với props name là data */}
                    {/* ko cần con trỏ this chỉ khi import thẳng file json vô đây, nên nó thành biến toàn cục (hoặc xem là global object) */}
                <DanhSachSanPham8 data={this.sanphamnha}/>
            </div>
        )
    }
}
