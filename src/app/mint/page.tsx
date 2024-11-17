"use client";

import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";

const AuthButton = ({
  onClick,
  children,
  id,
}: {
  onClick: () => void;
  children: React.ReactNode;
  id: string;
}) => {
  return (
    <button className="btn-primary" onClick={onClick} id={id} type="button">
      {children}
    </button>
  );
};

export default function Mint() {
  const [quantity, setQuantity] = useState(1);
  const [wallet, setWallet] = useState("");
  const [message, setMessage] = useState("");

  const onLogin = () => {
    setMessage("Logging in...");
    setWallet("_WALLET_ADDRESS_HERE_");
    localStorage.setItem("wallet", wallet);
  };
  const onLogout = () => {
    setMessage("Logging out...");
    setWallet("");
    localStorage.removeItem("wallet");
  };
  const onMint = () => {
    console.log(quantity);
    setMessage("Minting...");
  };

  const handleQuantity = (e: ChangeEvent<HTMLInputElement>) => {
    setQuantity(+e.target.value > 5 ? 5 : +e.target.value);
  };

  useEffect(() => {
    const wallet = localStorage.getItem("wallet");
    if (wallet) {
      setWallet(wallet);
    }
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Mint</h1>
        {wallet ? (
          <AuthButton id="logout-btn" onClick={onLogout}>
            Disconnect
          </AuthButton>
        ) : (
          <AuthButton id="login-btn" onClick={onLogin}>
            Connect
          </AuthButton>
        )}
        {wallet && (
          <>
            <label>
              Quantity:
              <input
                type="number"
                defaultValue={quantity}
                onChange={handleQuantity}
              />
            </label>
            <button id="btnMin" onClick={onMint}>
              Mint
            </button>
            <p>{message}</p>
          </>
        )}
      </main>
    </div>
  );
}
