import { Power } from "../power/power";
export interface Hero {
  id?: number;
  name: string;
  power?: Power[];
  picture?: String;
}
