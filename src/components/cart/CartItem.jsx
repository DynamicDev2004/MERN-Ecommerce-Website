import { FiTrash2 } from "react-icons/fi";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function CartItem({
  image,
  title,
  price,
  quantity,
  onIncrease,
  onDecrease,
  onRemove,
}) {
  return (
    <div className="flex gap-3 p-2 border rounded-xl">
      {/* Product Image */}
      <img
        src={image}
        alt={title}
        className="w-20 h-20 object-cover rounded-lg"
      />

      {/* Info */}
      <div className="flex-1">
        <h4 className="text-sm font-medium line-clamp-2">
          {title}
        </h4>

        <div className="mt-1 text-sm font-semibold">
          Rs {price}
        </div>

        {/* Quantity Controls */}
        <div className="mt-2 flex items-center gap-2">
          <button
            onClick={onDecrease}
            className="w-7 h-7 flex items-center justify-center border rounded-full"
          >
            <AiOutlineMinus size={12} />
          </button>

          <span className="text-sm">{quantity}</span>

          <button
            onClick={onIncrease}
            className="w-7 h-7 flex items-center justify-center border rounded-full"
          >
            <AiOutlinePlus size={12} />
          </button>
        </div>
      </div>

      {/* Remove */}
      <button
        onClick={onRemove}
        className="text-gray-400 hover:text-red-500"
      >
        <FiTrash2 size={18} />
      </button>
    </div>
  );
}
