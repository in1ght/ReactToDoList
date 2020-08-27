import React, { Component } from "react";
import Field from "./components/Field";
import Task from "./components/Task";
// import Theme from "./components/Theme";

export default class App extends Component {
  state = {
    tasks: []
  };
  render() {
    if (!localStorage.getItem("switch_mode")) {
      localStorage.setItem('switch_mode','false')
    }
    const readField = el => {
      console.log("read field: ", el);
      let folderTasks = this.state.tasks;
      let obj = {
        text: el,
        isDone: "false",
        isImportant: "false",
        time: Date.now()
      }
      folderTasks.push(obj);
      this.setState({
        tasks: folderTasks
      });
      console.log("Taskas", folderTasks);
    };
    const deleteTask = el => {
        // checking every element to our guy
        var futureTasks = this.state.tasks;
        this.state.tasks.forEach(function(item){
          let time_task = item.time;

          if (+el === time_task){
            let current = futureTasks.indexOf(item);
            futureTasks.splice(current,1);
          }
        })
        this.setState({
          tasks: futureTasks
        });
    };
    const doneTask = el => {
      var futureTasks = this.state.tasks;
      this.state.tasks.forEach(function(item){
        let time_task = item.time;

        if (+el === time_task){
          let current = futureTasks.indexOf(item);
          if (futureTasks[current].isDone === 'false') {
            futureTasks[current].isDone = 'true';
          }
          else {
            futureTasks[current].isDone = 'false';
          }
          console.log(futureTasks[current]);
        }
      })
      this.setState({
        tasks: futureTasks
      });
    };
    return (
      <div className="App">
        <header className="App-header">
          <h1 className='todo_text'>To Do List</h1>
          <Field readField={readField}  />
          <br/>

          <div className='container_tasks'>
            {this.state.tasks.length > 0 ?  (this.state.tasks.map((item, index) => { return  <Task doneTask={doneTask} deleteTask={deleteTask} key={index} time={item.time} text={item.text} isDone={item.isDone} isImportant={item.isImportant}/>})) : ''}
          </div>
          
        </header>
        {/* <Theme /> */}
      </div>
    );
  }
}