import React from 'react';
import { CoverInputAddBlock, WrapperAddBlock } from './styled/addBlock';
import CustomInput from '../../shared/ui/inputs/customInput';
import { FilterIndicatorHome } from '../../pages/home/types/HomeTypes';
import TextArea from '../../shared/ui/textArea/textArea';

interface IAddBlock {
    indicator: FilterIndicatorHome;
    placeholder: string;
    indicatorTextArea: boolean;
}
//
// const AddBlock = ({indicator, placeholder, indicatorTextArea }: IAddBlock) => {
//
//     return (
//         <WrapperAddBlock>
//             <CoverInputAddBlock>
//                 {/*{!indicatorTextArea && (*/}
//                 {/*    <CustomInput type='text' indicator={indicator} placeholder={placeholder} value={value} onChange={onChange} />*/}
//                 {/*)}*/}
//                 {/*{indicatorTextArea && <TextArea />}*/}
//             </CoverInputAddBlock>
//
//         </WrapperAddBlock>
//     );
// };

// export default AddBlock;
