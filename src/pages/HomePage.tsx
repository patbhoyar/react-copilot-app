import type { MouseEvent } from "react";
import { config } from "../config";

type HomePageProps = {
  onPortfolioClick: (event: MouseEvent<HTMLAnchorElement>) => void;
};

export function HomePage({ onPortfolioClick }: HomePageProps) {
  return (
    <section className="hero">
      <p className="eyebrow">WELCOME Fraandz!</p>
      <h1 className="huge-text">
        {config.appName} - {config.environment}!!!!
      </h1>
      <p className="hero-description">
        A little corner of the web to share who I am and what I make.
      </p>
      <a className="primary-link" href="/portfolio" onClick={onPortfolioClick}>
        Explore my work <span aria-hidden="true">→</span>
      </a>
    </section>
  );
}
