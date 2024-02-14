import Image from "next/image";
import React from "react";

function CustomImageAuto({ src, alt, className }: any) {
  return (
    <>
      <div className={"image-container"}>
        <Image
          src={src}
          layout="fill"
          className={className ? className : "image"}
          loading="lazy"
          alt={alt ? alt : "image"}
        />
      </div>
    </>
  );
}

export default CustomImageAuto;
