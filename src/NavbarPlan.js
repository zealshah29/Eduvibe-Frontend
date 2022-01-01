import React,{useState} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
// import { Fragment } from "react/cjs/react.production.min";
import ReminderPlan from "./ReminderPlan";
import StudyPlaner from "./StudyPlaner";
import Todo from "./Todo";
import useFetch from "./useFetch";
const NavbarPlan = ({count}) => {
  const [counter, setCounter] = useState(count)
  const { data: reminders,isPending,error} = useFetch("http://localhost:9001/reminders")
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 container">
            <li className="nav-item">
              <Link className="nav-link np" id='p1' onClick={()=>{setCounter(1)}}> Study Planner</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link np" id='p2' onClick={()=>{setCounter(2)}}> Reminder</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link np" id='p3' onClick={()=>{setCounter(3)}}> Todo</Link>
            </li>
          </ul>
        </div>
      </nav>
      {counter===3? <div className="full-plan-page container"> <Todo/> </div> : counter===2? <div className="full-plan-page container"><ReminderPlan reminders={reminders} title="All Reminders"/></div> : <div className="full-plan-page container"><StudyPlaner/></div>  }    
    </div>
    
  );
 
};


export default NavbarPlan;
