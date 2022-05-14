import SampleAudio from "./sample.mp3";
import FullsizeImage from "./fullsize.png";
import MiniImage from "./mini.png";
import Text from './text.png';

const descriptions = {
  is_vaild: false,

  id: "aru",

	color: '#D6CB67',

	mini_image: MiniImage,
	text: Text,

	descriptions: [
		{
			tag_name: "name",
			ja: "ある",
			ko: "아루",
			en: "Aru",
		},
		{
			tag_name: "age",
			ja: "300歳",
			ko: "300세",
			en: "300",
		},
		{
			tag_name: "gender",
			ja: "男性",
			ko: "남성",
			en: "fish boy",
		},
		{
			tag_name: "height",
			ja: "140㎝",
			ko: "140㎝",
			en: "140㎝",
		},
		{
			tag_name: "likes",
			ja: "ガイア / 人間との遊び / 海",
			ko: "가이아 / 사람과 놀기 / 바다",
			en: "Gaia / Playing with humans / Sea",
		},
	],
	
	cv: {
		tag_name: "cv",
		ja: "サト",
		ko: "사토",
		en: "SATO",
	},
  
  cv_twitter: "kungom_",
  
  sample_path: SampleAudio,
  sample_ust: 'LITT',
  fullsize_image: FullsizeImage,
  download_link: "",
	
	others: [
		{
			tag_name: "others",
			ja: "2022.05.14 配布開始",
			ko: "2022.05.14 배포 개시",
			en: "2022.05.14 Release"
		}
	]
};

export default descriptions;
