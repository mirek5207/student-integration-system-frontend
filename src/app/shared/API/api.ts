export const BASE_URL = 'https://localhost:44373/api'

export function getUrl(param: string){
  return `${BASE_URL}/${param}`;
}
