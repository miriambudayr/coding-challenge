export function getGroupsObject(data) {
    var groupsObject = {};

    for (var i = 0; i < data.length; i++) {
        var item = data[i];
        var name = item.group;
        var completion = !!item.completedAt;

        if (!groupsObject[name]) {
            groupsObject[name] = {};
            groupsObject[name].totalTasks = 1;
            groupsObject[name].completedTasks = 0;

            if (completion) {
                groupsObject[name].completedTasks++;
            }
        } else {
            groupsObject[name].totalTasks++;
            if (completion) {
                groupsObject[name].completedTasks++;
            }
        }
    }

    return groupsObject;
}

export function getTasksList(groupName, todosArray) {
    return todosArray.filter(function (item) {
        return item.group === groupName;
    });
};

export function toggleCompletion(todosArray, taskId) {
    const newTodosArray = todosArray.slice();
    const todo = newTodosArray.find(function (element) {
        return element.id === taskId;
    });

    todo.completedAt = !todo.completedAt;

    return newTodosArray;
}

function getDependenciesFromIds(todosArray, dependencyIds) {
    const dependenciesArray = [];
    for (var i = 0; i < dependencyIds.length; i++) {
        const dependencyItem = todosArray.find(function (element) {
            return element.id === dependencyIds[i];
        });
        dependenciesArray.push(dependencyItem);
    }
    console.log("dependenciesArray", dependenciesArray);
    return dependenciesArray;
}

export function checkDependencies(todosArray, dependencyIds) {
    const dependencyTodos = getDependenciesFromIds(todosArray, dependencyIds);
    for (var i = 0; i < dependencyTodos.length; i++) {
        if (!dependencyTodos[i].completedAt) {
            return false;
        }
    }

    return true;
}