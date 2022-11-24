import { useState } from 'react';

export default function useRequestLoading(requestFn: any): [boolean, (arg?: any) => Promise<any>] {
  const [loading, setLoading] = useState<boolean>(false);

  const run = (requestPayload: any) => {
    setLoading(true);
    return new Promise((resolve) => {
      requestFn(requestPayload)
        .then((response: any) => {
          resolve(response);
        })
        .finally(() => {
          setLoading(false);
        });
    });
  };

  return [loading, run];
}

/***
 * 使用
 *  const [loading, api] = useRequestLoading(fetchData);
 * 
 *  api（参数)
 */