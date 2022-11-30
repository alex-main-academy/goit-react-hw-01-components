import Profile from "./Profile/Profile";
import user from '../user'

export const App = () => {
  return (
    <>
      <Profile data={user}/>
    </>
  );
};
