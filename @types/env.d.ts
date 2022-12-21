declare global {
    namespace NodeJS {
      interface ProcessEnv {
        TOKEN: string
        PREFIX: string
        URL_INVITE: string
        ACCEPTED_CHANNELS: string
        ID_ADMIN: string
      }
    }
}

export {}