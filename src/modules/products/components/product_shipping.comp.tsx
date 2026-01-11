

const ProductShippingComp = () => {
  return (
    <div className="w-full max-w-5xl">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Shipping & Return
        </h2>

        {/* Delivery Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Delivery</h3>
          <p className="text-gray-700 leading-relaxed">
            Delivery time starts from the day you place your order to the day
            one of our associates makes a first attempt to deliver to you.
            Delivery will be attempted 2 times over 5 days (7.00 am to 5.30 pm)
            after which the item will be cancelled, if you are unreachable or
            unable to receive the order.
          </p>
        </div>

        {/* Return Policy Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Return Policy
          </h3>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Subject to the rules set out in this Returns and Refunds Policy,
              sellers on our platform offer returns for most items within 7 days
              post delivery. We do not accept returns, for any reason
              whatsoever, after the returns period has lapsed. This does not
              affect your legal rights against the seller.
            </p>
            <p>
              You may return items purchased on FLEZTA within the returns
              period, for the reasons listed below:
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default ProductShippingComp