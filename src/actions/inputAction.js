export function room(roomNumber){
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

export function DateTime(StartDate,EndDate){
  return{
    type:'TIME_INPUT',
    StartDate,
    EndDate
  }
}

export function Company(companyName){
  return{
    type:'COMPANY_INPUT',
    companyName
  }
}