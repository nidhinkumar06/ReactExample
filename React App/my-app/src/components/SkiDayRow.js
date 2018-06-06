// import {ic_date_range} from 'react-icons-kit/md/ic_date_range'
import { SnowFlake } from 'react-icons-kit/fa/snowflakeO'
// import {ic_terrain} from 'react-icons-kit/md/ic_terrain'
import React from 'react'

export const SkiDayRow = ({resort, date, powder, backCountry}) => (
  <tr>
     <td>{date.getMonth()+1}/{date.getDate()}/{date.getFullYear()}</td>
     <td>{resort}</td>
     <td>{(powder) ? "anow" : null}</td>
     <td>{(backCountry) ? <ic_terrain/> : null}</td>
  </tr>
)
