import React from "react";
import styled from "styled-components";
import { saveBlockList } from "../../Utils/api";

const Container = styled.div`
  background-color: #efefef;
  padding: 10px;
  margin: 5px;
  position: relative;
`;
const SceneID = styled.div`
  font-weight: 600;
`;
const CharacterName = styled.div``;
const SceneScript = styled.div``;
const OptionGroup = styled.div``;

const MenuGroup = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style: none;
  position: absolute;
  right: 5px;
  top: 5px;
  display: flex;
`;
const MenuItem = styled.li`
  font-size: 12px;
  margin-left: 6px;
  cursor: pointer;
  &:hover {
    font-weight: bolder;
  }
`;

function ScriptBlock(props) {
  var {
    sceneId,
    characterName,
    sceneScript,
    characterImage,
    backgroundImage,
    sceneSound,
    options,
    setBlockList,
  } = props;

  const onRemoveClick = () => {
    setBlockList((blockList) => {
      const removeIndex = blockList.findIndex(
        (block) => block.sceneId === sceneId
      );
      saveBlockList(
        blockList.slice(0, removeIndex).concat(blockList.slice(removeIndex + 1))
      );
      return blockList
        .slice(0, removeIndex)
        .concat(blockList.slice(removeIndex + 1));
    });
  };

  return (
    <Container>
      <MenuGroup>
        <MenuItem>위로</MenuItem>
        <MenuItem>아래로</MenuItem>
        <MenuItem onClick={onRemoveClick}>삭제</MenuItem>
        <MenuItem>수정</MenuItem>
      </MenuGroup>
      <SceneID>{sceneId}</SceneID>
      <CharacterName>{characterName}</CharacterName>
      <SceneScript>{sceneScript}</SceneScript>
      <div>{characterImage}</div>
      <div>{backgroundImage}</div>
      <div>{sceneSound}</div>
      <ol>
        {options.map(({ answer, reaction, nextId }, i) => (
          <li key={i}>
            {answer} / {reaction} / {nextId}
          </li>
        ))}
      </ol>
      <OptionGroup></OptionGroup>
    </Container>
  );
}

export default ScriptBlock;
