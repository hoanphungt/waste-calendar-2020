import React from 'react';
import Month from './Month';
import Info from './Info';
import { year2020 } from './data';

export default function WasteCalendar() {
  const months = Object.values(year2020);
  return (
    <div className={'WasteCalendar'}>
      <h2>Waste Calendar</h2>
      <div className={'Calendar'}>
        {months.map((month, i) => (
          <div key={i}>
            <Month month={month} />
          </div>
        ))}
      </div>
      <Info />
    </div>
  );
};