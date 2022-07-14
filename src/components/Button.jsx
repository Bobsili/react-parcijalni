import React, { useState } from 'react';


export function Button(props) {
  return (
    <>
      <button onClick={props.onClick} type='submit'>GO!</button>
    </>
  );
}
