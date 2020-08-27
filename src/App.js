import React, { Component } from "react";
import Todolist from "./components/Todolist";
import Header from "./components/Header/header.js";
// import Test1 from "./components/Examples/test1.js";
// import Test2 from "./components/Examples/test2.js";
// import Test3 from "./components/Examples/test3.js";
// import Test4 from "./components/Examples/test4.js";
import Weather from "./components/Apikey/weather.js";
import Currency from "./components/Apikey/currency.js";
import Theme from "./components/Theme/index.js";
import { Route, Switch} from "react-router-dom";

export default class App extends Component {

  state = {
    theme: null
  };
  componentDidMount() {
        if (!localStorage.getItem("switch_mode")) {
           localStorage.setItem('switch_mode','true')
           this.setState({
              theme: "true"
           });
        }
        else{
           var theme = localStorage.getItem("switch_mode");
           console.log(theme);
           this.setState({
              theme: theme
           });
        }
  }


  render() {
    const themeCh = el => {
      this.setState({
        theme: el
     });
    };
    return (
      <div className="App_main_all">
        <Header theme={this.state.theme}/>
        <Switch>
            <Route path="/Todolist" render={() => <Todolist theme={this.state.theme}/>} />
            <Route path="/Weather" render={() => <Weather theme={this.state.theme}/>} />
            <Route path="/Theme" render={() => <Theme theme={this.state.theme}  themeCh={themeCh}/>} />
            <Route path="/Currency" render={() => <Currency theme={this.state.theme}/>} />
            {/* <Route path="/Test2" render={() => <Test2 theme={this.state.theme}/>} />
            <Route path="/Test3" render={() => <Test3 theme={this.state.theme}/>} />
            <Route path="/Test4" render={() => <Test4 theme={this.state.theme}/>} /> */}
        </Switch>
      </div>
    );
  }
}