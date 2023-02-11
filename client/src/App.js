import AuthProvider from "./Authentication/AuthProvider";
import AppRouter from "./Routers/AppRouter";
import { Store } from "./Helpers/Store";

function App() {
  return (
    <div>
      <AuthProvider store={Store}>
        <AppRouter />
      </AuthProvider>
    </div>
  );
}

export default App;
