

import React from 'react';
import classNames from 'classnames';



function Checkbox({onChange, title, value, name}) {

  
  return (
    <label>
    <input
      onChange = {onChange}
      name={name}
      checked= {value}
      type="checkbox"
    />
    {title}
   </label>
  );
}

export default Checkbox;


