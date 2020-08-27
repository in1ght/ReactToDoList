import React, { Component } from "react";

export default class index extends Component {
  render() {
    const ChangeMode = target => {
        var check_one_time = localStorage.getItem("switch_mode");
        console.log('SHLOP')
        if (check_one_time === 'true') {
            document.querySelector('.switch_mode').classList.add('false');
            document.querySelector('.switch_mode').firstElementChild.classList.add('false');
            localStorage.setItem('switch_mode','false');
            this.props.themeCh('false');
        }
        else{
            document.querySelector('.switch_mode').classList.remove('false');
            document.querySelector('.switch_mode').firstElementChild.classList.remove('false');
            localStorage.setItem('switch_mode','true');
            this.props.themeCh('true');
        }
    };  
    return (
        <div className={"App-header " +this.props.theme}>
            <h1 className='todo_text'>Theme</h1>
            <label className='dark_light_theme'>
                <input type="checkbox" id="checkbox"/>
                <div className={"switch_mode " +this.props.theme} onClick={ChangeMode}>
                    <div className={"slider__switch_mode " +this.props.theme}></div>
                </div>
            </label>
        </div>
    );
  }
}