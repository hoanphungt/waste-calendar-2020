import React from 'react';
import Month from './Month';
import { year2020 } from './data';

export default function WasteCalendar() {
  const {
    january,
    february,
    march
  } = year2020;
  return (
    <div className={'WasteCalendar'}>
      <h2>Waste Calendar</h2>
      <div>
        <h3>January 2020</h3>
        <Month month={january} />
      </div>
      <div>
        <h3>February 2020</h3>
        <Month month={february} />
      </div>
      <div>
        <h3>March 2020</h3>
        <Month month={march} />
      </div>
      <div className={'info'}>
        <span className={'info-plastic'} />: Plastic
        &nbsp;&nbsp;
        <span className={'info-paper'} />: Paper
        &nbsp;&nbsp;
        <span className={'info-food'} />: Food
      </div>
    </div>
  );
};