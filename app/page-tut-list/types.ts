// HOME PAGE DATA TYPE

export type SectionsType = {
  title: string;
  horizontal: boolean;
  data: {
    key: string;
    text: string;
    uri: string;
  }[];
};

type BasicViewProps = {
  m: number;
  mt: number;
  mb: number;
  ml: number;
  mr: number;
  //
  p: number;
  pt: number;
  pb: number;
  pr: number;
  pl: number;
  //
  w: number;
  h: number;

};
