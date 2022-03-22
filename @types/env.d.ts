declare global {
    namespace NodeJS {
      interface ProcessEnv {
        TOKEN: string
        PREFIX: string
        URL_INVITE: string
        ACCEPTED_CHANNELS: string
        API_KEY_FRASES: string
        URL_MONGO: string
        ID_ADMIN: string
      }
    }
}

export {}