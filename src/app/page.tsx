import CountryList from '@/components/CountryList';
import { Search } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <Search />
      <CountryList />
    </div>
  );
}
