import { useState } from 'react'
import PlayerCard from './components/PlayerCard'
import ResultDisplay from './components/ResultDisplay'
import './App.css'

const App = () => {
  const [playerOVRs, setPlayerOVRs] = useState({
    st: '',
    lw: '',
    rw: '',
    cm1: '',
    cm2: '',
    cm3: '',
    lb: '',
    cb1: '',
    cb2: '',
    rb: '',
    gk: ''
  })

  const [result, setResult] = useState(null)

  const players = [
    { id: 'st', position: 'ST', label: 'Striker', type: 'attacker' },
    { id: 'lw', position: 'LW', label: 'Left Winger', type: 'attacker' },
    { id: 'rw', position: 'RW', label: 'Right Winger', type: 'attacker' },
    { id: 'cm1', position: 'CM', label: 'Central Midfielder 1', type: 'midfielder' },
    { id: 'cm2', position: 'CM', label: 'Central Midfielder 2', type: 'midfielder' },
    { id: 'cm3', position: 'CDM', label: 'Defensive Midfielder', type: 'midfielder' },
    { id: 'lb', position: 'LB', label: 'Left Back', type: 'defender' },
    { id: 'cb1', position: 'CB', label: 'Center Back 1', type: 'defender' },
    { id: 'cb2', position: 'CB', label: 'Center Back 2', type: 'defender' },
    { id: 'rb', position: 'RB', label: 'Right Back', type: 'defender' },
    { id: 'gk', position: 'GK', label: 'Goalkeeper', type: 'goalkeeper' }
  ]

  const handleInputChange = (id, value) => {
    setPlayerOVRs(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const calculateOVR = () => {
    const values = Object.values(playerOVRs)
      .map(val => parseInt(val, 10))
      .filter(val => !isNaN(val))

    if (values.length === 0) {
      setResult({
        error: true,
        message: 'Enter at least one player OVR'
      })
      return
    }

    const total = values.reduce((sum, val) => sum + val, 0)
    const average = total / values.length
    const finalOVR = Math.round(average + 0.6)

    setResult({
      error: false,
      ovr: finalOVR,
      playersCount: values.length
    })
  }

  const resetCalculator = () => {
    setPlayerOVRs({
      st: '',
      lw: '',
      rw: '',
      cm1: '',
      cm2: '',
      cm3: '',
      lb: '',
      cb1: '',
      cb2: '',
      rb: '',
      gk: ''
    })
    setResult(null)
  }

  return (
    <div className="app-container">
      <div className="header">
        <h1>⚽ FC OVR Calculator</h1>
        <p>4-3-3 Formation</p>
      </div>

      <div className="calculator-container">
        <div className="players-grid">
          {players.map(player => (
            <PlayerCard
              key={player.id}
              id={player.id}
              position={player.position}
              label={player.label}
              type={player.type}
              value={playerOVRs[player.id]}
              onChange={(value) => handleInputChange(player.id, value)}
            />
          ))}
        </div>

        <div className="button-group">
          <button className="btn btn-primary" onClick={calculateOVR}>
            Calculate OVR
          </button>
          <button className="btn btn-secondary" onClick={resetCalculator}>
            Reset
          </button>
        </div>

        {result && (
          <ResultDisplay
            ovr={result.ovr}
            playersCount={result.playersCount}
            error={result.error}
            message={result.message}
          />
        )}
      </div>
    </div>
  )
}

export default App
