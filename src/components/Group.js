import React, { Component } from 'react';
import { ReactComponent as GroupIcon } from '../assets/group.svg';
import './Group.css';

export class Group extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const { 
            groupName, 
            handleClick, 
            completedTasks, 
            totalTasks 
        } = this.props;
        
        return (
            <div className="group-item" onClick={() => {handleClick(groupName)}}>
                <div className="group-icon">
                    <GroupIcon />
                </div>
                <div className="group-text">
                    <div className="group-name">
                        {groupName}
                    </div>
                    <div className="completion-status">
                        {completedTasks} OF {totalTasks} COMPLETE
                    </div>
                </div>
            </div>
        );
    }
}