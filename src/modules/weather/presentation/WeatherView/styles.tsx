import styled from 'styled-components';

export type LabelProps = {
    isSun:boolean;
}
export const Container = styled.div`

    background: #fafafa;
    filter: brightness(0.95);
    border-radius:7px;
    padding:14px 54px;
    min-height:200px;
    display:flex;
    align-items:center;
    justify-content:space-around;

`;

export const TimeNowIn = styled.h2`

font-size:24px;
font-family: ${({ theme }) => theme.fonts.normal};
color: ${({ theme }) => theme.colors.textSecondary};

`;

export const PharagraphContainer = styled.div`
display:flex;
align-items:center;
`;
export const Pharagraph = styled.p`
font-size:20px;
display:flex;
text-align:center;
font-family: ${({ theme }) => theme.fonts.normal};
color: ${({ theme }) => theme.colors.textSecondary};
margin: 6px 0px;


`;

export const DataWeatherContainer = styled.div``;
export const Image = styled.img`

    width:200px;
    height:200px;
    border-radius:200px;
`;

export const TemperatureLabel = styled.div<LabelProps>`
    background: ${({ theme }) => theme.colors.backgroundPrimary};
    width:100%;
    border-left: ${({ theme, isSun }) => isSun ? `2px solid ${theme.colors.secondary}` : `2px solid ${theme.colors.primary}`};
    padding-left:10px;
    height:30px;
    border-radius:5px;
    margin:17px 0px;

`;