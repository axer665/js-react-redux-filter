import { nanoid } from "nanoid";
import { ADD_SERVICE, REMOVE_SEVICE, EDIT_SERVICE } from '../actions/actionTypes'

const initialState = [
  { id: 'qFSD45-WER', name: 'Замена стекла', price: 21000 },
  { id: 'SDFsdl234b', name: 'Замена дисплея', price: 25000 },
  { id: 'sFrGH-eTY2', name: 'Замена аккумулятора', price: 4000 }
]

const serviceListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SERVICE: {
      const {name, price} = action.payload;
      return [...state, {id: nanoid(), name, price}];
    }
    case REMOVE_SEVICE: {
      const {id} = action.payload;
      return state.filter(el => el.id !== id);
    }
    case EDIT_SERVICE: {
      const item = state.find((el) => el.id === action.payload.id);
      item.name = action.payload.name;
      item.price = action.payload.price;
      return state;
    }
    default:
      return state;
  }
}

export default serviceListReducer;
