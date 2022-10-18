import { Modal as ModalMU } from "@mui/material";
import styled from "styled-components";

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
  padding: 20px;
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
`;
