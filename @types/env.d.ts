declare global {
    namespace NodeJS {
      interface ProcessEnv {
        PREFIX: string
        PREFIX_ARGS: string
        TOKEN_DISCORD: string
        ACCESS_KEY_UNSPLASH: string
      }
    }
}

export {}