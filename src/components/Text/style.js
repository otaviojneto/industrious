import styled from 'styled-components';
import colors from '../../styles/colors';

const Txt = styled.p`
    color: ${props => (props.color ? props.color : colors.grey)};
    font-size: ${props => (props.size ? props.size : 16)}px;
    font-weight: ${props => props.weight && props.weight};
    line-height: ${props => props.lineHeight && props.lineHeight + 'px'};
    margin: ${props => props.maxWidth && '0 auto'};
    margin-bottom: ${props => props.mb && props.mb + 'px'};
    margin-left: ${props => props.ml && props.ml + 'px'};
    margin-right: ${props => props.mr && props.mr + 'px'};
    margin-top: ${props => props.mt && props.mt + 'px'};
    max-width: ${props => props.maxWidth && props.maxWidth};
    padding: ${props => props.padding && props.padding + 'px'};
    padding-bottom: ${props => props.pb && props.pb + 'px'};
    padding-right: ${props => props.pr && props.pr + 'px'};
    padding-top: ${props => props.pt && props.pt + 'px'};
    text-align: ${props => props.align && props.align};
    text-transform: ${props => props.uppercase && 'uppercase'};
`;
export default Txt;
