import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  right: 5px;
  bottom: 5px;
  z-index: 1;
  display: flex;
  flex-direction: column;
`

const ControlButton = styled.button`
  padding: 8px 5px;
`

const ControlMenu = ({toggleSceneForm}) => {

  const onAddSceneBlockClick = (e) => {
    toggleSceneForm()
  }

  const onAddEndingBlockClick = (e) => {

  }

  return <Container>
    <ControlButton onClick={onAddSceneBlockClick}>Add Scene Block</ControlButton>
    <ControlButton onClick={onAddEndingBlockClick}>Add Ending Block</ControlButton>
  </Container>;
};

export default ControlMenu