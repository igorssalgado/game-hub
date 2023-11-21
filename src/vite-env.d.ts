/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_apiKey: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
