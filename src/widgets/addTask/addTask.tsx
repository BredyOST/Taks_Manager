import React from 'react';
import { COUNT_VALUES_IN_TASK } from '../../shared/const/index.constant';
import {FilterIndicatorHome, ForFuncType, HomeTypesButton} from '../../pages/home/types/HomeTypes';
import CustomButton from '../../shared/ui/buttons/CustomButton';
import {
    CoverBlockInpAddTask,
    CoverBtnsAddTask,
    FormAddTask,
    TitleAddTaskBlock
} from './styled/addtaskStyled';
import Dates from '../dates/dates';
import {CoverInputAddBlock} from "../addBlock/styled/addBlock";
import CustomInput from "../../shared/ui/inputs/customInput";
import TextArea from "../../shared/ui/textArea/textArea";
import {useClosePopups} from "../../shared/hooks/hooks";

const AddTask = () => {

    const [valueTitle, setValueTitle] = React.useState<Map<string, { value: string }>>(new Map([
        ['1', { value: '' }],
        ['2', { value: '' }],
        ['3', { value: '' }]
    ]));

    const changeValueInp = (e:React.ChangeEvent<HTMLInputElement>, id:number):void => {
        setValueTitle((prev) => {
            const newMap = new Map(prev)
            newMap.set(`${id}`, {value: e.target.value})
            return newMap;
        })
    }

    const closePopups = useClosePopups()

    return (
        <FormAddTask>
            <TitleAddTaskBlock>Блок добавления задачи</TitleAddTaskBlock>
            <CoverBlockInpAddTask>
                {COUNT_VALUES_IN_TASK.length >= 1 &&
                    COUNT_VALUES_IN_TASK.map((item) => {
                        return <CoverInputAddBlock key={item.id} >
                            {   !item.textArea ? <CustomInput indicator={FilterIndicatorHome.addTaskInput} type='text' placeholder={item.placeholder} value={valueTitle.get(item.id.toString())?.value} onChange={(e:React.ChangeEvent<HTMLInputElement>) => changeValueInp(e, item.id)} />
                                : <TextArea placeholder={item.placeholder} value={valueTitle.get(item.id.toString())?.value} onChange={(e:React.ChangeEvent<HTMLInputElement>) => changeValueInp(e, item.id)} />
                            }
                        </CoverInputAddBlock>
                    })}
            </CoverBlockInpAddTask>
            <Dates />
            <CoverBtnsAddTask>
                <CustomButton
                    type='button'
                    indicator={HomeTypesButton.addTask}
                    isActive={false}
                    onClickTab={null}
                    activeTab={null}
                    onClickTask={null}
                    onClickOpenTask={null}
                >
                    Добавить
                </CustomButton>
                <CustomButton
                    type='button'
                    indicator={HomeTypesButton.addTask}
                    isActive={false}
                    onClickTab={null}
                    activeTab={null}
                    onClickTask={closePopups}
                    onClickOpenTask={null}
                >
                    Закрыть окно
                </CustomButton>
            </CoverBtnsAddTask>
        </FormAddTask>
    );
};

export default AddTask;
