const History = require("../model/Histories");

// @desc - all histories
// @route - GET '/history/gethistory'
// @access - public
const getHistory = async (req, res) => {
    try {
        const histories = await History.find();

        if (!histories) return res.status(204).json({ message: "No history found" });

        const result = [];
        histories?.map(history => {
            result.push({
                title: history?.title,
                type: history?.type,
                date: history?.date,
                modificationId: history?._id?.toString(),
                members: history?.members,
            })
        })

        res.json(result);
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    getHistory,
};
