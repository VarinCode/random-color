// import react
import React, { Fragment } from 'react';

// import lib
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'sweetalert2/dist/sweetalert2.min.js';
import 'remixicon/fonts/remixicon.css';

// import component(default)
import  Color  from './component/color';
import Navbar from './component/navbar';
import Footer from './component/footer';
export default class App extends React.Component {
render(): React.ReactNode {
     return (  
          <Fragment>
            <Navbar/>
              <Color />
            <Footer />
          <Fragment>
    )
  }
}
