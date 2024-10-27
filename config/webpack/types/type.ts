export enum BuildMode {
  PRODUCTION = 'production',
  DEVELOPMENT = 'development'
}

export interface BuildPath {
  entry: string;
  html: string;
  build: string;
  src: string;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
}

export interface BuildOptions extends BuildEnv {
  paths: BuildPath;
  isDev: boolean;
  title: string;
  apiUrl: string;
}
