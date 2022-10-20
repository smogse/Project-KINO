import { AUTHORIZE } from "../action_types/user_action_types";
import { UserState } from "../../components/types/types";


const initial_state = {
  user: null
}

export default (state : UserState = initial_state, action: any) => {
  switch (action.type){
    case AUTHORIZE: {
      return ({
        ...state,
        user: action.user
      })
    }
    default : {
      return state
    }
  }
}