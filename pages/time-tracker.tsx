import { PlayIcon, PauseIcon, Cross2Icon } from "@radix-ui/react-icons";
import { NextSeo } from "next-seo";
import { Input } from "components/ui/Input";
import { useEffect, useState } from "react";
import Button from "components/ui/Button";

interface TimeTracking {
  name: string;
  time: number;
  isPlaying: boolean;
}

const TimeTracker = () => {
  const [trackings, setTrackings] = useState<TimeTracking[]>([
    { name: "", time: 0, isPlaying: false },
  ]);

  const formatTime = (time: number): string => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return [
      hours > 0 ? String(hours).padStart(2, "0") : null,
      String(minutes).padStart(2, "0"),
      String(seconds).padStart(2, "0"),
    ]
      .filter(Boolean)
      .join(":");
  };

  useEffect(() => {
    const intervals = trackings.map((tracking, index) => {
      if (tracking.isPlaying) {
        return setInterval(() => {
          setTrackings((prev) =>
            prev.map((t, i) => (i === index ? { ...t, time: t.time + 1 } : t))
          );
        }, 1000);
      }
      return null;
    });

    return () =>
      intervals.forEach((interval) => interval && clearInterval(interval));
  }, [trackings]);

  const addNewTracking = () => {
    setTrackings((prev) => [...prev, { name: "", time: 0, isPlaying: false }]);
  };

  const removeTracking = (index: number) => {
    setTrackings((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      <NextSeo title="Time Tracker" />
      <h1 className="h1 mb-6">Time Tracker (WIP)</h1>
      <p>A simple tool I use to track the hours spent on each project.</p>

      <div className="mt-12">
        {trackings.map((tracking, index) => (
          <div key={index} className="mb-4 flex max-w-md items-center">
            <Input
              value={tracking.name}
              onChange={(e) => {
                const name = e.target.value;
                setTrackings((prev) =>
                  prev.map((t, i) => (i === index ? { ...t, name } : t))
                );
              }}
              placeholder="Name your task"
              className="mr-4"
            />
            <div className="mr-4">{formatTime(tracking.time)}</div>
            <div
              onClick={() => {
                setTrackings((prev) =>
                  prev.map((t, i) =>
                    i === index ? { ...t, isPlaying: !t.isPlaying } : t
                  )
                );
              }}
              className="mr-4 flex w-24 cursor-pointer items-center justify-center"
            >
              {tracking.isPlaying ? (
                <PauseIcon className="h-4 w-4 text-black dark:text-white" />
              ) : (
                <PlayIcon className="h-4 w-4 text-black dark:text-white" />
              )}
            </div>
            <div
              onClick={() => removeTracking(index)}
              className="ml-4 cursor-pointer"
            >
              <Cross2Icon />
            </div>
          </div>
        ))}
        <div className="mt-8">
          <Button onClick={addNewTracking}>Add New Task</Button>
        </div>
      </div>
    </>
  );
};

export default TimeTracker;
