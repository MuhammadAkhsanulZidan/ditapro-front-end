import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import Sidebar from '../../../../components/SideBar';
import useAuth from '../../../../hooks/useAuth';


const dummyAssignments = [
    { id: 1, title: 'Complete React Tutorial', dueDate: '2024-08-25', status: 'In Progress' },
    { id: 2, title: 'Submit Project Report', dueDate: '2024-08-30', status: 'Pending' },
    { id: 3, title: 'Prepare for Presentation', dueDate: '2024-09-05', status: 'Completed' },
];

const Dashboard = () => {
    const {token, logout} = useAuth();
    return (
        <div className="container-fluid p-0">
      <div className="row h-100 m-0">
        <div className="col-md-3 col-lg-2 p-0 bg-primary text-white sidebar">
          <Sidebar chosenMenu={0} logout={logout}/>
        </div>
        <div className="col-md-9 col-lg-10 p-0 main-content">
        <Container className="mt-4">
            
        </Container>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
