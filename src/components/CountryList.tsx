'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchCountries } from '../api/countries';
import CountryCard from './CountryCard';
import { Country } from '@/types/country';

const CountryList = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['countries'],
    queryFn: fetchCountries,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((country: Country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </div>
  );
};

export default CountryList;
