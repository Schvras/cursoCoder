import Vue from 'vue'

export const menuVisibleKey = '__knowledge_menu_visible'
export const userKey = '__knowledge_user'
export const baseApiUrl = 'http://192.168.1.7:3000'

export function showError(e){
    if(e && e.response && e.response.data){
        Vue.toasted.global.defaultError({msg: e.response.data})
    } else if( typeof e === 'string'){
        Vue.toasted.global.defaultError({msg: e})
    } else {
        Vue.toasted.global.defaultError()
    }
}

export default { baseApiUrl, showError, userKey, menuVisibleKey }