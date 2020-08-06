import React, { useState, useRef, createRef, useEffect } from "react";
import styled from "styled-components";
import { OPTION_MINIMUM_COUNT } from "../Utils/Constant";

const Container = styled.div`
  @media (min-width: 800px) {
    width: 80%;
    left: 10%;
  }
  padding: 10px 0px;
  margin: auto auto;
  background-color: white;
  position: fixed;
  top: 0;
  z-index: 1;
  border-bottom: 1px solid gray;
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
  height: 50px;
  display: block;
`;

function ScriptInput({ createNewBlock, blockList, setScriptInputHeight }) {
  const defaultState = {
    sceneId: "",
    characterName: "",
    sceneScript: "",
    characterImage: "",
    backgroundImage: "",
    sceneSound: "",
    nextSceneId: "",
    options: [
      {
        answer: "",
        reaction: "",
        nextId: "",
      },
    ],
    sceneType: "meet",
  };
  let [formData, setFormData] = useState(defaultState);
  let {
    sceneId,
    characterName,
    sceneScript,
    characterImage,
    backgroundImage,
    sceneSound,
    nextSceneId,
    options,
    sceneType,
  } = formData;

  const onInputChange = (e) => {
    const {
      name,
      value,
      dataset: { optionIndex, value: dataValue },
    } = e.target;
    if (formData[name] === undefined && optionIndex === undefined) return;
    if ( dataValue !== undefined ) // for radio button
      setFormData({
        ...formData,
        [name]: dataValue,
      });
    else if (optionIndex === undefined) // for text input
      setFormData({
        ...formData,
        [name]: value,
      });
    else { // for option text input
      setFormData((data) => {
        data.options[optionIndex][name] = value;
        return Object.assign({}, data);
      });
    }
  };

  const onOptionAddClick = (e) => {
    setFormData({
      ...formData,
      options: formData.options.concat({
        answer: "",
        reaction: "",
        nextId: "",
      }),
    });
  };

  const onOptionRemoveClick = (e) => {
    if (options.length > OPTION_MINIMUM_COUNT)
      setFormData({
        ...formData,
        options: options.slice(0, options.length - 1),
      });
  };

  const onNewBlockClick = (e) => {
    if (sceneId.length === 0) alert("Scene ID를 입력하세요.");
    else if (blockList.find((block) => block.sceneId === sceneId)) {
      alert("중복되는 Scene ID가 있습니다.");
    } else if (createNewBlock) {
      createNewBlock(Object.assign({}, formData));
      setFormData(defaultState);
    }
  };

  // 개선 필요
  const scriptInputElement = createRef();
  useEffect(
    (e) => {
      if (scriptInputElement?.current === undefined) return;
      setScriptInputHeight(scriptInputElement.current?.offsetHeight);
    },
    [scriptInputElement]
  );

  return (
    <Container ref={scriptInputElement}>
      <InputPair>
        <span>Scene Type : </span>
        <TextInput
          name="sceneType"
          id="scene-type-meet"
          data-value="meet"
          type="radio"
          checked={sceneType === "meet"}
          onChange={onInputChange}
        ></TextInput>
        <Label htmlFor="scene-type-meet">만남</Label>
        <TextInput
          name="sceneType"
          id="scene-type-text"
          data-value="text"
          type="radio"
          checked={sceneType === "text"}
          onChange={onInputChange}
        ></TextInput>
        <Label htmlFor="scene-type-text">문자</Label>
      </InputPair>
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

      {options.length > 0 ? (
        options.map(({ answer, reaction, nextId }, i) => (
          <InputPair key={i} style={{ display: "flex" }}>
            <Label>{i + 1}. </Label>
            <TextInput
              style={{ flex: 1 }}
              type="text"
              placeholder="(대답) I like too"
              name="answer"
              data-option-index={i}
              value={answer}
              onChange={onInputChange}
            ></TextInput>
            <TextInput
              style={{ flex: 1 }}
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
        ))
      ) : (
        <InputPair>
          <Label htmlFor="next-scene-id">Next Scene ID : </Label>
          <TextInput
            name="nextSceneId"
            value={nextSceneId}
            onChange={onInputChange}
            id="next-scene-id"
            type="text"
            placeholder="#4-1"
          ></TextInput>
        </InputPair>
      )}
      <button onClick={onOptionAddClick}>선택지 추가</button>
      {options.length > 0 && (
        <button onClick={onOptionRemoveClick}>선택지 삭제</button>
      )}
      <br />
      <button onClick={onNewBlockClick}>블럭 추가</button>
    </Container>
  );
}

export default ScriptInput;
