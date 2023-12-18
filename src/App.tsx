import { useState } from 'react'
import { nanoid } from 'nanoid'
import type DieT from './die.type'
import Die from './Die'


function App() {

  const [dice, setDice] = useState<DieT[]>(allNewDice())



  const diceElemets = dice.map(die => <Die {...die} key={die.id}/>)

  function allNewDice() {
    const newDiceArr = []

    for (let i = 0; i < 5; i++) {
      newDiceArr.push(createDie())
    }

    return newDiceArr
  }


  function createDie(): DieT {
    const value = Math.ceil(Math.random() * 6)

    return {
      value: value,
      id: nanoid(),
      isHeld: false
    }
  }


  return (
    <>
      <main>
          {diceElemets}
      </main>
    </>
  )
}

export default App
