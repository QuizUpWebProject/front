import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  BackMain,
  FrontMain,
  JoinAgree,
  JoinEnd,
  JoinFormP,
  Login,
  Main,
  StudyMain,
  StudyMake,
  StudyRoom,
  StudyWork,
  User,
  Work,
  WorkAnswer,
  WorkBook,
} from "../pages";
import Header from "./Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/joinagree" element={<JoinAgree />} />
        <Route path="/joinform" element={<JoinFormP />} />
        <Route path="/joinend" element={<JoinEnd />} />
        <Route path="/:userid" element={<User />} />
        <Route path="/front" element={<FrontMain />} />
        <Route path="/back" element={<BackMain />} />
        <Route path="/:workbookid" element={<WorkBook />} />
        <Route path="/:workId" element={<Work />} />
        <Route path="/:workanswer" element={<WorkAnswer />} />
        <Route path="/study" element={<StudyMain />} />
        <Route path="/:studyroomId" element={<StudyRoom />} />
        <Route path="/:studyworkId" element={<StudyWork />} />
        <Route path="/studymake" element={<StudyMake />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
