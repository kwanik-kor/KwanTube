import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "KwanTube";
    res.locals.routes = routes;
    next();
};