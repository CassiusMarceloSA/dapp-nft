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

export default Card;
