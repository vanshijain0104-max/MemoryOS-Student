import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Inbox from "./pages/Inbox";
import Timeline from "./pages/Timeline";
import Collections from "./pages/Collections";
import Settings from "./pages/Settings";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">

        <Sidebar />

        <div className="main-area">

          <Header />

          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/inbox" element={<Inbox />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/collections" element={<Collections />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>

        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;