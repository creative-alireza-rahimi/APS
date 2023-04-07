import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"
import { UITabs } from "./components/UITabs/UITabs";
import { Authentication } from "./Authentication/Authentication";
import { useSelector } from 'react-redux'

export default function App() {
  const isAuth = useSelector((state) => state.auth.isAuth)

  return (
    <>
      <Header />

      {isAuth ? <UITabs /> : <Authentication isAuth />}

      <Footer />
    </>
  );
}