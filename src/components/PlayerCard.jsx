import './PlayerCard.css'

const PlayerCard = ({ id, position, label, type, value, onChange }) => {
  return (
    <div className={`player-card player-${type}`}>
      <div className="card-header">
        <div className="position-badge">{position}</div>
        <div className="card-label">{label}</div>
      </div>
      <input
        type="number"
        min="0"
        max="99"
        placeholder="OVR"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="ovr-input"
      />
    </div>
  )
}

export default PlayerCard
