import { FastAverageColor } from "fast-average-color";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hooks";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export const ImageByColor = (props: Props) => {
  const currentImage = useAppSelector((state) => state.menu.currentColor);
  const fac = new FastAverageColor();
  const [currentColor, setCurrentColor] = useState<string | null>(null);

  useEffect(() => {
    if (currentImage) {
      fac
        .getColorAsync(currentImage)
        .then((color) => {
          setCurrentColor(color.hex);
        })
        .catch((e) => {
          console.error(e);
        });
    }
  });

  return (
    <div
      className={props.className}
      style={{ backgroundColor: (currentImage && currentColor) || "" }}
    >
      {props.children}
    </div>
  );
};
