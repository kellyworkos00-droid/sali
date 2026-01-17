export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-20 h-20 mx-auto mb-6">
          <div className="absolute inset-0 border-4 border-brand-200 border-t-transparent rounded-full animate-spin"></div>
        </div>
        <p className="text-brand-600 text-lg font-semibold">Loading...</p>
      </div>
    </div>
  );
}
