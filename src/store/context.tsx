import React, { createContext, ReactNode, useEffect, useState } from "react";
import { IProduct } from "src/common/interface";

interface GlobalState {
  modalStatus: boolean;
  ChangeModalStatus: () => void;
  modalData: IProduct | undefined;
  ChangeModalData: (data: IProduct) => void;
}

export const GlobalStateContext = createContext<GlobalState | undefined>(
  undefined
);

export const GlobalStateProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [modalStatus, setmodalStatus] = useState<boolean>(false);
  const [modalData, setmodalData] = useState<IProduct | undefined>(undefined);

  const ChangeModalStatus = () => setmodalStatus(!modalStatus);
  const ChangeModalData = (data: IProduct) => setmodalData(data);

  useEffect(() => {
    if (!modalStatus) {
      setmodalData(undefined);
    }
  }, [modalStatus]);

  const value: GlobalState = {
    modalStatus,
    ChangeModalStatus,
    modalData,
    ChangeModalData,
  };

  return (
    <GlobalStateContext.Provider value={value}>
      {children}
    </GlobalStateContext.Provider>
  );
};
