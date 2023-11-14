
const TrackerSchema = require("../models/tracker");


const addTracker = async (req, res) => {
    console.log(req.body);
    try{
        const addTracker = new TrackerSchema(req.body);
        const createTracker = await addTracker.save();
        res.send({status:true, data : createTracker, message : "tracker generated successfully"});
    } catch (error){
        res.send({status : false, data : error, message : "could not generate tracker"});
    }
}

const getTracker = async(req, res) => {
    try{
        const getTracker = await TrackerSchema.find({});
        res.send({status : true, data : getTracker, message : "tracker info retreived successfully"})
    } catch (error){
        res.send({status : false, data : error, message : "could not get tracker info"});
    }
}

const updateTracker = async(req, res) => {
    console.log("tracker");
    const id = req.body._id; // Assuming the ID of the tracker document is in the URL
 

  try {
    const tracker = await TrackerSchema.findById(id);

    if (!tracker) {
      return res.status(404).json({ message: 'Tracker not found' });
    }

    // Update the tracker based on the request body
    Object.keys(req.body).forEach((key) => {
      tracker[key] = req.body[key];
    });

    await tracker.save();

    return res.send({status : true , data : tracker, message: 'Tracker updated successfully' });
  } catch (err) {
    return res.send({status : false , data : tracker, message: "Tracker couldn't get updated " });
  }
}

module.exports = {
    addTracker,
    getTracker,
    updateTracker
}