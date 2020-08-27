import React, { Component } from "react";
// import List from "../List";
// import './test_1.css';

export default class index extends Component {
  state = {
    value: ""
  };
  render() {
    //read input
    const change = el => {
      this.setState({
        value: el.target.value
      });
    };
    //send value
    const add = () => {
      if (this.state.value.trim().length >= 1) {
        this.props.readField(this.state.value);
        this.setState({
          value: ""
        });
        document.querySelector(".input_save").value = "";
      }
    };

    
    return (
      <div className='container_input'>
        <input type="text" className='input_save' onChange={change}/>
        <button onClick={add} className='button_save'>add</button>
        
        {/* {this.state.list.map((item, index) => {
          return <List key={index} name={item} />;
        })} */}
      </div>
    );
  }
}

