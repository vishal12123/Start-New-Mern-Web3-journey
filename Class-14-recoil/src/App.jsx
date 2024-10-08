import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationsAtom,
  totalNotificationSelector,
} from "./atoms/atoms";
import { RecoilRoot, useRecoilValue, useRecoilState } from "recoil";
import { useMemo } from "react";
function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationsAtomCount = useRecoilValue(notificationsAtom);
  const [messagingAtomCount, setMessagingAtomCount] =
    useRecoilState(messagingAtom);

  // Rerendering problem so use  useMemo to prevent rerendering and one more way to prevent this is selector in recoil;

  // const totalNotificationCount =
  //   networkNotificationCount +
  //   jobsAtomCount +
  //   notificationsAtomCount +
  //   messagingAtomCount;

  // const totalNotificationCount = useMemo(() => {
  //   return (
  //     networkNotificationCount +
  //     jobsAtomCount +
  //     notificationsAtomCount +
  //     messagingAtomCount
  //   );
  // }, [
  //   networkNotificationCount,
  //   jobsAtomCount,
  //   notificationsAtomCount,
  //   messagingAtomCount,
  // ]);


  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <>
      <button>Home</button>
      <button>
        My Network (
        {networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
      </button>
      <button>Jobs ({jobsAtomCount})</button>
      <button>Messeging ({messagingAtomCount})</button>
      <button>Notifications ({notificationsAtomCount})</button>
      {/* <button onClick={() =>
      setMessagingAtomCount(messagingAtomCount+1)}>Me</button> */}

      <button>Me ({totalNotificationCount})</button>
    </>
  );
}

export default App;
