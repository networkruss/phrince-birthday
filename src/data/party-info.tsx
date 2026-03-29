import React from "react";
import { Gift, Heart, Music, Sparkles, Star, ShoppingBag, Banknote, Balloon, Utensils, Trophy, Camera, PartyPopper, Gamepad2 } from "lucide-react";

export const partyData = [
  { 
    title: "7 Cake", 
    icon: <Star size={20}/>, 
    color: "bg-sky-600", 
    items: [
      "Jheszel Chole R. Tuazon",
      "Princess R. Tuazon",
      "Prince Johary D. Tuazon",
      "Dave Jayden T. Tuazon",
      "Eunice Entoy",
      "Angeline Dela Cruz",
      "Rhea Khem J. Tuazon"
    ] 
  },
  { 
    title: "7 SleepWear", 
    icon: <Sparkles size={20}/>, 
    color: "bg-slate-900", 
    items: [
      "Marc Jacob Arenas",
      "Prince Chael Mallari",
      "Zhian Carl De Vera",
      "Dylan Zeus Lopez",
      "Brix Basanes",
      "David Mathews Soriano",
      "Jie Boy R. Tuazon"
    ] 
  },
  { 
    title: "7 Shoes", 
    icon: <ShoppingBag size={20}/>, 
    color: "bg-sky-700", 
    items: [
      "Angel Nicole T. Tuazon",
      "Jhay Mark R. Tuazon",
      "Riyanah Jinn Omabao",
      "Mhelvelyn Manabat",
      "Rheynalene C. Dela Cruz",
      "Dhara Allyn Magno",
      "Maria Dolores Frias"
    ] 
  },
  { 
    title: "7 Gifts", 
    icon: <Gift size={20}/>, 
    color: "bg-slate-800", 
    items: [
      "Raninia Soliven",
      "Ma'am Emilyn Estrada",
      "Ma'am Mary Grace Abraham",
      "Ma'am Liela Sagun",
      "Jackson V. Tuazon",
      "Domingo V. Tuazon",
      "Tessie V. Tuazon"
    ] 
  },
  { 
    title: "7 Wishes", 
    icon: <Heart size={20}/>, 
    color: "bg-sky-600", 
    items: [
      "Ma'am Rizza Paragas",
      "Neliessa Soliven",
      "Rhoda Jane Aquino",
      "Rowena Omabao",
      "Kathrina Soliven",
      "Renalyn Tuazon",
      "Phigie V. Tuazon"
    ] 
  },
  { 
    title: "7 Blue Bills", 
    icon: <Banknote size={20}/>, 
    color: "bg-slate-900", 
    items: [
      "Jie Ann Venice Aquino",
      "Neil Russel Soliven",
      "Russell Justin Omabao",
      "Dave Joseph S. Samala",
      "Edmund Malong Reyno",
      "Ma'am Michelle R. Abdon",
      "Dominic V. Tuazon"
    ] 
  },
  { 
    title: "7 Dance w/ Balloons", 
    icon: <Balloon size={20}/>, 
    color: "bg-sky-700", 
    items: [
      "Jairalyn Callora",
      "Tania Jayca Battung",
      "Zavanna Kendra Oineza",
      "Julia Marie Villanueva",
      "Joanna M. Quintos",
      "Athaliah Queen M. Ferrer",
      "Phia Vheanca T. Dela Cruz"
    ] 
  },
];

export const timelineData = [
  { time: "3:00 PM", task: "Arrival of Guests", sub: "Welcome & Photo Ops", icon: <Camera size={18}/> },
  { time: "3:30 PM", task: "Grand Entrance", sub: "Tuazon & Dela Cruz Family", icon: <PartyPopper size={18}/> },
  { time: "3:45 PM", task: "Soda Pop Performance", sub: "Special Opening Song - Phrince Vhienzyl", icon: <Music size={18}/> },
  { time: "4:00 PM", task: "Opening Prayer", sub: "Led by Emcee Clown", icon: <Sparkles size={18}/> },
  { time: "4:15 PM", task: "Main Program", sub: "Games & Special Numbers", icon: <Gamepad2 size={18}/> },
  { time: "4:45 PM", task: "Birthday Feast", sub: "Dinner is Served", icon: <Utensils size={18}/> },
  { time: "5:30 PM", task: "7 Traditions", sub: "Cake, Gifts, & Wishes", icon: <Trophy size={18}/> },
];
