import styled from 'styled-components';
import colors from '../../../utils/colors';

const Inputs = styled.input<{variant?: 'small' | 'default'}>`
    flex: 1;
    margin-right: 16px;
    background-color: ${colors.darkSecondGray};
    border: 2px solid ${props => props.variant === 'small' ? 'transparent' : colors.darkGray};
    border-radius: 16px;
    padding: ${props => props.variant === 'small' ? '2px' : '12px'};
    color: ${colors.lightGray};
    ${props => props.variant === 'small' ? 'width: 30vw;' : null}
    font-size: 16px;
    @media (max-width: 768px) {
        margin-right: 0px;
        padding: 6px;
    };
`;

export default Inputs