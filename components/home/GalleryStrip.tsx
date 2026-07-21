import Image from "next/image";

import type { GalleryImage } from "./gallery";

interface GalleryStripProps {
  images: GalleryImage[];
  reverse?: boolean;
  slow?: boolean;
}

function ImageGroup({ images }: { images: GalleryImage[] }) {
  return (
    <div className="gallery-image-group">
      {images.map((image) => (
        <div
          key={image.id}
          className="
            group
            relative
            h-[210px]
            w-[310px]
            shrink-0
            overflow-hidden
            rounded-[22px]
            border
            border-white/60
            bg-white/15
            shadow-[0_14px_36px_rgba(57,39,8,0.13)]
            transition-all
            duration-500
            hover:-translate-y-1
            hover:shadow-[0_22px_50px_rgba(57,39,8,0.20)]
            sm:h-[235px]
            sm:w-[360px]
            lg:h-[260px]
            lg:w-[400px]
          "
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 640px) 310px, (max-width: 1024px) 360px, 400px"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
          />
        </div>
      ))}
    </div>
  );
}

export default function GalleryStrip({
  images,
  reverse = false,
  slow = false,
}: GalleryStripProps) {
  return (
    <div className="gallery-marquee">
      <div
        className={[
          "gallery-marquee-track",
          reverse ? "gallery-marquee-track-reverse" : "",
          slow ? "gallery-marquee-track-slow" : "",
        ].join(" ")}
      >
        <ImageGroup images={images} />

        <div aria-hidden="true">
          <ImageGroup images={images} />
        </div>
      </div>
    </div>
  );
}