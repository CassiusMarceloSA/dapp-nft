"use client";

import { LINKS } from "@/contants/links";
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import Link from "next/link";

const TEAM_PICS = [
  "https://media.licdn.com/dms/image/v2/C4D03AQEtky8V4JWrYA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1571681049955?e=1737590400&v=beta&t=Nv0NOzqUYPo71C6OQuB8YYOAYESEtOeu4gPCiYZlxjU",
  "https://lh3.googleusercontent.com/a/ACg8ocLGKPKk8fG7TPQ9WPA6nYLPyHYCm8TP7nWH9qjapP5Q-wB1Rwfkn3ng6GdDqRW4suLiMy10mrUcm-ZPiYlaJTz-UDsEhqu7=s288-c-no",
];

const IndexPage = () => (
  <Layout title="Home | Prototype NFT Collection">
    <Hero />
    <Services />
    <Team />
  </Layout>
);

export default IndexPage;

/// Page Sections
const Hero = () => (
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
          <div className="pr-12">
            <h1 className="text-white font-semibold text-5xl">
              Welcome to Proto's Metaverse
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              This is a dog photo NFT prototype: Learn by building your own NFT.
              Expand your Web3 skills with this hands-on project. Code available
              on GitHub. Contact me to discuss collaboration opportunities.
            </p>
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
);

const Services = () => (
  <section className="pb-20 bg-gray-300 -mt-24">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap">
        <Card.Wrapper size="compact">
          <Card.LinkContainer to={LINKS.github}>
            <Card.Content>
              <Card.Icon icon="github" color="bg-red-400" />
              <Card.Title>Let's Contribute</Card.Title>
              <Card.Description>
                Open source for all! Explore the GitHub repository and
                contribute to the project
              </Card.Description>
            </Card.Content>
          </Card.LinkContainer>
        </Card.Wrapper>

        <Card.Wrapper>
          <Card.LinkContainer to={LINKS.linkedin}>
            <Card.Content>
              <Card.Icon icon="linkedin" color="bg-blue-400" />
              <Card.Title>Let's Talk</Card.Title>
              <Card.Description>
                Let's talk about your project and how I can help. Connect with
                me in LinkedIn
              </Card.Description>
            </Card.Content>
          </Card.LinkContainer>
        </Card.Wrapper>

        <Card.Wrapper size="compact">
          <Card.LinkContainer to={LINKS.contract}>
            <Card.Content>
              <Card.Icon icon="cpu" color="bg-green-400" />
              <Card.Title>Let's be Curious</Card.Title>
              <Card.Description>
                Experience the future now! Interact with the smart contract and
                see how it works
              </Card.Description>
            </Card.Content>
          </Card.LinkContainer>
        </Card.Wrapper>
      </div>

      <div className="flex flex-wrap items-center mt-32">
        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
          <h3 className="text-3xl mb-2 font-semibold leading-normal">
            And more is coming...
          </h3>
          <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
            This NFT collection is not just about lovely dog images. I'm working
            to give more value to the community.
          </p>
          <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
            Join us and experience the thrill of minting your own unique tokens!
          </p>
          <Link
            href="/mint"
            className="font-bold text-gray-800 mt-8"
          >
            Mint here!
          </Link>
        </div>

        <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
          <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-pink-600">
            <img
              alt="Avalanche blockchain logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr0aWPKX8YSDBx_U1K8EwM5DQsWba76dYAHg&s"
              className="w-full align-middle rounded-t-lg"
            />
            <blockquote className="relative p-8 mb-4">
              <svg
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 583 95"
                className="absolute left-0 w-full block"
                style={{
                  height: "95px",
                  top: "-94px",
                }}
              >
                <polygon
                  points="-30,95 583,95 583,65"
                  className="text-pink-600 fill-current"
                ></polygon>
              </svg>
              <h4 className="text-xl font-bold text-white">
                Top Notch Blockchain
              </h4>
              <p className="text-md font-light mt-2 text-white">
                The Avalanche blockchain offers lightning-fast transactions, low
                fees, and exceptional scalability. Built for the future of
                decentralized applications and digital assets.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Team = () => (
  <section className="pt-20 pb-48">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center text-center mb-24">
        <div className="w-full lg:w-6/12 px-4">
          <h2 className="text-4xl font-semibold">Here are our hero</h2>
          <p className="text-lg leading-relaxed m-4 text-gray-600">
            Cassius is an experienced software engineer with a passion for
            building innovative web and mobile applications. With over 5 years
            of experience in React, TypeScript, and Node.js, he is skilled at
            creating user-friendly digital experiences. Driven by curiosity and
            a desire to explore the future of the internet, he immersed himself
            in the world of Web3. This personal project showcases his ability to
            build dApps, integrating technologies such as MetaMask for secure
            authentication and smart contracts to create unique NFTs. It is a
            testament to his technical skills and his commitment to staying on
            top of technological advancements.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-evenly">
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <div className="px-6">
            <img
              alt="..."
              src={TEAM_PICS[0]}
              className="shadow-lg rounded-full max-w-full mx-auto"
              style={{ maxWidth: "120px" }}
            />
            <div className="pt-6 text-center">
              <h5 className="text-xl font-bold">Cassius de Ávila</h5>
              <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                Frontend Developer
              </p>
              <div className="mt-6 flex justify-center">
                <a
                  className="bg-blue-400 text-white w-10 h-10 flex justify-center items-center rounded-full outline-none focus:outline-none mr-1 mb-1"
                  href={LINKS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={"/linkedin.svg"} alt="linkedin icon" />
                </a>
                <a
                  className="bg-purple-500 text-white w-10 h-10 flex justify-center items-center rounded-full outline-none focus:outline-none mr-1 mb-1"
                  href={LINKS.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={"/github.svg"} alt="github icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <div className="px-6">
            <img
              alt="..."
              src={TEAM_PICS[1]}
              className="shadow-lg rounded-full max-w-full mx-auto"
              style={{ maxWidth: "120px" }}
            />
            <div className="pt-6 text-center">
              <h5 className="text-xl font-bold">Cassius de Ávila</h5>
              <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                Web3 Developer
              </p>
              <div className="mt-6 flex justify-center">
                <a
                  className="bg-blue-400 text-white w-10 h-10 flex justify-center items-center rounded-full outline-none focus:outline-none mr-1 mb-1"
                  href={LINKS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={"/linkedin.svg"} alt="linkedin icon" />
                </a>
                <a
                  className="bg-red-600 text-white w-10 h-10 flex justify-center items-center rounded-full outline-none focus:outline-none mr-1 mb-1"
                  href={LINKS.contract}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={"/cpu.svg"} alt="cpu icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
