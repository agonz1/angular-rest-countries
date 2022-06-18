export interface Country{
    name: string;
    nativeName: string;
    subRegion: string;
    currencies: string[];
    languages: string[];
    topLevelDomain: string;
    borderCountries: string[];
    population: number;
    region: Region;
    capital: string;
    imageUrl: string;
}

export enum Region {
    AFRICA = "AFRICA", ASIA = "ASIA", AMERICA = "AMERICA", EUROPE = "EUROPE", OCEANIA = "OCEANIA"
}