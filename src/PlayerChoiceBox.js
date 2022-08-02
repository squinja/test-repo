const PlayerChoiceBox = ({
  playerOptionNumber,
  optionNumber,
  setOptionNumber,
  sceneNumber,
  setSceneNumber,
  sceneBranchNumber,
  moveLineIndexByOne,
  isChoiceBranch,
  playerAttribute,
  setPlayerAttribute,
}) => {
  const playerChoicesObject = {
    1: {
      // sceneBranchNum: ['Option1', 'Option2', BranchToMoveToNum1, BranchToMoveToNum2, SceneToMoveToNum1, SceneToMoveToNum2]
      1: [
        "Knock on the door",
        "Yell at the door",
        null,
        null,
        2,
        3,
        null,
        null,
        1,
        1,
        null,
        null,
      ],
      4: [
        "A cat warrior",
        "A druid master",
        null,
        null,
        5,
        6,
        null,
        null,
        1,
        1,
        null,
        null,
      ],
      12: [
        "Head to the Haggard Forest",
        "Ask Amadeus about his wizardry",
        "Take a cat nap (Cat warrior perk)",
        "Apply a Soul Heal spell to yourself (Druid master perk)",
        15,
        151,
        13,
        14,
        1,
        1,
        1,
        1,
      ],
      13: [
        "Head to the Haggard Forest",
        "Ask Amadeus about his wizardry",
        null,
        null,
        15,
        151,
        null,
        null,
        1,
        1,
        null,
        null,
      ],
      14: [
        "Head to the Haggard Forest",
        "Ask Amadeus about his wizardry",
        null,
        null,
        15,
        151,
        null,
        null,
        1,
        1,
        null,
        null,
      ],
      16: [
        "Investigate it",
        "Leave it alone",
        "Hiss at it to intimidate it (Cat warrior perk)",
        "Use a Fear spell to scare it off (Druid master perk)",
        17,
        161,
        162,
        163,
        1,
        1,
        1,
        1,
      ],
      18: [
        "Put up your guard",
        "Attack first",
        null,
        null,
        19,
        181,
        null,
        null,
        1,
        1,
        null,
        null,
      ],
      29: [
        "Creep forward to look for the Forbidden Egg",
        "Pull out your weapon before approaching",
        null,
        null,
        30,
        291,
        null,
        null,
        1,
        1,
        null,
        null,
      ],
      32: [
        "Tell her the truth",
        "Lie",
        "Lunge forward with feline grace to grab the Egg (Cat warrior perk)",
        "Cast an Invisibility spell (Druid master perk)",
        33,
        34,
        35,
        36,
        1,
        1,
        1,
        1,
      ],
      342: [
        "Minotaur",
        "Faun",
        null,
        null,
        344,
        343,
        null,
        null,
        1,
        1,
        null,
        null,
      ],
    },
  };

  function setPlayerOptionNumber(num) {
    setOptionNumber(num);
    console.log("playeroptionnumber: ", num);
    console.log("optionNumber: ", optionNumber);
  }

  function setSceneNumberHelper(num) {
    setSceneNumber(num);
    console.log("scenenumber = ", num);
    console.log("optionNumber: ", sceneNumber);
  }

  console.log(playerAttribute == "druidmaster" ? true : false);

  return (
    <div>
      <div className="player-choice-box">
        <a
          href="#"
          onClick={() => {
            setPlayerOptionNumber(
              playerChoicesObject[sceneNumber][sceneBranchNumber][
                playerOptionNumber + 3
              ]
            );
            setSceneNumberHelper(
              playerChoicesObject[sceneNumber][sceneBranchNumber][
                playerOptionNumber + 7
              ]
            );
          }}
        >
          {" "}
          {
            playerChoicesObject[sceneNumber][sceneBranchNumber][
              playerOptionNumber - 1
            ]
          }
        </a>
      </div>

      {/* 
        {playerAttribute == "catwarrior" &&
      playerChoicesObject[sceneNumber][sceneBranchNumber][6] ? (
        <div className="player-choice-box">
          <a
            href="#"
            onClick={() => {
              setPlayerOptionNumber(
                playerChoicesObject[sceneNumber][sceneBranchNumber][
                  playerOptionNumber + 4
                ]
              );
              setSceneNumberHelper(
                playerChoicesObject[sceneNumber][sceneBranchNumber][
                  playerOptionNumber + 5
                ]
              );
            }}
          >
            Choice #{optionNumber}:{" "}
            {
              playerChoicesObject[sceneNumber][sceneBranchNumber][
                playerOptionNumber + 3
              ]
            }
          </a>
        </div>
      ) : playerAttribute == "druidmaster" &&
        playerChoicesObject[sceneNumber][sceneBranchNumber][6] ? (
        <div className="player-choice-box">
          <a
            href="#"
            onClick={() => {
              setPlayerOptionNumber(
                playerChoicesObject[sceneNumber][sceneBranchNumber][
                  playerOptionNumber + 6
                ]
              );
              setSceneNumberHelper(
                playerChoicesObject[sceneNumber][sceneBranchNumber][
                  playerOptionNumber + 7
                ]
              );
            }}
          >
            Choice #{optionNumber}:{" "}
            {
              playerChoicesObject[sceneNumber][sceneBranchNumber][
                playerOptionNumber + 6
              ]
            }
          </a>
        </div>
      ) : */}
      {/* 
      {playerAttribute == "" && (
        <div className="player-choice-box">
          <a
            href="#"
            onClick={() => {
              setPlayerOptionNumber(
                playerChoicesObject[sceneNumber][sceneBranchNumber][
                  optionNumber + 4
                ]
              );
              setSceneNumberHelper(
                playerChoicesObject[sceneNumber][sceneBranchNumber][
                  optionNumber + 5
                ]
              );
            }}
          >
            Choice #{optionNumber}:{" "}
            {
              playerChoicesObject[sceneNumber][sceneBranchNumber][
                optionNumber + 3
              ]
            }
          </a>
        </div>
      )} */}
    </div>
  );
};

export default PlayerChoiceBox;
