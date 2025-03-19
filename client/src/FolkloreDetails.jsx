// src/pages/FolkloreDetails.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Css/FolkloreDetails.css'; // Ensure this file includes the relevant styles

const FolkloreDetails = () => {
  const { folkloreName } = useParams();
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [utterance, setUtterance] = useState(null);

  const folkloreDetails = {
    vikrambetal: {
      name: 'Vikram-Betal: A Folklore Legacy',
      description: `The tale of Vikram and Betal is one of the most captivating and enduring pieces of Indian folklore, with origins tracing back to ancient India. This popular story is part of the larger narrative known as the "Betaal Panchavimshati" or "Twenty-five Stories of Betal," which is a collection of tales featuring the wise king Vikramaditya and the ghostly Betal. The origin of this folklore is linked to the ancient Indian text, the "Baital Pachisi," which dates back to around the 11th century. The tales have been transmitted through various oral traditions and written texts, showcasing the rich narrative heritage of Indian storytelling.`,
      additionalInfo: `The central figure of the folklore is King Vikramaditya, a legendary ruler known for his wisdom, valor, and just rule. According to the legend, Vikramaditya is tasked with a seemingly impossible mission: to capture the elusive and mischievous ghost, Betal, who resides in a tree in a haunted forest. Betal, also known as Vetala, is a supernatural being with a penchant for telling intriguing and moralistic stories. Each time Vikramaditya captures Betal and attempts to take him to the sorcerer, Betal tells a new story filled with riddles and moral dilemmas. At the end of each tale, Betal poses a challenging question or a puzzle to the king. If Vikramaditya answers correctly, Betal escapes, and the cycle begins anew. This interplay of storytelling and riddles forms the crux of the narrative.

The significance of the Vikram and Betal stories extends beyond their entertainment value. They serve as a medium to impart moral lessons and ethical values through engaging tales and clever riddles. The stories are imbued with themes of justice, wisdom, and the complexities of human nature. Each story is designed to provoke thought and reflection, making the tales both educational and entertaining. The character of Vikramaditya exemplifies the virtues of patience and sagacity, while Betal represents the enigmatic and often challenging nature of knowledge and morality.

Over time, the Vikram and Betal folklore has transcended its origins and become a part of popular culture in India. It has been adapted into various forms of media, including literature, theater, television, and cinema. The timeless appeal of the stories lies in their ability to combine adventure with moral instruction, offering a glimpse into the rich tapestry of Indian folklore and the universal quest for wisdom and truth.`,
      imageUrl: 'https://i.pinimg.com/originals/71/e8/dc/71e8dcf207b6e18b7b1746e1db4f86ed.jpg' // Replace with actual image URL
    },
    heerranjha: {
      name: 'Heer-Ranjha',
      description: `Heer Ranjha is a celebrated Punjabi folktale that finds its roots in the cultural and literary traditions of Punjab, a region spanning parts of modern-day India and Pakistan. The story was immortalized by the renowned Punjabi poet Waris Shah in the 18th century. Shah's rendition, written in 1766, is considered a masterpiece of Punjabi literature and has significantly shaped the narrative and cultural perceptions of the tale. The narrative is deeply embedded in the Sufi traditions of Punjab, reflecting themes of love, sacrifice, and social constraints. Waris Shah's "Heer Ranjha" has been influential in Punjabi literature and culture, highlighting the socio-cultural dynamics of the time through a poignant and enduring love story.`,
      additionalInfo: `"Heer Ranjha" revolves around the tragic romance between Heer, a beautiful village girl, and Ranjha, a handsome young man from a different village. The story begins with Ranjha, a young man of the Sial family, who leaves his village due to a dispute with his family. He wanders into Heer's village and becomes enchanted by her beauty. They fall deeply in love, but their romance faces numerous obstacles.

Heer's family, bound by societal norms and class distinctions, disapproves of the relationship. Despite the barriers, the lovers' bond remains strong. However, through a series of deceptions and misunderstandings orchestrated by Heer's family and societal pressures, Ranjha is forced to leave. Heer is later coerced into a marriage with another suitor. The lovers' story ends tragically, as both Heer and Ranjha suffer and die, separated by fate and societal constraints. The tale of Heer Ranjha poignantly captures the themes of eternal love, the clash between individual desires and societal expectations, and the tragic consequences of societal norms on personal happiness.`,
      imageUrl: 'https://3.bp.blogspot.com/-p9Q9aAxuGwA/V5T7qrNixnI/AAAAAAAADaY/50MDY6D5yi06Pbx0YICYQ7AohUPPqnNPgCEw/s640/07-Heer-Ranjha1.jpg' // Replace with actual image URL
    },
    gopalbhar : {
      name: 'Gopal Bhar',
      description: `Gopal Bhar is a famous folkloric character from Bengal, particularly popular in the region of West Bengal and Bangladesh. The folklore surrounding Gopal Bhar dates back to the 18th century when he was believed to have served as a court jester in the royal court of Raja Krishnachandra, the king of Nadia. Gopal Bhar is often compared to other witty characters like Birbal from Akbar’s court or Tenali Rama from the Vijayanagara Empire. His tales were passed down orally and later became part of Bengali folklore, cherished for their humor, sharp wit, and wisdom. Gopal Bhar’s ability to outsmart others, including the king, courtiers, and common people, earned him lasting popularity in Bengal's cultural history.`,
      additionalInfo: `The stories of Gopal Bhar are short, humorous tales that usually involve him solving problems or outwitting people through clever tricks. His stories often focus on everyday situations in the royal court or village, where Gopal uses his wit to handle tricky situations, teach moral lessons, or expose the foolishness of others. Some famous stories include Gopal Bhar and the King’s Khichdi, where he humorously demonstrates the impracticality of a task, and Gopal Bhar and the Rich Man, where he exposes the greed of a wealthy person. The tales often blend humor with wisdom, making them both entertaining and insightful, emphasizing values like humility, intelligence, and justice.`,
      imageUrl: 'http://prodimage.images-bn.com/pimages/9781975617349_p0_v1_s1200x630.jpg' // Replace with actual image URL
    },
    padminiofchittorgarh : {
      name: 'Padmini of Chittorgarh',
      description: ``,
      additionalInfo: ``,
      imageUrl: 'https://www.maharajatrails.com/wp-content/uploads/2018/02/22Princess_Padmavati_ca._1765_Biblioth%C3%A8que_nationale_de_France_Paris.jpg' // Replace with actual image URL
    },
    parayi : {
      name: 'Parayi Petta Panthirukulam',
      description: ``,
      additionalInfo: ``,
      imageUrl: 'https://www.exoticindiaart.com/images/products/original/books-2019/nzx402.webp' // Replace with actual image URL
    },
    tenli : {
      name: 'Tenali Rama Stories',
      description: ``,
      additionalInfo: ``,
      imageUrl: 'https://cdn.exoticindia.com/images/products/original/books/nzf263.jpg' // Replace with actual image URL
    }

    // Add more folklore details as needed
  };

  const folklore = folkloreDetails[folkloreName.toLowerCase()];

  const speakText = (text) => {
    if (window.speechSynthesis) {
      const newUtterance = new SpeechSynthesisUtterance(text);
      newUtterance.lang = 'en-IN'; // Set language to Indian English
      setUtterance(newUtterance);
      window.speechSynthesis.speak(newUtterance);
      setIsSpeaking(true);
    } else {
      console.error('Speech synthesis not supported in this browser.');
    }
  };

  const stopSpeech = () => {
    if (window.speechSynthesis && isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  return (
    <div className="folklore-details-container">
      <h1>{folklore.name}</h1>
      <img src={folklore.imageUrl} alt={folklore.name} className="folklore-details-image" />
      <p>{folklore.description}</p>
      <p>{folklore.additionalInfo}</p>
      <div className="speech-controls">
        <button onClick={() => speakText(`${folklore.description} ${folklore.additionalInfo}`)} disabled={isSpeaking}>
          {isSpeaking ? 'Listening...' : 'Listen to Story'}
        </button>
        <button onClick={stopSpeech} disabled={!isSpeaking}>
          Stop
        </button>
      </div>
    </div>
  );
};

export default FolkloreDetails;