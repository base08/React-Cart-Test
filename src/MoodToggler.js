import React, { useState } from "react";

function MoodToggler() {
  const [isHappy, setIsHappy] = useState(true);
  const toggleMood = () => setIsHappy(!isHappy);
  const styles = { color: isHappy ? "#00FF00" : "#FF0000" };
  return (
    <div>
      <h1 id="smile" style={styles}>
        {isHappy ? ":)" : ":("}
      </h1>
      <button onClick={toggleMood}>Toggle</button>
    </div>
  );
}

export default MoodToggler;
