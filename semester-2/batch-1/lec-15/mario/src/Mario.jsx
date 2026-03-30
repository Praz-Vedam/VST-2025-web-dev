import React, { useState, useEffect } from 'react';
import './Mario.css';

const SuperMario = () => {
  // 🎮 
  const [coins, setCoins] = useState(0);
  const [hasMushroom, setHasMushroom] = useState(false);

  useEffect(() => {
    if (coins > 0) {
      console.log("🗣️ *Coin Get!* (Total: " + coins + ")");
    }
  }, [coins]);

  useEffect(() => {
    if (hasMushroom) {
      console.log("🍄 *Here we go!* Mario grew bigger!");
      
      const timer = setTimeout(() => {
        setHasMushroom(false);
        console.log("Mario shrinks back to normal");
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [hasMushroom]);

  // Handle mouse events for block animations
  const handleMouseDown = (e) => {
    e.currentTarget.style.transform = 'translateY(4px)';
  };

  const handleMouseUp = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
  };

  return (
    <div className="mario-container">
      {/* Mario-style game window */}
      <div className="game-window">
        
        {/* Mario Header with Clouds */}
        <div className="game-header">
          <span className="cloud">☁️</span>
          <h1 className="game-title">MARIO'S ADVENTURE</h1>
          <span className="cloud">☁️</span>
        </div>

        {/* Game Screen - Like an actual Mario level */}
        <div className="game-screen">
          
          {/* Ground with classic Mario stripes */}
          <div className="game-ground">
            <div className="grass-top"></div>
          </div>

          {/* Coin Display - Like Mario HUD */}
          <div className="coin-display">
            <span className="coin-label">COIN</span>
            <span className="coin-count">×{coins.toString().padStart(2, '0')}</span>
          </div>

          {/* Mario Character Display */}
          <div className="character-display">
            {hasMushroom ? (
              <div className="character-container">
                <div className="super-mario-sprite">🍄👨</div>
                <div className="super-mario-label">SUPER MARIO</div>
              </div>
            ) : (
              <div className="character-container">
                <div className="regular-mario-sprite">👨</div>
                <div className="regular-mario-label">REGULAR MARIO</div>
              </div>
            )}
          </div>

          {/* Question Blocks Row */}
          <div className="blocks-row">
            {/* Question Block 1 */}
            <div 
              onClick={() => setCoins(coins + 1)}
              className="question-block"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
            >
              <span className="question-mark">?</span>
            </div>

            {/* Question Block 2 */}
            <div 
              onClick={() => setCoins(coins + 1)}
              className="question-block"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
            >
              <span className="question-mark">?</span>
            </div>

            {/* Mushroom Block */}
            <div 
              onClick={() => !hasMushroom && setHasMushroom(true)}
              className={`mushroom-block ${hasMushroom ? 'disabled' : ''}`}
              onMouseDown={(e) => !hasMushroom && handleMouseDown(e)}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
            >
              <span className="mushroom-icon">🍄</span>
            </div>
          </div>

          {/* Reset Block (Brick style) */}
          <div className="reset-block-container">
            <div 
              onClick={() => {
                setCoins(0);
                setHasMushroom(false);
              }}
              className="brick-block"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              title="Reset Game"
            >
              <span className="reset-icon">💀</span>
            </div>
          </div>
        </div>

        {/* Mario-style Footer with Score */}
        <div className="game-footer">
          <span>WORLD 0-0</span>
          <span>⭐ x {Math.floor(coins / 10)}</span>
          <span>TIME ∞</span>
        </div>

        {/* Bonus Mario Message */}
        {coins >= 10 && (
          <div className="bonus-message">
            ⭐ SO MUCH COINS 😱! SAVE SOME FOR LUIGI NOW ⭐
          </div>
        )}
      </div>
    </div>
  );
};

export default SuperMario;