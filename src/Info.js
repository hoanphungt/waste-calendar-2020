import React from 'react';

export default function Info(props) {
  return (
    <div className={'info'}>
      <span className={'waste plastic'} />&nbsp;Plastic
      &nbsp;&nbsp;
      <span className={'waste paper'} />&nbsp;Paper
      &nbsp;&nbsp;
      <span className={'waste food'} />&nbsp;Food
      &nbsp;&nbsp;
      <span>Note: In summer, food waste is collected everyweek.</span>
    </div>
  )
}