export class Quotedetails {
    id:number;
    quoteContent:string;
    upvotes:number;
    downvotes:number;
    authorname:string;
    username:string;

    constructor(id:number, quoteContent:string, upvotes:number, downvotes:number, authorname:string, username:string){
        this.id = id;
        this.quoteContent = quoteContent;
        this.upvotes = upvotes;
        this.downvotes = downvotes;
        this.authorname = authorname;
        this.username = username; 
    }
}
