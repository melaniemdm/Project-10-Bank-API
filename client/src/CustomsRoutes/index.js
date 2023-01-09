import { HashRouter as Router, Route, Routes } from "react-router-dom";
import SignInPage from '../pages/Sign-InPage';
import Accueil from '../pages/Accueil';
import User from '../pages/User';
import Header from '../components/Header';
import Footer from '../components/Footer';
export default function CustomsRoutes() {
return (
    <Router>
      <Header />
 <Routes>
        <Route exact path="/signin" element={<SignInPage />} />
        <Route exact path="/" element={<Accueil />} />
        <Route exact path="/user" element={<User />} />
      </Routes>
      <Footer />
</Router>
);

}