import { useState } from 'react'
import { nanoid } from 'nanoid'
import type DieT from './die.type'
import Die from './Die'


function App() {

  const [dice, setDice] = useState<DieT[]>(allNewDice())



  const diceElemets = dice.map(die => <Die {...die} key={die.id} hold={() => holdDie(die.id)}/>)

  function allNewDice() {
    const newDiceArr = []

    for (let i = 0; i < 5; i++) {
      newDiceArr.push(createDie())
    }

    return newDiceArr
  }

  function holdDie(id: string) {
    setDice(prevDice => prevDice.map(die => die.id === id ? {...die, isHeld: !die.isHeld} : die))
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
      <main>
        <div className='dice-container'>
          {diceElemets}
        </div>
        <button onClick={rollDice} className='roll-dice'>Roll</button>
      </main>
    </>
  )
}

export default App
