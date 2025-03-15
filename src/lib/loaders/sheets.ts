import { sheetLoader } from "astro-sheet-loader";
import configData from "@util/themeConfig";

export const sheetLoad = () => {
  try {
    return sheetLoader({document: configData!.directory!.data!.sheets!.key});
  } catch(error) {
    console.log("google sheets key needs to be defined to use sheets as a data source.");
  }
};
