import React from "react";
import styled from "styled-components";

const Anchor = styled.a`
  color: inherit;
  text-decoration: none;
`;

const Red = styled(Anchor)`
  color: red;
  font-weight: bolder;
`;

const Container = styled.div`
  background-color: #efefef;
  padding: 10px;
  margin: 5px;
  position: relative;
`;
const SceneID = styled.div`
  font-weight: 800;
  cursor: pointer;
  & small {
    font-weight: 400;
    cursor: default;
    margin-left: 8px;
  }
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
const OptionGroup = styled.ol``;
const OptionItem = styled.li``;
const FileDescription = styled.span`
  margin-right: 10px;
  font-size: 13px;
`;
const Script = styled.span`
  background-color: ${(props) => (props.color ? props.color : "white")};
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
  const {
    sceneId,
    characterName,
    sceneScript,
    characterImage,
    backgroundImage,
    sceneSound,
    backgroundSound,
    options,
    nextSceneId,
    sceneType,
    moveBlockBy,
    removeBlock,
    modifyBlock,
    blockList,
  } = props;

  const onRemoveClick = () => {
    removeBlock(sceneId);
  };

  const onModifyClick = () => {
    modifyBlock(sceneId);
  };

  const alertMessage = ( message ) => (e) => {
    alert(message);
  }

  return (
    <Container id={sceneId}>
      <MenuGroup>
        <MenuItem onClick={(e) => moveBlockBy(sceneId, -1)}>위로</MenuItem>
        <MenuItem onClick={(e) => moveBlockBy(sceneId, 1)}>아래로</MenuItem>
        <MenuItem onClick={onRemoveClick}>삭제</MenuItem>
        <MenuItem onClick={onModifyClick}>수정</MenuItem>
      </MenuGroup>
      <Anchor href={`#${sceneId}`}>
        <SceneID>
          {sceneId}{" "}
          <small>
            {sceneType === "ending" ? "🔚엔딩" : sceneType === "text" ? "💬채팅" : "👥만남"}
          </small>
        </SceneID>
      </Anchor>
      {sceneType !== "ending" && <CharacterName>{characterName}</CharacterName>}
      <SceneScript>{sceneScript}</SceneScript>
      {sceneType !== "ending" && characterImage?.length > 0 && (
        <FileDescription aria-label="man">
          🕺🏻캐릭터이미지 <b>"{characterImage}"</b>
        </FileDescription>
      )}
      {sceneType !== "ending" && backgroundImage?.length > 0 && (
        <FileDescription aria-label="landscape">
          🏞배경이미지 <b>"{backgroundImage}"</b>
        </FileDescription>
      )}
      {sceneType !== "ending" && sceneSound?.length > 0 && (
        <FileDescription aria-label="speaker">
          🔈대사 <b>"{sceneSound}"</b>
        </FileDescription>
      )}
      {sceneType !== "ending" && backgroundSound?.length > 0 && (
        <FileDescription aria-label="music">
          🎼배경음악 <b>"{backgroundSound}"</b>
        </FileDescription>
      )}
      {sceneType !== "ending" && (
        <>
          {options.length === 0 ? (
            <div>Next Scene ID : {nextSceneId}</div>
          ) : (
            <OptionGroup>
              {options.map(({ answer, reaction, nextId }, i) => (
                <OptionItem key={i}>
                  {answer?.length > 0 ? (
                    <>
                      <Script color="lightcyan">{answer}</Script> 선택 시
                    </>
                  ) : null}
                  {answer?.length > 0 ? " → " : null}
                  {reaction?.length > 0 ? (
                    <>
                      <Script color="lightyellow">{reaction}</Script> 반응
                    </>
                  ) : null}
                  {reaction?.length > 0 ? " → " : null}
                    {blockList.findIndex((block) => block.sceneId === nextId) === -1 ? (
                      <Red href="#" onClick={alertMessage("존재하지 않는 Scene ID 입니다.")}>{nextId}</Red>
                    ) : (
                      <Anchor href={`#${nextId}`}>
                        <b>{nextId}</b>
                      </Anchor>
                    )}{" "}
                    장면 이동
                </OptionItem>
              ))}
            </OptionGroup>
          )}
        </>
      )}
    </Container>
  );
}

export default ScriptBlock;
