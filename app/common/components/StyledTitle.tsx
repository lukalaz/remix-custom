interface IStyledTitle {
  title: string;
  preTitle?: string;
  description?: string;
}

const StyledTitle: React.FC<IStyledTitle> = ({
  title,
  preTitle,
  description,
}) => {
  return (
    <div className="flex flex-wrap mx-[-16px]">
      <div className="w-full px-4">
        <div className="max-w-[600px] mx-auto text-center mb-[70px]">
          {preTitle && (
            <span className="font-semibold text-lg text-primary block mb-2">
              {preTitle}
            </span>
          )}
          <h2 className="font-bold text-black text-3xl sm:text-4xl md:text-[45px] mb-5">
            {title}
          </h2>
          <p className="font-medium text-lg text-body-color">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default StyledTitle;
