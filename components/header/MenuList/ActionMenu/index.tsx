import Language from "../Language";
import SwitchMode from "../SwitchMode";

const ActionMenu = () => {
  return (
    <div className="flex justify-end gap-4 lg:border-none border-t border-strokeBase w-full pt-6 lg:pt-0">
      <Language />
      <SwitchMode />
    </div>
  );
};

export default ActionMenu;