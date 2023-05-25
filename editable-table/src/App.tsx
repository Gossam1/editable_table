//Please read README first
import { Fragment, useCallback, useEffect, useState } from 'react';
import './App.css';
import EditableTable from './EditableTable';

interface ReportData {
  id: number;
  tableType: string;
  comment: string;
  createdAt: Date;
}

function App() {
  const [reportData, setReportData] = useState<ReportData[]>([]);

  const onAdd = useCallback(() => {
    setReportData([
      ...reportData,
      {
        id: reportData.length,
        tableType: '',
        comment: '',
        createdAt: new Date(Date.now()),
      },
    ]);
  }, [reportData]);

  return (
    <div className={'main'}>
      <div className={'grid'}><EditableTable /></div>
    
    </div>
  );
}

export default App;
