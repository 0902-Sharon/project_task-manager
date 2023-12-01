import React from 'react';

import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ClerkProvider, RedirectToSignIn, SignIn, SignUp, SignedIn, SignedOut} from "@clerk/clerk-react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

const clerkPubKey = "pk_test_cHJlY2lvdXMtd2Fob28tMzguY2xlcmsuYWNjb3VudHMuZGV2JA";
const ClerkWithRoutes = () => {
  const navigate = useNavigate();

  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      navigate={(to) => navigate(to)}
    >
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/sign-in/*"
          element={<SignIn redirectUrl={'/'} routing="path" path="/sign-in" />}
        />
        <Route
          path="/sign-up/*"
          element={<SignUp redirectUrl={'/'} routing="path" path="/sign-up" />}
        />
        <Route
          path="/"
          element={
            <>
            <SignedIn>
              <App />
            </SignedIn>
             <SignedOut>
              <RedirectToSignIn />
           </SignedOut>
            </>
          }
        />
      </Routes>
    </ClerkProvider>
  );
};
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ClerkWithRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
