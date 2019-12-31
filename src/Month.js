import React from 'react';

export default function Month() {
  const January = {
    wk1: [null, null, 1, 2, 3, 4, 5],
    wk2: [6, 7, 8, 9, 10, 11, 12],
    wk3: [13, 14, 15, 16, 17, 18, 19],
    wk4: [20, 21, 22, 23, 24, 25, 26],
    wk5: [27, 28, 29, 30, 31, null, null],
    waste: {
      food: [14, 28],
      plastic: [7],
      paper: [21],
    },
  };
  
  return (
    <table>
      <thead>
        <tr>
          <th>Week</th>
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
          <td>1</td>
          {January.wk1.map(date => (
            <td
              className={
                January.waste.plastic.includes(date) ? (
                  'plastic'
                ) : (
                  January.waste.food.includes(date) ? (
                    'food'
                  ) : January.waste.paper.includes(date) ? (
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
          <td>2</td>
          {January.wk2.map(date => (
            <td
              className={
                January.waste.plastic.includes(date) ? (
                  'plastic'
                ) : (
                  January.waste.food.includes(date) ? (
                    'food'
                  ) : January.waste.paper.includes(date) ? (
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
          <td>3</td>
          {January.wk3.map(date => (
            <td
              className={
                January.waste.plastic.includes(date) ? (
                  'plastic'
                ) : (
                  January.waste.food.includes(date) ? (
                    'food'
                  ) : January.waste.paper.includes(date) ? (
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
          <td>4</td>
          {January.wk4.map(date => (
            <td
              className={
                January.waste.plastic.includes(date) ? (
                  'plastic'
                ) : (
                  January.waste.food.includes(date) ? (
                    'food'
                  ) : January.waste.paper.includes(date) ? (
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
          <td>5</td>
          {January.wk5.map(date => (
            <td
              className={
                January.waste.plastic.includes(date) ? (
                  'plastic'
                ) : (
                  January.waste.food.includes(date) ? (
                    'food'
                  ) : January.waste.paper.includes(date) ? (
                    'paper'
                  ) : null
                )
              }
            >
              {date}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  )
}