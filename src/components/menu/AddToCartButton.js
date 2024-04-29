import FlyingButton from 'react-flying-item'

export default function AddToCartButton({
  hasQunatityTypeOrExtras, onClick, price, image
}) {
  if (!hasQunatityTypeOrExtras) {
    return (
      <div className="flying-button-parent mt-4">
        <FlyingButton
          targetTop={'5%'}
          targetLeft={'95%'}
          src={image}>
          <div onClick={onClick}>
            Add to cart ₹{price}
          </div>
        </FlyingButton>
      </div>
    );
  }
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-4 bg-primary text-white rounded-full px-8 py-2"
    >
      <span>Add to cart (from ₹{price})</span>
    </button>
  );
}