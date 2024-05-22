type Props = { pageNumber: number; onPrev: () => void; onNext: () => void };

const Pagination = ({ pageNumber, onPrev, onNext }: Props) => {
  return (
    <div className="flex text-dark-slate-gray/80 items-center gap-3">
      <button
        onClick={onPrev}
        className="p-3 hover:border-dark-slate-gray/45 duration-200 transition-colors border border-dark-slate-gray/15 rounded-lg"
      >
        Prev
      </button>
      <div className="py-3 min-w-10 bg-orange-peel text-white px-4 border border-dark-slate-gray/15 rounded-lg">
        {pageNumber}
      </div>
      <button
        onClick={onNext}
        className="p-3 hover:border-dark-slate-gray/45 duration-200 transition-colors border border-dark-slate-gray/15 rounded-lg"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
