export interface Chef {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  specialty: string;
}

export const chefs: Chef[] = [
  {
    id: "1",
    name: "Ms. Aanya ",
    title: "Chief Executive Officer & Co-Founder",
    specialty: "ChowMein",
    bio: "She made a chowmein yesterday and didnt even give me little bit, I Love you 💗 but i am teasingly naraaz.",
    image: "https://cedar-codes.vercel.app/assets/Aanya-BL_T5MWJ.jpg",
  },
  {
    id: "2",
    name: "Shayan",
    title: "Co founder, Board Director & Head Chef - Main Kitchen",
    specialty: "Nothing",
    bio: "Nothing Special about him, an ugly loser, a failure, always destroys whatever he touches, but full of hope and believes in himself a lot and kinda over confident, over-thinker, and he deeply loves Nia (the only one thing better abt him).",
    image: "/profile.jpg",
  },
  {
    id: "3",
    name: "Seth",
    title: "Pastry Chef",
    specialty: "Charsi Person",
    bio: "Seth is nalla nikamma very khabees person always there after nia, idk wtfreak he thinks of himself, sitting besides nia and overconfident fool thinks he can do anything but does nothing only bak bak krta and faaltu ki charsi pana, I just wanna pick the metal bottle and smash at his face and yes, oki i am jealous of him for no reason, why does he do that. What is he ? fool trying to act cool around nia, iski esi ki tesi, i dont wanna swear...",
    image:
      "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "4",
    name: "Muzzi",
    title: "Sommelier & Beverage Director",
    specialty: "Beverage Pairings & Cocktails",
    bio: "Muzzi is a good person, holds his Master Sommelier certification and has spent a decade building one of the finest wine collections in the city. He crafts custom pairings for each guest.",
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];
