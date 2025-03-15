import type { SettingsSchema } from "@validation/settings";
import configData from "../config/settings.toml";
export default (configData as SettingsSchema);