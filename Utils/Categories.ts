import { LuCat, LuDog } from "react-icons/lu";
import { MdOutlineSmartToy } from "react-icons/md";
import { PiBirdLight, PiHorseLight } from "react-icons/pi";
import { SiIfood, SiPetsathome } from "react-icons/si";

export const categories = [
  {
    label: "All",
    value: 'all',
    icon: SiPetsathome,
    subcategories: null,
  },

  {
    label: "Dogs",
    value: 'dog',
    icon: LuDog,
    subcategories: [
      { label: "Labrador Retrievers" ,icon: LuDog,},
      { label: "German Shepherds" , icon: LuDog,},
      {label:  "Golden Retrievers", icon: LuDog,},
      {label: "Bulldogs", icon: LuDog,}
    ],
  },

  {
    label: "Cats",
    value: 'cat',
    icon: LuCat,
    subcategories: [
        { label: "Siameses",     icon: LuCat,},
        { label: "Maine Coons",     icon: LuCat,},
        {label: "Persians",     icon: LuCat,},
        {label: "Ragdolls",     icon: LuCat,}
      ],
  },

  {
    label: "Birds",
    value: 'bird',
    icon: PiBirdLight ,
    subcategories: [
      { label: "Blue Jays" , icon: PiBirdLight ,},
      { label: "White Jays", icon: PiBirdLight ,},
      {label:  "Mixed Birds", icon: PiBirdLight ,}
    ]
  },

  {
    label: "Horses",
    value: 'horse',
    icon: PiHorseLight ,
    subcategories: [
      {label: "Bidet",  icon: PiHorseLight , },
      {label: "Galloway",  icon: PiHorseLight ,},
      {label: "Yorkshire Roadster",  icon: PiHorseLight ,}
    ]
  },

 
];


