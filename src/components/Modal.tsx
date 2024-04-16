import React, { SetStateAction, useEffect } from "react";
import styled from "styled-components";
import { colors } from "../global/colors";

interface ModalProps {
  children?: React.ReactNode,
  setIsVisible: React.Dispatch<SetStateAction<boolean>>
}

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  height: 170px;
  background: white;
  color: black;
  z-index: 10;
  border-radius: 16px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);

  & button {
    position: absolute;
    width: 60px;
    height: 60px;
    top: -60px;
    right: -60px;
    background-color: red;
    border-radius: 50%;
  }

  &::before {
    content: "";
    background-color: rgba(0, 0, 0, 0.2);
    width: 100vw;
    height: 100vh;
    z-index: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }
`;

const Modal = ({ children, setIsVisible }: ModalProps) => {

  const escapeListener = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsVisible(false);
    }
  };

  const openHandler = () => {
    if (!document.body.classList.contains("scroll-lock")) {
      document.body.classList.add("scroll-lock");
    }
    document.addEventListener("keydown", escapeListener);
  };

  const closeHandler = () => {
    if (document.body.classList.contains("scroll-lock")) {
      document.body.classList.remove("scroll-lock");
    }
    document.removeEventListener("keydown", escapeListener);
  };

  useEffect(() => {
    openHandler();

    return () => {
      closeHandler();
    };
  });

  return (
    <StyledModal>
      <div>
        <button
          onClick={() => setIsVisible(false)}
          aria-label="Закрыть окно просмотра сертификата."
        ></button>
        {children}
      </div>
    </StyledModal>
  );
};

export default Modal;
