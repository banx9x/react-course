/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SCANBOT_LICENSE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
