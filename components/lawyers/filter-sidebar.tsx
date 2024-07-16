export default function FilterSidebar(): React.JSX.Element {
  return (
    <div className="max-w-[308px] w-full font-inria">
      <div className="flex items-end">
        <h4 className="font-lilita text-xl text-primary-dark1E">Filters</h4>
        <span className="px-1 cursor-pointer hover:underline underline-offset-2 duration-30">Clear All</span>
      </div>
    </div>
  );
}
