import styled from 'styled-components';
import colors from '../../../utils/colors';

const Buttons = styled.button<{ variant?: 'primary' | 'secondary' | 'disable', mode: 'small' | 'default' }>`
    background-color: ${props => props.variant === 'primary' ? colors.purplePrimary: props.variant === 'secondary' ? 'transparent' : colors.gray};
    color: ${props => props.variant === 'primary' ? colors.white : props.variant === 'secondary' ? colors.purplePrimary : colors.white};
    font-size: 16px;
    padding: ${props => props.mode === 'small' ? '2px' : '12px'};
    border: 2px solid ${props => props.variant === 'disable' ? colors.gray : colors.purplePrimary};
    border-radius: 12px;
    cursor: pointer;
    margin-left: 8px;
    transition: background 0s ease-out 0s;
    &:hover,
    &:focus {
        background-color: ${props => props.variant === 'disable' ? colors.gray : props.variant === 'secondary' ? 'transparent' : colors.darkPurple};
        border-color: ${props => props.variant === 'disable' ? colors.gray : colors.darkPurple};
        transition-duration: 0.3s;
    };
    @media (max-width: 500px) {
        padding: 8px;
        font-size: 12px;
        margin-left: 0px;
    };

`;

export default Buttons;
