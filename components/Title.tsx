import { montserrat } from "@/utils/Fonts";
import { ITitle } from "@/utils/interfaces";

const Title = (props: ITitle) => {
  return (
    <section className="">
      <h1 className={`${montserrat.className} font-bold text-2xl md:text-3xl`}>
        {props.name}
      </h1>
      <p className="text-gray-content tracking-wide mt-2">{props.detail}</p>
    </section>
  );
};

export default Title;
