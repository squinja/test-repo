import amadeusWise from "./assets/wise-amadeus.jpg";
import amethyst from "./assets/amethyst.jpg";
import catnap from "./assets/catnap.jpg";
import dragon from "./assets/dragon.jpg";
import druidSpell from "./assets/druidspell.jpg";
import doorway from "./assets/doorway.jpg";
import forestTree from "./assets/forest-tree.jpg";
import house from "./assets/house.jpg";
import beefStew from "./assets/beef-stew.jpg";
import catPower from "./assets/cat-power.jpg";
import druidPower from "./assets/druid-power.jpg";
import wizardDesk from "./assets/wizard-desk.jpg";
import ingredients from "./assets/ingredients.jpg";
import dragonAttack from "./assets/dragon attack.jpg";
import wizardBooklet from "./assets/wizard-booklet.jpg";
import wizardWorkstation from "./assets/wizard-workstation.jpg";
import amadeusIntro from "./assets/amadeus-intro.jpg";
import witches from "./assets/witches.jpg";
import amadeus151 from "./assets/amadeus-good.jpg";

import forestPath from "./assets/forest-path.jpg";

import forestCreepy from "./assets/forest-creepy.jpg";

import shrubs from "./assets/shrubs.jpg";

import sword from "./assets/sword.jpg";
import flames from "./assets/flames.jpg";
import dagger from "./assets/dagger.jpg";
import amadeusSmart from "./assets/amadeus-smart.jpg";
import amadeusFrown from "./assets/amadeus-frown.jpg";

import creepyForest from "./assets/creepy-forest.jpg";
import clearing from "./assets/clearing.jpg";
import lavenderBush from "./assets/lavender-bush.jpg";
import toCliff from "./assets/to-cliff.jpg";
import seeCave from "./assets/see-cave.jpg";
import darkCave from "./assets/dark-cave.jpg";
import litCave from "./assets/lit-cave.jpg";

import continueCave from "./assets/continue-cave.jpg";

import gold from "./assets/gold.jpg";
import amadeusCaution from "./assets/amadeus-caution.jpg";
import weapon from "./assets/weapon.jpg";
import huhdeus from "./assets/huhdeus.jpg";
import darkness from "./assets/darkness.jpg";
import croc from "./assets/croc.jpg";
import feet from "./assets/feet.jpg";

import lizardo from "./assets/lizardo.jpg";
import riddle from "./assets/riddle.jpg";
import crys from "./assets/crys.jpg";
import protect from "./assets/protect.jpg";
import fire from "./assets/fire.jpg";
import ocean from "./assets/ocean.jpg";
import drink from "./assets/drink.jpg";
import aura from "./assets/aura.jpg";
import celebrate from "./assets/celebrate.jpg";

function BackgroundImageBox({ sceneBranchNumber, setSceneBranchNumber }) {
  const backgroundBranchesObject = {
    1: house,
    2: doorway,
    3: doorway,
    4: amadeusIntro,
    5: catPower,
    6: druidPower,
    7: witches,
    8: wizardWorkstation,
    9: beefStew,
    10: wizardBooklet,
    11: amethyst,
    12: amadeusWise,
    13: catnap,
    14: druidSpell,
    151: amadeus151,
    15: forestPath,
    16: forestCreepy,
    161: shrubs,
    162: shrubs,
    163: shrubs,
    17: shrubs,
    18: dagger,
    19: sword,
    181: sword,
    182: flames,
    183: amadeusSmart,
    20: amadeusFrown,
    21: creepyForest,
    22: clearing,
    221: lavenderBush,
    23: toCliff,
    24: seeCave,
    25: darkCave,
    26: litCave,
    27: continueCave,
    28: gold,
    29: amadeusCaution,
    291: weapon,
    292: huhdeus,
    30: darkness,
    31: croc,
    32: feet,
    33: lizardo,
    34: lizardo,
    341: lizardo,
    342: riddle,
    343: crys,
    344: protect,
    35: crys,
    36: crys,
    37: fire,
    38: ocean,
    39: wizardWorkstation,
    40: drink,
    41: aura,
    42: celebrate,
  };

  return (
    <div>
      <div className="background-image-box">
        <div className="background-image">
          <img
            src={backgroundBranchesObject[sceneBranchNumber]}
            className=""
            alt="background-images"
          />
        </div>
      </div>
    </div>
  );
}

export default BackgroundImageBox;
