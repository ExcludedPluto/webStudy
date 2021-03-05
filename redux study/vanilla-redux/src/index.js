import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addTodo = (text) => {
   return {
      type: ADD_TODO,
      text,
   };
};
const deleteTodo = (id) => {
   return {
      type: DELETE_TODO,
      id,
   };
};

const reducer = (state = [], action) => {
   switch (action.type) {
      case ADD_TODO:
         return [{ text: action.text, id: Date.now() }, ...state];
      case DELETE_TODO:
         return state.concat([]);
      default:
         return state;
   }
};

const store = createStore(reducer);

const dispatchAddToDo = (text) => {
   store.dispatch(addTodo(text));
};
const dispatchDeleteToDo = (e) => {
   store.dispatch(deleteTodo(e.target.parentNode.id));
};

const onSubmit = (e) => {
   e.preventDefault();
   const toDo = input.value;
   input.value = "";
   dispatchAddToDo(toDo);
};

const paintToDos = () => {
   const toDos = store.getState();

   ul.innerHTML = "";

   toDos.forEach((toDo) => {
      const btn = document.createElement("button");
      btn.innerText = "DEL";
      btn.addEventListener("click", dispatchDeleteToDo);

      const li = document.createElement("li");
      li.id = toDo.id;
      li.innerText = toDo.text;
      li.appendChild(btn);
      ul.appendChild(li);
   });
};

store.subscribe(paintToDos);

form.addEventListener("submit", onSubmit);
