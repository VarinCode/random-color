import React from "react";
import Swal from "sweetalert2";

// lib
import 'sweetalert2/dist/sweetalert2.min.css';
import 'sweetalert2/dist/sweetalert2.min.js'


export default class Color extends React.Component{

    count:number = 0;
    result:any;
    distance:object = {
      marginTop: '15rem',
      maginLeft:  '3rem',
      textAlign: 'center',
    };

    Random:Function = (bg:string) => {
        ++this.count
        bg = `${Math.floor(Math.random() * 16777215).toString(16)}`; // console.log(bg)    // ทดสอบ
        document.body.style.background = `#${bg}`;
        this.result= `รหัสสีรอบที่${this.count}ได้: #${bg}`;
        console.log(this.result);
    };

    Clear:Function = () => {

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
                console.log("\n");
                document.body.style.background = 'rgb(255, 255, 255)';
                this.count = 0;
            } else if (result.isDenied) {
                Swal.fire({
                    title: 'คุณต้องการสุ่มต่อไปหรือไม่?',
                    showDenyButton: true,
                    confirmButtonText: 'ทำการสุ่มใหม่ไหม?',
                    denyButtonText: `ยกเลิก`,
                  }).then((result) => {
                    if (result.isConfirmed) {
                      this.Random();
                    } else if (result.isDenied) {
                      return false;
                    };
                  });
            };
          });
    };

    render(): React.ReactNode{
        return(

            <React.Fragment>
              <section style={this.distance}></section>
                <div className="container">
                  <div className="row">
                    <div className="col-md-4"></div>
                      <div className="col-md-4">
                        <button className=" btn-primary me-2 w-25" onClick={() => this.Random()}>ทำการสุ่ม</button>
                        <button className=" btn-danger ms-2 w-25" onClick={() => this.Clear()} >เคลียร์</button>   
                      </div>
                    </div>
                  <div className="col-md-4"></div>
                </div>                             
            </React.Fragment>
        );
    };
};
