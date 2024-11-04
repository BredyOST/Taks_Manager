import React from 'react';
import {COUNT_VALUES_IN_TASK} from "../../shared/const/index.constant";
import AddBlock from "../addBlock/addBlock";
import {FilterIndicatorHome, HomeTypesButton} from "../../pages/home/types/HomeTypes";
import CustomInput from "../../shared/ui/inputs/customInput";
import CustomButton from "../../shared/ui/buttons/CustomButton";




const AddTask = () => {
    return (
        <div>
            {COUNT_VALUES_IN_TASK.length >= 1 && COUNT_VALUES_IN_TASK.map((item) =>
                <AddBlock title={item.title} indicator={FilterIndicatorHome.filterHome} placeholder={item.placeholder} value='s' onChange={() => console.log()}/>
            )}
            <div>
                <CustomButton
                    type='button'
                    indicator={HomeTypesButton.addTask}
                    isActive={false}
                    onClickTab={null}
                    activeTab={null}
                    onClickTask={null}
                    onClickOpenTask={null}
                >
                    добавить
                </CustomButton>
                <CustomButton
                    type='button'
                    indicator={HomeTypesButton.addTask}
                    isActive={false}
                    onClickTab={null}
                    activeTab={null}
                    onClickTask={null}
                    onClickOpenTask={null}
                >
                    Закрыть
                </CustomButton>
            </div>
        </div>
    );
};

export default AddTask;