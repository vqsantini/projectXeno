export function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="content-section">
      <h3>{title}</h3>
      {children}
    </section>
  );
}