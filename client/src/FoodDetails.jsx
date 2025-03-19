import React from 'react';
import { useParams } from 'react-router-dom';
import './Css/FoodDetails.css'; // Import a CSS file for custom styling

const foodData = {
  biryani: {
    name: 'Biryani',
    image: 'https://media.istockphoto.com/id/1410130688/photo/mutton-biryani-served-in-a-golden-dish-isolated-on-dark-background-side-view-indian-food.jpg?s=612x612&w=0&k=20&c=ueFrghYZuKAty-rFVe5dtMtNIbn0jaUsSvCUwTVOmd8=', 
    history: `Biryani is one of the most celebrated dishes in the Indian subcontinent, known for its intricate layering of flavors and aromas. Its origins trace back to the Mughal era, around the 16th century. While some believe it was brought to India by Persian traders, others argue that biryani evolved from the indigenous "pulao," a simpler rice dish.
    The dish became popular in royal kitchens due to its richness, combining fragrant basmati rice with meat, saffron, and a medley of spices like cardamom, cloves, cinnamon, and star anise. Traditionally, biryani was slow-cooked in earthen pots, sealing in the flavors through the process known as "dum" cooking. Over the years, regional variations have emerged, such as Hyderabadi biryani (known for its spiciness and saffron), Kolkata biryani (infused with potatoes and slightly sweeter), and Lucknowi biryani (known for its lightness and use of ghee). Today, biryani is not only a festive dish but also a street food staple across India.`,
    recipe: [
      'Ingredients: Basmati rice, chicken or mutton, yogurt, ginger-garlic paste, ghee, saffron, onions, green chilies, fresh mint, cilantro, cloves, cinnamon, cardamom, bay leaves.',
      'Marinate the chicken/mutton with yogurt, ginger-garlic paste, and spices for at least 2 hours (preferably overnight).',
      'Parboil the rice with whole spices (cloves, cinnamon, cardamom) until it is 70% cooked.',
      'Fry onions until golden brown (known as "birista").',
      'Layer the marinated meat at the bottom of a heavy-bottomed pot, followed by a layer of parboiled rice, then add saffron soaked in milk, fried onions, and fresh herbs (mint and cilantro).',
      'Seal the pot with dough to trap the steam ("dum") and cook on low heat for 30-40 minutes.',
      'Serve hot with raita, salad, and a slice of lemon.'
    ]
  },
  dosa: {
    name: 'Dosa',
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9zYXxlbnwwfHwwfHx8MA%3D%3D', 
    history: `Dosa is a quintessential South Indian dish with origins dating back over 1,000 years, mentioned in ancient Tamil literature. It is believed that dosa was first made in the Tamil Nadu region, but it later gained immense popularity in Karnataka. The batter for dosa, made from fermented rice and urad dal, offers both taste and nutritional value, being rich in carbohydrates and proteins.
    Traditionally, dosa was a humble breakfast dish made on stone griddles (known as "kal" in Tamil). As dosa spread across India, it took on many forms — from the crispy, paper-thin "Paper Dosa" to the more elaborate "Masala Dosa," stuffed with spicy potato filling. Today, dosa is not only a staple in South India but has become a beloved dish worldwide, appreciated for its simplicity and versatility. It is often paired with coconut chutney, sambar (a tangy lentil stew), and a variety of chutneys made from tomatoes, onions, or tamarind.`,
    recipe: [
      'Ingredients: Rice, urad dal (black gram), fenugreek seeds, salt, ghee or oil for cooking.',
      'Soak rice and urad dal separately for 4-6 hours. Add fenugreek seeds to the dal.',
      'Grind the soaked ingredients to a smooth batter, mixing rice and dal together. Ensure a light and airy consistency.',
      'Allow the batter to ferment overnight (about 8-12 hours). The batter will rise and develop a slight sourness.',
      'Heat a non-stick or cast iron griddle. Pour a ladle of batter in the center and spread it thinly in a circular motion to form a crepe.',
      'Drizzle oil or ghee along the edges. Cook until the dosa turns golden brown and crisp.',
      'Serve with coconut chutney, sambar, and a dollop of ghee or butter for extra flavor.'
    ]
  },
  paneerTikka: {
    name: 'Paneer Tikka',
    image: 'https://suhana.com/wp-content/uploads/2023/07/paneer-tikka-2-1.png',
    history: `Paneer Tikka is a popular Indian appetizer made from marinated paneer (Indian cottage cheese) cubes, skewered and grilled to perfection. The origins of paneer tikka can be traced back to the Mughlai cuisine of India, where tandoori cooking was perfected. 
    Traditionally, paneer tikka was a dish reserved for special occasions, often prepared in large tandoors. Over time, it gained immense popularity across India and is now a common feature at parties, weddings, and restaurants. The dish exemplifies the rich culinary heritage of India, where vegetarian dishes are crafted with an emphasis on flavor and presentation. 
    Served with green chutney and lemon wedges, paneer tikka has also inspired various adaptations, including tikka masala and wraps, making it a versatile dish that continues to evolve.`,
    recipe: [
      'Ingredients: Paneer (cottage cheese), yogurt, ginger-garlic paste, lemon juice, red chili powder, turmeric powder, garam masala, bell peppers, onions, and skewers.',
      'Cut the paneer into cubes and soak them in a marinade made from yogurt, ginger-garlic paste, lemon juice, and spices for at least 1 hour.',
      'Prepare vegetables (bell peppers and onions) by cutting them into square pieces to skewer along with paneer.',
      'Preheat the grill or oven to high heat (about 200°C or 400°F).',
      'Thread the marinated paneer and vegetables onto skewers alternately.',
      'Grill the skewers for about 15-20 minutes, turning occasionally, until the paneer is slightly charred and cooked through.',
      'Serve hot with mint chutney and lemon wedges, garnished with fresh coriander.'
    ]
  },
  dhokla: {
    name: 'Dhokla',
    image: 'https://www.maggi.in/sites/default/files/srh_recipes/d1d74216ba5fa7ce5d72b8e121afe69f.jpg',
    history: `Dhokla is a traditional Gujarati snack made from fermented rice and chickpea batter. Its origins date back to the state of Gujarat, India, where it is a staple in both households and street food stalls. Dhokla is not only popular in Gujarat but has also found a place in the hearts of food lovers across India and beyond.
    Originally, dhokla was made using the steaming method, which gives it a soft and fluffy texture. It is often served during festivals, celebrations, and as a breakfast item. The dish is also a testament to the culinary philosophy of Gujarat, where health and flavor are harmoniously balanced. Dhokla is typically enjoyed with green chutney and is a favorite among vegetarians.`,
    recipe: [
      'Ingredients: Gram flour (besan), yogurt, water, turmeric powder, green chilies, ginger, salt, sugar, ENO fruit salt (or baking soda), and coriander leaves for garnish.',
      'In a mixing bowl, combine gram flour, yogurt, water, turmeric powder, green chilies, ginger, salt, and sugar. Whisk until smooth.',
      'Let the batter rest for about 15-20 minutes, allowing it to ferment slightly.',
      'Grease a steaming tray or a thali and pour the batter into it.',
      'Just before steaming, add ENO fruit salt to the batter and mix gently to aerate it.',
      'Steam the batter for about 15-20 minutes until a toothpick comes out clean.',
      'Once done, let it cool slightly before cutting it into square pieces.',
      'Garnish with fresh coriander leaves and serve with green chutney.'
    ]
  }
  
  
};

const FoodDetails = () => {
  const { foodName } = useParams();
  const food = foodData[foodName];

  if (!food) {
    return <h2>Food not found</h2>;
  }

  return (
    <div className="food-details-container container pt-5">
      <h1 className="display-5 mb-4 text-center">{food.name}</h1>
      <img src={food.image} alt={food.name} className="img-fluid mb-4 food-image" />
      
      <div className="history-section mb-5">
        <h2 className="display-6">The Story Behind {food.name}</h2>
        <p className="lead">{food.history}</p>
      </div>

      <div className="recipe-section">
        <h2 className="display-6 mb-3">Recipe of {food.name}</h2>
        <ul className="recipe-list">
          {food.recipe.map((item, index) => (
            <li key={index} className="recipe-step">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FoodDetails;