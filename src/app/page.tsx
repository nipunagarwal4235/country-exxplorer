import CountryList from '@/components/CountryList';
import { Search } from 'lucide-react';

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = searchParams['page'] ?? '1';
  const per_page = searchParams['per_page'] ?? '5';

  // mocked, skipped and limited in the real app
  const start = (Number(page) - 1) * Number(per_page); // 0, 5, 10 ...
  const end = start + Number(per_page); // 5, 10, 15 ...
  return (
    <div className="flex flex-col gap-4 md:flex-row md:gap-6 lg:gap-12">
      <div className="flex-none w-full md:w-1/3 lg:w-1/4">
        <Search className="w-full" />
      </div>
      <div className="flex-auto w-full">
        <CountryList start={start} end={end} />
      </div>
    </div>
  );
}
