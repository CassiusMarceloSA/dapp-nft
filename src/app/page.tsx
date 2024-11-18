"use client";

import Layout from "../components/Layout";

const TEAM_PICS = [
  "https://media.licdn.com/dms/image/v2/C4D03AQEtky8V4JWrYA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1571681049955?e=1737590400&v=beta&t=Nv0NOzqUYPo71C6OQuB8YYOAYESEtOeu4gPCiYZlxjU",
  "https://lh3.googleusercontent.com/a/ACg8ocLGKPKk8fG7TPQ9WPA6nYLPyHYCm8TP7nWH9qjapP5Q-wB1Rwfkn3ng6GdDqRW4suLiMy10mrUcm-ZPiYlaJTz-UDsEhqu7=s288-c-no",
];

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Hero />
    <Services />
    <Featured />
    <Team />
    <Finisher />
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

type CardProps = {
  title: string;
  description: string;
  icon: string;
  to: string;
  size?: "compact" | "regular";
  color: string;
};

const Card = ({ size = "regular", ...props }: CardProps) => {
  const position =
    size === "compact"
      ? "lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center"
      : "w-full md:w-4/12 px-4 text-center";

  return (
    <div className={position}>
      <a
        className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg  cursor-pointer hover:scale-105 transition-all"
        href={props.to}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="px-4 py-5 flex-auto">
          <div
            className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full ${props.color}`}
          >
            <img src={`/${props.icon}.svg`} alt={`${props.icon} icon`} />
          </div>
          <h6 className="text-xl font-semibold">{props.title}</h6>
          <p className="mt-2 mb-4 text-gray-600">{props.description}</p>
        </div>
      </a>
    </div>
  );
};

const Services = () => (
  <section className="pb-20 bg-gray-300 -mt-24">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap">
        <Card
          title="Let's Contribute"
          description="Open source for all! Explore the GitHub repository and contribute to the project"
          icon="github"
          to="https://github.com/CassiusMarceloSA/dapp-nft"
          size="compact"
          color="bg-red-400"
        />

        <Card
          title="Let's Talk"
          description="Let's talk about your project and how I can help. Connect with me in LinkedIn"
          icon="linkedin"
          to="https://www.linkedin.com/in/cassius-de-avila/"
          color="bg-blue-400"
        />

        <Card
          title="Let's be curious"
          description="Experience the future now! Interact with the smart contract and see how it works"
          icon="cpu"
          to="https://testnet.snowtrace.io/address/0xf33b1b4Cb3afe064291d365534AB8822eE7BdD08/contract/43113/code"
          size="compact"
          color="bg-green-400"
        />
      </div>

      <div className="flex flex-wrap items-center mt-32">
        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
          <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
            <i className="fas fa-user-friends text-xl"></i>
          </div>
          <h3 className="text-3xl mb-2 font-semibold leading-normal">
            Working with us is a pleasure
          </h3>
          <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
            Don't let your uses guess by attaching tooltips and popoves to any
            element. Just make sure you enable them first via JavaScript.
          </p>
          <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
            The kit comes with three pre-built pages to help you get started
            faster. You can change the text and images and you're good to go.
            Just make sure you enable them first via JavaScript.
          </p>
          <a
            href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
            className="font-bold text-gray-800 mt-8"
          >
            Check Tailwind Starter Kit!
          </a>
        </div>

        <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
          <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-pink-600">
            <img
              alt="..."
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
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
                Top Notch Services
              </h4>
              <p className="text-md font-light mt-2 text-white">
                The Arctic Ocean freezes every winter and much of the sea-ice
                then thaws every summer, and that process will continue whatever
                happens.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Featured = () => (
  <section className="relative py-20">
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
          className="text-white fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>

    <div className="container mx-auto px-4">
      <div className="items-center flex flex-wrap">
        <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
          <img
            alt="..."
            className="max-w-full rounded-lg shadow-lg"
            src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          />
        </div>
        <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
          <div className="md:pr-12">
            <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
              <i className="fas fa-rocket text-xl"></i>
            </div>
            <h3 className="text-3xl font-semibold">A growing company</h3>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              The extension comes with three pre-built pages to help you get
              started faster. You can change the text and images and you're good
              to go.
            </p>
            <ul className="list-none mt-6">
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                      <i className="fas fa-fingerprint"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-gray-600">
                      Carefully crafted components
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                      <i className="fab fa-html5"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-gray-600">Amazing page examples</h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                      <i className="far fa-paper-plane"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-gray-600">Dynamic components</h4>
                  </div>
                </div>
              </li>
            </ul>
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
          <h2 className="text-4xl font-semibold">Here are our heroes</h2>
          <p className="text-lg leading-relaxed m-4 text-gray-600">
            According to the National Oceanic and Atmospheric Administration,
            Ted, Scambos, NSIDClead scentist, puts the potentially record
            maximum.
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
              <div className="mt-6">
                <button
                  className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i className="fab fa-twitter"></i>
                </button>
                <button
                  className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i className="fab fa-facebook-f"></i>
                </button>
                <button
                  className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i className="fab fa-dribbble"></i>
                </button>
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
              <div className="mt-6">
                <button
                  className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i className="fab fa-google"></i>
                </button>
                <button
                  className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i className="fab fa-facebook-f"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Finisher = () => (
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

    <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
      <div className="flex flex-wrap text-center justify-center">
        <div className="w-full lg:w-6/12 px-4">
          <h2 className="text-4xl font-semibold text-white">Build something</h2>
          <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
            Put the potentially record low maximum sea ice extent tihs year down
            to low ice. According to the National Oceanic and Atmospheric
            Administration, Ted, Scambos.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap mt-12 justify-center">
        <div className="w-full lg:w-3/12 px-4 text-center">
          <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
            <i className="fas fa-medal text-xl"></i>
          </div>
          <h6 className="text-xl mt-5 font-semibold text-white">
            Excelent Services
          </h6>
          <p className="mt-2 mb-4 text-gray-500">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <div className="w-full lg:w-3/12 px-4 text-center">
          <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
            <i className="fas fa-poll text-xl"></i>
          </div>
          <h5 className="text-xl mt-5 font-semibold text-white">
            Grow your market
          </h5>
          <p className="mt-2 mb-4 text-gray-500">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <div className="w-full lg:w-3/12 px-4 text-center">
          <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
            <i className="fas fa-lightbulb text-xl"></i>
          </div>
          <h5 className="text-xl mt-5 font-semibold text-white">Launch time</h5>
          <p className="mt-2 mb-4 text-gray-500">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  </section>
);
