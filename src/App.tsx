import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'

import getCombinations from './shared/getCombinations'
import type DieT from './shared/die.type'
import Die from './components/Die'
import Combinations from './components/Combinations'
import { comboState } from './shared/comboState.enum'


function App() {

  const [dice, setDice] = useState<DieT[]>(allNewDice())
  const [combinations, setCombinations] = useState(getCombinations())


  const diceElements = dice.map(die => <Die {...die} key={die.id} hold={() => holdDie(die.id)} />)



  const mandatoryCombinationsElements = combinations.mandatory.map(item => <Combinations key={item.id} combo={item.combo} comboState={item.comboState} isSelected={item.selected} select={() => {selectCombo(item.id)}} />)
  const extraCombinationsElements = Object.keys(combinations.extra).map(key => <Combinations key={key} combo={key} comboState={combinations.extra[key as keyof typeof combinations.extra]} isSelected={false} select={() => {selectCombo(key)}} />)

  function allNewDice() {
    const newDiceArr = []

    for (let i = 0; i < 5; i++) {
      newDiceArr.push(createDie())
    }

    return newDiceArr
  }

  function holdDie(id: string) {
    setDice(prevDice => prevDice.map(die => die.id === id ? { ...die, isHeld: !die.isHeld } : die))
  }


  function createDie(): DieT {
    const value = Math.ceil(Math.random() * 6)

    return {
      value: value,
      id: nanoid(),
      isHeld: false
    }
  }

  function rollDice() {
    setDice(prevDice => prevDice.map(die => die.isHeld ? die : createDie()))
  }


  useEffect(() => {
    const currentMandatoryCombo = combinations.mandatory.find(checkForMandatoryCombination)

    if (currentMandatoryCombo) {

      setCombinations(prevCombo => {

        const newMandatoryCombo = prevCombo.mandatory.map(combo => (
          currentMandatoryCombo.id === combo.id ?
            { ...combo, comboState: comboState.CanBeUsed }
            : (combo.comboState === comboState.CanBeUsed ?
              { ...combo, comboState: comboState.NotUsed } : combo)))

        return {
          ...prevCombo,
          mandatory: newMandatoryCombo
        }

      }

      )
    }
    else {
      setCombinations(prevCombo => {

        const newMandatoryArray = prevCombo.mandatory.map(combo => combo.comboState === comboState.CanBeUsed ? {...combo, comboState: comboState.NotUsed} : combo)
        
        return {
          ...prevCombo, 
          mandatory: newMandatoryArray
        }
      })
    }

  }, [dice.map(die => die.value).join(',')])


  function checkForMandatoryCombination(condition: object, index: number): boolean | undefined {

    const value = index + 1

    return dice.filter(die => die.value === value).length >= 3

  }

  function selectCombo(id: string) {
    console.log(id)
  }


  return (
    <>
      <div className='container'>
        <div className='card'>

          <h1 className='title'>General</h1>

          <p className="instructions">Roll until you get a combo. <br />
            Click each die to freeze it at its current value between rolls.</p>

          <div className='dice-container'>
            {diceElements}
          </div>

          <button onClick={rollDice} className='roll-dice'>Roll</button>
        </div>

        <div className='card'>
          <h4 className='title'>Mandatory</h4>
          <div className='combo-container'>
            {mandatoryCombinationsElements}
          </div>
          <hr />
          <h4 className='title'>Extra Combos</h4>
          <div className='combo-container'>
            {extraCombinationsElements}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
