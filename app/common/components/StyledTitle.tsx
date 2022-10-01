import { motion } from "framer-motion";

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
        <motion.div
          animate={{ y: 0 }}
          initial={{ y: -50 }}
          className="max-w-[600px] mx-auto text-center mb-[70px]"
        >
          {preTitle && (
            <motion.span
              animate={{ left: 0 }}
              initial={{ left: "100vw" }}
              transition={{ delay: 0.3 }}
              className="font-semibold text-lg text-primary block mb-2 relative"
            >
              {preTitle}
            </motion.span>
          )}
          <h2 className="font-bold text-black text-3xl sm:text-4xl md:text-[45px] mb-5">
            {title}
          </h2>
          <motion.p
            animate={{ right: 0 }}
            initial={{ right: "100vw" }}
            transition={{ delay: 0.6 }}
            className="font-medium text-lg text-body-color relative"
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default StyledTitle;
