import { DocumentNode } from "@apollo/client";
import { CharacterDataType } from "../../types";

export interface DataProps {
    loading: boolean;
    error: any;
    data: {
      myQuery: CharacterDataType[];
    };
  }
  
  export interface UseDataProps {
    query: DocumentNode;
    variables?: {[key: string]: string | number};
  }
  