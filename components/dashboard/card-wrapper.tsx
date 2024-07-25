export default function CardWrapper({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <div className="w-full max-w-[400px] rounded-[20px] bg-black/5 py-6 px-6 sm:px-8 font-inria mb-5">
      <h1 className="text-primary-blue48 text-xl sm:text-2xl font-lilita mb-2">
        {title}
      </h1>
      {children}
    </div>
  );
}
