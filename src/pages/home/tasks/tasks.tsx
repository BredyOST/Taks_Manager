import React from 'react';
import Task from '../ui/task/task';
import { ITasks } from '../types/HomeTypes';
import { CoverMainTask } from '../styled/homeStyled';
import {useAppSelector} from "../../../app/redux/hooks/hooks";

const TASK_LIST: ITasks[] = [
    { id: 1, title: 'web', taskText: 'зайти на wb', dataStart: '01-10-2023', dataEnd: '02-10-2023' },
    { id: 2, title: 'web', taskText: 'зайти на wb и начат продавать а потом улететь в америку и купить тамдом ', dataStart: '01-10-2023', dataEnd: '02-10-2023' },
    { id: 3, title: 'web', taskText: 'зайти на wb', dataStart: '01-10-2023', dataEnd: '02-10-2023' },
    { id: 4, title: 'web', taskText: 'зайти на wb', dataStart: '01-10-2023', dataEnd: '02-10-2023' },
    { id: 5, title: 'web', taskText: 'зайти на wb и начат продавать а потом улететь в америку и купить тамдом ', dataStart: '01-10-2023', dataEnd: '02-10-2023' },
    { id: 6, title: 'web', taskText: 'зайти на wb', dataStart: '01-10-2023', dataEnd: '02-10-2023' },
];

const Tasks = () => {

    const {activeTab} = useAppSelector(state => state.filter)
    if(activeTab === 1) {
        return <CoverMainTask>{TASK_LIST.length > 0 && TASK_LIST.map((item) => <Task item={item} key={item.id} />)}</CoverMainTask>;
    } else if(activeTab === 2) {
        return null
    } else if(activeTab === 3) {
        return null
    }

};

export default Tasks;
