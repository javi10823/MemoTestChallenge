import { Modal as ModalMU } from "@mui/material";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = styled.button`
  width: 10%;
  margin: 15px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px solid black;
`;

export const CardNumber = styled.p`
  font-size: 40px;
  font-weight: 700;
  color: white;
`;

export const Modal = styled(ModalMU)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: white;
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

export const Row = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: ${window.innerHeight}px;
  background: linear-gradient(
    36deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(82, 9, 121, 1) 40%,
    rgba(0, 212, 255, 1) 100%
  );
`;

export const Score = styled.p`
  font-size: 30px;
  font-weight: 700;
`;

export const BackButton = styled(Link)`
  background-color: #520979;
  padding: 20px;
  font-size: 20px;
  border-radius: 20px;
  text-decoration: none;
  color: white;
  font-weight: 700;
  width: 30%;
  text-align: center;
`;
