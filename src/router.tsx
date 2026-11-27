import { useEffect, useState, type MouseEvent } from "react";
import { AboutPage } from "./pages/AboutPage";
import { HomePage } from "./pages/HomePage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { ProfilePage } from "./pages/ProfilePage";

export const routes = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/profile", label: "Profile" },
  { path: "/portfolio", label: "Portfolio" },
] as const;

export type Route = (typeof routes)[number]["path"];

type Navigate = (event: MouseEvent<HTMLAnchorElement>, path: Route) => void;

function getRoute(pathname: string): Route {
  const path = pathname.replace(/\/+$/, "") || "/";
  return routes.some((route) => route.path === path) ? (path as Route) : "/";
}

export function useRouter() {
  const [route, setRoute] = useState(() => getRoute(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => setRoute(getRoute(window.location.pathname));
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  function navigate(event: MouseEvent<HTMLAnchorElement>, path: Route) {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();
    window.history.pushState(null, "", path);
    setRoute(path);
  }

  return { route, navigate };
}

type RouteContentProps = {
  route: Route;
  onNavigate: Navigate;
};

export function RouteContent({ route, onNavigate }: RouteContentProps) {
  if (route === "/") {
    return (
      <HomePage
        onPortfolioClick={(event) => onNavigate(event, "/portfolio")}
      />
    );
  }

  if (route === "/about") {
    return <AboutPage />;
  }

  if (route === "/profile") {
    return <ProfilePage />;
  }

  return <PortfolioPage />;
}
