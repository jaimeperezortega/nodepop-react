

import React from 'react';
import classNames from 'classnames';



function Checkbox({clickOnCheckBox}) {

  
  return (
    <label>
    <input
      onClick = {clickOnCheckBox}
      name="example_1"
      value={true}
      type="checkbox"
    />
    Recuerdame
   </label>
  );
}

export default Checkbox;


