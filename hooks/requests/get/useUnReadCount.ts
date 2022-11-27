import { useQuery } from 'react-query';

import { fetchCount } from '@requests/chat';

const useUnReadCount = (id?: string) => {
  const fetchFn = () => fetchCount(id);
  return useQuery(id ? ['count', id] : ['count'], fetchFn);
};

export default useUnReadCount;
