import styled from 'styled-components';
import { rem } from '../../../../app/styles/common';
import { Box, TextField } from '@mui/material';

export const InputFilterHome = styled.input`
    border: 1px solid #0002;
    border-radius: ${rem(5)};
    padding-top: ${rem(5)};
    padding-bottom: ${rem(5)};
    padding-left: ${rem(5)};
    padding-right: ${rem(5)};
    flex: 0 1 ${rem(500)};
    font-size: ${rem(16)};
    &::placeholder {
        font-size: ${rem(14)};
    }
`;

export const BoxCover = styled(Box)``;

export const InputAddTask = styled(TextField)`
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

export const InputSearch = styled(TextField)`
    flex: 0 1 ${rem(700)};
    padding-top: 0;
z-index: 0;
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
