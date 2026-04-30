export default function SideMenu({ 
  isSphericalMode, 
  setIsSphericalMode,
  radius,
  setRadius,
  theta, // Used in Spherical
  setTheta,
  phi,
  setPhi,
  z,     // Add this for Cylindrical
  setZ   // Add this for Cylindrical
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

      {/* Radius - Always visible */}
      <div style={{ marginTop: "20px" }}>
        <div>Radius: {radius.toFixed(1)}</div>
        <input
          type="range"
          min="0.5"
          max="5"
          step="0.01"
          style={{ width: "70%" }}
          value={radius}
          onChange={(e) => setRadius(parseFloat(e.target.value))}
        />
      </div>

      {/* Conditional Sliders */}
      {isSphericalMode ? (
        /* Spherical Mode: Show Theta */
        <div style={{ marginTop: "20px" }}>
          <div>Theta: {theta.toFixed(1)}</div>
          <input
            type="range"
            min="-3.1415"
            max="3.1415"
            step="0.001"
            style={{ width: "70%" }}
            value={theta}
            onChange={(e) => setTheta(parseFloat(e.target.value))}
          />
        </div>
      ) : (
        /* Cylindrical Mode: Show Z-axis */
        <div style={{ marginTop: "20px" }}>
          <div>Z-axis: {z.toFixed(1)}</div>
          <input
            type="range"
            min="-5"
            max="5"
            step="0.01"
            style={{ width: "70%" }}
            value={z}
            onChange={(e) => setZ(parseFloat(e.target.value))}
          />
        </div>
      )}

      {/* Phi - Always visible */}
      <div style={{ marginTop: "20px" }}>
        <div>Phi: {phi.toFixed(1)}</div>
        <input
          type="range"
          min="-3.1415"
          max="3.1415"
          step="0.001"
          style={{ width: "70%" }}
          value={phi}
          onChange={(e) => setPhi(parseFloat(e.target.value))}
        />
      </div>
    </div>
  );
}