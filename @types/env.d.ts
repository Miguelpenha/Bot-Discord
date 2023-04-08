declare global {
    namespace NodeJS {
      interface ProcessEnv {
        TOKEN_DISCORD: string
        ACCESS_KEY_UNSPLASH: string
      }
    }
}

export {}