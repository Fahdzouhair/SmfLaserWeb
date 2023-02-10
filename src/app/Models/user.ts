export interface User {
    id?:number;
    nom:string;
    prenom:string;
    numeroTelephone:string;
    adresse:string;
    email:string;
    typeContrat?: string;
    role?:string,
    password?:string;
    roles?:any[]
}
