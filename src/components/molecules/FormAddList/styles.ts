import styled from 'styled-components';

const Form = {
    Container: styled.div`
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

} 

export default Form;