import { Marquee } from "@/components/ui/marquee";

const reviews = [
  {
    img: "/assets/featured/dailyhunt.png",
  },
  {
    img: "/assets/featured/districtnews.png",
  },
  {
    img: "/assets/featured/forbesnews.png",
  },
  {
    img: "/assets/featured/primebulletin.png",
  },
  {
    img: "/assets/featured/primenews.png",
  },
];

const Row = reviews.slice(0, reviews.length);

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <img className="rounded-full" width="150" height="100" alt="featured logo" src={img} />
  );
};

export default function Featured() {
  return (
    <div className="py-5">
      <h1 className="text-center pb-5 font-bold text-2xl">Featured On</h1>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {Row.map((review, i) => (
            <ReviewCard key={i} {...review} />
          ))}
        </Marquee>
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
      </div>
    </div>
  );
}
