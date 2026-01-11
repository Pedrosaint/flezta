import { reviews } from "../data/products.data";
import { RiStarFill } from "react-icons/ri";
import useProductReviewHook from "../hook/useProductReview.hook";

const ProductReviewComp = () => {
  const { ratingBreakdown, totalReviews, averageRating } =
    useProductReviewHook();

  return (
    <div className="w-full max-w-7xl">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Product Review
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Rating Summary - Left Column */}
          <div className="lg:col-span-1">
            <div className="border-2 border-dashed border-gray-300 rounded-3xl p-8">
              {/* Average Rating */}
              <div className="flex justify-start items-center gap-3 text-center mb-6">
                <div className="text-5xl font-medium text-gray-900 mb-2">
                  {averageRating.toFixed(1)}
                </div>
                <div>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <RiStarFill
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(averageRating)
                            ? "fill-[#E3C20B] text-[#E3C20B]"
                            : "fill-gray-200 text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">
                    {totalReviews} verified ratings
                  </p>
                </div>
              </div>

              {/* Rating Breakdown */}
              <div className="space-y-3">
                {ratingBreakdown.map((item) => (
                  <div key={item.stars} className="flex items-center gap-3">
                    <div className="flex items-center gap-1 w-16">
                      <span className="text-sm text-gray-700">
                        {item.stars} star
                      </span>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      {[...Array(5)].map((_, i) => (
                        <RiStarFill
                          key={i}
                          className={`w-4 h-4 ${
                            i < item.stars
                              ? "fill-[#E3C20B] text-[#E3C20B]"
                              : "fill-gray-200 text-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#F8902E] rounded-full"
                        style={{
                          width: `${(item.count / totalReviews) * 100}%`,
                        }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 w-8 text-right">
                      ({item.count})
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Reviews List - Right Column */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Verified Customer Reviews - ({totalReviews})
            </h3>

            <div className="space-y-6">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="pb-6 border-b border-gray-200 last:border-0"
                >
                  <div className="flex items-start gap-4">
                    {/* Avatar */}
                    <div className="w-12 h-12 bg-gray-300 rounded-full shrink-0" />

                    {/* Review Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">
                          {review.name}
                        </h4>
                        {review.rating > 0 && (
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <RiStarFill
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating
                                    ? "fill-[#E3C20B] text-[#E3C20B]"
                                    : "fill-gray-200 text-gray-200"
                                }`}
                              />
                            ))}
                          </div>
                        )}
                      </div>

                      {review.rating > 0 && (
                        <div className="flex items-center gap-1 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <RiStarFill
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating
                                  ? "fill-[#E3C20B] text-[#E3C20B]"
                                  : "fill-gray-200 text-gray-200"
                              }`}
                            />
                          ))}
                        </div>
                      )}

                      <p className="text-sm text-gray-500 mb-3">
                        {review.date}
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        {review.comment}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductReviewComp;
