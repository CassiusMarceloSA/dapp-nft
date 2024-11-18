type CardProps = {
  title: string;
  description: string;
  icon: string;
  to: string;
  size?: "compact" | "regular";
  color: string;
};

type WithChildren = { children: React.ReactNode };

const Wrapper = (props: WithChildren & Pick<CardProps, "size">) => {
  const position =
    props.size === "compact"
      ? "lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center"
      : "w-full md:w-4/12 px-4 text-center";

  return <div className={position}>{props.children}</div>;
};

const Container = (props: WithChildren) => {
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
      {props.children}
    </div>
  );
};
const LinkContainer = (props: WithChildren & Pick<CardProps, "to">) => {
  return (
    <a
      className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg  cursor-pointer hover:scale-105 transition-all"
      href={props.to}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
  );
};

const Content = (props: WithChildren) => {
  return <div className="px-4 py-5 flex-auto">{props.children} </div>;
};

const Icon = (props: Pick<CardProps, "icon" | "color">) => {
  return (
    <div
      className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full ${props.color}`}
    >
      <img src={`/${props.icon}.svg`} alt={`${props.icon} icon`} />
    </div>
  );
};

const Indicator = (props: Pick<CardProps, "color"> & WithChildren) => {
  return (
    <div
      className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full ${props.color}`}
    >
      {props.children}
    </div>
  );
};

const Title = (props: WithChildren) => {
  return <h6 className="text-xl font-semibold">{props.children}</h6>;
};

const Description = (props: WithChildren) => {
  return <p className="mt-2 mb-4 text-gray-600">{props.children}</p>;
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

export default {
  Wrapper,
  Container,
  LinkContainer,
  Content,
  Icon,
  Indicator,
  Title,
  Description,
};
