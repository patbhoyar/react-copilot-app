export function PortfolioPage() {
  return (
    <section className="page-section">
      <p className="eyebrow">SELECTED PROJECTS</p>
      <h1>Portfolio</h1>
      <p className="page-lead">
        A few small projects that show how I like to solve problems.
      </p>
      <div className="project-grid">
        <article className="info-card">
          <span className="project-number">01</span>
          <h2>Daily Notes</h2>
          <p>A calm, simple space for capturing and finding ideas.</p>
        </article>
        <article className="info-card">
          <span className="project-number">02</span>
          <h2>Local Guide</h2>
          <p>A community-curated guide to neighborhood favorites.</p>
        </article>
        <article className="info-card">
          <span className="project-number">03</span>
          <h2>Little Metrics</h2>
          <p>A friendly dashboard that makes progress easy to see.</p>
        </article>
      </div>
    </section>
  );
}
