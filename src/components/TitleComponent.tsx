interface TitleComponentProps {
  title: string;
  titleSize?: string;
  aos?: string;
}

const TitleComponent: React.FC<TitleComponentProps> = ({
  title,
  titleSize,
  aos,
}) => {
  return (
    <h2
      className={` ${
        titleSize ?? "text-2xl"
      } font-semibold leading-8 text-primary dark:text-white`}
      data-aos={aos}
      data-aos-duration="3000"
    >
      {title}
    </h2>
  );
};

export default TitleComponent;
