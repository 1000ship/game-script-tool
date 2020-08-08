import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #efefef;
  padding: 10px;
  margin: 5px;
  position: relative;
`;
const SceneID = styled.div`
  font-weight: 800;
  cursor: pointer;
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
  background-color: ${props => props.color ? props.color : 'white'};
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
    nextSceneId,
    sceneType,
    moveBlockBy,
    removeBlock,
  } = props;

  const onRemoveClick = () => {
    removeBlock(sceneId)
  };

  return (
    <Container>
      <MenuGroup>
        <MenuItem onClick={e => moveBlockBy(sceneId, -1)}>위로</MenuItem>
        <MenuItem onClick={e => moveBlockBy(sceneId, 1)}>아래로</MenuItem>
        <MenuItem onClick={onRemoveClick}>삭제</MenuItem>
        <MenuItem>수정</MenuItem>
      </MenuGroup>
      <SceneID>{sceneId}</SceneID>
      <CharacterName>{characterName}</CharacterName>
      <SceneScript>{sceneScript}</SceneScript>
      <FileDescription>{characterImage}</FileDescription>
      <FileDescription>{backgroundImage}</FileDescription>
      <FileDescription>{sceneSound}</FileDescription>
      {options.length === 0 ? 
        <div>Next Scene ID : {nextSceneId}</div>
      : (
        <ol>
          {options.map(({ answer, reaction, nextId }, i) => (
            <li key={i}>
              {answer?.length > 0 ? <Script color="lightcyan">{answer}</Script> : null}
              {answer?.length > 0 ? ' → ' : null}
              {reaction?.length > 0 ? <Script color='lightyellow'>{reaction}</Script> : null}
              {reaction?.length > 0 ? ' → ' : null}
              {nextId}
            </li>
          ))}
        </ol>
      )}
      <OptionGroup></OptionGroup>
    </Container>
  );
}

export default ScriptBlock;
