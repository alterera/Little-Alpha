import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="w-full bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-16">
        <div className="py-8">
          <Skeleton className="h-6 w-40 mb-3" />
          <Skeleton className="h-10 w-80 mb-4" />
          <Skeleton className="h-5 w-3/4 max-w-2xl" />
        </div>
        <div className="flex flex-wrap gap-3 mb-8">
          {Array.from({ length: 6 }).map((_, idx) => (
            <Skeleton key={idx} className="h-10 w-24 rounded-full" />
          ))}
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {Array.from({ length: 12 }).map((_, idx) => (
            <Skeleton key={idx} className="w-full h-64 rounded-2xl" />
          ))}
        </div>
      </div>
    </div>
  );
}

