import React, { Component } from "react";
import {NavLink} from "react-router-dom";

export default class Test extends Component {


  render() {

    return (
      <header className={"header_menu " +this.props.theme}>
        <NavLink to='Todolist' className={"healink_der_menu " +this.props.theme}>
                To Do List
        </NavLink>
        <NavLink to='Weather' className={"healink_der_menu " +this.props.theme}> 
                Weather Api
        </NavLink>
        <NavLink to='Theme' className={"healink_der_menu " +this.props.theme}> 
                Switch Mode
        </NavLink>
        <NavLink to='Currency' className={"healink_der_menu " +this.props.theme}> 
                Currency Api
        </NavLink>
        {/* <NavLink to='Test2' className={"healink_der_menu " +this.props.theme}> 
                Some more
        </NavLink>
        <NavLink to='Test3' className={"healink_der_menu " +this.props.theme}> 
                Examples
        </NavLink>
        <NavLink to='Test4' className={"healink_der_menu " +this.props.theme}> 
                special for u
        </NavLink> */}
      </header>
    );
  }
}