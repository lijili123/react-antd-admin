/**
 * Created by Ljili on 2020/8/18.
 */
import { createStore } from 'redux'
import reducer from './../reducer'
const store = createStore(reducer)
export default store