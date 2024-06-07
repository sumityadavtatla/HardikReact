import React from 'react';
import './App.css';
import TopBar from './components/TopBar';
import BlogPosts from './components/BlogPosts';

function App() {
  const posts = [
    {
      title: "Unleashing the Power: A Dive into the World of Supercars",
      date: "2024-05-31",
      author: "Hardik",
      image: "./Images/future-supercars.jpg",
      content: "Famous Models Supercar brands arouse passion and respect, from McLaren's trademark swoosh to Ferrari's prancing horse. Every marque has a distinctive look and attitude to performance, ranging from the refined European workmanship to the raw power of American muscle. Supercars' Future The future of supercars seems full with possibilities for innovation. Electric propulsion, autonomous driving technology, and sustainable materials are shaping the next generation of automotive excellence. Although enthusiasts might bemoan the disappearance of the thunderous V12, these developments herald a new era of efficiency and performance."
    },
    {
      title: "Exploring the Enigma: A Journey into the World of Aliens",
      date: "2024-05-31",
      author: "Hardik",
      image: "./Images/Alein.jpeg",
      content: "The phenomenon of UFOs Unidentified flying objects (UFOs) have been the subject of discussions and conjecture around the globe. Witnesses report seeing unearthly creatures, unpredictable motions, and odd lights. Although a lot of sightings can be explained by natural phenomena or man-made aircraft, other sightings defy logic and feed the theory that aliens are visiting Earth. Accounts of Alien Abduction Close encounter reports provide insight into the enigmatic realm of extraterrestrial abductions. Some say they were brought aboard spacecraft, examined medically, and returned with memories of meetings with extraterrestrial beings. The emotional impact on people who believe in these stories is significant, even while detractors write them off as hallucinations or hoaxes."
    },
    {
      title: "Unveiling the Rich Tapestry of Human Diversity: A Glimpse into the World of Tribes",
      date: "2024-05-31",
      author: "Hardik",
      image: "./Images/tribes.jpg",
      content: "The Life of a Tribal Essence Tribal communities provide insight into the prehistoric past of humanity, when communal life and close-knit relationships served as the cornerstone of civilization. People in these close-knit communities develop strong bonds with each other and the surrounding natural environment. Tribes flourish in a variety of settings, from the Arctic tundra to the heart of the Amazon rainforest, and they do so by using creativity and resiliency to overcome the difficulties they face. Variations in Culture Tribal customs, rituals, and artistic manifestations all demonstrate how rich their cultures are. With elaborate beadwork and captivating dances, every tribe has a distinct cultural history that has been passed down over the ages. Tribes differ greatly in terms of language, food, and social structures, which is a reflection of the many environments and histories that have shaped their identities."
    }
  ];

  return (
    <div className="App">
      <TopBar />
      <BlogPosts posts={posts} />
    </div>
  );
}

export default App;
