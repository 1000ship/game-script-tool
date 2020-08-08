import React, { useState } from "react";
import styled from "styled-components";
import ScriptBlock from "./Partials/ScriptBlock";
import { saveBlockList } from "../Utils/api";

const Container = styled.div`
  padding: 5px 0px;
`;

function ScriptView({ blockList, setBlockList }) {
  const moveBlockBy = (sceneId, by) => {
    const index = blockList.findIndex((block) => (block.sceneId === sceneId));
    const at = index + by;
    if (at < 0 || at >= blockList.length) return;
    setBlockList((blockList) => {
      const tmpArray = [
        ...blockList.slice(0, index),
        ...blockList.slice(index + 1),
      ];
      const result = [
        ...tmpArray.slice(0, at),
        blockList[index],
        ...tmpArray.slice(at),
      ]
      saveBlockList(result)
      return result;
    });
  };

  const removeBlock = (sceneId) => {
    if( !window.confirm("삭제한 후 되돌릴 수 없습니다. 삭제하시겠습니까?") ) return
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
      {blockList.map(
        (
          {
            sceneId,
            characterName,
            sceneScript,
            characterImage,
            backgroundImage,
            sceneSound,
            options,
            nextSceneId,
            sceneType,
          },
          i
        ) => (
          <ScriptBlock
            key={sceneId}
            sceneId={sceneId}
            characterName={characterName}
            sceneScript={sceneScript}
            characterImage={characterImage}
            backgroundImage={backgroundImage}
            sceneSound={sceneSound}
            options={options}
            nextSceneId={nextSceneId}
            sceneType={sceneType}
            moveBlockBy={moveBlockBy}
            removeBlock={removeBlock}
          ></ScriptBlock>
        )
      )}
    </Container>
  );
}

export default ScriptView;
