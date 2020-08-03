import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 15px 0px;
  margin: auto auto;
`;
const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;
const InputPair = styled.div`
  padding: 3px 0px;
`;
const Label = styled.label``;
const TextInput = styled.input``;
const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  display: block;
`;

function ScriptInput() {
  let [formData, setFormData] = useState({
    sceneId: "",
    characterName: "",
    sceneScript: "",
    characterImage: "",
    backgroundImage: "",
    sceneSound: "",
    options: [
      {
        answer: "",
        reaction: "",
        nextId: "",
      },
    ],
  });
  let {
    sceneId,
    characterName,
    sceneScript,
    characterImage,
    backgroundImage,
    sceneSound,
    options,
  } = formData;

  const onInputChange = (e) => {
    const { name, value, dataset: {optionIndex} } = e.target;
    if (formData[name] === undefined && optionIndex === undefined) return;
    if (optionIndex === undefined)
      setFormData({
        ...formData,
        [name]: value,
      });
    else
    {
      setFormData( data => {
        data.options[optionIndex][name] = value
        return Object.assign({}, data)
      });
    }
  };

  const onOptionAddClick = (e) => {
    setFormData({
      ...formData,
      options: formData.options.concat({answer:"", reaction:"", nextId:""})
    })
  }
  
  const onOptionRemoveClick = (e) => {
    if( options.length > 1)
      setFormData({
        ...formData,
        options: options.slice(0, options.length - 1)
      })
  }

  return (
    <Container>
      <InputPair>
        <Label htmlFor="scene-id">Scene ID : </Label>
        <TextInput
          name="sceneId"
          id="scene-id"
          type="text"
          placeholder="#3-1"
          value={sceneId}
          onChange={onInputChange}
        ></TextInput>
      </InputPair>
      <InputPair>
        <Label htmlFor="character-name">Character Name : </Label>
        <TextInput
          name="characterName"
          value={characterName}
          onChange={onInputChange}
          id="character-name"
          type="text"
          placeholder="John Mayer"
        ></TextInput>
      </InputPair>

      <InputPair>
        <Label htmlFor="scene-script">Scene Script : </Label>
        <TextArea
          name="sceneScript"
          value={sceneScript}
          onChange={onInputChange}
          id="scene-script"
          placeholder="Hello, the weather is sunny. Shall we go picnic?"
        ></TextArea>
      </InputPair>

      <InputGroup>
        <InputPair>
          <Label htmlFor="character-image">Character Image : </Label>
          <TextInput
            name="characterImage"
            value={characterImage}
            onChange={onInputChange}
            id="character-image"
            type="text"
            placeholder="smile.png (선택입력)"
          ></TextInput>
        </InputPair>
        <InputPair>
          <Label htmlFor="background-image">Background Image : </Label>
          <TextInput
            name="backgroundImage"
            value={backgroundImage}
            onChange={onInputChange}
            id="background-image"
            type="text"
            placeholder="park.png (선택입력)"
          ></TextInput>
        </InputPair>
        <InputPair>
          <Label htmlFor="scene-sound">Scene Sound : </Label>
          <TextInput
            name="sceneSound"
            value={sceneSound}
            onChange={onInputChange}
            id="scene-sound"
            type="text"
            placeholder="laugh.mp3 (선택입력)"
          ></TextInput>
        </InputPair>
      </InputGroup>

      {options.map(({answer, reaction, nextId}, i) => (
        <InputPair key={i}>
          <Label>선택지 {i + 1} </Label>
          <TextInput
            type="text"
            placeholder="(대답) I like too"
            name="answer"
            data-option-index={i}
            value={answer}
            onChange={onInputChange}
          ></TextInput>
          <TextInput
            type="text"
            placeholder="(반응) Let's meet now"
            name="reaction"
            data-option-index={i}
            value={reaction}
            onChange={onInputChange}
          ></TextInput>
          <TextInput
            type="text"
            placeholder={`#3-${i + 2}`}
            name="nextId"
            data-option-index={i}
            value={nextId}
            onChange={onInputChange}
          ></TextInput>
        </InputPair>
      ))}
      <button onClick={onOptionAddClick}>
        선택지 추가
      </button>
      <button onClick={onOptionRemoveClick}>
        선택지 삭제
      </button>
      <br />
      <button>블럭 추가</button>
    </Container>
  );
}

export default ScriptInput;
