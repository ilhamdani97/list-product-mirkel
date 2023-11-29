import styled from "styled-components";
import colors from "../../../../../utils/colors";

const Empty = {
    Container: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        align-items: center;
        margin-top: 32px;
        border-top: 1px solid ${colors.gray};
        padding-top: 72px;
    `,
    ImageEmpty: styled.img.attrs(({src}) => ({
        alt: 'image-empty',
        src: src
    }))`
        width: 56px;
        height: 56px;
    `,
    TextDecs: styled.text`
        font-size: 16;
        font-weight: 700;
        color: ${colors.lightGray};
        text-align: center;
        margin-top: 40px;
    `

}

export default Empty
