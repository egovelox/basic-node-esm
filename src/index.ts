import { APP_NAME } from "./libs/config.js"
import { ApiClient } from "./libs/api-client.js"

console.log(`Started app ${APP_NAME} !`)

const apiClient = new ApiClient()

console.log(`Calling external api ${apiClient.apiDomainName} ...`)

export const response = await new ApiClient().call()

console.log(`Got response with code ${response.code} : ${response.description}`)
