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
