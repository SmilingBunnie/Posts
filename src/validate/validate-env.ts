import {cleanEnv, str, port} from 'envalid'
import 'dotenv/config'


    const env = cleanEnv(process.env, {
        PORT: port(),
        MONGO_URI: str()
    })


export default env