import Aru from "./aru/descriptions.js";
import Marin from "./machan/descriptions.js";

export type DescriptionTags = {
  tag_name: string,
  ja: string,
  ko: string,
  en: string,
};

export type Description = {
  is_vaild: boolean,
  id: string,

  color: string,

  mini_image: string,
  text: string,

  descriptions: Array<DescriptionTags>,

  cv: DescriptionTags,
  cv_twitter: string,

  sample_path: string,
  fullsize_image: string,
  download_link: string,

  others: Array<DescriptionTags>,
};

const character = [
  {
    name: "aru",
    path: Aru,
  },
  {
    name: "marin",
    path: Marin,
  },
];

export default character;
