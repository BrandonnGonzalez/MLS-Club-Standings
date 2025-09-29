import React from 'react';
import './DarkModeToggle.css';

function DarkModeToggle({ isDark, onToggle }) {
  return (
    <div className="theme-toggle-container">
      <label className="theme-toggle">
        <input
          type="checkbox"
          checked={isDark}
          onChange={onToggle}
          aria-label="Toggle dark mode"
        />
        <span className="toggle-slider">
          <span className="toggle-icon">
            {isDark ? '🌙' : '☀️'}
          </span>
        </span>
      </label>
    </div>
  );
}

export default DarkModeToggle;
