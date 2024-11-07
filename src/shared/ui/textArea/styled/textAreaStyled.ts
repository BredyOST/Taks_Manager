import styled from 'styled-components';
import { rem } from '../../../../app/styles/common';
import {TextField} from "@mui/material";

export const TextAreaAddTask = styled(TextField)`

    width: 100%;
    padding-top: 0;

    .MuiFormControl-root {
        display: flex;
        flex: 1 1 auto;

    }
    .MuiTextField-root {
        min-width: 100%;
    }

    .MuiInputBase-root {
        display: flex;
            // padding-top: ${rem(5)};
            // padding-bottom: ${rem(5)};
    }

    .MuiFormLabel-root {
        font-size: ${rem(14)};
    }
    .MuiInputBase-input {
        font-size: ${rem(14)};
            //padding-top: ${rem(5)};
            // padding-bottom: ${rem(5)};
            // padding-left: ${rem(10)};
            // padding-right: ${rem(10)};
    }
`;
