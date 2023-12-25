import { useState } from 'react'
import { nanoid } from 'nanoid'

import getCombinations from './getCombinations'
import type DieT from './die.type'
import Die from './components/Die'
import Combinations from './components/Combinations'


function App() {

  const [dice, setDice] = useState<DieT[]>(allNewDice())
  const [combinations, setCombinations] = useState(getCombinations())


  const diceElements = dice.map(die => <Die {...die} key={die.id} hold={() => holdDie(die.id)} />)

  const mandatoryCombinationsElements = Object.keys(combinations.mandatory).map(key => <Combinations key={key} combo={key} />)
  const extraCombinationsElements = Object.keys(combinations.extra).map(key => <Combinations key={key} combo={key} />)

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
