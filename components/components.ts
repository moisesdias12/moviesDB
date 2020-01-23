export class Genres {
    public id: number;
    public name: string;
}

export class ProductionCompanies {
  public name: string;
  public id: number;
  public logo_path: string;
  public origin_country: string;
}

export class ProductionCountries {
  public iso_3166_1: string;
  public name: string;
}

export class SpokenLanguages {
  public iso_639_1: string;
  public name: string;
}

export class CreatedBy {
  public id: number;
  public credit_id: string;
  public name: string;
  public gender: number;
  public profile_path: string;
}

export class LastEpisodeToAir {
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

export class Networks {
  public name: string;
  public id: number;
  public logo_path: string;
  public origin_country: string;
}

export class Seasons {
  public air_date: string;
  public episode_count: number;
  public id: number;
  public name: string;
  public overview: string;
  public poster_path: string;
  public season_number: number;
}