import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Universities } from "./pages/Universities";
import { UniversityDetails } from "./pages/UniversityDetails";
import { Services } from "./pages/Services";
import { ReferralProgram } from "./pages/ReferralProgram";
import { CompareUniversities } from "./pages/CompareUniversities";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Root,
      children: [
        { index: true, Component: Home },
        { path: "about", Component: About },
        { path: "universities", Component: Universities },
        { path: "universities/:id", Component: UniversityDetails },
        { path: "services", Component: Services },
        { path: "referral-program", Component: ReferralProgram },
        { path: "compare-universities", Component: CompareUniversities },
        { path: "contact", Component: Contact },
      ],
    },
  ],
  {
    /* This basename logic detects if the app is running in the GitHub subfolder 
       or at the root (Vercel/Local). It prevents the "No routes matched" error.
    */
    basename: window.location.pathname.includes("/shreemargedu")
      ? "/shreemargedu"
      : "/",
  }
);