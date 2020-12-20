import { NextApiHandler } from "next";

const user:NextApiHandler = (req, res) => {
    const { id } = req.query;

    return res
        .status(200)
        .json({
            id
        });
};

export default user;