import './ResultDisplay.css'

const ResultDisplay = ({ ovr, playersCount, error, message }) => {
  if (error) {
    return (
      <div className="result-container error">
        <p className="error-message">⚠️ {message}</p>
      </div>
    )
  }

  return (
    <div className="result-container success">
      <div className="result-content">
        <div className="result-label">Team OVR</div>
        <div className="result-value">{ovr}</div>
        <div className="result-info">{playersCount} player{playersCount !== 1 ? 's' : ''} evaluated</div>
      </div>
    </div>
  )
}

export default ResultDisplay
