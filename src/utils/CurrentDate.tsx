import React, { useState, useEffect } from 'react';

const CurrentDate: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<string>("");

  useEffect(() => {
    const today = new Date();
    
    const day = String(today.getDate()).padStart(2, '0');  
    const month = String(today.getMonth() + 1).padStart(2, '0');  
    const year = today.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;
    setCurrentDate(formattedDate);
  }, []);

  return <p>{currentDate}</p>;
};

export default CurrentDate;