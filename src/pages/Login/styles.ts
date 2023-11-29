import styled from 'styled-components';
import colors from '../../utils/colors';

const Logins = {
    Container: styled.div`
        background-color: ${colors.darkSecondGray};
    `,
    Header: styled.div`
        background-color: ${colors.darkGray};
        height: 25vh;
        width: 100%;
        display: flex;
        justify-content:center; 
        align-items:center;
    `,
    ImageHeader: styled.img.attrs(({src}) => ({
        alt: 'image-header',
        src: src
    }))`
        width: 126px;
        height: 48px;
    `,
    Content: styled.div`
        margin-left: 25%;
        margin-right: 25%;
        @media (max-width: 500px) {
            margin-left: 16px;
            margin-right: 16px;
        };
        padding-bottom: 24px;
        margin-top: -24px;
        min-height: 70vh;
    `,
    Footer: styled.div`
        display: flex;
        height: 20px;
        flex-direction: row,
        justify-content: center;
        justify-content: center; 
        align-items:center;
        padding: 16px;
        background-color: ${colors.darkGray};
        position: sticky;
        bottom: 0;
        gap: 8px;
    `,
    ContainerForm: styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-item: center;
        align-content: center;
        @media (max-width: 500px) {
            flex-direction: column;
            gap: 8px;
        };
    `,
    TextError: styled.text`
        font-size: 14px;
        color: ${colors.purpleLight};
        font-weight: 600;
        text-align: center;
    `
}

export default Logins;
