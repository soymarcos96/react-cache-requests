interface DemoSectionProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export default function Section({
  title,
  description,
  children,
}: DemoSectionProps) {
  return (
    <section className="bg-white shadow rounded-2xl p-6 space-y-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <div className="border-t pt-4">{children}</div>
    </section>
  );
}
