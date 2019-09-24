import React, { Component } from 'react';
import { Task } from './Task';
import './TasksList.css';

export class TasksList extends Component {
    constructor(props) {
        super(props);
    }

    renderTasks() {
        const { 
            tasksList, 
            handleTaskToggle, 
            todosArray 
        } = this.props;
        const tasksElements = [];

        for (var i = 0; i < tasksList.length; i++) {
            let task= tasksList[i];
            tasksElements.push(
                <Task 
                  taskName={task.task}
                  taskId={task.id}
                  handleTaskToggle={handleTaskToggle}
                  todosArray={todosArray}
                  dependencyIds={task.dependencyIds}
                  completion={task.completedAt}
                  key={task.id}
                />
            );
        }
        return tasksElements;
    }

    render() {
        const { groupName, handleAllGroupsClick } = this.props;
        return (
        <div>
            <div className="tasks-list-header">
                {groupName}
                <button className="all-groups-button" 
                        onClick={handleAllGroupsClick}>
                        ALL GROUPS
                </button>
            </div>
            <div>
                {this.renderTasks()}
            </div>
        </div>
        );
    }
}