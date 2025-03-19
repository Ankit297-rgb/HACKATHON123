// src/pages/FestivalDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './Css/FestivalDetails.css'; // Ensure this CSS file exists for styling

const FestivalDetails = () => {
  const { festivalName } = useParams();

  const festivalDetails = {
    diwali: {
      name: 'Diwali',
      description: `Diwali, also known as Deepavali, derives its name from the Sanskrit words "deepa," meaning light or lamp, and "avali," meaning row. Hence, Diwali is often described as the "festival of lights," signifying the illumination of homes, streets, and hearts with lamps, candles, and fireworks. The festival generally falls between mid-October and mid-November, depending on the lunar calendar, and is celebrated on the darkest night (Amavasya) of the Hindu month of Kartika. It is a multi-day festival, typically lasting five days, each day with its own unique customs and religious observances.

      The first day, Dhanteras, is dedicated to Dhanvantari, the god of health and healing, and marks the beginning of the festivities. On this day, people clean their homes and buy new items, particularly gold, silver, and kitchen utensils, as a symbol of good fortune and prosperity. The second day, Naraka Chaturdashi or Choti Diwali, commemorates the victory of Lord Krishna over the demon Narakasura. This day is often marked with early morning rituals, including oil baths and lighting small clay lamps called diyas to ward off evil.

      The third day, considered the most important, is dedicated to the worship of Lakshmi, the goddess of wealth, fortune, and prosperity. Families perform elaborate pujas (prayers) to invite Lakshmi into their homes, seeking her blessings for the coming year. This day is also associated with the mythological return of Lord Rama to Ayodhya after his victory over Ravana in the Ramayana epic. His homecoming was celebrated with rows of lamps, symbolizing the dispelling of darkness and ignorance. In Jainism, Diwali marks the anniversary of Lord Mahavira's attainment of Nirvana, while in Sikhism, it commemorates the release of Guru Hargobind Ji from imprisonment, known as Bandi Chhor Divas. Buddhists, especially Newar Buddhists, in Nepal, also observe Diwali as a time for honoring their gods and ancestors.

      The fourth day, known as Govardhan Puja or Annakut, celebrates the legend of Lord Krishna lifting Mount Govardhan to protect the people of Vrindavan from torrential rains. On this day, worshipers offer large quantities of food (Annakut) to deities and distribute it as prasad. The fifth and final day, Bhai Dooj, honors the bond between brothers and sisters, with sisters performing a ceremonial prayer for their brothers' long life and prosperity, reminiscent of Raksha Bandhan.

      Throughout the festival, people decorate their homes with vibrant rangoli patterns, made from colored powders, flowers, or rice. These designs are placed at the entrance to welcome guests and deities, especially Goddess Lakshmi. Fireworks play a prominent role in the celebrations, symbolizing the joy and festivity of the occasion, though concerns about noise and air pollution have led to calls for more environmentally friendly practices, such as using quieter and less polluting alternatives.

      Sweets and traditional foods are central to Diwali, with families preparing and exchanging a wide variety of confections such as laddoos, barfis, and halwas, often made from ghee, sugar, and flour or milk-based ingredients. Gift-giving is also a major part of the festival, where family members and friends exchange tokens of love and good wishes, typically including sweets, dry fruits, clothes, and jewelry. Many businesses and companies also give bonuses or gifts to employees as a gesture of appreciation and goodwill.

      For many, Diwali is also a time for introspection, self-renewal, and spiritual purification. It is seen as an opportunity to let go of past grudges, forgive others, and start afresh with positive intentions for the coming year. Fasting, meditation, and charity are also practiced by many, as a way of seeking blessings and contributing to the community. The festival highlights the core values of dharma (righteousness), seva (service), and unity, bringing people of different faiths and backgrounds together in celebration.

      In recent years, there has been a growing emphasis on celebrating Diwali in an environmentally conscious manner, with many opting for organic decorations, natural dyes for rangolis, and reduced or silent fireworks. The "Green Diwali" initiative encourages people to limit pollution and waste, opting for eco-friendly ways to celebrate while preserving the spirit of the festival.`,
      imageUrl: 'https://wallpapercave.com/wp/wp10200483.jpg' // Update the image URL as needed
    },
    durga: {
      name: 'Durga Puja',
    description: `Durga Puja is a major Hindu festival that celebrates the goddess Durga and her victory over the buffalo demon Mahishasura, symbolizing the triumph of good over evil. It is predominantly observed in the Indian state of West Bengal, as well as in other parts of India and among Bengali communities worldwide. The festival typically takes place in the month of Ashwin (September-October), coinciding with Navratri and culminating on the tenth day known as Vijayadashami or Dussehra. The preparation for Durga Puja begins months in advance with artisans crafting elaborate clay idols of Goddess Durga, along with her children—Lakshmi, Saraswati, Ganesha, and Kartikeya. These idols are installed in temporary, decorated structures known as pandals, where devotees gather for worship, music, cultural performances, and celebrations.

The festival spans over five main days—Shashthi, Saptami, Ashtami, Navami, and Dashami. On Shashthi, the face of the Durga idol is unveiled, marking the beginning of the puja rituals. Saptami involves the invocation of the goddess by bringing in a sacred banana tree, symbolizing her arrival. Ashtami is the most auspicious day, when the grand Sandhi Puja is performed, marking the moment when Durga is believed to have slain Mahishasura. This day also witnesses the traditional Kumari Puja, where young girls are worshipped as incarnations of the goddess. On Navami, offerings and rituals continue, leading to the final day, Vijayadashami, when the idols are immersed in rivers or water bodies in a process called Visarjan. This ritual signifies the departure of Durga to her heavenly abode, and devotees bid farewell with the promise of her return the following year.

Durga Puja is not just a religious event but also a cultural and social extravaganza, with people visiting pandals to admire the artistic decorations and enjoy traditional foods, sweets, and cultural programs. The streets are illuminated with lights, and fairs, shopping, and social gatherings are central to the celebration. Devotees wear new clothes, participate in aarti, and engage in rituals like dhunuchi naach, a traditional dance performed with incense burners. Music, particularly the sound of dhaak (traditional drums), adds to the festive atmosphere. Many people also engage in charitable activities during the festival, distributing food and clothing to the needy.

Durga Puja holds deep significance as a celebration of feminine power (Shakti) and resilience. It represents the universal themes of the triumph of good over evil, the destruction of ignorance, and the empowerment of righteousness. It also marks the time for renewal, with the goddess symbolizing protection, strength, and prosperity. The festival reflects a blend of devotion, art, culture, and community bonding, making it one of the most vibrant and awaited events in regions where it is celebrated. In recent years, there has been growing attention toward eco-friendly practices during Durga Puja, with a shift toward biodegradable materials for idols and efforts to reduce pollution during idol immersion.`,
      imageUrl: 'http://4.bp.blogspot.com/-NV7nrFUvtts/UHu1rs60V1I/AAAAAAAADL8/_-bRmRKspdw/s1600/durga+puja+wallpapers-11.png' // Replace with actual image URL
    },
eid: {
      name: 'Eid-ul-Fitr',
      description: `Eid, a significant Islamic festival, is celebrated with great enthusiasm and reverence across India by the Muslim community. There are two main Eids celebrated annually: Eid-ul-Fitr and Eid-ul-Adha. Eid-ul-Fitr marks the end of Ramadan, the holy month of fasting, while Eid-ul-Adha, also known as Bakr-Eid, commemorates the willingness of Prophet Ibrahim to sacrifice his son as an act of obedience to God, and the subsequent provision of a ram as a substitute by God.

Eid-ul-Fitr is celebrated on the first day of Shawwal, the tenth month of the Islamic lunar calendar, after the sighting of the new moon. In India, Eid-ul-Fitr is a public holiday, observed with prayers, feasts, and communal gatherings. The day begins with the Eid prayer, or "Salat al-Eid," performed in large congregations at mosques, Eidgahs (open prayer grounds), or public spaces. Before the prayer, Muslims pay "Zakat al-Fitr," a form of charity, to ensure that the less fortunate can also enjoy the festival. The prayer is followed by a sermon, after which people greet each other with "Eid Mubarak" and embrace in a spirit of unity and brotherhood. The rest of the day is spent visiting friends and family, exchanging gifts, and sharing festive meals.

Eid-ul-Fitr is a time of feasting and celebration, with traditional dishes like biryani, kebabs, haleem, and a wide variety of sweets such as seviyan (vermicelli pudding), sheer khurma (a milk-based dessert with dates and nuts), and phirni (rice pudding) prepared for the occasion. Special Eid meals are shared with family and friends, and it is customary to visit the homes of relatives and neighbors to offer greetings and partake in the festive food. New clothes, particularly in traditional attire like sherwanis for men and salwar kameez or sarees for women, are worn as part of the celebration. Children often receive "Eidi," a gift of money or treats from elders, as a token of blessing.

Eid-ul-Adha, or the "Festival of Sacrifice," occurs about two months after Eid-ul-Fitr, coinciding with the completion of the Hajj pilgrimage to Mecca. In India, this festival is also marked by prayers and charity, but the central ritual is the act of Qurbani, or animal sacrifice, which commemorates Prophet Ibrahim’s devotion. Muslims who can afford it sacrifice an animal, typically a goat, sheep, or cow, in a symbolic act of obedience to God. The meat from the sacrifice is divided into three parts: one-third for the family, one-third for relatives and friends, and one-third for the poor and needy. This act of sharing underscores the values of charity, gratitude, and compassion, which are central to Eid celebrations.

The day begins with the Eid prayer, similar to Eid-ul-Fitr, followed by the sacrifice of the animal. Families and communities gather to partake in the meat and prepare special dishes. Feasts feature lavish meals, with biryani, kebabs, and curries made from the sacrificial meat being the highlight of the day. Like Eid-ul-Fitr, the occasion is marked by visits to family and friends, wearing new clothes, and giving gifts, especially to children. The spirit of generosity is emphasized through donations to charity, and many Muslims in India distribute food and clothing to the underprivileged.

Indian Eid celebrations, while rooted in Islamic tradition, reflect the country’s cultural diversity. In various regions, the festival takes on local flavors. For example, in Hyderabad, the dish haleem is a special Eid delicacy, while in Lucknow, the Awadhi culinary tradition is showcased with kebabs and other Mughlai dishes. In Kerala, where there is a significant Muslim population, Eid is celebrated with local foods like Malabar biryani and pathiri (rice pancakes). Indian Muslims blend their cultural heritage with religious practices, making the celebrations a rich fusion of devotion, culture, and community bonding.

Eid also fosters interfaith interactions in India. It is common for people of other faiths to join in the celebrations, sharing in the festive meals and offering greetings to their Muslim friends and neighbors. Political and social leaders often extend their greetings to the Muslim community on this occasion, underscoring the inclusive nature of the festival in India's pluralistic society. Public events and gatherings, especially in cities like Delhi, Mumbai, and Hyderabad, bring together people from various walks of life in the spirit of communal harmony.

In recent years, there has been an increasing emphasis on eco-friendly and ethical practices during Eid, particularly around animal sacrifice. Efforts are being made to ensure that the rituals are carried out in hygienic and respectful ways, with many communities advocating for clean and regulated spaces for the Qurbani. The essence of the festival, however, remains focused on the themes of devotion, gratitude, charity, and the importance of family and community ties.`,
      imageUrl: 'https://www.gannett-cdn.com/presto/2020/07/29/USAT/8f7dae1b-28e0-4582-97ea-1e5dcba15001-AP_Eid_Al_Adha_Photo_Gallery.jpg?crop=5650,3179,x0,y261&width=3200&height=1801&format=pjpg&auto=webp' // Replace with actual image URL
    },

    christmas: {
      name: 'Christmas',
      description: `Christmas in India is celebrated with a blend of religious devotion and cultural diversity, reflecting the country's unique character. Although Christians make up a small percentage of India's population, the festival is observed with great enthusiasm, especially in states with significant Christian communities, such as Kerala, Goa, Tamil Nadu, and the northeastern states like Nagaland and Mizoram. Major cities such as Mumbai, Delhi, Kolkata, and Bengaluru also witness vibrant celebrations, with Christmas becoming a national holiday enjoyed by people of all faiths.

The festival commemorates the birth of Jesus Christ and is marked by special church services, nativity plays, carol singing, and festive gatherings. Midnight Mass on Christmas Eve is a central event for many Christians, drawing large congregations who come together to pray and celebrate. Churches and cathedrals across India are beautifully decorated with lights, flowers, and nativity scenes depicting the birth of Christ. In regions like Kerala and Goa, where there is a higher concentration of Christians, the streets are lit up with Christmas stars, and homes are adorned with cribs, Christmas trees, and decorations.

Food plays a major role in Christmas celebrations in India. Traditional Christmas cakes, often rich fruitcakes or plum cakes, are a staple, and families prepare elaborate feasts featuring a mix of Indian and Western dishes. In Goa, Christmas is celebrated with traditional Goan sweets like bebinca and neureos, while in Kerala, special dishes such as achappam and kozhalappam are popular. In Tamil Nadu and other southern states, a mix of Christian and local South Indian cuisine marks the Christmas meal, often including dishes like appam and stews.

Christmas in India is not just limited to Christian communities. The festival is embraced by people from various faiths who participate in the festive cheer by exchanging gifts, decorating their homes with lights and Christmas trees, and attending parties. Shopping malls, markets, and streets in cities like Mumbai, Delhi, and Kolkata are decked out with Christmas decorations, sales, and events, making it a time for commercial and cultural celebration as well. Santa Claus is a common figure during this time, with children receiving gifts and attending special Christmas-themed events in schools and communities.

In northeastern India, where Christianity is the predominant religion, Christmas is a major public festival. Towns and villages are adorned with decorations, and community singing and gatherings are a key part of the celebration. In states like Nagaland and Mizoram, the entire week leading up to Christmas is marked by festivities, including religious services, community feasts, and traditional dances. The cultural aspect of Christmas in these regions incorporates local customs, making it a unique expression of Christian devotion.

Christmas in India, while retaining its religious roots, has also become a symbol of the country’s cultural diversity and inclusive spirit. The festival provides an opportunity for communities to come together, transcending religious boundaries, and fostering a spirit of unity and goodwill.`,
      imageUrl: 'https://wallpapercave.com/wp/wp2325130.jpg' // Replace with actual image URL
    },

    garba: {
      name: 'Garba',
      description: `Garba is a traditional dance form from the Indian state of Gujarat, performed during the nine-day Hindu festival of Navratri, which celebrates the goddess Durga. The word "Garba" comes from the Sanskrit term "Garbha" meaning womb, symbolizing the creation and divine feminine energy. The dance is deeply symbolic and is traditionally performed in a circular pattern around a central object, which is usually a lamp or an image of the goddess. The circular movement of the dancers represents the cycle of life, from birth to death, with the deity in the center symbolizing the eternal, unchanging divine force.

Garba is typically performed in the evenings, with participants dressed in colorful, traditional attire. Women wear "chaniya choli," which consists of a long, flared skirt, a blouse, and a dupatta, while men often wear "kedia," a short, embroidered jacket, paired with dhotis or trousers. The outfits are adorned with intricate mirror work, embroidery, and vibrant colors, adding to the festive atmosphere.

The dance is accompanied by live music, usually featuring traditional instruments like the dhol, tabla, and harmonium, along with folk songs in praise of goddess Durga or other deities. The rhythm of the music intensifies as the dance progresses, with participants performing intricate footwork, clapping their hands, and twirling in sync with the beats. The energy in a Garba session is vibrant and dynamic, with hundreds of people often dancing together in large open spaces or community grounds.

Garba is distinct from another popular Gujarati dance form, Dandiya Raas, which is performed using sticks (dandiyas). While both are associated with Navratri, Garba involves hand and foot movements without the use of props, emphasizing the rhythmic, graceful, and collective expression of devotion.

In modern times, Garba has spread beyond Gujarat and India, becoming popular among Indian communities worldwide, particularly in the United States, the United Kingdom, and Canada. It is celebrated in large public gatherings, with Garba competitions and performances held in cities across the globe. Many contemporary Garba events incorporate modern music, fusion styles, and even Bollywood influences, while still retaining the core traditions of the dance.

The spirit of Garba is one of joy, devotion, and community, as it brings people together in celebration of life, culture, and divine energy during the auspicious festival of Navratri.`,
      imageUrl: 'https://i.pinimg.com/736x/95/36/8c/95368c95e56e631f01df2b9337532c86.jpg' // Replace with actual image URL
    },
    pongal: {
      name: 'Pongal',
      description: ``,
      imageUrl: 'https://static.toiimg.com/photo/msid-67512385/67512385.jpg?353206' // Replace with actual image URL
    },
    onam: {
      name: 'Onam',
      description: `Onam is the biggest and most significant festival in Kerala, celebrated with grandeur and cultural fervor. It marks the annual homecoming of the mythical King Mahabali, who, according to Hindu mythology, ruled Kerala in an era of prosperity and equality. The festival is celebrated by Keralites worldwide, transcending religious boundaries, as a cultural symbol of Kerala's rich heritage. Onam falls in the month of Chingam, the first month of the Malayalam calendar, typically in August or September, and lasts for ten days, with the most important day being Thiruvonam.

Onam’s origins are deeply rooted in Hindu mythology. According to legend, Mahabali, a benevolent Asura king, ruled over Kerala during a time of great prosperity. However, his growing power and popularity among his subjects alarmed the gods. In response, Lord Vishnu took the form of the dwarf Vamana and asked Mahabali for three paces of land. Upon granting the wish, Vamana grew to an immense size and covered the earth and heavens in two steps. For the third step, Mahabali offered his head, showing his humility. Impressed by his devotion and sacrifice, Vishnu granted him the boon of returning to his kingdom once a year, which is celebrated as Onam.

Onam is known for its elaborate and vibrant celebrations, which span ten days, starting with Atham and culminating in Thiruvonam. Each day has its own significance, and the celebrations include various traditional rituals, feasts, and cultural activities. The most visible and popular of these is the creation of "Pookalam," floral designs made in front of homes. Pookalams are made using a variety of colorful flowers and grow more intricate as the days progress, symbolizing the welcoming of King Mahabali.

One of the most important aspects of Onam is the "Onasadya," a grand vegetarian feast served on banana leaves, which typically includes over 20 different dishes. The feast consists of various traditional dishes such as rice, sambar, avial, thoran, pulisseri, pachadi, and payasam. The Onasadya is a reflection of Kerala’s culinary heritage and is a symbol of abundance and community sharing. Families gather to enjoy the feast together, making it a central element of the festival.

Another significant aspect of Onam is the Vallam Kali, or the famous snake boat race, which takes place on the backwaters of Kerala. Long, ornate boats, known as "chundan vallams," are rowed by hundreds of oarsmen in a competitive race, accompanied by traditional songs. This event attracts large crowds and has become a symbol of the cultural unity and teamwork that Onam represents.

Onam is also a time for traditional dance and music. Women participate in the "Kaikottikali" dance, a graceful and rhythmic dance performed in a circle, while other folk dances such as "Thiruvathira" and "Pulikali," where men paint themselves as tigers and dance to the beat of drums, are also integral to the celebrations. "Kathakali" performances, depicting stories from the Hindu epics, are staged during Onam, showcasing Kerala's classical dance-drama heritage. Traditional games and sports, known as "Onakalikal," are also part of the festivities, including events like tug-of-war, archery, and the energetic "Onathallu" (martial arts).

The festival is deeply inclusive, with people from all communities in Kerala participating in the celebrations. While Onam is rooted in Hindu mythology, it is a cultural festival that brings together people of different faiths and backgrounds. The spirit of Onam reflects unity, joy, and prosperity, emphasizing the values of sharing, gratitude, and community bonding.

In recent years, Onam celebrations have also expanded to include public events and government-sponsored programs. Various cultural fairs, exhibitions, and performances are held across Kerala, promoting the state's rich traditions and attracting tourists from across India and the world. The state government organizes large-scale Onam Week celebrations in the capital city of Thiruvananthapuram, with processions, cultural showcases, and food festivals.

Onam is not just a religious festival but a celebration of Kerala’s history, culture, and social unity. It highlights the state’s agricultural roots, with many rituals and customs associated with harvest time. It is a time when Keralites, regardless of their religious beliefs, come together to celebrate prosperity, tradition, and the enduring legacy of their cultural heritage.`,
      imageUrl: 'https://www.mistay.in/travel-blog/content/images/2020/05/onam-celebrations.jpg' // Replace with actual image URL
    },
    lohri: {
      name: 'Lohri',
      description: ``,
      imageUrl: 'https://images.thequint.com/thequint/2016-01/4adb6685-3362-40c9-83c2-4870eb013c4a/LOHRI.jpg?rect=0%2C0%2C1024%2C538&w=1200&auto=format%2Ccompress&ogImage=true' // Replace with actual image URL
    },

    // Add more festival details as needed
  };

  const festival = festivalDetails[festivalName.toLowerCase()];

  if (!festival) {
    return <div>Festival not found</div>;
  }

  return (
    <div className="festival-details-container">
      <h1>{festival.name}</h1>
      <img src={festival.imageUrl} alt={festival.name} className="festival-details-image" />
      <p>{festival.description}</p>
    </div>
  );
};

export default FestivalDetails;