/**
 * Created by Ljili on 2020/8/18.
 */
//action types
export const type={
  OPEN:'OPEN'
}

//action creators
export function switchC(open){
  return {
    type:type.OPEN,
    open
  }
}