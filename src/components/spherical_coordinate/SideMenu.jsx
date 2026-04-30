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
  const xCoordinate = isSphericalMode
    ? radius * Math.cos(theta) * Math.cos(phi)
    : radius * Math.cos(phi);
  const yCoordinate = isSphericalMode ? radius * Math.sin(theta) : z;
  const zCoordinate = isSphericalMode
    ? radius * Math.cos(theta) * Math.sin(phi)
    : radius * Math.sin(phi);

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

      <div className="slider-group">
        <div className="slider-label-row">
          <span>Radius</span>
          <span>{radius.toFixed(2)}</span>
        </div>
        <input
          className="modern-slider"
          type="range"
          min="0.5"
          max="5"
          step="0.01"
          value={radius}
          onChange={(e) => setRadius(parseFloat(e.target.value))}
        />
      </div>

      {isSphericalMode ? (
        <div className="slider-group">
          <div className="slider-label-row">
            <span>Theta</span>
            <span>{theta.toFixed(3)}</span>
          </div>
          <input
            className="modern-slider"
            type="range"
            min="-3.1415"
            max="3.1415"
            step="0.001"
            value={theta}
            onChange={(e) => setTheta(parseFloat(e.target.value))}
          />
        </div>
      ) : (
        <div className="slider-group">
          <div className="slider-label-row">
            <span>Z-axis</span>
            <span>{z.toFixed(2)}</span>
          </div>
          <input
            className="modern-slider"
            type="range"
            min="-5"
            max="5"
            step="0.01"
            value={z}
            onChange={(e) => setZ(parseFloat(e.target.value))}
          />
        </div>
      )}

      <div className="slider-group">
        <div className="slider-label-row">
          <span>Phi</span>
          <span>{phi.toFixed(3)}</span>
        </div>
        <input
          className="modern-slider"
          type="range"
          min="-3.1415"
          max="3.1415"
          step="0.001"
          value={phi}
          onChange={(e) => setPhi(parseFloat(e.target.value))}
        />
      </div>

      <div className="cartesian-panel">
        <div className="cartesian-title">Cartesian Coordinate</div>
        <div className="coordinate-grid">
          <div className="coordinate-box">
            <div className="coordinate-key">x</div>
            <div className="coordinate-value">{xCoordinate.toFixed(3)}</div>
          </div>
          <div className="coordinate-box">
            <div className="coordinate-key">y</div>
            <div className="coordinate-value">{yCoordinate.toFixed(3)}</div>
          </div>
          <div className="coordinate-box">
            <div className="coordinate-key">z</div>
            <div className="coordinate-value">{zCoordinate.toFixed(3)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}