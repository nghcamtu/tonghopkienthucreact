import React, { Component } from 'react'

export default class VongLapFor5 extends Component {
    //property của class
    constructor(params) {
        super(params);
        this.state = {
            //lý do bỏ mangSanPham vào state, là do bình thường thì sẽ nhận danh sách sản phẩm từ API database,
            //nên tất nhiên là nó bất đồng bộ rồi, cần load rời
            // tạo 1 mảng sản phẩm, lưu ý đang lưu dưới dạng là property, nên là : chứ ko phải =
            mangSanPham: [
                { maSP: 1, tenSP: 'Iphone 12', giaSP: 10000 },
                { maSP: 2, tenSP: 'Xiaomi redmi note 9', giaSP: 5000 },
                { maSP: 3, tenSP: 'Samsung galaxy', giaSP: 4000 }
            ],

            //mảng của ví dụ 2:
            //tạo 1 mảng phim
            mangPhim: [
                {
                    "maSP": 1,
                    "tenSP": "VinSmart Live",
                    "manHinh": "AMOLED, 6.2\", Full HD+",
                    "heDieuHanh": "Android 9.0 (Pie)",
                    "cameraTruoc": "20 MP",
                    "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
                    "ram": "4 GB",
                    "rom": "64 GB",
                    "giaBan": 5700000,
                    "hinhAnh": "./images/vsphone.jpg"
                },

                {
                    "maSP": 2,
                    "tenSP": "Meizu 16Xs",
                    "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels",
                    "heDieuHanh": "Android 9.0 (Pie); Flyme",
                    "cameraTruoc": "20 MP",
                    "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
                    "ram": "4 GB",
                    "rom": "64 GB",
                    "giaBan": 7600000,
                    "hinhAnh": "./images/meizuphone.jpg"
                },

                {
                    "maSP": 3,
                    "tenSP": "Iphone XS Max",
                    "manHinh": "OLED, 6.5\", 1242 x 2688 Pixels",
                    "heDieuHanh": "iOS 12",
                    "cameraSau": "Chính 12 MP & Phụ 12 MP",
                    "cameraTruoc": "7 MP",
                    "ram": "4 GB",
                    "rom": "64 GB",
                    "giaBan": 27000000,
                    "hinhAnh": "./images/applephone.jpg"
                }
            ]

        }
    }


    //method của class
    //xử lý render các sản phẩm ra màn hình
    renderSanPham = () => {
        //cách thường làm khi dùng Vanilla JS để lấy dữ liệu đổ ra màn hình,
        //nhưng ở jsx thì cách này ở giao diện trả về là text (string), không ổn
        // let contentTable='';
        // for(let i=0; i<this.state.mangSanPham.length; i++){
        //     const sanPham= this.state.mangSanPham[i];
        //     contentTable+= `<tr> 
        //                         <td>${sanPham.maSP}</td> 
        //                         <td>${sanPham.tenSP}</td>    
        //                         <td>${sanPham.giaSP}</td>
        //                     <tr>`
        // }
        // return contentTable;

        //ta phải render ra đối tượng (object) thì jsx mới hiểu:
        let contentTable = [];
        for (let i = 0; i < this.state.mangSanPham.length; i++) {
            const sanPham = this.state.mangSanPham[i];
            contentTable.push(
                // key property cần có khi xuất dạng mảng, để phân biệt với nhau
                <tr key={sanPham.maSP}>
                    <td>{sanPham.maSP}</td>
                    <td>{sanPham.tenSP}</td>
                    <td>{sanPham.giaSP}</td>
                </tr>
            );
        }
        console.log(contentTable);
        return contentTable;
    };

    //xử lý render danh sách phim ra màn hình
    renderMangPhim = () => {
        return this.state.mangPhim.map((value, index) => {
            return (
                <div className="card col-md-4" key={index}>
                    <img className="card-img-top" src={value.hinhAnh} alt width={50} />
                    <div className="card-body">
                        <h4 className="card-title">{value.tenSP} </h4>
                        <p className="card-text">{value.giaBan}</p>
                    </div>
                </div>
            );
        });

    };

    render() {
        return (
            <div className="container">
                <h5>Bài tập vòng lặp for để render danh sách sản phẩm ra màn hình</h5>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã sản phẩm</th>
                            <th>Tên sản phẩm</th>
                            <th>Gía sản phẩm</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* gọi hàm  */}
                        {this.renderSanPham()}

                        {/* <tr>
                            <td scope="row" />
                            <td />
                            <td />
                        </tr>
                        <tr>
                            <td scope="row" />
                            <td />
                            <td />
                        </tr> */}
                    </tbody>
                </table>

                {/* mảng phim dưới này */}
                <div className="row">
                    <div className="card-deck">
                        {/* gọi hàm */}
                        {this.renderMangPhim()}
                    </div>
                </div>
            </div>

        )
    }
}
