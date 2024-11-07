import React from 'react';
import Task from '../ui/task/task';
import { ITasks } from '../types/HomeTypes';
import { TaskNoItems, TaskWrapper } from '../styled/homeStyled';
import { useAppSelector } from '../../../app/redux/hooks/hooks';

interface ITasksProps {}

const Tasks = () => {
    const { activeTab, searchTasks, countTusks, tasksActive, tasksArchived, tasksFinished } = useAppSelector((state) => state.filter);
    const [sortedTasks, setSortedTasks] = React.useState<ITasks[]>([]);

    function getSortedTasks(items: ITasks[]): void {
        let result;
        if (searchTasks?.length >= 1) {
            result = items.filter((item) => item.taskText.includes(searchTasks));
            setSortedTasks(result);
        } else {
            setSortedTasks(items);
        }
    }

    React.useEffect(() => {
        if (activeTab === 1) {
            getSortedTasks(tasksActive);
        }
        if (activeTab === 2) {
            getSortedTasks(tasksFinished);
        }
        if (activeTab === 3) {
            getSortedTasks(tasksArchived);
        }
    }, [activeTab, searchTasks, countTusks, tasksActive, tasksArchived, tasksFinished]);

    return (
        <TaskWrapper>
            {sortedTasks.length > 0 ? (
                sortedTasks.map((item) => <Task item={item} key={item.id} />)
            ) : (
                <TaskNoItems>Список пуст</TaskNoItems>
            )}
        </TaskWrapper>
    );
};

export default Tasks;
