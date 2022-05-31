import React from 'react'

// lib

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'sweetalert2/dist/sweetalert2.min.js';

// component
import  Color  from './component/color';

export default class App extends React.Component {
render(): React.ReactNode {
     return (  
          <React.Fragment>
            <Color />
          </React.Fragment>
    );
  };
};
