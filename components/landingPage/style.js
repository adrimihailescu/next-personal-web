import { styled } from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;

  .blob {
    position: absolute !important;
    top: 50%;
    transform: translate(0, -50%);
  }
`;

export const ContentWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 60px;
  font-weight: bold;
  color: white;
  text-shadow: 0px 0px 20px black;
  position: relative;
  margin-bottom: 10px;
`;

export const Subtitle = styled.h2`
  font-size: 40px;
  margin-bottom: 10px;
  position: relative;
  text-shadow: 0px 0px 20px black;
`;

export const Button = styled.button`
  width: 100px;
  padding: 10px;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
`;
