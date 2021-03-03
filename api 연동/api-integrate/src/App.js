import { Users } from "./users";
import { UsersProvider } from "./UsersContext";

function App() {
   return (
      <UsersProvider>
         <Users />
      </UsersProvider>
   );
}

export default App;
