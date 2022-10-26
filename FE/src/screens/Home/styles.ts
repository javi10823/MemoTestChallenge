import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  background-color: black;
  padding: 20px;
  font-size: 20px;
  border-radius: 20px;
  text-decoration: none;
  color: white;
  font-weight: 700;
  width: 50%;
  margin: 10px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${window.innerHeight}px;
  justify-content: center;
  background: linear-gradient(
    36deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(82, 9, 121, 1) 40%,
    rgba(0, 212, 255, 1) 100%
  );
`;
