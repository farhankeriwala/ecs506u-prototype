import { useState } from 'react';

const StatusBar2 = () => {
  const [selectedStatus, setSelectedStatus] = useState('');
  const [showSavedMessage, setSavedMessage] = useState(false); // State to control pop-up message

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  // Function to insert selectedStatus into the database
  const insertIntoDatabase = () => {
    // Insert selectedStatus into the database here
    console.log('Status is', selectedStatus);
    setSavedMessage(true); // Show the pop-up message
    setTimeout(() => setSavedMessage(false), 600);
  };

  const bgClass =
    selectedStatus === 'Closed'
      ? 'bg-successGreen text-white'
      : selectedStatus === 'In Progress'
      ? 'bg-warningYellow text-white'
      : selectedStatus === ''
      ? 'bg-secondaryGray text-white'
      : 'bg-dangerRed text-white';

  return (
    <div>
      <select
        className={`px-4 py-2 border rounded-full w-full text-center ${bgClass}`}
        onChange={handleStatusChange}
        value={selectedStatus}
      >
        <option value="">Select Status</option>
        <option value="Open">Open</option>
        <option value="In Progress">In Progress</option>
        <option value="Closed">Closed</option>
      </select>
      <button
        onClick={insertIntoDatabase}

      >
        Save
      </button>
      {showSavedMessage && <div className="popup border rounded-full w-full text-center">Saved</div>} {/* Pop-up message */}
    </div>
  );
};

export default StatusBar2;