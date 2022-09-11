import React, { Fragment } from "react";
import Swal from "sweetalert2";

// style
import { distance , box , btn_random , btn_reset , btn_copy } from '../style/style'

// lib
import 'sweetalert2/dist/sweetalert2.min.css';
import 'sweetalert2/dist/sweetalert2.min.js'


export default function Color(){
    // setstate
    let [color, setColor] = React.useState('');
    let [count , setCount] = React.useState(0);
    let result:string|number;
    
    const Event_Random:Function = (bg:string) => {
        bg = `${Math.floor(Math.random() * 16777215).toString(16)}`;
        document.body.style.background = `#${bg}`
        result= `#${bg}`;
        setCount((count) => count += 1);
        setColor((change_color) => {
          return change_color = result.toString()
        })
    }
    let prototype:string = color
    const hightlight:object = {
      backgroundColor: prototype,
      color: 'black',
      border: '3px solid #000',
    }

    const Event_Copy:Function = () => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'คัดลอกเรียบร้อย!',
        html: `<h4>${prototype}</h4>`,
        showConfirmButton: false,
        timer: 1100
      })
      if(count == 0){
        navigator.clipboard.writeText('ไม่มี')
      } else {
        navigator.clipboard.writeText(prototype)
      }
    }


    const Event_Reset:Function = (themedefault:string = 'rgb(255, 255, 255)') => {
        Swal.fire({
            title: 'คุณต้องการเริ่มสุ่มใหม่หรือไม่?',
            showDenyButton: true,
            confirmButtonText: 'ยืนยัน',
            denyButtonText: `ยกเลิก`,
          }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'ทำการเคลียร์เรียบร้อยแล้ว',
                    showConfirmButton: false,
                    timer: 1300
                });
                document.body.style.background = themedefault;
                setCount((count) => count = 0);
                setColor((change_color) => change_color = '');
            } else if (result.isDenied) {
                Swal.fire({
                    title: 'คุณต้องการสุ่มต่อไปหรือไม่?',
                    showDenyButton: true,
                    confirmButtonText: 'ทำการสุ่มใหม่ไหม?',
                    denyButtonText: `ยกเลิก`,
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Event_Random()
                    } else if (result.isDenied) {
                      return false
                    }
                  })
                }
              })
            }

  return(
    <Fragment>
      <section style={distance}></section>

          <section className="container-color">
            <div className="row">
              <div style={box}>
                <div id="frame"><h1>{count}.) <span style={hightlight}>{color}</span></h1></div>
                  <div className="btn-group mt-4">
                    <button style={btn_random} onClick={() => Event_Random()}>สุ่มสี</button>
                    <button style={btn_reset} onClick={() => Event_Reset()}>สุ่มใหม่</button>
                    <button style={btn_copy} onClick={() => Event_Copy()} >คัดลอก</button>
                   </div>
                </div>
              </div>
          </section>                       
    </Fragment>
)}


