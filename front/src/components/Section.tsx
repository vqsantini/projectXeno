export function Section({ id, title, children}: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="bg-white rounded-2xl shadow-md p-8 my-8">
      <h3 className="text-2xl font-bold text-indigo-900 mb-4">{title}</h3>
      {children}
    </section>
  );
}