const MenuListItem = ({ text, id, active }: {
  text: string;
  id: string;
  active: boolean;
}) => {
  return (
    <a href={id} className={`${active ? "text-textPrimary font-bold" : "text-textSecondary"} text-base hover:text-textPrimary hover:font-bold p-2 transition-all`}>{text}</a>
  );
};

export default MenuListItem;