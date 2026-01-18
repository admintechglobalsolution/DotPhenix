import { NextResponse } from "next/server";

export const revalidate = 60 * 60 * 24 * 30; // 30 days

// Raw API shape
type RestCountry = {
  name?: {
    common?: string;
  };
  cca2?: string;
  idd?: {
    root?: string;
    suffixes?: string[];
  };
};

// Sanitized response shape
type CountryCodeItem = {
  country: string;
  iso: string;
  code: string;
  label: string;
};

/**
 * Strong type guard
 * Fully guarantees required fields exist
 */
function isValidCountry(c: RestCountry): c is {
  name: { common: string };
  cca2: string;
  idd: { root: string; suffixes: string[] };
} {
  return (
    typeof c.name?.common === "string" &&
    typeof c.cca2 === "string" &&
    typeof c.idd?.root === "string" &&
    Array.isArray(c.idd.suffixes) &&
    c.idd.suffixes.length > 0
  );
}

export async function GET() {
  try {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,idd,cca2",
      { next: { revalidate } }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch country data");
    }

    const data: RestCountry[] = await response.json();

    const countries: CountryCodeItem[] = data
      .filter(isValidCountry)
      .flatMap((c) => {
        const country = c.name.common;
        const iso = c.cca2;
        const root = c.idd.root;
        const suffixes = c.idd.suffixes;

        return suffixes.map((suffix) => {
          const code = `${root}${suffix}`;
          return {
            country,
            iso,
            code,
            label: `${country} (${code})`,
          };
        });
      })
      .sort((a, b) => a.country.localeCompare(b.country));

    return NextResponse.json(countries);
  } catch {
    // Safe fallback
    return NextResponse.json([], { status: 200 });
  }
}
