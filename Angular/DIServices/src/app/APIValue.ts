import { InjectionToken } from "@angular/core";
import { IAPIDetail } from "./APIConfig";

export const API = new InjectionToken<IAPIDetail>("The API important information.");