

import React from 'react';
import classNames from 'classnames';



function Checkbox({clickOnCheckBox, title, value, name}) {

  
  return (
    <label>
    <input
      onClick = {clickOnCheckBox}
      name={name}
      checked= {value}
      type="checkbox"
    />
    {title}
   </label>
  );
}

export default Checkbox;


