import styled from "styled-components";
import {rem} from "../../../../app/styles/common";
import {Link} from "react-router-dom";

export const NavWrapper = styled.div`
    display: flex;
    column-gap: ${rem(25)};
    align-items: center;
    color: #ffffff;
    min-height: 100%;
`;

interface IHeaderLink {
    $isActive: boolean;
}

export const HeaderLink = styled(Link)<IHeaderLink>`
    padding-bottom: ${rem(5)};
    padding-top: ${rem(5)};
    padding-left: ${rem(5)};
    padding-right: ${rem(5)};
    border-bottom: ${(props) => (props.$isActive ? '2px solid #ffffff' : '2px solid transparent')};
`;

export const HeaderCoverLinks = styled.div`
  display: flex;
    column-gap: ${rem(15)};
    min-height: 100%;
`;