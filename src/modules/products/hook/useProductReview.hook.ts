const useProductReviewHook = () => {
  const ratingBreakdown = [
    { stars: 5, count: 10 },
    { stars: 4, count: 8 },
    { stars: 3, count: 2 },
    { stars: 2, count: 0 },
    { stars: 1, count: 0 },
  ];

  const totalReviews = ratingBreakdown.reduce(
    (sum, item) => sum + item.count,
    0
  );
  const averageRating = 4.0;

  return {
    ratingBreakdown,
    totalReviews,
    averageRating,
  };
};

export default useProductReviewHook;
