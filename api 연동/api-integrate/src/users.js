import React, { useState } from "react";
import { User } from "./User";
import { getUsers, useUsersDispatch, useUsersState } from "./UsersContext";

export const Users = () => {
   const state = useUsersState();
   const dispatch = useUsersDispatch();
   const [userId, setUserId] = useState(0);
   const { data: users, loading, error } = state.users;
   const fetchData = () => {
      getUsers(dispatch);
   };

   if (loading) return <div>로딩중..</div>;
   if (error) return <div>에러가 발생했습니다</div>;
   if (!users) return <button onClick={fetchData}>불러오기</button>;

   return (
      <>
         <ul>
            {users.map((user) => (
               <li key={user.id} onClick={() => setUserId(user.id)}>
                  {user.username} ({user.name})
               </li>
            ))}
         </ul>
         <button onClick={fetchData}>다시</button>
         <br />
         {userId && <User id={userId}></User>}
      </>
   );
};
