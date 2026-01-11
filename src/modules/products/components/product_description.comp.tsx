

const ProductDescriptionComp = () => {
  return (
    <div className="space-y-10">
      {/* Product Description */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Product Description
        </h2>
        <div className="space-y-2 text-gray-600 leading-relaxed">
          <p>
            Headrest, Height and Angle adjustable: Multi position headrest
            height adjustable with angle tilt feature for optimum head to neck
            support.
          </p>
          <p>
            Adjustable Lumbar Support: Height adjustable Lumbar support system
            to provide adequate lower back support.
          </p>
          <p>Single Angle Locking knee tilt Mechanism.</p>
          <p>
            Height adjustable armrest: The height adjustment allows you put your
            arms at the perfect 90-100 degree angle.
          </p>
          <p>
            Relieve any strains or pains in your back from working all day with
            this stunning Office Chair.
          </p>
        </div>
      </div>

      {/* Key Features */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Key Features
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>Durable</li>
          <li>Reliable</li>
          <li>Easy to assemble</li>
          <li>High quality</li>
          <li>High density leather</li>
        </ul>
      </div>
    </div>
  );
}

export default ProductDescriptionComp
