import './App.css';
import BaiTap from './components/BaiTap';
import DieuKien1 from './components/DieuKien1';
import BindingEvent2 from './components/BindingEvent2';
import DieuKienIf3 from './components/DieuKienIf3';
import SetState4 from './components/SetState4';
import VongLapFor5 from './components/VongLapFor5';
import DungProps6 from './components/DungProps6';
import PropsCallbackFunction8 from './components/PropsCallbackFunction8';
// import OnTapProps7 from './components/OnTapProps7';

// import BTProduct from './components/BTDanhSachSanPham/BTProduct';
// import BTProductList from './components/BTDanhSachSanPham/BTProductList';
// import BTGioHang from './components/BTDanhSachSanPham/BTGioHang';
//  mấy cái mình import vô file này, có đuôi file jsx á, được gọi component (thành phần cấu tạo) 
function App() {
  return (
    <div className="App">
      {/* mấy cái dưới này là mấy cái tag-thẻ như bình thường thôi, do không chứa nội dung nên nó chỉ cần 1 thẻ đóng, còn cú pháp viết theo kiểu XML */}
      <BaiTap />
      <DieuKien1 />
      <BindingEvent2/>
      <DieuKienIf3/>
      <SetState4/>
      <VongLapFor5/>
      <DungProps6/>
      {/* <OnTapProps7/> */}

      {/* <BTProduct/>
      <BTProductList/>
      <BTGioHang/> */}
      
      <PropsCallbackFunction8/>
      
      
      
    </div>




  );
}

export default App;
