import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import News from "./pages/News";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";
import Edit from "./pages/Edit";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <BrowserRouter>
          <div className="flex min-h-screen flex-col">
            {/* <Header /> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/news" element={<News />} />
                <Route path="/contact" element={<Contact />} />
              <Route element={<PrivateRoute/>}>
                <Route path="/admin" element={<Admin />} />
                <Route path="/edit/:id" element={<Edit />} />
              </Route>
              <Route path="/login" element={<Login />} >

              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
            {/* <Footer /> */}
          </div>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
