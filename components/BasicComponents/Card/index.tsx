const Card = ({ title, description, type }: { title: string, description: string, type: "Beneficios" | "Tratamentos" }) => {
  switch (type) {
    case "Beneficios":
      return (
        <div className=" bg-[#ECE7E2] rounded-bl-[30px] rounded-tr-[30px] w-full max-w-[607px] py-10 lg:py-12 px-[33px] lg:pr-9 lg:pl-14">
          <h3 className="text-primary lg:text-[26px] text-xl leading-[34px] font-semibold mb-4">{title}</h3>
          <p className="text-tertiary text-lg leading-6">{description}</p>
        </div>
      );
    case "Tratamentos":
      return (
        <div className="border border-white rounded-bl-[30px] rounded-tr-[30px] w-full max-w-[607px] py-10 lg:py-12 px-[33px] lg:pr-9 lg:pl-14">
          <h3 className="text-white lg:text-[26px] text-xl leading-[34px] font-semibold mb-4">{title}</h3>
          <p className="text-white lg:text-lg text-[15px] leading-6">{description}</p>
        </div>
      );
  }
}

export default Card;