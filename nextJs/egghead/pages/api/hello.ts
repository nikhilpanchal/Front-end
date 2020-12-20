import { NextApiHandler } from "next";

const hello:NextApiHandler = (request, response) => {
    response
        .status(200)
        .json({
            hello: "its me",
            age: 2
        });
};

export default hello;