import { RouteContent, routes, useRouter } from "./router";
import "./style.css";

export function App() {
  const { route, navigate } = useRouter();

  return (
    <div className="site-shell">
      <header className="site-header">
        <a
          className="brand"
          href="/"
          onClick={(event) => navigate(event, "/")}
        >
          <span className="brand-mark">P</span>
          <span>Personal space</span>
        </a>
        <nav aria-label="Main navigation" className="main-nav">
          {routes.map(({ path, label }) => (
            <a
              aria-current={route === path ? "page" : undefined}
              className="nav-link"
              href={path}
              key={path}
              onClick={(event) => navigate(event, path)}
            >
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main className="page-content">
        <RouteContent route={route} onNavigate={navigate} />
      </main>
    </div>
  );
}
