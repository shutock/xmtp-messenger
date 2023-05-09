"use client";

import { FastAverageColor, FastAverageColorResult } from "fast-average-color";
import React from "react";

const fac = new FastAverageColor();

export const useAverageColor = (props?: {
  algorithm?: "dominant" | "simple" | "sqrt";
}) => {
  const [color, setColor] = React.useState<FastAverageColorResult | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const getColor = async (image: string) => {
    setColor(null);
    setError(null);

    setIsLoading(true);

    try {
      const _color = await fac.getColorAsync(image, {
        algorithm: props?.algorithm,
      });
      setColor(_color);
      setIsLoading(false);
      return _color;
    } catch (error) {
      const { message } = error as { message: string };
      setError(message);
      setIsLoading(false);
    }
  };

  return {
    color,
    isLoading,
    error,
    getColor,
  };
};
