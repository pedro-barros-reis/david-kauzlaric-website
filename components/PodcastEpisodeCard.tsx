"use client";

import Image from "next/image";

export const PodcastEpisodesCard = ({
  img,
  title,
  id,
  date,
  hasPlay,
}: {
  img: string;
  title: string;
  id: number;
  date: string;
  hasPlay: boolean;
}) => {
  const textColorClass = hasPlay ? "text-white" : "text-black";
  const textContainerClass = hasPlay
    ? "absolute bottom-0 left-0 right-0 p-6 z-20"
    : "mt-4";

  return (
    <a
      href="#"
      className={`flex flex-col group cursor-pointer relative overflow-hidden rounded-2xl ${textColorClass}`}
    >
      <div
        className={`relative w-full aspect-video bg-black rounded-2xl overflow-hidden ${hasPlay ? "relative h-86.75" : "aspect-video"}`}
      >
        <Image
          src={img}
          alt={title}
          width={380}
          height={hasPlay ? 347 : 212}
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {hasPlay && (
          <>
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent z-10 pointer-events-none" />
          </>
        )}
      </div>

      <div className={textContainerClass}>
        <p className="text-sm uppercase tracking-wider opacity-80 mb-2">
          EPISODE # {id} | {date}
        </p>
        <h3 className="text-2xl font-bold leading-tight">{title}</h3>
      </div>
    </a>
  );
};
