import React, { Component } from 'react'

export default class DieuKienIf3 extends Component {
    //property của class
    //chưa đăng nhập thì không hiện tên account, đăng nhập rồi thì hiện tên account    
    isLogin = true;
    userName = '';

    //method của class
    //Cách 1: Dùng method để xác định nội dung render ra giao diện
    renderContent = () => {
        if (this.isLogin) { //đăng nhập thành công
            this.userName='Tú';
        
            // return về jsx nè, hồi ở Vanilla JS thì mình hay dùng literal template đó
            return (<div className="container">
                        <div className="row">
                            <p>Hello {this.userName} đăng nhập</p>
                        </div>
                        <div className="row">
                            <button className="btn btn-danger">LOGOUT</button>
                        </div>
                    </div>);
            {/* return về thì luôn luôn có 1 thẻ bao phủ nha hoặc là 1 mảng chứa danh sách kết quả trả về */ }
            {/* nên là đằng sau dấu return của những cái liên quan tới reactjs thì nhớ có cặp <div></div> và cặp ngoặc tròn*/ }
            {/*còn return của Vanilla JavaScript thì khỏi cần*/ }
        }
        return (<div className="container">
                    <div className="row">
                        <button className="btn btn-success">LOGIN</button>
                    </div>
                </div>);

    };
    
    //Cách 2: dùng toán tử ba ngôi 

    render() { //render() function của Component DieuKienIf này, nhưng mà nó được kế thừa từ Component 
        //ở đây thuộc phạm vi function-hàm, cụ thể là render() nên ở đây chỉ có thể là variable-biến
        //không thể có function khác ở đây



        return (
            <div className="container">
                <div className="row">
                    <h5>IF ELSE</h5>
                    {/* C1: Gọi hàm ở đây */}
                    {/* {this.renderContent()} */}
                    
                    {/* C2: Dùng toán tử ba ngôi */}
                    {this.isLogin ? <div className="container">
                                                <div className="row">
                                                    <p>Hello {this.userName} đăng nhập</p>
                                                </div>
                                                <div className="row">
                                                    <button className="btn btn-danger">LOGOUT</button>
                                                </div>
                                            </div>
                                        :<div className="container">
                                            <div className="row">
                                                <button className="btn btn-success">LOGIN</button>
                                            </div>
                                        </div> }
                    
                </div>

            </div>
        )
    }
}
