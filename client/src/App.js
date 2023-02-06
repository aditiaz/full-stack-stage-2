import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

import Navbars from "./components/Navbars";

import PrivateRoute from "./components/PrivateRoute";
import PrivateRouteAdmin from "./components/PrivateRouteAdmin";

import PageNotFound from "./pages/Error";

import Home from "./pages/Home";
import DetailProperty from "./pages/DetailProperty";
import Profile from "./pages/Profile";
import MyBooking from "./pages/MyBooking";
import MyBookingPending from "./pages/MyBookingPending";
import History from "./pages/History";

import IncomingTransaction from "./pages/owner/Incoming Transaction";
import HistoryIncome from "./pages/owner/HistoryIncome";
import AddProperty from "./pages/owner/AddProperty";

function App() {
  return (
    <>
      <Navbars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail-property/:id" element={<DetailProperty />} />

        <Route path="/" element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/booking/:id" element={<MyBooking />} />
          <Route path="/booking-pending/:id" element={<MyBookingPending />} />
          <Route path="/history" element={<History />} />
        </Route>

        <Route path="/owner" element={<PrivateRouteAdmin />}>
          <Route path="/owner" element={<IncomingTransaction />} />
          <Route path="/owner/profile" element={<Profile />} />
          <Route path="/owner/history-income" element={<HistoryIncome />} />
          <Route path="/owner/add-property" element={<AddProperty />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
