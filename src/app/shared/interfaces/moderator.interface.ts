export interface ModeratorInfo {
  login: string,
  email: string,
  firstName: string,
  surName: string,
  hashedPassword: string
}

export interface GetModerator {
  id: number,
  firstName: string,
  surName: string,
  userId: number,
  user: {
    id: number,
    login: string,
    email: string,
    account: {
      id: number,
      isActive: boolean,
      accountCreationTime: string,
      userId: number,
      user: string
    },
    placeOwner: boolean,
  }
}

export interface UpdateModerator{
  login: string,
  email: string,
  firstName: string
  surName: string
  hashedPassword: string,
  isAccountActive: boolean
}

export interface GetUserReport{
  "id": number,
  "reportType": string,
  "description": string,
  "creationDate": Date,
  "status": string,
  "reportedUserId": number,
  "reportingUserId": number
}
