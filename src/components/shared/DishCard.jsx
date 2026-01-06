function DishCard({ image, name, description, rating, price }) {
  return (
    <div className="p-6 mb-8 border-l-4 border-slate-700 rounded-lg bg-slate-50">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-xs font-semibold uppercase text-slate-500">Dish</p>
          <h2 className="text-2xl font-bold text-slate-900">{name}</h2>
          <p className="text-sm text-slate-600 mt-1">{description}</p>
        </div>
        <div className="text-5xl opacity-30 flex-shrink-0">{image}</div>
        <div className="text-center flex-shrink-0">
          <p className="text-xs font-semibold uppercase text-slate-500">
            Price
          </p>
          <p className="text-2xl font-bold text-slate-900">{price}</p>
        </div>
      </div>
    </div>
  );
}

export default DishCard;
