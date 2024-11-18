"use client";

import Card from "@/components/Card";
import Layout from "@/components/Layout";
import { authenticate, mint } from "@/services/web3";
import { toResult } from "@/utils";
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

  const openseaURL = `${process.env.OPENSEA_URL}/${wallet}`;

  const clearMessage = () => setMessage("");

  const onLogin = async () => {
    setMessage("Connecting to wallet...");
    const [authError, address] = await toResult(authenticate());

    if (authError || !address) {
      setMessage(authError?.message || "Failed to login");
      return;
    }

    setWallet(address);
    localStorage.setItem("wallet", address);
    clearMessage();
  };
  const onLogout = () => {
    setMessage("Logging out...");
    setWallet("");
    localStorage.removeItem("wallet");
  };
  const onMint = async () => {
    setMessage("Minting...");
    const [txError, txHash] = await toResult(mint(quantity));

    if (txError) {
      setMessage(txError.message);
      return;
    }
    setQuantity(1);
    setMessage("Minted! TxHash generated: " + txHash);
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
    <Layout title="Mint | Prototype NFT Collection">
      <div
        className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{
          minHeight: "75vh",
        }}
      >
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1698309970011-c557c380319f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D')",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12 ">
                <h1 className="text-white font-semibold text-5xl">
                  Mint your token(s)
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                  Connect your wallet and start minting right now!
                </p>
                <button
                  onClick={onLogin}
                  className="mt-8 mx-auto bg-white text-black font-bold py-2 px-4 rounded-lg flex items-center hover:bg-gray-300 transition-colors duration-200"
                >
                  <img
                    src="/metamask.svg"
                    alt="MetaMask"
                    className="w-6 h-6 mr-2"
                  />
                  {message || "Connect with MetaMask"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style={{ height: "70px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
      <section className="pb-20 bg-gray-300 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <Card.Wrapper size="compact">
              <Card.Container>
                <Card.Content>
                  <Card.Indicator color="bg-blue-600">#1</Card.Indicator>
                  <Card.Title>Let's Connect</Card.Title>
                  <Card.Description>
                    Connect your wallet clicking in 'Connect with MetaMask'
                    button and authorize the app to access your wallet.
                  </Card.Description>
                </Card.Content>
              </Card.Container>
            </Card.Wrapper>

            <Card.Wrapper>
              <Card.Container>
                <Card.Content>
                  <Card.Indicator color="bg-orange-600">#2</Card.Indicator>
                  <Card.Title>Mint your token(s)</Card.Title>
                  <Card.Description>
                    Choose how many tokens you want to mint (up to five) and
                    click on 'Mint' button. More you mint in a row, more taxes
                    you save
                  </Card.Description>
                </Card.Content>
              </Card.Container>
            </Card.Wrapper>

            <Card.Wrapper size="compact">
              <Card.Container>
                <Card.Content>
                  <Card.Indicator color="bg-green-600">#3</Card.Indicator>
                  <Card.Title>Finish!</Card.Title>
                  <Card.Description>
                    Confirm your transaction and see your tokens in your wallet
                    and your arts in OpenSea account or similar sites.
                  </Card.Description>
                </Card.Content>
              </Card.Container>
            </Card.Wrapper>
          </div>
        </div>
      </section>

      <section className="pb-20 relative block bg-gray-900">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-900 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto px-4 lg:pt-24 ">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold text-white">
                Exclusive Collection
              </h2>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                We'll have only 1,000 seats in our rocket, limited to our NFT
                collection pictures. You will come in?
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap mt-12 justify-center">
          <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              <img src="gift.svg" alt="gift icon" />
            </div>
            <h6 className="text-xl mt-5 font-semibold text-white">
              Mint first
            </h6>
            <p className="mt-2 mb-4 text-gray-500">
              The best moment to enter is now. Mint your NFT and join us to grow
              together.
            </p>
          </div>
          <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              <img src="calendar.svg" alt="shopping cart icon" />
            </div>
            <h5 className="text-xl mt-5 font-semibold text-white">
              Sell later
            </h5>
            <p className="mt-2 mb-4 text-gray-500">
              You're ready to fly alone? Sell your toker at OpenSea, probably by
              higher prices.
            </p>
          </div>
          <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              <img src="calendar.svg" alt="shopping cart icon" />
            </div>
            <h5 className="text-xl mt-5 font-semibold text-white">
              Enjoy Forever
            </h5>
            <p className="mt-2 mb-4 text-gray-500">
              Some benefits stay forever for all people that had our tokens.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
