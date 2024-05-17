import got, { Got } from "got"
import { HttpResponseCode } from "./utils.js"


export class ApiClient {
  got: Got = got
  apiDomainName: string = "httpstat.us"


  async call(): Promise<{ code: number, description: string }> {
    return this.got(this.getUrl("200")).json()
  }

  private getUrl(code: HttpResponseCode) {
    return `https://${this.apiDomainName}/${code}`
  }
}
