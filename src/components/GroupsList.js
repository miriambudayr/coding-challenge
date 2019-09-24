import React, { Component } from 'react';
import { Group } from './Group';
import { getGroupsObject } from '../assets/utilities';
import './GroupsList.css';

export class GroupsList extends Component {
    constructor(props) {
      super(props);
    }

    renderGroups() {
        const { todosArray, handleGroupClick } = this.props;
        const groupsObject = getGroupsObject(todosArray);
        const groupsComponents = [];

        for (var group in groupsObject) {
            let totalTasks = groupsObject[group].totalTasks;
            let completedTasks = groupsObject[group].completedTasks;
            groupsComponents.push(
                <Group 
                  totalTasks={totalTasks}
                  completedTasks={completedTasks}
                  groupName={group}
                  handleClick={handleGroupClick}
                  key={group}
                />
            );
        }

        return groupsComponents;
    }
    
    render() {
        return (
            <div>
                <div className="groups-list-header">Things To Do</div>
                <div>{this.renderGroups()}</div>
            </div>
          );
    }
  }