import { comboState } from "./comboState.enum";
import { nanoid } from 'nanoid'

export default function getCombinations() {
    return {
        mandatory: [
            {combo: "setOfOne", comboState: comboState.NotUsed, isSelected: false, id: nanoid()},
            {combo: "setOfTwo", comboState: comboState.NotUsed, isSelected: false, id: nanoid()},
            {combo: "setOfThree", comboState: comboState.NotUsed, isSelected: false, id: nanoid()},
            {combo: "setOfFour", comboState: comboState.NotUsed, isSelected: false, id: nanoid()},
            {combo: "setOfFive", comboState: comboState.NotUsed, isSelected: false, id: nanoid()},
            {combo: "setOfSix", comboState: comboState.NotUsed, isSelected: false, id: nanoid()}
        ],
        extra: 
        [
            {combo: "pair", comboState: comboState.NotUsed, isSelected: false, id: nanoid()},
            {combo: "threeOfAKind", comboState: comboState.NotUsed, isSelected: false, id: nanoid()},
            {combo: "fourOfAKind", comboState: comboState.NotUsed, isSelected: false, id: nanoid()},
            {combo: "twoPlusTwo", comboState: comboState.NotUsed, isSelected: false, id: nanoid()},
            {combo: "twoPlusThree", comboState: comboState.NotUsed, isSelected: false, id: nanoid()},
            {combo: "oneToFive", comboState: comboState.NotUsed, isSelected: false, id: nanoid()},
            {combo: "twoToSix", comboState: comboState.NotUsed, isSelected: false, id: nanoid()},
            {combo: "odd", comboState: comboState.NotUsed, isSelected: false, id: nanoid()},
            {combo: "even", comboState: comboState.NotUsed, isSelected: false, id: nanoid()},
            {combo: "chance", comboState: comboState.NotUsed, isSelected: false, id: nanoid()},
            {combo: "general", comboState: comboState.NotUsed, isSelected: false, id: nanoid()},


        ]
    }
}