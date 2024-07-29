import * as React from 'react';
import api from '../api/api';
import './ParserLog.css';

interface Log {
  date: string;
  status: string;
  file: string;
  code: number;
  foundElements: number;
  responsible: string;
}

const ParserLog: React.FC = () => {
  const [logs, setLogs] = React.useState<Log[]>([]);

  React.useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await api.get('/parser-logs');
        setLogs(response.data);
      } catch (error) {
        console.error('Error fetching logs:', error);
      }
    };

    fetchLogs();
  }, []);

  return (
    <div className="parser-log">
      <h2>Parser Logs</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Status</th>
            <th>File</th>
            <th>Code</th>
            <th>Found Elements</th>
            <th>Responsible</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index}>
              <td>{log.date}</td>
              <td>{log.status}</td>
              <td>{log.file}</td>
              <td>{log.code}</td>
              <td>{log.foundElements}</td>
              <td>{log.responsible}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ParserLog;
