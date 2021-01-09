import styled from "styled-components";

export const Container = styled.div`
  min-width: 300px;
  max-width: 500px;
  height: 400px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  margin: 20px;
  background-color: #fff;
  border-radius: .4rem;
`;

export const Header = styled.h2`
  position: absolute;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: ${props => props.color};
  color: #fff;
  border-radius: .3rem .3rem 0 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  padding: 20px;
`;
