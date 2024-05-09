import 'dotenv/config'

type ENVType = {
    JWTKEY: string | undefined,
    CODE_CHAT_URL:string | undefined,
    CODE_CHAT_KEY:string | undefined,
}



export const ENV:ENVType = {
    JWTKEY:process.env.KEY_JWT!,
    CODE_CHAT_URL:process.env.CODE_CHAT_URL,
    CODE_CHAT_KEY:process.env.CODE_CHAT_KEY
}