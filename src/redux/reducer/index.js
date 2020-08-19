/**
 * Created by Ljili on 2020/8/18.
 */
import {type} from './../action'
const initialState={
  open:false,
  count:0
}
export default (state = initialState,action)=>{
  switch(action.type){
    case type.OPEN:
      return {
        ...state,
        open:action.open
      }
    default:
      return state
  }
}