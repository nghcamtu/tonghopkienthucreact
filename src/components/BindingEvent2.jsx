import React, { Component } from 'react'

export default class BindingEvent_2 extends Component {
//property của class:


//method của class:
    //lưu ý là method chứ hổng phải function nha, toàn lộn chỗ này
//xử lý nút click
handleShowMessage= () =>{
    alert('Event Binding nè');
}

//xử lý nút click khi có tham biến
handleShowMessageWithPara= (name) =>{
    alert('Event Binding với tham số nè ' + name +' ơi!!!');
}

    render() {
        return (
            //viết theo cú pháp của jsx (do định dạng file là jsx mà :D , nên là từ HTML phải ghi theo kiểu XML ó) 
            <div className="container">
                <div className="row">
                    <h5>Event Binding</h5>
                </div>
                <div className="row">
                    {/* 1. CÁCH 1: with normal callback function*/}
                    {/* event binding hay data binding đều đc binding bằng cặp dấu ngoặc nhọn brackets và dùng con trỏ this trỏ tới property/method của class đó*/}
                    <button type="button" className="btn btn-primary mr-4" onClick={this.handleShowMessage}>CÁCH 1</button>
                    {/* không có cặp dấu () do ko gọi ngay, mà đợi khi nút đc nhấn mới gọi */}
                    {/* onclick= "function(){}" hoặc onclick="tenFunction" , tức là khi nút chưa nhấn gọi, thì nó luôn trả về định nghĩa hàm (function declaration). Còn nhấn rồi thì nó trả về hàm, này coi khóa của thầy Jonas Udemy nè.*/}
                
                    {/* 2. CÁCH 2: with callback function having parameter */}
                    {/* thường thì gọi callback function thì hông truyền được dưới dạng có tham số, do có tham số thì nó chạy được có 1 lần à (do click 1 lần thì chạy đúng 1 lần hông chạy tiếp, này coi lại tài liệu W3schools với Udemy khóa thầy Jonas có nói nè)*/}
                    {/* nên là xài bind() để gọi tới cái function callback, để xài được nhiều lần */}
                    <button type="button" className="btn btn-danger mr-4" onClick={this.handleShowMessageWithPara.bind(this,'Tú')}> CÁCH 2</button>
                    
                    {/* 3. CÁCH 3: with callback function having parameter */}
                    {/* cách này dùng hàm nặc danh (anonymous function) để trả về định nghĩa hàm (function declaration) */}
                    {/* rồi truyền giá trị vào parameter của định nghĩa hàm */}
                    {/* nói chung là xài closure đó, quên thì coi lại tài liệu từ khóa Udemy của thầy Jonas là ok */}
                    <button type="button" className="btn btn-warning mr-4" onClick={()=>this.handleShowMessageWithPara('Tú') }>CÁCH 3</button>
                
                </div>
                
            </div>
        )
    }
}
