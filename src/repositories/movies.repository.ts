import {MovieModel} from '../models/movie.model'

export class MovieRepository{
    protected db:Loki
    protected moviesCollection:Collection<MovieModel>

    constructor(db:Loki){
        this.db = db
        this.moviesCollection = this.db.addCollection('movies')
    }

    add(newMovieData:MovieModel){
        return this.moviesCollection.insert(newMovieData)
    }

    get(id?:number):MovieModel[]{
        if(!id)
           return this.moviesCollection.find()
        return this.moviesCollection.find({id:id})
    }

    find(title:string):MovieModel[]{
        return this.moviesCollection.find({title:title})
    }

}