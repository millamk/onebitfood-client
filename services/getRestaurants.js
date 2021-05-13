import useSWR from 'swr';
import { useRouter } from 'next/router';

export default function getRestaurants() {
  const router = useRouter();
  const { category, q } = router.query;
  
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  let params = '';
  if(category)
    params = `${params == '' ? '?' : '&'}category=${category}`
  if(q)
    params = `${params == '' ? '?' : '&'}q=${q}`

  const { data, error } = useSWR(
    `${process.env.apiUrl}/api/restaurants${params}`,
    fetcher,
    { revalidateOnFocus: false }
  )
  
  return { restaurants: data, isLoading: !error && !data, isError: error }
}
