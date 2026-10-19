import { InjectionToken } from "@angular/core";
import { ballConfig } from "./Models/ball-config";


export const BALL_CONFIG = new InjectionToken<ballConfig>('path.config');