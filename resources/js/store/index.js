import * as actions from './actions'
import * as mutations from './mutations'
import state from './state'
import * as getters from './getters'
import profile from '../modules/profile/store'

export default {
    actions, mutations, state, getters, modules: {
        profile
    }
}