import React, {useState} from "react";


function Toggle() {
  const [isOn, setIsOn] = useState(false);
  console.log(isOn);
  
  function toggleButton(){
    setIsOn((isOn) => !isOn)
  }

  const color = isOn ? 'red': 'white';
  return <button style={{background: color}} onClick={toggleButton}>{isOn? 'ON': 'OFF'} </button>;
}

export default Toggle;
