import { comboState } from "./comboState.enum";

export default function getCombinations() {
    return {
        mandatory: {
            setOfOne: comboState.CanBeUsed,
            setOfTwo: comboState.Scrached,
            setOfThree: comboState.Used,
            setOfFour: comboState.NotUsed,
            setOfFive: comboState.NotUsed,
            setOfSix: comboState.NotUsed
        },
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
            general: comboState.Scrached
        }
    }
}