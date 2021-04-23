import { useEffect, useState } from 'react';

import { PlantsService } from '../../core/services';

function usePlants(environment = '') {
  const [loading, setLoading] = useState(false);
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    setLoading(true);

    PlantsService
      .list({ environment })
      .then((data) => setPlants(data))
      .catch(console.log)
      .finally(() => setLoading(false));
  }, [environment]);

  return [plants, loading];
}

export default usePlants;
