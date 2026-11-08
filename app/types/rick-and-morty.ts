export interface PageInfo { count: number; pages: number; next: number | null; prev: number | null }
export interface LocationSummary { id?: string | null; name: string; type?: string | null; dimension?: string | null }
export interface CharactersPage { info: PageInfo; results: CharacterSummary[] }
export interface CharacterSummary { id: string; name: string; image: string; status: string; species: string; location: LocationSummary }
