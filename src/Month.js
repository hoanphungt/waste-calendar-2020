import React from 'react';

export default function Month(props) {
  const month = props.month;
  const weeks = Object.values(month).filter(week => Array.isArray(week));
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={7}>{month.info}</th>
        </tr>
        <tr>
          {days.map(day => (
            <th key={day}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {weeks.map((week, i) => (
          <tr key={i}>
            {week.map((date, i) => (
              <td
                key={i}
                className={
                  month.waste.plastic.includes(date) ? (
                    'waste plastic'
                  ) : (
                    month.waste.paper.includes(date) ? (
                      'waste paper'
                    ) : month.waste.food.includes(date) ? (
                      'waste food'
                    ) : null
                  )
                }
              >
                {date}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}