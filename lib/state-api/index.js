class DataApi {
    constructor(rawData){
        this.rawData = rawData;
    }
    mapArrIntoObject(arr){
        return arr.reduce((acc, curVal) => {
            acc[curVal.id] = curVal;
            return acc;
        }, {});
    }
    getArticles(){
        return this.mapArrIntoObject(this.rawData.articles);
    }

    getAuthors(){
        return this.mapArrIntoObject(this.rawData.authors);
    }
}

export default DataApi;