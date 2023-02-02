export interface Intervention {
    id?:number,
    objet:string,
    date_debut:Date,
    date_fin:Date,
    date_debut_reel?:Date,
    date_fin_reel?:Date,
    adresse:string,
    typeIntervention:number,
    equipe:number,
    client:number,
    files:any,
    status:string
}
