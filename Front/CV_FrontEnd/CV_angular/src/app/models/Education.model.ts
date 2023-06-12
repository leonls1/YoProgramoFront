export class Education {
    id?:number;
    tittle:string;
    description:string;
    dateBegining:string;
    dateEnd:string;
    place:string;

    constructor(tittle:string, description:string, dateBegining:string, dateEnd:string, place:string) {
        this.tittle = tittle;
        this.description = description;
        this.dateBegining = dateBegining;
        this.dateEnd = dateEnd;
        this.place = place;
    }

}