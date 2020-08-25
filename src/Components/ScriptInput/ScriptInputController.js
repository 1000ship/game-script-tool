import React, { useState, useEffect } from "react";
import ScriptInputPresenter from "./ScriptInputPresenter";
import { OPTION_MINIMUM_COUNT } from "../../Utils/Constant";
import { DEFAULT_SCENE } from "./constant";

function ScriptInput({
  createNewBlock,
  modifyBlock,
  blockList,
  isOpend,
  modifySceneId = null,
}) {
  const defaultScene = modifySceneId
    ? blockList.find((data) => data.sceneId === modifySceneId)
    : DEFAULT_SCENE;
  useEffect(() => {
    setFormData({
      ...defaultScene,
      options: [
        {
          answer: "",
          reaction: "",
          nextId: "",
        },
      ],
    });
  }, [defaultScene]);

  let [formData, setFormData] = useState(defaultScene);
  let { sceneId, options } = formData;

  const onInputChange = (e) => {
    const {
      name,
      value,
      dataset: { optionIndex, value: dataValue },
    } = e.target;
    if (formData[name] === undefined && optionIndex === undefined) return;
    if (dataValue !== undefined)
      // for radio button
      setFormData({
        ...formData,
        [name]: dataValue,
      });
    else if (optionIndex === undefined)
      // for text input
      setFormData({
        ...formData,
        [name]: value,
      });
    else {
      // for option text input
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
      alert("중복되는 Scene Type과 Scene ID가 있습니다.");
    } else if (createNewBlock) {
      createNewBlock(Object.assign({}, formData));
      setFormData({
        ...defaultScene,
        options: [
          {
            answer: "",
            reaction: "",
            nextId: "",
          },
        ],
      });
    }
  };

  const onModifyBlockClick = (e) => {
    modifyBlock(Object.assign({}, formData));
  };

  return (
    <ScriptInputPresenter
      isOpend={isOpend}
      isModifyMode={modifySceneId !== null}
      formData={formData}
      onInputChange={onInputChange}
      onOptionAddClick={onOptionAddClick}
      onOptionRemoveClick={onOptionRemoveClick}
      onNewBlockClick={onNewBlockClick}
      onModifyBlockClick={onModifyBlockClick}
    ></ScriptInputPresenter>
  );
}

export default ScriptInput;
