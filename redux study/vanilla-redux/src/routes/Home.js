import React, { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { add } from "../storeWithToolkit";

function Home({ todos, addTodo }) {
   const [text, setText] = useState("");
   function onChange(e) {
      setText(e.target.value);
   }
   function onSubmit(e) {
      e.preventDefault();
      addTodo(text);
      setText("");
   }
   return (
      <>
         <h1>To Do</h1>
         <form onSubmit={onSubmit}>
            <input type="text" value={text} onChange={onChange} />
            <button>Add</button>
         </form>
         <ul>
            {todos.map((toDo) => (
               <ToDo key={toDo.id} {...toDo}></ToDo>
            ))}
         </ul>
      </>
   );
}

function mapStateToProps(state) {
   return { todos: state };
}
function mapDispatchToProps(dispatch) {
   return {
      addTodo: (text) => dispatch(add(text)),
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
