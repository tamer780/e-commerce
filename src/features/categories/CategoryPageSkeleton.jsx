import Skeleton from "../../components/UI/Skeleton";

export default function CategoryPageSkeleton() {
  return (
    <div className="container-custom py-10">
      <header className="mb-10">
        <Skeleton className="h-10 w-64 mb-2" />
        <Skeleton className="h-1.5 w-20" />
      </header>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="flex flex-col gap-4">
            <Skeleton className="aspect-square w-full rounded-xl" />

            <Skeleton className="h-3 w-16" />

            <Skeleton className="h-5 w-3/4" />

            <div className="flex justify-between items-center mt-2">
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-4 w-12" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
