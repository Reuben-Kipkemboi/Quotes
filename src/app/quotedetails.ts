export class Quotedetails {
    id: number;
    quoteContent: string;
    upvotes: number;
    downvotes: number;
    authorname: string;
    username: string;
    showDescription : boolean;
    additionDate:Date

    constructor(id: number, quoteContent: string, upvotes: number, downvotes: number, authorname: string, username: string, additionDate:Date) {
        this.id = id;
        this.quoteContent = quoteContent;
        this.upvotes = upvotes;
        this.downvotes = downvotes;
        this.authorname = authorname;
        this.username = username;
        this.showDescription = false;
        this.showDescription = false;
        this.additionDate = additionDate;
    }
}
