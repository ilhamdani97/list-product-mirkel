import styled from 'styled-components';
import colors from '../../../../utils/colors';

const Modal = {
    Container: styled.div<{show?: boolean}>`
        display: ${props => props.show ? 'flex' : 'none'};
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        align-items: center;
        align-content: center;
        justify-content: center;
        z-index: 1;
        overflow: auto;
        background-color: rgb(0,0,0);
        background-color: rgba(0,0,0,0.7);
    `,
    Card: styled.div`
        padding: 24px;
        background-color: ${colors.lightGray};
        border-radius: 12px;
        width: 50vw;
        @media (max-width: 500px) {
            width: 80vw;
        };

    `,
    Header: styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        align-content: center;
        margin-bottom: 24px;
    `,
    TitleHeader: styled.text`
        font-size: 16px;
        font-weight: 700;
        color: ${colors.darkGray}
    `,
    IconClose: styled.img.attrs(({src}) => ({
        alt: 'image-check',
        src: src
    }))`
        width: 14px;
        height: 14px;
        cursor: pointer;
    `,
    TitleContent: styled.text`
        font-size: 16px;
        font-weight: 700;
        color: ${colors.darkGray};
    `,
    Content: styled.div`
        margin-top: 16px;
    `,
}

export default Modal;