import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const MAX_LAYERS = 2;

const pulse = keyframes`
  0%,10% {
    opacity: 0;
    transform: scale(1);
  }
  80% {
    opacity: 0.7;
    transform: scale(1.5,1.5);
  }
  81%, 100% {
    opacity: 0;
    transform: scale(1);
  }
`;

const Scale = keyframes`
  0% {
    transform: scale(1);
  }
  35%, 80% {
    transform: scale(1.5,1.5);
  }
  100% {
    transform: scale(1);
  }
`;

interface PulseProps {
  layer?: number;
  color?: string;
  height?: number;
  width?: number;
}

const Pulse = styled.div<PulseProps>`
  animation: ${({ layer }) => (layer ? pulse : Scale)} 1s infinite;
  background: white;
  border-radius: 100px;
  border: 1px solid ${({ color }) => color};
  height: 200px;
  position: absolute;
  width:200px;
  z-index: ${({ layer = 0 }) => MAX_LAYERS - layer};
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 150px;
  position: relative;
`;

const Container = styled.div`
  z-index: ${MAX_LAYERS + 1};
`;

const Pulsating = ({ children, visible, ...other }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
      {visible &&
        Array.from(Array(MAX_LAYERS).keys()).map((key) => (
          <Pulse key={key} layer={key} {...other} />
        ))}
    </Wrapper>
  );
};

Pulsating.propTypes = {
  children: PropTypes.element,
  color: PropTypes.string,
  height: PropTypes.number,
  visible: PropTypes.bool,
  width: PropTypes.number
};

Pulsating.defaultProps = {
  children: null,
  color: "#FFE896",
  height: 200,
  visible: false,
  width: 200
};

export default Pulsating;
