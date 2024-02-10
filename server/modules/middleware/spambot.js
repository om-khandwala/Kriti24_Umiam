// Import dependencies
import * as fs from 'fs';
import * as bayes from 'bayes';
// (async () => {

//     // Load the classifier back from its JSON representation.
//     const classifier = bayes.fromJson(fs.readFileSync("./spam-classifier.json"));

//     console.log(await classifier.categorize('SparkClean is a revolutionary decluttering project designed to transform chaos into clarity. In a world inundated with excess, SparkClean stands out as a beacon of organization and simplicity. Our mission is to empower individuals to reclaim their space, their time, and their peace of mind by decluttering their surroundings.    With SparkClean, decluttering becomes a seamless and enjoyable process. Our innovative approach combines practical strategies with personalized solutions tailored to each client"s unique needs. Whether it"s a cluttered closet, a chaotic kitchen, or an overstuffed office, our team of experienced decluttering specialists is dedicated to restoring order and harmony to any space.We understand that decluttering is more than just tidying up—it"s about making room for what truly matters. That"s why SparkClean not only helps clients eliminate excess belongings but also guides them in creating sustainable habits to prevent clutter from accumulating in the future. From initial consultation to final organization, SparkClean provides comprehensive support every step of the way. Our commitment to excellence and attention to detail ensure that each client receives a transformative decluttering experience that exceeds expectations. Say goodbye to clutter and hello to clarity with SparkClean. Let us ignite the spark of organization in your life today.')); // => "positive"
//     console.log(await classifier.categorize("My second project!")); // => "negative"

//     console.log(await classifier.categorize("Buy the new amazing products for only $20")); // => "spam"
    
// })();

export const checkspam = async (req, res) => {
    try {
        const classifier = bayes.fromJson(fs.readFileSync("./modules/middleware/spam-classifier.json"));
        const data = req.body;
        res.status(200).json({ is_spam: await classifier.categorize(data.str) });
    } catch (err) {
      console.log(err);
      res.status(411).json({ msg: err });
    }
  };