import {createStore} from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    todoList: [],
    filter: "all",
  },
  /* Modüller sayesinde store.js dosyasını çok büyük hale getirmeden dışarıdaki dosyaları buraya dahil edebiliriz.
  modules: {
    xyz,
    abc
  },
  */
  //? Mutasyonlar anlık olarak state değişikliklerini yapar. Senkron çalışır.
  mutations:{
    getTodos(state, todo){
      state.todoList = todo;
    },
    setFilter(state, filter){
      state.filter = filter
    }
  },
  //? Actionlar asenkron olarak çalışır. Mutasyonları çağırır.
  actions:{
    // 1. parametre olarak context alır. Bu context içerisinde commit, dispatch, state, getters gibi özellikler vardır.

    async fetchTodosAction({commit}, todo){
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
    commit("getTodos", response.data)

    }
  },
  getters:{
    _getTodos(state){
      if(state.filter === "all"){
        return state.todoList
    }else if (state.filter === "completed"){
      return state.todoList.filter(todo => todo.completed)
    } else {
      return state.todoList.filter(todo => !todo.completed)}
    }
  }
})
export  default  store