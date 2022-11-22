export interface PlaceOwnerInfo {
  login: string,
  email: string,
  firstName: string,
  surName: string,
  hashedPassword: string
}

export interface Place {
  id: number,
  name: string,
  latitude: number,
  longitude: number,
  numberOfReservedSeats?: number,
  maxSeatsAvailableForReservation: number,
  userId: number
}

export interface GetOwner {
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

export interface UpdateOwner{
  login: string,
  email: string,
  firstName: string
  surName: string
  hashedPassword: string,
  isAccountActive: boolean
}
