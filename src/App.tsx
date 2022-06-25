import React, { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

import "./App.css";
import Footer from "./containers/Footer";
import Header from "./containers/Header";
import MainPage from "./pages/MainPage";

// test
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <BrowserRouter>
          <Header />
          <div className="App">
            <div className="bg-secondary-1 flex items-center min-h-screen bg-white dark:bg-gray-900">
              <div className="container max-w-screen-lg xl:max-w-screen-xl mx-auto">
                <div className="max-w-md mx-auto my-10 w-full">
                  <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/myPage" element={<MainPage />} />
                  </Routes>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
