type HouseCardProps = {
  imageUrl: string;
  title: string;
  price: string;
  beds: number;
  baths: number;
  size: string;
  address: string;
};

export default function HouseCard({
  imageUrl,
  title,
  price,
  beds,
  baths,
  size,
  address,
}: HouseCardProps) {
  return (
    <div className="flex bg-[#e7e9c5] rounded-xl border-[1.5px] border-black p-2 w-[280px] max-w-md items-center gap-2">
      <img
        src={imageUrl}
        alt={title}
        className="w-[100px] h-[100px] object-cover rounded-lg"
      />

      <div className="flex-1 flex flex-col gap-1">
        <div className="flex justify-between items-start">
          <h3 className="text-[14px] text-black">{title}</h3>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-red-600 font-bold text-[1rem]">{price}</span>
          <button className="bg-green-300 text-black px-3 py-[2px] rounded-md shadow-sm text-sm">
            View Detail
          </button>
        </div>

        <div className="text-gray-500 text-sm">
          {beds} beds | {baths} baths | {size}
        </div>

        <div className="text-[#6b8e9e] text-sm">{address}</div>
      </div>
    </div>
  );
}
