import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  padding: 15px;
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
  var options = [
    {
      say: "선택지",
      reaction: "반응",
      nextId: "#3-1",
    },
    {
      say: "선택지",
      reaction: "반응",
      nextId: "#3-1",
    },
    {
      say: "선택지",
      reaction: "반응",
      nextId: "#3-1",
    },
  ];

  return (
    <Container>
      <InputPair>
        <Label for="scene-id">Scene ID : </Label>
        <TextInput id="scene-id" type="text" placeholder="#3-1"></TextInput>
      </InputPair>
      <InputPair>
        <Label for="character-name">Character Name : </Label>
        <TextInput
          id="character-name"
          type="text"
          placeholder="John Mayer"
        ></TextInput>
      </InputPair>

      <InputPair>
        <Label for="scene-script">Scene Script : </Label>
        <TextArea
          id="scene-script"
          placeholder=" 오늘 날씨 참 좋죠?!"
        ></TextArea>
      </InputPair>

      <InputGroup>
        <InputPair>
          <Label for="character-image">Character Image : </Label>
          <TextInput
            id="character-image"
            type="text"
            placeholder="smile.png (선택입력)"
          ></TextInput>
        </InputPair>
        <InputPair>
          <Label for="background-image">Background Image : </Label>
          <TextInput
            id="background-image"
            type="text"
            placeholder="park.png (선택입력)"
          ></TextInput>
        </InputPair>
        <InputPair>
          <Label for="scene-sound">Scene Sound : </Label>
          <TextInput
            id="scene-sound"
            type="text"
            placeholder="laugh.mp3 (선택입력)"
          ></TextInput>
        </InputPair>
      </InputGroup>

      <hr />

      {options.map(({ say, reaction, nextId }, index) => (
        <div>
          <Label>선택지 {index + 1} </Label>
          <TextInput type="text" value={say}></TextInput>
          <TextInput type="text" value={reaction}></TextInput>
          <TextInput type="text" value={nextId}></TextInput>
        </div>
      ))}
      <button>선택지 추가</button>
      <button>선택지 삭제</button>
    </Container>
  );
}

export default ScriptInput;
