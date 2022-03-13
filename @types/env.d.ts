declare global {
    namespace NodeJS {
      interface ProcessEnv {
        TOKEN: string
        PREFIX: string
        URL_INVITE: string
        ACCEPTED_CHANNELS: string
        API_KEY_FRASES: string
      }
    }
}

export {}