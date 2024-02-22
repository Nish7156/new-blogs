import Image from "next/image";
import React from "react";

function CustomImageAuto({ src, alt, className }: any) {
  return (
    <>
      <div className={"image-container zoom-img"}>
        <Image
          src={src}
          fill
          className={className ? className : "image "}
          loading="lazy"
          alt={alt ? alt : "image"}
        />
      </div>
    </>
  );
}

export default CustomImageAuto;
