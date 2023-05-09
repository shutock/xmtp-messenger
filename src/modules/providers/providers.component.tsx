import { IComponent } from "@/lib";
import { Wagmi } from "./wagmi";
import { Redux } from "./redux";

export const Providers: IComponent = ({ children }) => {
  return (
    <Wagmi>
      <Redux>{children}</Redux>
    </Wagmi>
  );
};
