import { Intervention } from "./intervention";
import { User } from "./user";

export interface Equipe {
    id?:number,
    nom:string,
    chefEquipe:number,
    membres:number[]
}
