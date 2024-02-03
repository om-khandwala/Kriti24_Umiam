import DoubtReply from "../../Models/Doubt-reply.js";
import Doubt from "../../Models/Doubt.js";

export const createDoubt = async (req, res) => {
    try {
        const data = req.body;
        const doubt = new Doubt(data);
        await doubt.save();
        res.status(201).json({ message: 'Doubt created successfully', doubt });
    } catch (error) {
        console.log("There is some error in doubts controller", error);
        res.status(500).json({ error: 'Internal server error occurred' });
    }
};

export const createDoubtReply = async (req, res) => {
    try {
        const { doubt_id } = req.params;
        const { user_id, text_body } = req.body;

        const replyData = {
            user_id,
            text_body,
            doubt_id
        };

        const reply = new DoubtReply(replyData);
        await reply.save();
        res.status(201).json({ message: 'Reply created successfully', reply });
    } catch (error) {
        console.log("There is some error in creating doubt reply", error);
        res.status(500).json({ error: 'Internal server error occurred' });
    }
};

export const getDoubtById = async (req, res) => {
    try {
        const doubtId = req.params.doubtId;
        const doubt = await Doubt.findById(doubtId);
        if (!doubt) {
            return res.status(404).json({ error: 'Doubt not found' });
        }
        res.status(200).json(doubt);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const deleteDoubt = async (req, res) => {
    try {
        const doubtId = req.params.doubtId;
        await Doubt.findByIdAndDelete(doubtId);
        res.status(204).json({ message: "Doubt has been deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const allDoubts = async (req, res) => {
    try {
        const doubts = await Doubt.find();
        res.status(200).json({ data: doubts });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const allDoubtsOfUser = async (req, res) => {
    try {
        const { user_id } = req.params;
        const doubts = await Doubt.find({ user_id: user_id });
        res.status(200).json({ data: doubts });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const allRepliesOfDoubt = async (req, res) => {
    try {
        const { doubt_id } = req.params;
        const requiredReplies = await DoubtReply.find({ doubt_id: doubt_id })

        if (!requiredReplies || requiredReplies.length === 0) {
            return res.status(404).json({ error: 'Doubt replies not found' });
        }

        res.status(200).json({ data: requiredReplies });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
