import React, {Fragment} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
const ReminderPlan = ({ reminders, title }) => {
  
  return (
    <div className="reminder-list">
      {/* <h2>{title}</h2> */}
      {/* <table></table> */}
      
          
          <table className="container reminder-table">
            <thead>
              <tr>
                <th>Task </th>
                <th>Start Time </th>
                <th>Date </th>
                <th id="reminder-actions"></th>
              </tr>
            </thead>
            <tbody className="container-fluid">
            {reminders.map((reminders) => (
              <Fragment>
                <tr>
                    <td>{reminders.task}</td>
                    <td>{reminders.date}</td>
                    <td>{reminders.start_time}</td>
                    <td ><Link>Edit</Link>   <Link >Delete</Link></td>
                </tr>
              
              </Fragment>
            ))}
            </tbody>
          </table>
        </div>

  );
};

export default ReminderPlan;
