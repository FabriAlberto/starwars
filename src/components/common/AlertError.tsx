import Link from "next/link";
import React, { FC } from "react";
type Props = {
  text: string;
  returnHome?: boolean;
};
const AlertError: FC<Props> = ({ text, returnHome = false }) => {
  return (
    <div className="h-full w-full flex flex-col items-center">
      <p className="text-red-500 text-center font-bold mt-8">{text}</p>;
      {returnHome && (
        <Link href={"/"}>
          <button className=" bg-primary-button border-none cursor-pointer hover:bg-primary-button-hv text-white px-3 py-1.5 rounded-xl text-sm font-medium transition-colors duration-200">
            Volver al Inicio{" "}
          </button>
        </Link>
      )}
    </div>
  );
};

export default AlertError;
