"use client";

import { Provider } from "react-redux";
import { store } from "@/lib";

import type { IComponent } from "@/lib";

export const Redux: IComponent = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
