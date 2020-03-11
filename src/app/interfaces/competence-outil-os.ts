export interface CompetenceOutilsOs {
  os: Array<Os>;
  outils: Array<Outil>;
}

interface Os {
  name: string;
  image: string;
}

interface Outil {
  name: string;
  image: string;
}
