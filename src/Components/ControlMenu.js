import React, { useRef } from "react";
import styled from "styled-components";
import { exportScript, importScript, saveBlockList } from "../Utils/api";

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

const ControlMenu = ({ toggleSceneForm, blockList, setBlockList }) => {
  const onAddSceneBlockClick = (e) => {
    toggleSceneForm();
  };

  const onAddEndingBlockClick = (e) => {};

  const onImportClick = (e) => {
    importScript((data) => {
      setBlockList(data);
      saveBlockList(data);
    });
  };

  const onExportClick = (e) => {
    exportScript(blockList);
  };

  const onClearScriptClick = (e) => {
    if (!window.confirm("정말 모든 Scene을 삭제할까요??")) return;
    setBlockList([]);
    window.alert("삭제했습니다. 원치않았다면 지금 당장 새로고침을 눌러주세요.");
  };

  return (
    <Container>
      <ControlButton onClick={onClearScriptClick}>Clear Script</ControlButton>
      <ControlButton onClick={onAddSceneBlockClick}>
        Add Scene Block
      </ControlButton>
      <ControlButton onClick={onAddEndingBlockClick}>
        Add Ending Block(미완성)
      </ControlButton>
      <ControlButton onClick={onImportClick}>Import Script</ControlButton>
      <ControlButton onClick={onExportClick}>Export Script</ControlButton>
    </Container>
  );
};

export default ControlMenu;
