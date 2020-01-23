import component = require ("../components/components")

// interface Watchable {}

class Watchable {
  protected backgrop_path: string;
  protected genres: component.Genres[];
  protected id: number;
  protected original_language: string;
  protected production_companies: component.ProductionCompanies[];
  protected vote_count: number;
  protected vote_average: number;
  protected status: string;
  protected homepage: string;
  protected overview: string;
  protected popularity: number;
  protected poster_path: string;

}

class TvShow extends Watchable {
  private created_by: component.CreatedBy[];
  private episode_run_time: number[];
  private first_air_date: string;
  private in_production: boolean;
  private languages: string[];
  private last_air_date: string;
  private last_epidose_to_air: component.LastEpisodeToAir;
  private name: string;
  private next_episode_to_air: any;
  private networks: component.Networks[];
  private number_of_episodes: number;
  private number_of_seasons: number;
  private origin_country: string[];
  private original_name: string;
  private seasons: component.Seasons[];
  private type: string;
}

class Movie extends Watchable {
  private adult: boolean;
  private belongs_to_collection: any;
  private budget: number;
  private imdb_id: string;
  private original_title: string;
  private production_countries: component.ProductionCountries[];
  private release_date: string;
  private revenue: number;
  private runtime: number;
  private spoken_languages: component.SpokenLanguages[];
  private tagline: string;
  private title: string;
  private video: boolean;
}
