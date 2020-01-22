class Genres {
    public id: number;
    public name: string;
  }
  
  class ProductionCompanies {
    public name: string;
    public id: number;
    public logo_path: string;
    public origin_country: string;
  }
  
  class ProductionCountries {
    public iso_3166_1: string;
    public name: string;
  }
  
  class SpokenLanguages {
    public iso_639_1: string;
    public name: string;
  }
  
  class CreatedBy {
    public id: number;
    public credit_id: string;
    public name: string;
    public gender: number;
    public profile_path: string;
  }
  
  class LastEpisodeToAir {
    public air_date: string;
    public episode_number: number;
    public id: number;
    public name: string;
    public overview: string;
    public production_code: string;
    public season_number: number;
    public show_id: number;
    public still_path: string;
    public vote_average: number;
    public vote_count: number;
  }
  
  class Networks {
    public name: string;
    public id: number;
    public logo_path: string;
    public origin_country: string;
  }
  
  class Seasons {
    public air_date: string;
    public episode_count: number;
    public id: number;
    public name: string;
    public overview: string;
    public poster_path: string;
    public season_number: number;
  }
  
  interface Watchable {}
  
  class Watchable {
    protected backgrop_path: string;
    protected genres: Genres[];
    protected id: number;
    protected original_language: string;
    protected production_companies: ProductionCompanies[];
    protected vote_count: number;
    protected vote_average: number;
    protected status: string;
    protected homepage: string;
    protected overview: string;
    protected popularity: number;
    protected poster_path: string;
  
  }
  
  class TvShow extends Watchable {
    private created_by: CreatedBy[];
    private episode_run_time: number[];
    private first_air_date: string;
    private in_production: boolean;
    private languages: string[];
    private last_air_date: string;
    private last_epidose_to_air: LastEpisodeToAir;
    private name: string;
    private next_episode_to_air: any;
    private networks: Networks[];
    private number_of_episodes: number;
    private number_of_seasons: number;
    private origin_country: string[];
    private original_name: string;
    private seasons: Seasons[];
    private type: string;
  }
  
  class Movie extends Watchable {
    private adult: boolean;
    private belongs_to_collection: any;
    private budget: number;
    private imdb_id: string;
    private original_title: string;
    private production_countries: ProductionCountries[];
    private release_date: string;
    private revenue: number;
    private runtime: number;
    private spoken_languages: SpokenLanguages[];
    private tagline: string;
    private title: string;
    private video: boolean;
  }
  