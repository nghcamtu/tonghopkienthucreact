import React, { Component } from 'react'
import sanphamnha from './../data/sanpham.json'  
// export default mà nên lúc import đặt tên gì cũng đc
// data hổng import mà ghi hẳn vô file này cũng đc nè
import SanPham8 from './SanPham8'

export default class DanhSachSanPham8 extends Component {
//property của class
constructor(params) {
    super(params);
     //state property là built-in property của class Component trong reactjs, 
        //chứa các đặc tính-property có khả năng thay đổi bởi 1 sự kiện nào đó của component
    this.state={
        //ta đưa những property có khả năng thay đổi vào đây
        dataSanPham: sanphamnha[0]
    };
}



//method của class
    //1. lấy hết info của sản phẩm từ file json vào (mà file json ấy thì truyền vào bên file PropsCallbackFuntion8 kìa),
        // cho nên mình mới gọi lại props ở dưới function này để lấy dữ liệu,
            //nếu mà truyền thẳng file json vào file này (mà ko qua file trung gian, thì cứ gọi thẳng map() trong function bên dưới luôn)
    //2. rồi render từng sản phẩm thông qua function này
renderSanPham=()=>{
    return sanphamnha.map((value, index)=>{
        return (
            <div className="col-md-4" key={index}>
                <SanPham8 sp={value} key={index} xemChiTiet={this.xemChiTiet}/>      
            </div> 
        );
    });
};


//xử lý nút xem chi tiết
xemChiTiet =(sanPhamClick)=>{
    console.log('click nè: ',sanPhamClick);
    this.setState({
        dataSanPham: sanPhamClick  
    })
};

//render function
    render() {
    // bóc tách phần tử
    let {dataSanPham}=this.state;
    
        return (
            <div className="container">
                <div className="row">
                {/* gọi hàm cho nó chạy nha, ko gọi ko chạy đâu, toàn quên quài */}
                {/* chỗ này có con trỏ this, là do cái renderSanPham là method của class DanhSachSanPham8.jsx, chừng nào là biến của render() function thì mới ko cần trỏ this */}
                {this.renderSanPham()}
                </div>
                <div className="row ml-5 mt-5">
                    <div className="col-md-3">
                    {/* hiển thị chi tiết từng sản phẩm khi click ra màn hình, thông qua state */}
                    {/* CÁCH 1: dùng như bình thường */}
                        {/* <h6>{this.state.dataSanPham.tenSP}</h6>
                        <img src={this.state.dataSanPham.hinhAnh} className="img-fluid" /> */}
                    {/* CÁCH 2: bóc tách phần tử */}
                        <h6>{dataSanPham.tenSP}</h6>
                        <img src={dataSanPham.hinhAnh} className="img-fluid" />
                    </div>
                    <div className="col-md-9">
                        <h6>Thông số kĩ thuật</h6>
                        <table class="table">
                            <tbody>
                                <tr>
                                    <th>Màn hình </th>
                                    <td> {dataSanPham.manHinh}</td>
                                </tr>
                                <tr>
                                    <th>Hệ điều hành</th>
                                    <td>{dataSanPham.heDieuHanh}</td>
                                </tr>
                                <tr>
                                    <th>Camera trước</th>
                                    <td>{dataSanPham.cameraTruoc}</td>
                                </tr>
                                <tr>
                                    <th>Camera sau</th>
                                    <td>{dataSanPham.cameraSau}</td>
                                </tr>
                                <tr>
                                    <th>RAM</th>
                                    <td>{dataSanPham.ram}</td>
                                </tr>
                                <tr>
                                    <th>ROM</th>
                                    <td>{dataSanPham.rom}</td>
                                </tr>
                                <tr>
                                    <th>Gía bán</th>
                                    <td>{dataSanPham.giaBan}</td>
                                </tr>   
                            
                            </tbody>
                                
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
