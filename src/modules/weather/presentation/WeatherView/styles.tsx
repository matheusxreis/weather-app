import styled from 'styled-components';

export type LabelProps = {
    isSun:boolean;
}
export const Container = styled.div`
    backdrop-filter: blur(20px);

    //background: #fafafa;
    filter: brightness(0.95);
    border-radius:7px;
    padding:14px 54px;
    min-height:200px;
    display:grid;
    grid: "item1 item2";
    align-items:start;
    justify-items:center;

    @media(max-width:700px){
        grid: "item1" "item2";
    }

`;

export const TimeNowIn = styled.p`

font-size:30px;
font-family: ${({ theme }) => theme.fonts.normal};
color: ${({ theme }) => theme.colors.textSecondary};
@media(max-width:700px){
    font-size:25px;

    }
`;

export const PharagraphContainer = styled.div`
display:flex;
align-items:center;

`;
export const Pharagraph = styled.p`
font-size:20px;
font-weight:100;
font-family: ${({ theme }) => theme.fonts.normal};
color: ${({ theme }) => theme.colors.textSecondary};
margin: 6px 0px;

span {
    font-weight:400;
}

`;

export const PharagraphWeatherValue = styled.p`
font-weight:100;
font-family: ${({ theme }) => theme.fonts.normal};
color: ${({ theme }) => theme.colors.textSecondary};
margin: 6px 2px;
font-size:35px;
font-weight:400;


`;
export const DataWeatherContainer = styled.div`
grid-area: "item1"`;
export const Image = styled.img`
    grid-area:"item 2";
    width:200px;
    height:200px;
`;

export const TemperatureLabel = styled.div<LabelProps>`
    background: 'transparent';
    width:100%;
    border-left: ${({ theme, isSun }) => isSun ? `4px solid ${theme.colors.secondary}` : `2px solid ${theme.colors.primary}`};
    padding-left:10px;
    height:30px;
    border-radius:2px;
    margin:17px 0px;
    display:flex;
    align-items:center;

`;
