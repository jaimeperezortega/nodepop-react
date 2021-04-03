

import React from 'react';
import classNames from 'classnames';



function Checkbox({clickOnCheckBox, title, value}) {

  
  return (
    <label>
    <input
      onClick = {clickOnCheckBox}
      name="example_1"
      value= {false}
      type="checkbox"
    />
    {title}
   </label>
  );
}

export default Checkbox;


