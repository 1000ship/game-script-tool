import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #efefef;
  padding: 10px;
  margin: 5px;
`;
const SceneID = styled.div`
  font-weight: 600;
`;
const CharacterName = styled.div``;
const SceneScript = styled.div``;
const OptionGroup = styled.div``;

function ScriptBlock(props) {
  var {
    sceneId,
    characterName,
    sceneScript,
    characterImage,
    backgroundImage,
    sceneSound,
    options,
  } = props;
  return (
    <Container>
      <SceneID>{sceneId}</SceneID>
      <CharacterName>{characterName}</CharacterName>
      <SceneScript>{sceneScript}</SceneScript>
      <div>{characterImage}</div>
      <div>{backgroundImage}</div>
      <div>{sceneSound}</div>
      <ul>
        {options.map((option) => (
          <li>{option}</li>
        ))}
      </ul>
      <OptionGroup></OptionGroup>
    </Container>
  );
}

export default ScriptBlock;
