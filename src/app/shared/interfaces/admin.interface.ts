export interface GetSystemReport{
  "id": number,
  "reportType": number,
  "description": string,
  "creationDate": Date,
  "status": number,
  "reportingUserId": number
}
export interface PatchSystemReport{
  _reportStatus: string
}
export interface PatchUserAccount{
  isActive: boolean
}
