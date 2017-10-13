import styled from 'styled-components';

export const Button = styled.button `

border: none;
border-radius: 1.5rem;
width: 5rem;
height: 5rem;
box-shadow: 0px 5px 0px 0px rgba(0, 0, 0, 0.25),
  0px 10px 5px rgba(0, 0, 0, 0.2);
color: #fff;
padding: 0.5rem;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
&:focus {
  outline: 0;
}
&:active {
  box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.25),
    0px 4px 5px rgba(0, 0, 0, 0.2);
  transform: translateY(4px);
  outline: 0;
};
${props => (props.clicks > 5
    ? `font-size: 2rem; background: blue`
    : `font-size: 1.5rem; background: rgba(0, 0, 0, 0.2)`)};
`;

export const MyDiv = styled.div `
display: flex;
margin: 50px auto;
justify-content: space-around;
`;

export const ButtonOne = styled.button `
background: rgba(0, 0, 0, 0.2);
border: none;
border-radius: 1.5rem;
width: 5rem;
height: 5rem;
box-shadow: 0px 5px 0px 0px rgba(0, 0, 0, 0.25),
  0px 10px 5px rgba(0, 0, 0, 0.2);
color: blue;
font-size: 1rem;
padding: 0.5rem;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
&:focus {
  outline: 0;
}
&:active {
  box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.25),
    0px 4px 5px rgba(0, 0, 0, 0.2);
  transform: translateY(4px);
  outline: 0;
};
`;

export const ButtonBasic = styled.button `
background: rgba(0, 0, 0, 0.2);
border: none;
border-radius: 1.5rem;
width: 5rem;
height: 5rem;
box-shadow: 0px 5px 0px 0px rgba(0, 0, 0, 0.25),
  0px 10px 5px rgba(0, 0, 0, 0.2);
color: blue;
font-size: 1.5rem;
padding: 0.5rem;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
&:focus {
  outline: 0;
}
&:active {
  box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.25),
    0px 4px 5px rgba(0, 0, 0, 0.2);
  transform: translateY(4px);
  outline: 0;
};

`;
