import { CHOOSE_INTERN, CHOOSE_JUNIOR, CHOOSE_MID, CHOOSE_SENIOR } from '../actions/jobForm/changeExpLevel';
import { ADD_TECHNOLOGY } from '../actions/jobForm/addTechnology';
import { SELECT_TECHNOLOGY } from '../actions/jobForm/selectTechnology';
import { DELETE_TECHNOLOGY } from '../actions/jobForm/deleteTechnology';

const initialState = {
  experienceLevel: 'INTERN',
  technologies: [],
  selectedTechnology: ''
};

const postJobReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHOOSE_INTERN:
      return {
        ...state,
        experienceLevel: 'INTERN'
      };
    case CHOOSE_JUNIOR:
      return {
        ...state,
        experienceLevel: 'JUNIOR'
      };
    case CHOOSE_MID:
      return {
        ...state,
        experienceLevel: 'MID'
      };
    case CHOOSE_SENIOR:
      return {
        ...state,
        experienceLevel: 'SENIOR'
      };
    case ADD_TECHNOLOGY:
      return {
        ...state,
        technologies: [...state.technologies, action.payload]
      };
    case SELECT_TECHNOLOGY:
      return {
        ...state,
        selectedTechnology: action.payload
      };
    case DELETE_TECHNOLOGY:
      return {
        ...state,
        technologies: [...state.technologies.filter(t => t != action.payload)]
      };
    default:
      return state;
  }
};

export default postJobReducer;
