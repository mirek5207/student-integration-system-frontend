import {HttpHeaders} from "@angular/common/http";
import {AUTHENTICATION_KEY} from "../authenticationKey/authenticationKey";

export const BASE_URL = 'https://localhost:44373/api'

export function getUrl(param: string){
  return `${BASE_URL}/${param}`;
}

export const httpOptions = {
  headers: new HttpHeaders({
    Authorization: `bearer ${localStorage.getItem(AUTHENTICATION_KEY) as string}`
  })
}
