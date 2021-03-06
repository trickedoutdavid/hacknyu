import React, { Component } from 'react';
import Card from './Card'
export default class Profile extends Component {
  render() {
    return (
      <div style={{borderRightWidth: 0.5, borderRightColor: 'lightgray', borderRightStyle: 'solid'}}>
        <div style={{height: 110, width: 400, backgroundColor: '#6A6FEA'}}>
          <div style={{position: 'relative', top: 20, left: 25, width: 320, display: 'flex'}}>
          <img src="https://cdn.technologyreview.com/i/images/SO15MITKendall.timrowex299.jpg?sw=280" style={{width: 70, height: 70, borderRadius: 100}}/>
        <div style={{flexDirection: 'column', marginLeft: 15, justifyContent: 'center', display: 'flex'}}>
          <t style={{fontSize: 20, color:'white', padding: 2}}>David Margolin</t>
        <t style={{fontSize: 12, color:'white', padding:2}}>davidmargolin0305@gmail.com</t>
        </div>
      </div>
      </div>
      <h3 style={{margin: 20, paddingTop:20}}>Your Contributions</h3>
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Card image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Bernie_Sanders_2016_logo.svg/2000px-Bernie_Sanders_2016_logo.svg.png"/>
        <Card image="https://pctechmag.com/wp-content/uploads/2016/03/Logo-International_Rescue_Committee.jpg"/>
      <Card image="http://www.1470wmbd.com/wp-content/uploads/2018/02/st.-jude-logo.jpg"/>
      </div>
      </div>
    );
  }
}
