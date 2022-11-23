declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXTAUTH_SECRET: string;
    readonly NEXTAUTH_URL: string;
    readonly GITHUB_ID: string;
    readonly GITHUB_SECRET: string;
  }
}
