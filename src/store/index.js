import {createStore} from 'vuex'

const store = createStore(
    {
        state:{
            count:0,
            todos:[
                {id:1,text:'learn getters',done:true},
                {id:2,text:'learn mapstate',done:false},
            ]
        },
        mutations:{
            increment(state){
                state.count++;
            }
        },
        getters:{
            doneTodos(state){
                return state.todos.filter(todo => todo.done)
            },
            doneTodosCount (state,getters){
                return getters.doneTodos.length
            }
        }
    }
)

export default store;
