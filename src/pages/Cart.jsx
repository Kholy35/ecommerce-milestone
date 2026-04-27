function Cart() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 text-center">
      <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <p className="text-gray-600">
          Your cart is currently empty.
        </p>
      </div>
    </section>
  );
}

export default Cart;