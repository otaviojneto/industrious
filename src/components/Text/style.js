import styled from 'styled-components';
import colors from '../../styles/colors';

const Txt = styled.p`
    color: ${props => (props.color ? props.color : colors.grey)};
    font-size: ${props => (props.size ? props.size : 16)}px;
    font-weight: ${props => props.weight && props.weight};
    line-height: ${props => props.lineHeight && props.lineHeight + 'px'};
    margin-bottom: ${props => props.mb && props.mb + 'px'};
    padding: ${props => props.padding && props.padding + 'px'};
    margin-top: ${props => props.mt && props.mt + 'px'};
    padding-bottom: ${props => props.pb && props.pb + 'px'};
    padding-top: ${props => props.mb && props.mb + 'px'};
    text-align: ${props => props.align && props.align};
    text-transform: ${props => props.uppercase && 'uppercase'};
`;
export default Txt;
