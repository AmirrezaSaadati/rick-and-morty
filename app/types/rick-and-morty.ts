export interface PageInfo { count: number; pages: number; next: number | null; prev: number | null }
export interface LocationSummary { id?: string | null; name: string; type?: string | null; dimension?: string | null }
export interface EpisodeSummary { id: string; name: string; episode: string; air_date: string }
export interface CharactersPage { info: PageInfo; results: CharacterSummary[] }
export interface CharacterSummary { id: string; name: string; image: string; status: string; species: string; location: LocationSummary }
export interface CharacterDetail extends CharacterSummary {
  type: string
  gender: string
  origin: LocationSummary
  episode: EpisodeSummary[]
}
