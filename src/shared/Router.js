import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  BackAnswer,
  BackMain,
  BackWork,
  BackWorkList,
  FrontAnswer,
  FrontMain,
  FrontWork,
  FrontWorkList,
  JoinAgree,
  JoinEnd,
  JoinFormP,
  Login,
  Main,
  StudyMain,
  StudyMake,
  StudyRoom,
  StudyWork,
  StudyWorkAnswer,
  User,
  WorkMake,
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
        <Route path="/:userEmail" element={<User />} />
        <Route path="/workmake" element={<WorkMake />} />
        <Route path="/front" element={<FrontMain />} />
        <Route path="/front/:worklistid" element={<FrontWorkList />} />
        <Route path="/front/:worklistid/:workid" element={<FrontWork />} />
        <Route
          path="/front/:worklistid/:workid/answer"
          element={<FrontAnswer />}
        />
        <Route path="/back" element={<BackMain />} />
        <Route path="/back/:worklistid" element={<BackWorkList />} />
        <Route path="/back/:worklistid/:workid" element={<BackWork />} />
        <Route
          path="/back/:worklistid/:workid/answer"
          element={<BackAnswer />}
        />
        <Route path="/study" element={<StudyMain />} />
        <Route path="/study/:studyroomid" element={<StudyRoom />} />
        <Route path="/study/:studyroonid/worklistid" element={<StudyWork />} />
        <Route
          path="/study/:studyroonid/worklistid/answer"
          element={<StudyWorkAnswer />}
        />
        <Route path="/studymake" element={<StudyMake />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
