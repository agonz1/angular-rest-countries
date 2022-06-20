export interface Country{
    name: string;
    nativeName: any;
    subRegion: string;
    currencies: any;
    languages: any;
    topLevelDomain: string;
    borderCountries: string[];
    population: number;
    region: Region;
    capital: string;
    imageUrl: string;
}

export enum Region {
    AFRICA = "AFRICA", ASIA = "ASIA", AMERICAS = "AMERICAS", EUROPE = "EUROPE", OCEANIA = "OCEANIA"
}