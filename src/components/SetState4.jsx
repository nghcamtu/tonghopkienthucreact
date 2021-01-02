import React, { Component } from 'react'
//bài này là làm nút login, ban đầu chưa login, 
//nhấn nút thì gọi hàm handleLogin, hàm này set giá trị cho login thành true,
    //tức là login thành công, và set lại giá trị isLogin là true và username thành 'Tú'
//nhấn nút rồi thì nút đó nó xong nhiệm vụ rồi, nhưng mà mình muốn cho nó động để người ta biết "ờ, login rồi"
    //và cái nút này thay vì hide đi (do giờ ko cần login nữa khi đã login rồi) rồi để nút Logout kế bên
    //thì mình muốn nút nó từ chữ "Login" ban đầu thành "Logout", cho đỡ mắc công làm cái nút khác kế bên 
    //nên mình dùng state property và setState() method để định trạng thái load lại cho nút

//Mỗi khi state thay đổi thì hàm render sẽ được gọi chạy lại.
//LƯU Ý: Muốn component render lại ta phải thay đổi state thông qua phương thức setState chứ không được gán trực tiếp
//Phương thức setState là 1 phương thức bất đồng bộ, có 2 tham số:
    //+ tham số 1: giá trị state mới
    //+ tham số 2: callback thực thi ngay sau khi state thay đổi
//Lưu ý: không được set lại giá trị state theo cách này: this.state.property= value;
//Ta set giá trị của state thông qua phương thức setState:
// this.setState({
    // property: new_value
// })

export default class SetState4 extends Component {
    //property của class
    // isLogin= false;
    // userName= '';
    
    constructor(params) { //hàm dựng của class
        super(params);
        
        //state property là built-in property của class Component trong reactjs, 
        //chứa các đặc tính-property có khả năng thay đổi bởi 1 sự kiện nào đó của component
        this.state= {
            //ta đưa những property có năng thay đổi vào đây
            isLogin: false,
            userName: ''
            
        }
    }
    
    
    //method của class
    handleLogin=()=>{
        //BAN ĐẦU LÀ:
        // this.isLogin='true';
        // this.userName='Tu';
        // console.log('isLogin:', this.isLogin);
        // console.log('userName:', this.userName);
        //SAI NHA, KHÔNG ĐƯỢC SET LẠI STATE THEO CÁCH NÀY
        // this.state.isLogin='true';
        // this.state.userName='Tu';
        //CÁCH ĐÚNG: setState() là method kế thừa từ class Component của reactjs
        this.setState({
            isLogin: true,
            userName: 'Tu'
        }, ()=>{
            //chỗ này là chỗ của parameter thứ 2 nè, là chỗ của callback function, thực thi ngay sau khi state thay đổi
            //console.log chỗ này coi mới đúng nè
            console.log('isLogin:', this.state.isLogin);
            console.log('userName:', this.state.userName);
            //hoặc là console.log('coi state nè:', this.state);
        });
        //setState() là 1 phương thức bất đồng bộ, 
        //console log ở đây nó in ra ngay lúc mà button vừa click luôn, 
        //lúc này setState() vẫn chạy nhưng mà console log nó log nhanh hơn, nên là ra isLogin là false với userName rỗng
        console.log('isLogin:', this.state.isLogin);
        console.log('userName:', this.state.userName);
    }
    

    //render() function
    render() {
        //render() function's scope
        return (
            <div className="container">
                <div className="row">
                    <h5>BÀI TẬP LOGIN DÙNG state property và setState() method để rerender</h5>
                    {/* C2: Dùng toán tử ba ngôi */}
                    {this.state.isLogin ? <div className="container">
                    {/* this.isLogin ? <div className="container"> */}
                                                <div className="row">
                                                    <p>Hello {this.state.userName} đăng nhập</p>
                                                </div>
                                                <div className="row">
                                                    <button className="btn btn-danger" onClick={this.handleLogout}>LOGOUT</button>
                                                </div>
                                            </div>
                                        :<div className="container">
                                            <div className="row">
                                                <button className="btn btn-success" onClick={this.handleLogin} >LOGIN</button>
                                            </div>
                                        </div> }
                    
                </div>

            </div>
        )
    }
    
    //method của class, viết đâu cũng đc mà :))))
    handleLogout=()=>{
        this.setState({
            isLogin: false,
            userName: ''
        }, ()=>{
            console.log('coi state nè:', this.state);
        });
    };
}
