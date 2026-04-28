export default function SideMenu({ 
  isSphericalMode, 
  setIsSphericalMode,
  radius,
  setRadius,
  theta,
  setTheta,
  phi,
  setPhi
}) {
  return (
    <div className="sidemenu">
      <div className="sidemenu-title">좌표계</div>

      <button
        className={`mode-btn ${isSphericalMode ? "active" : ""}`}
        onClick={() => setIsSphericalMode(true)}
      >
        구면 좌표계
      </button>

      <button
        className={`mode-btn ${!isSphericalMode ? "active" : ""}`}
        onClick={() => setIsSphericalMode(false)}
      >
        원통 좌표계
      </button>


        {/* Radius */}
      <div style={{ marginTop: "20px" }}>
        <div>Radius: {radius.toFixed(1)}</div>
        <input
          type="range"
          min="0.5"
        style={{ width: "70%" }}

          max="5"
          step="0.01"
          value={radius}
          onChange={(e) => setRadius(parseFloat(e.target.value))}
        />
      </div>


        {/* Theta */}
      <div style={{ marginTop: "20px" }}>
        <div>Theta: {theta.toFixed(1)}</div>
        <input
          type="range"
        style={{ width: "70%" }}
          min="-1.5707"
          max="1.5707"
          step="0.001"
          value={theta}
          onChange={(e) => setTheta(parseFloat(e.target.value))}
        />
      </div>

        {/* Phi */}
      <div style={{ marginTop: "20px" }}>
        <div>Phi: {phi.toFixed(1)}</div>
        <input
          type="range"
        style={{ width: "70%" }}
          min="-3.1415"
          max="3.1415"
          step="0.001"
          value={phi}
          onChange={(e) => setPhi(parseFloat(e.target.value))}
        />
      </div>
    </div>
  );
}
