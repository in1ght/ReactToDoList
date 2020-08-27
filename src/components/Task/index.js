import React, { Component } from 'react'

export default class index extends Component {
    render() {
        const deleteTask = el => {
            this.props.deleteTask(el.target.parentElement.getAttribute("time"));
        }
        const doneTask = el => {
            this.props.doneTask(el.target.parentElement.getAttribute("time"));
        }
        const doneTask_down = el => {
            this.props.doneTask(el.target.parentElement.parentElement.getAttribute("time"));
        }
        return (
            <div className={"task " +this.props.theme} done={this.props.isDone} important={this.props.isImportant} time={this.props.time}>
                <div className="done_t"  onClick={doneTask}>
                    <div className={"block_task block_task_"+ this.props.isDone} onClick={doneTask_down}></div>
                </div>
                <p className={"text_t text_"+this.props.isDone+' '+this.props.theme} > {this.props.text}</p>
                <div className={"delete_t " +this.props.theme} onClick={deleteTask}></div>
            </div>
        )
    }
}

