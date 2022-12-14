import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import Main from "./containers/Main";
import { store, persistor } from "./redux/store";


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
}

export default App;
