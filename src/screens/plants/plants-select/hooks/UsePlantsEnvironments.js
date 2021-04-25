import { useEffect, useState } from 'react';

import { PlantsService } from '@core/services';

function usePlantsEnvironments() {
  const [loading, setLoading] = useState(false);
  const [environments, setEnvironments] = useState([]);

  useEffect(() => {
    setLoading(true);

    PlantsService
      .listEnvironments()
      .then((data) => setEnvironments(data))
      .catch(console.log)
      .finally(() => setLoading(false));
  }, []);

  return [environments, loading];
}

export default usePlantsEnvironments;
