import React from "react";
import Swal from "sweetalert2";

// style
import { show } from '../style/style'

// lib
import 'sweetalert2/dist/sweetalert2.min.css';
import 'sweetalert2/dist/sweetalert2.min.js'


export default function Color(){

    // setstate
    var [color, setColor] = React.useState("");
    var [count , setCount] = React.useState(0);
    
    var result:any;
    
    // distance
    const distance:object = {
      marginTop: '15rem',
      maginLeft:  '3rem',
      textAlign: 'center',
    };

    const Random:Function = (bg:string) => {
        bg = `${Math.floor(Math.random() * 16777215).toString(16)}`; // console.log(bg)    // ทดสอบ
        document.body.style.background = `#${bg}`;
        result= `#${bg}`;
        setCount((count) => count += 1);
        setColor((change_color) => {
          return change_color = result.toString()
        });
    };

    const prototype:string = color;
    const hightlight:object = {
      backgroundColor: prototype,
      color: 'black',
      border: '3px solid #000',
    }; 


    const Clear:Function = () => {

        Swal.fire({
            title: 'คุณต้องการเริ่มสุ่มใหม่หรือไม่?',
            showDenyButton: true,
            confirmButtonText: 'ยืนยัน',
            denyButtonText: `ยกเลิก`,
          }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'ทำการเคลียร์เรียบร้อยแล้ว',
                    showConfirmButton: false,
                    timer: 1700
                });
                document.body.style.background = 'rgb(255, 255, 255)';
                setCount((count) => count = 0);
                setColor((change_color) => change_color = "");
            } else if (result.isDenied) {
                Swal.fire({
                    title: 'คุณต้องการสุ่มต่อไปหรือไม่?',
                    showDenyButton: true,
                    confirmButtonText: 'ทำการสุ่มใหม่ไหม?',
                    denyButtonText: `ยกเลิก`,
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Random();
                    } else if (result.isDenied) {
                      return false;
                    };
                  });
                };
              });
            };


  return(
    <React.Fragment>
      <section style={distance}></section>

          <div className="container">
            <div className="row">
              <div className="col-md" style={show}>
                <div id="frame"><h1>{count}.) <span style={hightlight}>{color}</span></h1></div>
                  <div className="btn-group mt-4">
                    <button className=" btn-primary me-2" onClick={() => Random()}>สุ่มสี</button>
                    <button className=" btn-danger ms-2" onClick={() => Clear()}>สุ่มใหม่</button>
                   </div>
                </div>
              </div>
          </div>                       
    </React.Fragment>
)};


