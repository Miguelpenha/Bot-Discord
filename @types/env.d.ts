declare global {
    namespace NodeJS {
      interface ProcessEnv {
        TOKEN: string
        PREFIX: string
        ID_ADMIN: string
        URL_INVITE: string
        ACCESS_KEY_UNSPLASH: string
      }
    }
}

export {}