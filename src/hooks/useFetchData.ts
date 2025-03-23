import { useEffect, useState } from "react";

export function useFetchData(url: string) {
    const [data, setData] = useState<{ title: string; id: number }[]>([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}
