import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';
dotenv.config();

export const authRequired = (req, res, next) => {
    const { token } = req.cookies;
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: "Unauthorized" });
        req.user = user;
        next();
    });
};