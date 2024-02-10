// Import dependencies
import { writeFileSync } from "fs";
import csv from "csvtojson";
import bayes from "bayes";

(async () => {

    // Make a new classifier
    const classifier = bayes();

    // Load the CSV file - https://www.kaggle.com/uciml/sms-spam-collection-dataset
    const collection = await csv().fromFile("./modules/middleware/spam.csv");

    // Loop over each element in the collection
    for (const element of collection) {

        // Teach the classifier
        await classifier.learn(element.v2, element.v1);
        
    }

    // Serialize the classifier's state as a JSON string and save it to a file
    writeFileSync("./modules/middleware/spam-classifier.json", classifier.toJson());

})();