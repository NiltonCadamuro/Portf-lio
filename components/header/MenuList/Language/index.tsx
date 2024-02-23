import { useTranslation } from "react-i18next";

const Language = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <select name="language" id="language" className="w-[48px] text-center text-textSecondary text-base lg:hover:bg-surfacePrimary bg-surfaceSecondary lg:bg-transparent cursor-pointer appearance-none p-3 rounded-md transition outline-none" defaultValue="pt">
      <option value="pt" className="bg-surfacePrimary" onClick={() => changeLanguage("pt")}>{t("PT")}</option>
      <option value="en" className="bg-surfacePrimary" onClick={() => changeLanguage("en")}>{t("EN")}</option>
    </select>
  );
};

export default Language;