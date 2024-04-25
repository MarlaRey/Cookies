import { useEffect, useState } from "react";
import style from "./CookieBanner.module.scss";
import ReactGA from "react-ga4";

export const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(true);

  // Tjek localStorage for cookieAccept ved komponentmontage
  useEffect(() => {
    setShowBanner(true); // Altid vis banneret ved load
    if (localStorage.getItem("cookieAccept")) {
      if (JSON.parse(localStorage.getItem("cookieAccept")) === true) {
        ReactGA.initialize("import.meta.env.VITE_PUBLIC_GA_ID"); 
      }
    }
  }, []);

  // accepter og sæt en local state og sporbegivenhed
  const accept = () => {
    localStorage.setItem("cookieAccept", true);
    setShowBanner(false);
    ReactGA.event({
      category: "Cookie Banner",
      action: "Accept",
    });
  };

  // afslå og sæt en local state og sporbegivenhed
  const deny = () => {
    localStorage.setItem("cookieAccept", false);
    setShowBanner(false);
    ReactGA.event({
      category: "Cookie Banner",
      action: "Deny",
    });
  };

  return (
    <>
      {showBanner && (
        <section className={style.cookieBanner}>
          <p>
            Denne side bruger cookies, er du med på den?
          </p>

          <div>
            <button onClick={() => accept()}>Accepter</button>
            <button onClick={() => deny()}>NEJ</button>
          </div>
        </section>
      )}
    </>
  );
};
