import PlayerChoiceBox from "./PlayerChoiceBox";
import PlayerChoiceBoxes from "./PlayerChoiceBoxes";

import MoveToNextLineIndex from "./MoveToNextLineIndex";
import { useState, useEffect } from "react";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";

const TextBox = ({
  optionNumber,
  setOptionNumber,
  sceneNumber,
  setSceneNumber,
  sceneBranchNumber,
  setSceneBranchNumber,
}) => {
  const [inputValue, setInputValue] = useState(0);

  const [sceneBranchLineNumber, setSceneBranchLineNumber] = useState(0);

  const [isChoiceBranch, setIsChoiceBranch] = useState(false);

  const [playerChoicesObjectId, setPlayerChoicesObjectId] = useState(1);

  const [playerAttribute, setPlayerAttribute] = useState("");

  const handleStorage = () => {
    localStorage.setItem("sceneNumber", sceneNumber);
    localStorage.setItem("sceneBranchNumber", sceneBranchNumber);
    // localStorage.setItem("sceneBranchLineNumber", sceneBranchLineNumber);
    console.log("localstorage: ", localStorage);
  };

  const handlePlayerAttributeStorage = () => {
    localStorage.setItem("playerAttribute", playerAttribute);
  };

  const clearLocalStorage = () => {
    localStorage.removeItem("sceneNumber");
    localStorage.removeItem("sceneBranchNumber");
    localStorage.removeItem("playerAttribute");
    console.log("localstorage cleared -\n ", localStorage);

    setIsChoiceBranch(false);
    setSceneBranchLineNumber(0);
    setSceneBranchNumber(1);
    setSceneNumber(1);
  };

  const setStorage = async () => {
    try {
      console.log(localStorage);
      await console.log(typeof localStorage["sceneNumber"]);

      await setSceneNumber(parseFloat(localStorage["sceneNumber"]));
      console.log("i'm doing stupid thing");
      await setSceneBranchNumber(
        parseFloat(localStorage.get("sceneBranchNumber"))
      );
      await console.log("after setting: ", localStorage);
      // await setSceneBranchLineNumber(
      //   parseFloat(localStorage["sceneBranchLineNumber"])
      // );
      // await setPlayerAttribute(localStorage["playerAttribute"]);
    } catch (error) {
      console.log(error);
    }
  };

  const setPlayerAttributeStorage = async () => {
    try {
      await setPlayerAttribute(localStorage["playerAttribute"]);
    } catch (error) {
      console.log(error);
    }
  };

  const playerChoices = {
    1: {
      1: [
        { returnsToBranchLine: false },
        "You place foot before foot, trudging your way up the 'hill of a thousand steps'. Your back is damp with sweat, your toes blistering underneath tight leather sandals.",

        "The wooden shack at the top of the hill, surrounded by dark forest, is hardly eye-catching. Had you not ventured here, you would most likely not have even seen it.",

        "Yet, you have come here for a specific purpose: to speak to the great Oracle, Amadeus. For you've heard of his powerful spellcasting abilities, and you're hoping he can cure a peculiar ailment that has plagued you for weeks, now.",

        "You jump at the sound of a rattlesnake that dives into the shrubs ahead of you. Good thing you came armed—you've heard the snakes here can be venomous.",

        "As you approach the abode, you're forced to recognize just how old it is—the wood is decrepit, the knots in the wood like black whirlpools of void that could suck your soul out if you're not careful. The door hinges are rusted orange. You wonder if they even work.",

        "You hear a noise from inside, like the sound of a book falling onto stone. You steel your nerves.",

        "Smoothing down your clothes, so as not to intimidate the Great Amadeus, you proceed to...",
      ],

      2: [
        { returnsToBranchLine: 4 },
        "You hear another round of scuffling inside. The door swings open at a speed you would have believed impossible.",

        "Before you is the wizard himself: Amadeus the Oracle! You proceed to bow quickly before him, lest you disrespect him with your bold presence.",
        '"Who are you?", asks a raspy, high-pitched voice.',
      ],

      3: [
        { returnsToBranchLine: 4 },
        "You hear something like a cat's yowl. Another round of rummaging from inside, this time more violent, sounds the Great Wizard's approach.",
        "The door swings open at a speed you would have believed impossible.",
        "Before you is the wizard himself: Amadeus the Oracle! You proceed to bow quickly before him, lest you disrespect him with your bold presence.",
        '"What in the world are you doing here? Who dare disrupts my home?", asks a raspy, high-pitched voice.',
      ],
      4: [
        { returnsToBranchLine: false },
        "Amadeus the Great Oracle is a cat! Dressed in wizard's robes, he is a small, yellow creature, gazing upon you with wise eyes that seem to know all.",
        '"What are you doing here?", Amadeus asks again. "I was busy sleeping, you know. I\'ve not seen others dressed as you do. Who are you?"',
      ],

      5: [
        { returnsToBranchLine: 7 },
        '"Hm. A feline, like myself, but of a different profession. I see, I see," murmurs Amadeus, almost to himself.',
        '"Well, what brings you here? There is nothing here except trees and bones."',
      ],

      6: [
        { returnsToBranchLine: 7 },
        '"Ah. A fellow practitioner of magic, yet a being who bathes in the sun\'s rays in the forests. How peculiar you would show up here."',
        '"There is nothing here except trees and bones, you know, druid."',
      ],

      7: [
        { returnsToBranchLine: 8 },
        "You explain the curse that has blighted you: a weak, yet sticky little spell, that causes time to stop for you—no thanks to a local group of witches with a poor sense of humor you ran into on your travels a few weeks ago.",
        "You are now a stubborn rock stuck in a raging river, unknowing when you will embrace the current's flow.",
        "And without it, you are unable to celebrate your 24th birthday.",
        '"Ah, a time-stopping spell", remarks Amadeus, nodding. "How bothersome." Amadeus scans you up and down. "Come in, come in, traveler. We shall find a cure to your ailments."',
        "Without your noticing, the door behind you closes on its own.",
      ],
      8: [
        { returnsToBranchLine: 9 },
        "You follow Amadeus inside his home: decorated with drying herbs and stacks upon stacks of books, you're certain there's a magical spell still hanging in the air.",
        "Magic is most certainly not the only thing hanging in the air—is that freshly-made soup you smell?",
        '"First, you should eat", Amadeus advises, pointing to a bowl of stew set on the kitchen counter. "Eat up while I gather my notes on a cure for your curse."',
      ],
      9: [
        { returnsToBranchLine: 10 },
        "You hungrily scarf down the bowl of hearty meat stew—while lacking in spice, you can hardly complain. You have traveled long and far to meet the great Amadeus.",
        "Amadeus picks at books, which float, suspended in the air before him. Whisps of cerulean and purple light flicker from around Amadeus to the book. Is that magic?",
        "As you finish the last few spoonfuls, Amadeus appears to approve of a book, and trots over to where you sit.",
      ],
      10: [
        { returnsToBranchLine: 11 },
        '"First, we must acquire Lavender from a clearing in the Haggard Forest", Amadeus explains, trailing his paw along the harshly scribbled notes on the wrinkled pages of the tome.',
        '"That will lull the spell\'s power. We must be careful of the wild trolls about that area, though. They dislike newcomers like you."',
      ],
      11: [
        { returnsToBranchLine: 12 },
        '"Then, I need a powerful energy essence to power this spell to ensure it rids you of the entire curse. We must acquire a Forbidden Egg stone from the lair of Lyria the Wyvern to the North." Amadeus taps a sketch of the stone on his notebook.',
        'Amadeus notices your fearful gaze and nods knowingly. "Yes; she may not be a full-fledged dragon, but she will not go down without a fight. Your only hopes are to best her in battle, or to not disrupt her slumber. The Forbidden Egg stone is bound to be obvious upon her pile of collected treasures."',
      ],
      12: [
        { returnsToBranchLine: false },
        '"Well, let us get going soon, before it gets dark," Amadeus says. The tome shuts by an invisible force. "I shall accompany you. It would be unwise not to."',
        "With that, you both stand back up, dusting off your outfit and preparing for the travel ahead.",
        "First, you'd like to...",
      ],
      13: [
        { returnsToBranchLine: false },
        "Ah, that's right. A good cat nap will do before this grand expedition. You consult with the Great Amadeus, who, after a series of nods, yawns himself.",
        '"A cat nap? I could use one right about now, too..." Amadeus closes his eyes, as do yours. Before you know it, you\'ve curled up and fallen asleep right beside him.',
        "All right, then...now what?",
      ],
      14: [
        { returnsToBranchLine: false },
        "After all of this traveling, a good Soul Heal could help. You begin your druid incantation.",
        "Amadeus notices, and he applies some of his own magic power to your incantation, boosting its power. You thank him for his help.",
        "All right, then...now what?",
      ],
      151: [
        { returnsToBranchLine: 15 },
        '"My wizardry was passed down to me through the generations," Amadeus answers. "I have only been practicing for eight years, now. Life is short as a cat. But I am making the most of what I have."',
        '"I am thankful for my wise elders who raised me right and led me in the right direction in life."',
        "Amadeus appears pensive for a moment, before standing up.",
        '"Well, we shall get going now, shan\'t we?"',
      ],
      15: [
        { returnsToBranchLine: 16 },
        "The two of you begin your expedition to Haggard Forest, which lays West of Amadeus' house.",
        "The path to the forest is initially brightly lit and cleared, thanks to the efforts of the local townsmen keeping it clean to prevent thievery and general mischief.",
        "Amadeus trots alongside you, head held high and confident.",
        'Up ahead, you can see the line of trees starting. "There is the beginning of the forest," Amadeus says. "It is not too far deep in. Remember, do not make much noise, lest we awaken the dangers in the dark."',
      ],
      16: [
        { returnsToBranchLine: false },
        "Once you enter the tree line, the surrounding area becomes shrouded in darkness. A gust of wind barrels through the leaves that are left on the trees, whispering to you: 'Leave. Leaveee.'",
        "With every step forward, you wonder whether this was a good idea. Night whisps float around you, promising spells of impending doom.",
        "A branch behind you snaps, and you swing your head in the direction of it. Couldn't be a wild animal, or worse yet, a troll, could it? You've heard the rumors... \"Was that you?\" Amadeus asks. You shake your head.",
        "You should...",
      ],
      161: [
        { returnsToBranchLine: 21 },
        "No. You shouldn't investigate it. Amadeus did mention that trolls frequented this forest, and you don't want to start off your journey by running into one off the bat.",
        '"Smart choice," Amadeus comments. "Let us not pry our eyes into the occult."',
      ],
      162: [
        { returnsToBranchLine: 20 },
        "You let out a wild, shrill hiss in the direction of the noise.",
        "You're rewarded with the sound of a low shriek and then a nervous gurgle, and then footsteps that make their way through the low bramble.",
      ],
      163: [
        { returnsToBranchLine: 20 },
        "You mumble under your breath the beginning of the low-energy Fear spell. A glowing purple hex script circles your chest, each word flashing white as you speak them.",
        "Suddenly, a burst of negative magical energy blasts from your core, most of it targeting the location you heard.",
        "You're rewarded with the sound of a low shriek and then a nervous gurgle, and then footsteps that make their way through the low bramble.",
        '"I wouldn\'t have thought to use a Fear spell. Interesting choice," Amadeus nods approvingly.',
      ],
      17: [
        { returnsToBranchLine: 18 },
        "You take a cautious, slow step forward. Is that another rustle you just saw? You take another step forward.",
        "You push aside the bramble, and then you see it...",
      ],
      18: [
        { returnsToBranchLine: false },
        "It's a troll! You jump back, unsheathing your blade.",
        "The troll cackles in a low gurgle, its warted chin jiggling as it looks you and Amadeus up and down.",
        '"How lucky—a wizard and his delicious-looking friend," the troll leers, pulling out its own dagger. While rusted, you don\'t want that touching you.',
        '"Be careful! They\'re more agile than they look!" Amadeus warns you.',
      ],
      19: [
        { returnsToBranchLine: 20 },
        "You hold up your sword in a parry—you prove yourself to have good instincts as the troll jumps in for a sudden jump attack.",
        "The troll screeches angrily, its face reddening as it makes jerky stab motions with its dagger.",
        "As it comes in for another lunge, you side-step it, just in time for a burst of light from your right. Amadeus cast a spell!",
        "The trolls shrieks and runs back into the bushes before you can make another move.",
      ],
      181: [
        { returnsToBranchLine: 182 },
        "You lunge forward, slicing your sword through the air. But that's all you hit—air.",
        "Before you can react, you hear the sound of a blade zipping toward you!",
      ],
      182: [
        { returnsToBranchLine: 183 },
        'A burst of flames blooms from your right, and you hear a round of angry shrieks. "Curse you, wizard!" cries the troll, hopping from leg to leg. The air smells of cooked meat.',
        "Then, the troll makes a frustrated gurgle and dashes back into the bushes from whence it came.",
        "Amadeus just saved you from the troll slicing your neck! You thank him profusely, but he has none of it.",
      ],
      183: [
        { returnsToBranchLine: 20 },
        '"No, no," Amadeus shakes his head with scorn. "Just be careful next time. Trolls are known to have a large ego and a desire to brandish their patchwork weaponry."',
        "You nod in understanding. How wise of Amadeus the Wizard!",
      ],
      20: [
        { returnsToBranchLine: 21 },
        '"Darned trolls," Amadeus murmurs, looking off in the direction of where it came from. "I just had an inkling they would bother me again."',
        'Amadeus shakes his head. "Let us press on. The clearing is not much farther."',
      ],
      21: [
        { returnsToBranchLine: 22 },
        "Together, you follow the more unkempt path through Haggard Forest, pushing aside long, black bramble that jump into your vision at most inopportune times.",
        "Up ahead, you begin to see the first hints of a clearing.",
      ],
      22: [
        { returnsToBranchLine: 221 },
        "The oppressive grays and browns eventually open up to lighter skies and a slight breeze.",
        '"Good. This is the clearing." Amadeus speaks, trotting ahead of you. "Here. The lavender grows here. Do you see it?"',
      ],
      221: [
        { returnsToBranchLine: 23 },
        "Amadeus nudges a patch of hay-like grasses in front of you. You crouch down, and to your surprise, you see hints of purple flowers amongst the long grasses.",
        '"Hard to spot for a non-feline," Amadeus says. "Luckily, it is easier for our kind. Go on, now."',
        "You nod and pick up a handful of lavender flowers.",
        '"Good. Let\'s head back, now, and get out of here unscathed." You place the lavender flowers into your pants pocket and follow Amadeus the Wizard out of the Haggard Forest.',
      ],

      23: [
        { returnsToBranchLine: 24 },
        "Next on your journey is to visit the wild Wyvern by the coast.",
        "The trail to the Lair of Lyria the Wyvern is rocky, following the side of a cliff on the side of the ocean.",
        '"The Wyvern laid her nest here, because of its extraordinary vantage point," Amadeus explains, walking alongside you and nimbly avoiding any slippery or unstable rocks.',
        '"We must try to avoid waking her. She does not take kindly to visitors of any sort."',
      ],
      24: [
        { returnsToBranchLine: 25 },
        "As you continue up the cliff, the wind begins to buffet you more, threatening to blow you away unless you hunker down.",
        "Then, as you round the side of a rocky craig outcropping, you see it: a dark, caverous opening in the side of the cliff.",
        '"That\'s it." Amadeus remarks quietly. "Let us be careful."',
      ],
      25: [
        { returnsToBranchLine: 26 },
        "You're swallowed by the maw of inky blackness as you enter the cave. Despite the hurricane-like winds outside, as you saunter in deeper and deeper, the air becomes humid and heavy.",
        '"Let me provide us some light," Amadeus says, and murmurs a quick Light spell.',
      ],
      26: [
        { returnsToBranchLine: 27 },
        "The rocky intricacies are suddenly exposed before you in their ancient glory. Gray and blueish outcroppings texture the surfaces of all of the cave. You see dark puddles that hide their depths spotted throughout the path before you.",
        "Yet, perhaps worst of all, you see jagged claw marks etched into the surfaces of the walls. They must be as long as humans are tall.",
        '"The Wyvern is deeper in," Amadeus warns, voice barely above a whisper. "Stay quiet." He then casts a quick Stealth spell over the two of you. "Wyverns should not be able to hear the sound of my pawsteps, but she will likely hear yours. This should hinder her ability to hear us."',
      ],
      27: [
        { returnsToBranchLine: 28 },
        "As the two of you stalk into the cave, you think you hear the beginnings of a deep, rhythmic noise echoing through the cave.",
        "Every step you take carefully, watching your step to look out for possible creatures of magic and Wyvern traps.",
        "The sound progressively gets louder, and the air more heavy as you both saunter forwards.",
      ],
      28: [
        { returnsToBranchLine: 29 },
        "And then, that's when you see it: a pile of treasure, sparkling gold and sapphire and emerald!",
        "Before you can get ahead of yourself, though, you see an unwelcome tail wrapping around the front of the pile. As your eyes trail up it, you find yourself gazing upon an enormous Wyvern, sleeping atop her precious pile of jewels.",
        "You then realize that the rhythmic noise you've been hearing has been the sound of the Wyvern breathing soundly in her sleep.",
      ],
      29: [
        { returnsToBranchLine: false },
        "You exchange looks with Amadeus, who gives you a knowing, yet cautious look.",
        "What do you do next?",
      ],
      291: [
        { returnsToBranchLine: 292 },
        "You slowly unsheathe your weapon, taking care to prevent it from making any noise. ",
        "You tiptoe forward, taking care to not step on any animals or surprises.",
      ],
      292: [
        { returnsToBranchLine: 31 },
        "Your eyes scour the pile for the aforementioned 'Forbidden Egg', but you don't see it.",
        "You look back at Amadeus, shaking your head and gesturing to convey that you can't find it.",
        "Suddenly, you hear a deep-timbered, dissatisfied huff, and the sound of shifting legs on the pile of treasure.",
      ],
      30: [
        { returnsToBranchLine: 31 },
        "You tiptoe forward, trying to make as little noise as possible. You settle a hand over your belt, which has a habit of clanking.",
        "Before you can react, a salamander runs over your foot! You let out an unexpected yelp.",
        "And then, you hear it: a deep-timbered, dissatisfied huff, and the sound of shifting legs on the pile of treasure.",
      ],
      31: [
        { returnsToBranchLine: 32 },
        "A pair of glimmering sandy eyes snap open, and you hear another exhale of wind from previously-unopened nostrils.",
        "As the Wyvern raises its head above its pile of treasure, you see it: the Forbidden Egg!",
        '"Wizard..." Lyria rumbles in a deep voice that vibrates the air around you, her gaze locked on Amadeus. "Why do you disturb my sleep so? I didn\'t take you for such a reckless fool."',
      ],
      32: [
        { returnsToBranchLine: false },
        "Amadeus says nothing, staring down the Wyvern.",
        '"And you? Who are you?" the Wyvern asks, glaring at you. "Treasure, treasure...that is all you puny creatures yearn for."',
      ],
      33: [
        { returnsToBranchLine: 341 },
        "You tell the Wyvern the truth: you are here for your treasure.",
        '"Pompous fool," the Wyvern growls. "You think just because you are honest, you\'ll get what you desire? How pathetic."',
      ],

      34: [
        { returnsToBranchLine: 341 },
        "You lie, coming up with a quick excuse: you were simply exploring an unknown cave.",
        '"You think I would believe such a lie?" The Wyvern raises its chin, scowling at you. "How utterly foolish. Why would such a measly exploration warrant a wizard accompaniment then, hm?"',
      ],
      341: [
        { returnsToBranchLine: 342 },
        "The Wyvern then stands atop its hind legs, scrutinizing you from up close.",
        '"Now, tell me, pathetic piece of walking flesh..." the Wyvern snarls. "Answer this question, and perhaps I will give you what you seek. Otherwise, you\'ll be my treat."',
      ],
      342: [
        { returnsToBranchLine: false },
        "The Wyvern stares curiously at you for a moment, and then starts.",
        '"A goat\'s body he wears, yet a man\'s head he bears," the Wyvern begins. "Yet in spite of such silly wear, he dares to guide travelers in good fare!"',
      ],
      343: [
        { returnsToBranchLine: 38 },
        '"Good, GOOD!" the Wyvern cries, whipping its tail in joy. "A smart one who deserves something in reward. Oh, I tell you, not many get that correct. I shall give you a reward! Choose, choose!"',
        "At the sudden shift in temperament, you look back at Amadeus, who gives you a wary nod.",
        "You look back to the Wyvern. You ask for the Forbidden Egg.",
        "The Wyvern lets out a pleased sigh.",
        '"Ah, my favorite find," the Wyvern sings. "A traveler with good taste- and a sharp mind." She grabs the Egg with her winged talons, and offers it to you.',
        '"I will warn you, traveler. If you cross me again, I will not be so generous or kind. Do not disturb my sleep again."',
        "You nod in agreement, and bow to thank her. Then, you and Amadeus turn back the way you came, out of the cave, headed back to his house.",
      ],
      344: [
        { returnsToBranchLine: 37 },
        '"FOOL!", the Wyvern screeches, standing on its hind legs. "YOU GOT IT WRONG!" The Wyvern howls, and swipes its wings in an arc overhead. It\'s going to attack!',
        "You take a step back, and look to Amadeus. He grimaces, and quickly casts a spell that blocks the Wyvern's swipe attack. She yowls and tries again, to no avail.",
        "Quickly, before the Wyvern can prepare another swipe, you lunge at the egg, grabbing it from right beneath her. She snarls in response, and you barely jump out of the way of another vicious attack.",
      ],
      35: [
        { returnsToBranchLine: 37 },
        "You jump at the Egg! Feeling your agile claws wrap around the Forbidden Egg, you lurch backwards to avoid a fast and lethal wing swipe from the Wyvern.",
        '"FOOL!", the Wyvern screeches, standing on its hind legs. "HOW DARE YOU!"',
      ],
      36: [
        { returnsToBranchLine: 37 },
        "You cast a high-cost Invisibility spell! Immediately, you and Amadeus are cast into the shadows of the cave.",
        '"COWARDS!" the Wyvern screeches, standing on its hind legs. "WHERE ARE YOU?!',
        "You throw a rock at the opposite wall, and the Wyvern lunges at the direction of the sound. You dash for the Forbidden Egg atop her treasure pile and tuck it into your pocket. It is hidden alongside your spell, now.",
        '"COME OUT, MORSEL!" the Wyvern continues to wail. "I CAN SMELL YOU!"',
      ],
      37: [
        { returnsToBranchLine: 38 },
        'Amadeus is quick to cast a spell to shield the both of you. "Quick! We must escape! She won\'t dare to leave her lair while she has a young one."',
        "You quickly look at her belly and notice it does appear larger than other dragons' you've seen. But there's no time to comment on it—the two of you start a mad dash out of the cave!",
        "You hear vicious howls from behind you, but you don't stop. Your feet slam into the muddy ground alongside Amadeus' feline sprint, the iron of your bootsoles slapping throughout caves.",
        "A burst of hot flame singes your back, but you dare not turn to investigate.",
        "The wyvern shrieks like a banshee from within the cave, but you don't hear the flapping of wings indicating she's following you.",
      ],
      38: [
        { returnsToBranchLine: 39 },
        "Once you've made it past the outer lip of the cave again, you realized what you've done: you've acquired the second part of the cure!",
        '"We\'ve done it, Amadeus!" you cry in satisfaction. Amadeus nods. "Yes, we have won today. But let us return home before we celebrate our victory too early."',
      ],
      39: [
        { returnsToBranchLine: 40 },
        "When the two of you arrive back at Amadeus' home, you're both fatigued and exhausted.",
        '"While I do realize we are both tired, curing your ailment is of utmost import," Amadeus remarks. You set down the Forbidden Egg and the lavender on his workstation. "Here, this will be quick."',
      ],
      40: [
        { returnsToBranchLine: 41 },
        "Before you know it, Amadeus has concocted you a brew in a small clay pot.",
        '"If you drink this all, it will surely melt away your curse. And then you will flow alongside us in the river of time."',
        "You nod appreciatively and take the drink from him.",
        "You gulp it down in a few swallows: it tastes earthy, like chamomile and sage, with a hint of lavender.",
      ],
      41: [
        { returnsToBranchLine: 42 },
        "A faint pink aura  begins to surround your body. It begins from your fingertips, then closes in on your chest.",
        '"Let it do its thing," Amadeus comments. "It is curing you. Oh!"',
        '"It is your 24th birthday! Happy birthday!"',
        'Amadeus looks at you with a soft smile. "Happy birthday, Gregory!" He says. You hear another ethereal voice from above you: it\'s from the developer of this mini-game! "Happy birthday! Love, Emma!"',
      ],
      42: [
        { returnsToBranchLine: false },
        "HAPPY BIRTHDAY!",
        "HAPPY BIRTHDAY!",
        "HAPPY BIRTHDAY!",
      ],
    },
  };

  function moveLineIndexByOne() {
    // Diverging branch
    if (!playerChoices[sceneNumber][sceneBranchNumber][0].returnsToBranchLine) {
      // There will be a choice next turn
      if (
        sceneBranchLineNumber ===
        playerChoices[sceneNumber][sceneBranchNumber].length - 3
      ) {
        setIsChoiceBranch(true);
        setSceneBranchLineNumber(
          (sceneBranchLineNumber) => sceneBranchLineNumber + 1
        );
        // Just move to next line
      } else {
        setSceneBranchLineNumber(
          (sceneBranchLineNumber) => sceneBranchLineNumber + 1
        );
      }
      // Converging branch
    } else {
      // There will be a convergence next turn (end of this scene branch)
      if (
        sceneBranchLineNumber ===
        playerChoices[sceneNumber][sceneBranchNumber].length - 2
      ) {
        setSceneBranchNumber(
          (sceneBranchNumber) =>
            playerChoices[sceneNumber][sceneBranchNumber][0].returnsToBranchLine
        );

        // handleStorage();

        setSceneBranchLineNumber(0);
        // Just move to next line
      } else {
        setSceneBranchLineNumber(
          (sceneBranchLineNumber) => sceneBranchLineNumber + 1
        );
      }
    }
  }
  function moveLineIndexBackByOne() {
    if (
      sceneBranchLineNumber > 0 &&
      sceneBranchLineNumber <
        playerChoices[sceneNumber][sceneBranchNumber].length - 2
    ) {
      setSceneBranchLineNumber(
        (sceneBranchLineNumber) => sceneBranchLineNumber - 1
      );
    } else if (
      sceneBranchLineNumber ==
      playerChoices[sceneNumber][sceneBranchNumber].length - 2
    ) {
      setSceneBranchLineNumber(
        (sceneBranchLineNumber) => sceneBranchLineNumber - 1
      );
      setIsChoiceBranch(false);
    }
  }

  function updateInputValue(e) {
    const val = e.target.value;
    // ...
    setInputValue(val);
  }

  useEffect(() => {
    if (localStorage.length !== 0) {
      // setStorage();
      // setPlayerAttributeStorage();
    }
  }, []);

  useEffect(() => {
    if (optionNumber === 42) {
    }
    if (optionNumber === 5) {
      setPlayerAttribute("catwarrior");
      // handlePlayerAttributeStorage();
      console.log(playerAttribute);
    } else if (optionNumber === 6) {
      setPlayerAttribute("druidmaster");
      // handlePlayerAttributeStorage();
      console.log(playerAttribute);
    }
    if (optionNumber > 0) {
      setIsChoiceBranch(false);
      setSceneBranchLineNumber(0);
      setSceneBranchNumber(optionNumber);

      // handleStorage();
      setOptionNumber(-1);
    }
  }, [optionNumber]);

  return (
    <div>
      <div className="page-buttons-container">
        {sceneBranchLineNumber !== 0 && (
          <button
            className="move-page-buttons"
            onClick={moveLineIndexBackByOne}
          >
            Back
          </button>
        )}
        {!isChoiceBranch && (
          <button className="move-page-buttons" onClick={moveLineIndexByOne}>
            Next
          </button>
        )}
      </div>
      <div className="text-box margin-top-2">
        {
          playerChoices[sceneNumber][sceneBranchNumber][
            sceneBranchLineNumber + 1
          ]
        }
        {isChoiceBranch && (
          <PlayerChoiceBoxes
            optionNumber={optionNumber}
            setOptionNumber={setOptionNumber}
            sceneNumber={sceneNumber}
            setSceneNumber={setSceneNumber}
            sceneBranchNumber={sceneBranchNumber}
            moveLineIndexByOne={moveLineIndexByOne}
            isChoiceBranch={isChoiceBranch}
            playerChoicesObjectId={playerChoicesObjectId}
            setPlayerChoicesObjectId={setPlayerChoicesObjectId}
            playerAttribute={playerAttribute}
            setPlayerAttribute={setPlayerAttribute}
          />
        )}

        {/* {
          <form>
            <label>
              Your Name:
              <input
                type="text"
                value={inputValue}
                onChange={(e) => updateInputValue(e)}
              />
            </label>
          </form>
        } */}
        {/* <div>option number: {optionNumber}</div> */}
        {/* 
        <MoveToNextLineIndex
          moveLineIndexByOne={moveLineIndexByOne}
          setIsChoiceBranch={setIsChoiceBranch}
        /> */}
      </div>
      {/* <button className="move-page-buttons" onClick={clearLocalStorage}>
        Reset Game State
      </button> */}
    </div>
  );
};

export default TextBox;
