export interface ClientInfo {
  login: string,
  email: string,
  firstName: string,
  surName: string,
  hashedPassword: string
}

export interface GetClient {
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
      user?: string
    },
    placeOwner: boolean,
  }
}
export interface UpdateClient{
  login: string,
  email: string,
  firstName: string
  surName: string
  hashedPassword: string,
  isAccountActive: boolean
}
export interface CreateReservation {
  startDate: Date,
  endDate: Date,
  numberOfGuests: number,
  phoneNumber: string,
  placeId: number
  lobbyId: number
}
export interface UpdateReservation {
  startDate: Date,
  endDate: Date,
  numberOfGuests: number,
  phoneNumber: string,
  lobbyId: number
}
export interface GetLobby{
  id: number,
  maxSeats: number,
  name: string,
  type: string,
  placeId: number,
  customPlaceId: number,
  lobbyOwnerId: number,
  lobbyOwner: object,
  place?: object,
  customPlace?: object,
  lobbyGuests?: object
}

