import React from 'react';

export default function Month(props) {
  const month = props.month;
  
  return (
    <table>
      <thead>
        <tr>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
          <th>Sunday</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {month.wk1.map((date, i) => (
            <td
              key={i}
              className={
                month.waste.plastic.includes(date) ? (
                  'plastic'
                ) : (
                  month.waste.food.includes(date) ? (
                    'food'
                  ) : month.waste.paper.includes(date) ? (
                    'paper'
                  ) : null
                )
              }
            >
              {date}
            </td>
          ))}
        </tr>
        <tr>
          {month.wk2.map((date, i) => (
            <td
              key={i}
              className={
                month.waste.plastic.includes(date) ? (
                  'plastic'
                ) : (
                  month.waste.food.includes(date) ? (
                    'food'
                  ) : month.waste.paper.includes(date) ? (
                    'paper'
                  ) : null
                )
              }
            >
              {date}
            </td>
          ))}
        </tr>
        <tr>
          {month.wk3.map((date, i) => (
            <td
              key={i}
              className={
                month.waste.plastic.includes(date) ? (
                  'plastic'
                ) : (
                  month.waste.food.includes(date) ? (
                    'food'
                  ) : month.waste.paper.includes(date) ? (
                    'paper'
                  ) : null
                )
              }
            >
              {date}
            </td>
          ))}
        </tr>
        <tr>
          {month.wk4.map((date, i) => (
            <td
              key={i}
              className={
                month.waste.plastic.includes(date) ? (
                  'plastic'
                ) : (
                  month.waste.food.includes(date) ? (
                    'food'
                  ) : month.waste.paper.includes(date) ? (
                    'paper'
                  ) : null
                )
              }
            >
              {date}
            </td>
          ))}
        </tr>
        <tr>
          {month.wk5.map((date, i) => (
            <td
              key={i}
              className={
                month.waste.plastic.includes(date) ? (
                  'plastic'
                ) : (
                  month.waste.food.includes(date) ? (
                    'food'
                  ) : month.waste.paper.includes(date) ? (
                    'paper'
                  ) : null
                )
              }
            >
              {date}
            </td>
          ))}
        </tr>
        <tr>
          {month.wk6 ? month.wk6.map((date, i) => (
            <td
              key={i}
              className={
                month.waste.plastic.includes(date) ? (
                  'plastic'
                ) : (
                  month.waste.food.includes(date) ? (
                    'food'
                  ) : month.waste.paper.includes(date) ? (
                    'paper'
                  ) : null
                )
              }
            >
              {date}
            </td>
          )) : null
          }
        </tr>
      </tbody>
    </table>
  )
}