export function Room(roomNumber){
  return{
    type:'ROOM_INPUT',
    roomNumber
  }
}

export function Participants(participants){
  return{
    type:'PARTICIPANTS_INPUT',
    participants
  }
}

export function DateTime(startDate,endDate){
  return{
    type:'TIME_INPUT',
    startDate,
    endDate
  }
}

export function Company(companyName){
  return{
    type:'COMPANY_INPUT',
    companyName
  }
}