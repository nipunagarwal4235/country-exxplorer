import { Country } from '@/types/country';
import Image from 'next/image';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';

export default function CountryCard({ country }: { country: Country }) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-lg font-bold">
          {country.name.common}
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          {country.name.official}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <Image
          src={country.flags.png}
          alt={country.flags.alt || `Flag of ${country.name.common}`}
          className="w-32 h-auto rounded-md mb-4 shadow"
        />
        <p className="text-sm">Region: {country.region}</p>
        <p className="text-sm">Capital: {country.capital?.[0]}</p>
        <p className="text-sm">
          Population: {country.population.toLocaleString()}
        </p>
      </CardContent>
    </Card>
  );
}
