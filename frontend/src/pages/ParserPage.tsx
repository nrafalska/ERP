import * as React from 'react';
import ParserControl from '../components/ParserControl';
import api from '../api/api';

const ParserPage: React.FC = () => {
  const [parserStatus, setParserStatus] = React.useState<string | null>(null);
  const [parserLogs, setParserLogs] = React.useState<any[]>([]);

  const fetchParserStatus = async () => {
    try {
      const response = await api.get('/parser/status');
      setParserStatus(response.data);
    } catch (error) {
      console.error('Error fetching parser status:', error);
    }
  };

  const fetchParserLogs = async () => {
    try {
      const response = await api.get('/parser/logs');
      setParserLogs(response.data);
    } catch (error) {
      console.error('Error fetching parser logs:', error);
    }
  };

  React.useEffect(() => {
    fetchParserStatus();
    fetchParserLogs();
  }, []);

  const startParser = async () => {
    try {
      await api.post('/parser/start');
      fetchParserStatus(); // Обратите внимание на это исправление
    } catch (error) {
      console.error('Error starting parser:', error);
    }
  };

  const stopParser = async () => {
    try {
      await api.post('/parser/stop');
      fetchParserStatus(); // Обратите внимание на это исправление
    } catch (error) {
      console.error('Error stopping parser:', error);
    }
  };

  return (
    <div className="parser-page">
      <ParserControl
        status={parserStatus}
        logs={parserLogs}
        onStart={startParser}
        onStop={stopParser}
      />
    </div>
  );
};

export default ParserPage;
