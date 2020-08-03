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
const CharacterName = styled.div`
  font-style: italic;
  margin-top: 5px;
`;
const SceneScript = styled.div`
  margin-top: 5px;
  background-color: white;
  padding: 5px;
  border-radius: 3px;
`;
const OptionGroup = styled.div``;
const FileDescription = styled.span`
  margin-right: 10px;
  font-size: 13px;
`;
const Script = styled.span`
  background-color: white;
  border-radius: 5px;
  padding: 3px;
  display: inline-block;
`;

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
      <FileDescription>{characterImage}</FileDescription>
      <FileDescription>{backgroundImage}</FileDescription>
      <FileDescription>{sceneSound}</FileDescription>
      <ol>
        {options.map(({ answer, reaction, nextId }, i) => (
          <li key={i}>
            <Script>{answer}</Script> → <Script>{reaction}</Script> → {nextId}
          </li>
        ))}
      </ol>
      <OptionGroup></OptionGroup>
    </Container>
  );
}

export default ScriptBlock;
