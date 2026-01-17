export default function ProductDetailLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb Skeleton */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-20"></div>
            <div className="h-4 bg-gray-200 rounded w-2"></div>
            <div className="h-4 bg-gray-200 rounded w-24"></div>
            <div className="h-4 bg-gray-200 rounded w-2"></div>
            <div className="h-4 bg-gray-200 rounded w-32"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 bg-white rounded-2xl shadow-lg p-6 md:p-8">
          {/* Image Skeleton */}
          <div className="animate-pulse">
            <div className="h-80 md:h-96 lg:h-[500px] bg-gray-200 rounded-xl"></div>
          </div>

          {/* Info Skeleton */}
          <div className="animate-pulse space-y-6">
            <div>
              <div className="h-6 bg-gray-200 rounded w-24 mb-3"></div>
              <div className="h-10 bg-gray-200 rounded w-3/4 mb-3"></div>
            </div>
            
            <div className="pb-6 border-b">
              <div className="h-12 bg-gray-200 rounded w-40 mb-2"></div>
              <div className="h-5 bg-gray-200 rounded w-32"></div>
            </div>

            <div className="pb-6 border-b">
              <div className="h-6 bg-gray-200 rounded w-32 mb-3"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            </div>

            <div className="h-12 bg-gray-200 rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
