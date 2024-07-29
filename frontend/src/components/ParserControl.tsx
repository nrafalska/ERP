import * as React from 'react';

interface ParserControlProps {
  status: string | null;
  logs: any[];
  onStart: () => Promise<void>;
  onStop: () => Promise<void>;
}

const ParserControl: React.FC<ParserControlProps> = ({ status, logs, onStart, onStop }) => {
  return (
    <div>
      <h2>Parser Control</h2>
      <p>Status: {status}</p>
      <button onClick={onStart}>Start Parser</button>
      <button onClick={onStop}>Stop Parser</button>
      <div>
        <h3>Logs</h3>
        <ul>
          {logs.map((log, index) => (
            <li key={index}>{log.message}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ParserControl;
