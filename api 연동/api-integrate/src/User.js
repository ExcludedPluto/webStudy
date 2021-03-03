import React, { useEffect } from "react";
import { getUser, useUsersDispatch, useUsersState } from "./UsersContext";

export const User = ({ id }) => {
   const state = useUsersState();
   const dispatch = useUsersDispatch();

   useEffect(() => {
      getUser(dispatch, id);
   }, [dispatch, id]);

   const { data: user, loading, error } = state.user;

   if (loading) return <div>로딩중...</div>;
   if (error) return <div>에러</div>;
   if (!user) return null;

   return (
      <>
         {user.username} ({user.name})
      </>
   );
};
