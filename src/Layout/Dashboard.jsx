import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-white">
                <ul className="menu p-4 ">
                    
                    <li><NavLink to='/dashboard/mytask'>MY Task</NavLink></li>
                    <li><NavLink to='/dashboard/addtask'>Add Task</NavLink></li>
                    <li><NavLink to='/dashboard/managetask'>Manage Task</NavLink></li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;