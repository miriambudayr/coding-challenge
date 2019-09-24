import React, { Component } from 'react';
import './App.css';
import { GroupsList } from './components/GroupsList';
import { TasksList } from './components/TasksList';
import { toggleCompletion, getTasksList } from './assets/utilities';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todosArray: [],
      view: null,
    };

    this.handleGroupClick = this.handleGroupClick.bind(this);
    this.handleAllGroupsClick = this.handleAllGroupsClick.bind(this);
    this.handleTaskToggle = this.handleTaskToggle.bind(this);
  }

  componentWillMount() {
    fetch('http://localhost:3000/data.json')
      .then(response => response.json())
      .then((response) => {
        this.setState({
          todosArray: response,
        });
      });
  }

  handleGroupClick(groupName) {
    this.setState({
      view: groupName,
    });
  }

  handleAllGroupsClick() {
    this.setState({
      view: null,
    });
  }

  handleTaskToggle(taskId) {
    const newTodosArray = toggleCompletion(this.state.todosArray, taskId);

    this.setState({
      todosArray: newTodosArray,
    });
  }

  render() {
    const { view, todosArray } = this.state;

    if (todosArray && !view) {
      return (
        <div className="app-container">
          <GroupsList
            handleGroupClick={this.handleGroupClick}
            todosArray={todosArray}
          />
        </div>
      );
    } else {
      let tasksList = getTasksList(view, todosArray);

      return (
        <div className="app-container">
          <TasksList
            groupName={view}
            handleAllGroupsClick={this.handleAllGroupsClick}
            handleTaskToggle={this.handleTaskToggle}
            tasksList={tasksList}
            todosArray={todosArray}
          />
        </div>
      );
    }
  }
}
