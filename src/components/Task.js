import React, { Component } from 'react';
import { ReactComponent as IncompleteIcon } from '../assets/incomplete.svg';
import { ReactComponent as CompletedIcon } from '../assets/completed.svg';
import { ReactComponent as LockedIcon } from '../assets/locked.svg';
import { checkDependencies } from '../assets/utilities';
import './Task.css';

export class Task extends Component {
    constructor(props) {
        super(props);
    }

    renderCompletionIcon() {
        const {
            handleTaskToggle,
            taskId,
            completion,
        } = this.props;

        if (completion) {
            return (
                <CompletedIcon
                    onClick={() => { handleTaskToggle(taskId) }}
                />
            );
        } else {
            return (
                <IncompleteIcon
                    onClick={() => { handleTaskToggle(taskId) }}
                />
            );
        }
    }

    renderIcon() {
        const {
            todosArray,
            dependencyIds,
        } = this.props;

        const dependenciesCompleted = checkDependencies(todosArray, dependencyIds);

        if (dependenciesCompleted) {
            return this.renderCompletionIcon();
        } else {
            return (<LockedIcon />);
        }
    }

    render() {
        const { taskName } = this.props;

        return (
            <div className="task-item">
                <div className="task-icon">
                    {this.renderIcon()}
                </div>
                <div className="task-name">{taskName}</div>
            </div>
        );
    }
}