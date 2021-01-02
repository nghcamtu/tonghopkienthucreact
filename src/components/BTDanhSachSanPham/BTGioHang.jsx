import React, { Component } from 'react'

export default class BTGioHang extends Component {
    
    renderGioHang=()=>{
        //Nhận props từ component cha truyền vào
        // const gioHang= this.props.gioHang;
        
        return this.props.gioHang?.map((value, index)=>{
            return (
                <tr key={index}>
                    <td>{value.maSP}</td>
                    <td>{value.tenSP}</td>
                    <td><img src="{value.hinhAnh}"  width={50} height={50} alt={value.hinhAnh}/></td>
                    <td>
                        <button className="btn btn-success">+</button>
                        <button className="btn btn-warning">-</button>
                    </td>
                    <td>{value.giaBan}</td>
                    <td>{value.soLuong * value.giaBan}</td>
                    <td><button className="btn btn-danger">Xóa</button> </td>
                </tr>
            
            );
        
        
        }); 
        
    
    };
    
    render() {
    
    
        return (
            <div>
                {/* Button trigger modal */}
               
                {/* Modal */}
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                             <table>
                                <thead>
                                    <tr>    
                                        <th>Mã sp</th>
                                        <th>Tên sp</th>
                                        <th>Hình ảnh</th>
                                        <th>Số lượng</th>
                                        <th>Gía bán</th>
                                        <th>Thành tiền</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* <td>1</td>
                                    <td>Iphone</td>
                                    <td>
                                        <img src="./"/>
                                    </td>
                                    <td>
                                        <button className="btn btn-success">+</button>
                                        <button className="btn btn-warning">-</button>
                                    </td>
                                    <td>1.000</td>
                                    <td>2.000</td>
                                    <td>
                                        <button className="btn btn-danger">Xóa</button>
                                    </td> */}
                                    {this.renderGioHang()}
                                </tbody>
                             </table>
        </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

