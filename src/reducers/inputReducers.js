const initialState = {
  room: null,
  participants: null,
  dateTime: {
    startDate: null,
    endDate: null
  },
  companyName: null
}

export default function inputReducers(state = { ...initialState }, action) {
  switch (action.type) {
    case 'ROOM_INPUT':
      return ({
        ...state,
        room: action.roomNumber
      })
    case 'PARTICIPANTS_INPUT':
      return ({
        ...state,
        room: action.roomNumber,
        participants: action.participants
      })
    case 'TIME_INPUT':
      return ({
        ...state,
        room: action.roomNumber,
        participants: action.participants,
        dateTime: {
          startDate: action.StartDate,
          endDate: action.EndDate
        }
      })
    case 'COMPANY_INPUT':
      return ({
        ...state,
        room: action.roomNumber,
        participants: action.participants,
        dateTime: {
          startDate: action.StartDate,
          endDate: action.EndDate
        },
        companyName:action.companyName
      })
    default:
      return state
  }
}
