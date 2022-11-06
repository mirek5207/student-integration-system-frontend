export interface ModeratorInfo {
  login: string,
  email: string,
  firstName: string,
  surName: string,
  hashedPassword: string
}

export interface GetAllModerators {
  id: number
  firstName: string
  surName: string
  userId: number
  "user": {
    "id": number,
    "login": string,
    "email": string,
    "account": {
      "id": number,
      "isActive": boolean,
      "accountCreationTime": string,
      "userId": number,
      "user": string
    },
    "placeOwner": boolean,
    "userRoles": string
  }
}
