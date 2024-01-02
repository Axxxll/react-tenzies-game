import { comboState } from "./comboState.enum";
import { nanoid } from 'nanoid'

export default function getCombinations() {
    return {
        mandatory: [
            {combo: "setOfOne", comboState: comboState.NotUsed, selected: false, id: nanoid()},
            {combo: "setOfTwo", comboState: comboState.NotUsed, selected: false, id: nanoid()},
            {combo: "setOfThree", comboState: comboState.NotUsed, selected: false, id: nanoid()},
            {combo: "setOfFour", comboState: comboState.NotUsed, selected: false, id: nanoid()},
            {combo: "setOfFive", comboState: comboState.NotUsed, selected: false, id: nanoid()},
            {combo: "setOfSix", comboState: comboState.NotUsed, selected: false, id: nanoid()}
        ],
        extra: {
            pair: comboState.NotUsed,
            threeOfAKind: comboState.NotUsed,
            fourOfAKind: comboState.NotUsed,
            twoPlusTwo: comboState.NotUsed,
            towPlusThree: comboState.NotUsed,
            oneToFive: comboState.NotUsed,
            twoToSix: comboState.NotUsed,
            odd: comboState.NotUsed,
            even: comboState.NotUsed,
            chance: comboState.NotUsed,
            general: comboState.NotUsed
        }
    }
}