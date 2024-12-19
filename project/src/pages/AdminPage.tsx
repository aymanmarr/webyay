import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Overview from '../components/Overview';
import DataTable from '../components/DataTable';

// Mock data for now, will be replaced with actual data fetched from the backend
const mockUsers = [
  { id: '1', fullName: 'Mohammed Alami', email: 'mohammed@atlasair.ma', role: 'Admin' },
  { id: '2', fullName: 'Fatima Zahra', email: 'fatima@atlasair.ma', role: 'Manager' },
];

const AdminPage: React.FC<{ token?: string }> = ({ token }) => {
  const [activeSection, setActiveSection] = useState('overview');
  const [equipageData, setEquipageData] = useState(mockUsers);  // Initializing state with mock data

  // Handle adding a new equipage (POST request to the backend)
  const handleAdd = async () => {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlbGhhdHRhYkBnbWFpbC5jb20iLCJpYXQiOjE3MzQ1NTUzNDcsImV4cCI6MTczNDY0MTc0N30.8V9dTUwXd-DLBFD8qKfy0abqVstsjwdmnnxreEPYK_U'; // Replace with your actual JWT token
    try {
      const response = await fetch('http://localhost:8081/api/equipage/addEquipage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ /* your payload */ }),
      });
  
      const data = await response.json();
      console.log('Item added:', data);
    } catch (error) {
      console.error('Error adding equipage:', error);
    }
  };
  

  // Handle editing an equipage (to be implemented)
  const handleEdit = (item: any) => console.log('Edit item:', item);

  // Handle deleting an equipage (to be implemented)
  const handleDelete = (item: any) => console.log('Delete item:', item);

  // Function to render the correct content based on active section
  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return <Overview />;
      case 'equipage':
        return (
          <DataTable
            title="Equipage Management"
            columns={[
              { key: 'fullName', label: 'Full Name' },
              { key: 'email', label: 'Email' },
              { key: 'role', label: 'Role' },
            ]}
            data={equipageData}  // Pass the dynamic equipage data
            onAdd={handleAdd}    // Pass the handleAdd function to be triggered on adding new equipage
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        );
      
      default:
        return <Overview />;
    }
  };

  return (
    <div className="flex min-h-screen bg-dark-900" style={{ marginTop: '4rem' }}>
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="flex-1">{renderContent()}</main>
    </div>
  );
};

export default AdminPage;
