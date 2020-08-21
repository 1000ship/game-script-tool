import React, { useRef } from "react";
import styled from "styled-components";
import fs from 'fs'
import { exportScript, importScript } from "../Utils/api";

const Container = styled.div`
  position: fixed;
  right: 5px;
  bottom: 5px;
  z-index: 1;
  display: flex;
  flex-direction: column;
`;

const ControlButton = styled.button`
  padding: 5px 5px;
`;

const ControlMenu = ({ toggleSceneForm, blockList,setBlockList }) => {
  const onAddSceneBlockClick = (e) => {
    toggleSceneForm();
  };

  const onAddEndingBlockClick = (e) => {};

  const onImportClick = (e) => {
    importScript( (data) => setBlockList(data) )
  };

  const onExportClick = (e) => {
    exportScript(blockList)
  };

  const onFileChange = (e) => {
    var input = e.target;
    var reader = new FileReader();
    reader.onload = function () {
      var data = reader.result;
      console.log(JSON.parse(data));
    };
    reader.readAsText(input.files[0]);
  };

  // CreateTextFile
  

  return (
    <Container>
      <ControlButton onClick={onAddSceneBlockClick}>
        Add Scene Block
      </ControlButton>
      <ControlButton onClick={onAddEndingBlockClick}>
        Add Ending Block
      </ControlButton>
      <ControlButton onClick={onImportClick}>Import Script</ControlButton>
      <ControlButton onClick={onExportClick}>Export Script</ControlButton>
    </Container>
  );
};

export default ControlMenu;
