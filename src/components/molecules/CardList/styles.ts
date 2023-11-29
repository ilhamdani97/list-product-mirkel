import styled, { keyframes, css } from 'styled-components';
import colors from '../../../utils/colors';


const keyframesShimmer = keyframes`
    0% {
        background-position: -80vw 0;
    }
    100% {
        background-position: 80vw 0;
    }
`;

const shimmerAnimation = css`
    background: linear-gradient(to right, ${colors.lightGray} 4%, ${'#BDBDBD'} 25%, ${colors.lightGray} 36%);
    background-size: 80vw 100%;
    animation: ${keyframesShimmer} 2s infinite linear;
`;

const List = {
    Card: styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: ${colors.gray};
        border: 1px solid ${colors.gray};
        border-radius: 16px;
        padding: 12px;
        margin-top: 16px;
        align-content: center;
        align-items: center;
        cursor: pointer;
    `,
    Content: styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-content: center;
        align-items: center;
    `,
    Images:  styled.img.attrs(({src}) => ({
        alt: 'images',
        src: src
    }))`
        width: 24px;
        height: 24px;
        margin-right: 16px;
    `,
    Action: styled.div`
        display: flex;
        flex-direction: row;
    `,
    ImageDelete: styled.img.attrs(({src}) => ({
        alt: 'image-delete',
        src: src
    }))`
        width: 14px;
        height: 14px;
        margin-left: 8px;
        cursor: pointer;
    `,
    ContentDesc: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        margin-right: 8px;
    `,
    Title: styled.text`
        font-size: 14px;
        color: ${colors.lightGray};
        font-weight: 600;
    `,
    Desc: styled.text`
        font-size: 12px;
        color: ${colors.lightGray};
        font-weight: 400;
        margin-top: 4px;
    `,
    LoadingIcon: styled.div`
        height: 16px;
        width: 16px;
        border-radius: 50%;
        margin-right: 10px;
        ${shimmerAnimation}
    `,
    LoadingText: styled.div`
        height: 16px;
        background: #777;
        margin-top: 6px;
        margin-bottom: 6px;
        border-radius: 8px;
        width: 300px;
        @media (max-width: 768px) {
            width: 150px;
        };
        ${shimmerAnimation}
    `
}

export default List;