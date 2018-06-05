import React, { Component } from 'react'

// import React, { Component } from 'react'
// { Component } is called as destructring

//1.using createclass
// export const SkiDayCount = React.createClass({
//    render() {
//      return (
//        <div clssName="ski-day-count">
//           <div className="total-days">
//              <span>5 Days</span>
//           </div>
//           <div className="powder-days">
//              <span>2 Days</span>
//           </div>
//           <div className="backcountry-days">
//              <span>1 Days</span>
//           </div>
//        </div>
//      )
//    }
// }) // using createClass it was deceprecated in React 5


//2.Example using ES6
// class SkiDayCount extends Component {
//   percentageToDecimal(decimal) {
//      return ((decimal * 100) + '%')
//   }
//   calcGoalProgress(total, goal) {
//     return this.percentageToDecimal(total/goal)
//   }
//   render() {
//     return (
//        <div className="ski-day-count">
//           <div className="total-days">
//              <span>{this.props.total}</span>
//              <span>Days</span>
//           </div>
//           <div className="powder-days">
//              <span>{this.props.powder}</span>
//              <span>Days</span>
//           </div>
//           <div className="backcountry-days">
//              <span>{this.props.backcountry}</span>
//              <span>Days</span>
//           </div>
//           <div>
//              <span>{this.calcGoalProgress(this.props.total, this.props.goal)}</span>
//              <span>Days</span>
//           </div>
//        </div>
//      );
//   }
// }

// export default SkiDayCount;

//3.using stateless function

// const percentageToDecimal = (decimal) => {
//    return ((decimal * 100) + '%')
// }
//
// const calcGoalProgress = (total, goal) => {
//   return percentageToDecimal(total/goal)
// }
//
// export const SkiDayCount = (props) => (
//        <div className="ski-day-count">
//           <div className="total-days">
//              <span>{props.total}</span>
//              <span>Days</span>
//           </div>
//           <div className="powder-days">
//              <span>{props.powder}</span>
//              <span>Days</span>
//           </div>
//           <div className="backcountry-days">
//              <span>{props.backcountry}</span>
//              <span>Days</span>
//           </div>
//           <div>
//              <span>{calcGoalProgress(props.total, props.goal)}</span>
//              <span>Days</span>
//           </div>
//        </div>
//      )
//
// export default SkiDayCount;


//destructring props

const percentageToDecimal = (decimal) => {
   return ((decimal * 100) + '%')
}

const calcGoalProgress = (total, goal) => {
  return percentageToDecimal(total/goal)
}

export const SkiDayCount = ({total, powder, backcountry, goal}) => (
       <div className="ski-day-count">
          <div className="total-days">
             <span>{total}</span>
             <span>Days</span>
          </div>
          <div className="powder-days">
             <span>{powder}</span>
             <span>Days</span>
          </div>
          <div className="backcountry-days">
             <span>{backcountry}</span>
             <span>Days</span>
          </div>
          <div>
             <span>{calcGoalProgress(total, goal)}</span>
             <span>Days</span>
          </div>
       </div>
     )

export default SkiDayCount;

//It is good to use stateless function rather than createClass and Es6  and react has stated that using stateless
//function will have good performance
