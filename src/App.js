import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import SignIn from "./pages/SignIn";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from "./components/PrivateRoute";
import Footer from "./components/Footer";
import Listings from "./pages/Listings";
import EditListing from "./pages/EditListing";
import CreateListing from "./pages/CreateListing";
import Category from "./pages/Category";

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}> </Route>
          <Route path="/forgot-password" element={<ForgotPassword/>}> </Route>
          <Route path="/sign-in" element={<SignIn/>}> </Route>
          <Route path="/offers" element={<Offers/>}> </Route>
          <Route path="/profile" element={<PrivateRoute/>}> 
            <Route path="/profile" element={<Profile/>}> </Route>
          </Route>
          <Route path="/sign-up" element={<SignUp/>}> </Route>
          <Route path="/create-listing" element={<PrivateRoute/>}>
             <Route path="/create-listing" element={<CreateListing/>}> </Route>
          </Route>
          <Route path="edit-listings" element={<PrivateRoute/>}>
             <Route path="/edit-listings/:listingId" element={<EditListing/>}> </Route>
          </Route>
          <Route path="/category/:categoryName/:listingId" element={<Listings/>}> </Route>
          <Route path="/category/:categoryName/" element={<Category/>}> </Route>

          </Routes>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />  
       {/*<Footer/> */} 
    </>
  );
}

export default App;
