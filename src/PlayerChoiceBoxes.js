import { useEffect } from "react";
import PlayerChoiceBox from "./PlayerChoiceBox";

const PlayerChoiceBoxes = ({
  optionNumber,
  setOptionNumber,
  sceneNumber,
  setSceneNumber,
  sceneBranchNumber,
  moveLineIndexByOne,
  isChoiceBranch,
  playerChoicesObjectId,
  setPlayerChoicesObjectId,
  playerAttribute,
  setPlayerAttribute,
}) => {
  //   function setPlayerChoicesObjectId() {
  //     setPlayerChoicesObjectId();
  //   }

  return (
    <div>
      {/* {playerChoicesObject[1].map((choice, num) => (
        <div className="player-choice-box">
          <a href="#" onClick={() => setPlayerOptionNumber(num)}>
            Choice #{num + 1}: {choice}
          </a>
        </div>
      ))} */}
      <PlayerChoiceBox
        playerOptionNumber={1}
        setOptionNumber={setOptionNumber}
        sceneNumber={sceneNumber}
        setSceneNumber={setSceneNumber}
        sceneBranchNumber={sceneBranchNumber}
        moveLineIndexByOne={moveLineIndexByOne}
        isChoiceBranch={isChoiceBranch}
      />
      <PlayerChoiceBox
        playerOptionNumber={2}
        setOptionNumber={setOptionNumber}
        sceneNumber={sceneNumber}
        setSceneNumber={setSceneNumber}
        sceneBranchNumber={sceneBranchNumber}
        moveLineIndexByOne={moveLineIndexByOne}
        isChoiceBranch={isChoiceBranch}
      />
      {playerAttribute == "catwarrior" && (
        <PlayerChoiceBox
          playerOptionNumber={3}
          setOptionNumber={setOptionNumber}
          sceneNumber={sceneNumber}
          setSceneNumber={setSceneNumber}
          sceneBranchNumber={sceneBranchNumber}
          moveLineIndexByOne={moveLineIndexByOne}
          isChoiceBranch={isChoiceBranch}
          playerAttribute={playerAttribute}
          setPlayerAttribute={setPlayerAttribute}
        />
      )}
      {playerAttribute == "druidmaster" && (
        <PlayerChoiceBox
          playerOptionNumber={4}
          setOptionNumber={setOptionNumber}
          sceneNumber={sceneNumber}
          setSceneNumber={setSceneNumber}
          sceneBranchNumber={sceneBranchNumber}
          moveLineIndexByOne={moveLineIndexByOne}
          isChoiceBranch={isChoiceBranch}
          playerAttribute={playerAttribute}
          setPlayerAttribute={setPlayerAttribute}
        />
      )}
    </div>
  );
};

export default PlayerChoiceBoxes;
