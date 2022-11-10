export class  User{
    public email:string;
    public  message:string;
    public career:string

    constructor(email:string, message:string,career:string){
        this.email=email;
        this.message=message;
        this.career=career;
    }
}