import { BaseInterface } from "@/types";
import { Url } from "url";
export type CharacterDataType = {
    id: number;
      name: string;
      status: string;
      species: string;
      hair: string;
      origin: string;
      abilities: string[];
      alias: string[];
      img_url: string;
} & BaseInterface;