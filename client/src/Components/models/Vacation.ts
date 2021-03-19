
export class Vacation{
    public constructor(
        public destination?:string,
        public description?:string,
        public startDate?: Date,      
        public endDate?: Date,   
        public price?:number,  
        public imageUrl?: string,
        public id?: number,
        public isFollowing?: boolean,
        public numOfFollowers?: number
    ){}

}
