import { Router, Request, Response } from "express";
import ticket from "./ticket";
import teams from "./teams";


const routes = Router()

routes.use("/ticket", ticket);
routes.use("/teams", teams)


routes.use((req: Request, res: Response) => res.json({ error: "Requisição desconhecida" }));

export default routes;
