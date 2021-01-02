import React, { Component } from 'react'

export default class BTProduct extends Component {

    // renderSanPham=() =>{
    //     return this.state.mangSP.map((value, index)=>{
    //         // mọi khi ở đây return về 1 div, hay 1 tr, nói chung là hay return về luôn giao diện html chứa nó và nội dung động
    //         //bây giờ chỉ return về component
    //         return (<div className="col-md-4" key={index}>
    //             <BTProduct sp={value}/>
    //         </div>);
        
    //     });
    // };
    render() {
        return (
            <div className="container">
                <div className="card bg-light" style={{ width: 300 }}>
                    <img className="card-img-top" src="./img/sp_iphoneX.png" alt="Card image" style={{ maxWidth: '100%', height: 250 }} />
                    <div className="card-body text-center">
                        {/* <h4 className="card-title text-center">iPhone X</h4>
                        <p className="card-text">iPhone X features a new all-screen design. Face ID, which makes your face your password</p>
                        <a href="#" className="btn btn-primary">Detail</a>
                        <a href="#" className="btn btn-danger">Cart</a> */}
                        
                        {/* {this.renderSanPham()} */}
                    </div>
                </div>
            </div>
        )
    }
}
