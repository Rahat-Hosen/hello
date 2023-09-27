import Button from "components/Button";
import Badge from "components/ui/Badge";

export const FadeIn = () => {
  return (
    <p className="opacity-0 group-hover:animate-fade-in">Welcome to my blog</p>
  );
};

export const SlideIn = () => {
  return (
    <div className="h-32 w-52 translate-y-1/2 transform rounded-xl bg-neutral-500 transition-transform duration-500 ease-in-out hover:translate-y-0">
      <img
        src="https://images.unsplash.com/photo-1694684677360-5cb0841ec36e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=108&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NTgwNjYxNA&ixlib=rb-4.0.3&q=80&w=208"
        className="h-full w-full rounded-xl object-cover"
      />
    </div>
  );
};

export const Rotate = () => {
  return (
    <div className="h-12 w-12 animate-rotate-360 rounded-full border-b-2 border-t-2 border-neutral-600 dark:border-neutral-400" />
  );
};

export const Scale = () => {
  return (
    <button className="scale-100 rounded-2xl bg-neutral-800 px-2 py-1 text-neutral-50 transition-transform duration-500 hover:scale-125">
      Hover me
    </button>
  );
};
