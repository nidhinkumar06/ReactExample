// import {ic_date_range} from 'react-icons-kit/md/ic_date_range'
// import {SnowFlake} from 'react-icons-kit/fa/snowflakeO'
// import {ic_terrain} from 'react-icons-kit/md/ic_terrain'
import React from 'react'
import { SkiDayRow } from './SkiDayRow'

export const  SkiDayList = ({days}) => (
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Resort</th>
        <th>Powder</th>
        <th>BackCountry</th>
      </tr>
    </thead>
    <tbody>
      {days.map((day, i) =>
          <SkiDayRow key={i}
                    resort={day.resort}
                    date={day.date}
                    powder={day.powder}
                    backcountry={day.backcountry}
             />
        )}
    </tbody>
  </table>
)
export default SkiDayList;
