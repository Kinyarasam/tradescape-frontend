import React, { useEffect, useState } from 'react';
import { getAIPredictions } from '../api/ai';

const AIInsights: React.FC<{ pair: string }> = ({ pair }) => {
  const [predictions, setPredictions] = useState<any>(null);

  useEffect(() => {
    const fetchPredictions = async () => {
      const data = await getAIPredictions(pair);
      setPredictions(data);
    };
    fetchPredictions();
  }, [pair]);

  return (
    <div>
      <h3>AI Insights for {pair}</h3>
      {predictions ? <pre>{JSON.stringify(predictions, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default AIInsights;
