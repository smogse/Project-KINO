import { Themes } from "../../components/constants/theme";
import { ThemeState } from "../../components/types/types";
import { TOGGLE_THEME } from "../action_types/theme-action-types"; 

const initial_state = {
  theme: Themes.LIGHT
}

export default (state: ThemeState = initial_state, action: any) => {
  switch (action.type){
    case TOGGLE_THEME: {
      return (
        {
          ...state,
          theme: state.theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT
        }
      )
    }
    default: {
      return state;
    }
  }
}