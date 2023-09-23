import { createContext,useContext } from "react";

export const flightContext = createContext([])
export const reservationContext = createContext({})

export function myFlight(){
    const useMyContext = useContext(flightContext)
    return useMyContext
}

export function myReservation(){
    const useReservationContext = useContext(reservationContext)
    return useReservationContext
}

