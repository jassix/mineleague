import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from '../components/UI/navbar/Navbar';

import MainPage from "../pages/maingape/MainPage";
import RatingPage from '../pages/rating/Rating'
import AddMatchPage from "../pages/supports/addmatch/AddMatch";
import SoftwarePage from "../pages/supports/software/Software"
import ForbiddenPage from "../pages/forbidden/Forbidden";
import RulesPage from "../pages/rules/Rules";
import SocialsPage from "../pages/socials/Socials";

const RouterItems = () => {
    return(
        <BrowserRouter>
            <Navbar/>
            <main>
                <Routes>
                    <Route path="/" element={<MainPage/>} />
                    <Route path="/rating" element={<RatingPage/>} />
                    <Route path="/support/addmatch" element={<ForbiddenPage/>} />
                    <Route path="/support/software" element={<SoftwarePage/>} />
                    <Route path="/rules" element={<RulesPage/>} />
                    <Route path="/socials" element={<SocialsPage/>} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}

export default RouterItems;