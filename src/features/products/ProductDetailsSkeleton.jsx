import Skeleton from "../../components/UI/Skeleton";

export default function ProductDetailsSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="space-y-4">
        <Skeleton className="aspect-square w-full rounded-2xl" />
        <div className="flex gap-4">
          <Skeleton className="w-20 h-20" />
          <Skeleton className="w-20 h-20" />
          <Skeleton className="w-20 h-20" />
          <Skeleton className="w-20 h-20" />
        </div>
      </div>

      <div className="flex flex-col gap-6 pt-2">
        <div className="space-y-3">
          <Skeleton className="h-6 w-24 rounded-full" />
          <Skeleton className="h-10 w-3/4" />
          <Skeleton className="h-4 w-40" />
        </div>

        <div className="flex items-end gap-3 mt-4">
          <Skeleton className="h-12 w-32" />
          <Skeleton className="h-6 w-16" />
        </div>

        <div className="space-y-4 mt-8">
          <div className="space-y-2">
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-5 w-24" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>

        <div className="flex gap-4 pt-10 border-t mt-auto">
          <Skeleton className="flex-1 h-14 rounded-xl" />
          <Skeleton className="w-14 h-14 rounded-xl" />
        </div>
      </div>
    </div>
  );
}
