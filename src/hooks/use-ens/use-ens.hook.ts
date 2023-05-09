"use client";

import { useContract, useProvider } from "wagmi";
const namehash = require("@ensdomains/eth-ens-namehash");

import { ensAbi, ensContract, ensRecords } from "./lib";

import type { IEnsData } from "./lib";
import React from "react";

type IProps = {
  address: `0x${string}`;
  isLazy?: boolean;
};

export const useEns = (props: IProps) => {
  const { address, isLazy = true } = props;

  const [data, setData] = React.useState<IEnsData | undefined>(undefined);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | undefined>(undefined);

  const provider = useProvider();
  const contract = useContract({
    abi: ensAbi,
    address: ensContract,
    signerOrProvider: provider,
  });

  const getData = async () => {
    if (!contract) return;

    try {
      setIsLoading(true);
      const username = await provider.lookupAddress(address);
      const hash = await namehash.hash(username);

      const promises = ensRecords.map(async (record) => {
        const value = await contract["text(bytes32,string)"](hash, record);
        return [record, value];
      });

      const results = await Promise.all(promises);

      const _data: IEnsData = Object.fromEntries(results);
      _data.domain = username!;

      setData(_data);
      setIsLoading(false);
    } catch (err) {
      const { message } = err as { message: string };
      setError(message);
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    if (isLazy || data) return;
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLazy]);

  return {
    isLoading,
    error,
    isError: error ? true : false,
    data: { ...data },
    getData,
  };
};
