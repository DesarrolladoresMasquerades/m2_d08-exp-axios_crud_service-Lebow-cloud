const axios = require("axios");

// axios is the nice fetch()

class CharactersApi {
    // ADD SECRETS IN THE CONSTRUCTOR LIKE ((API_KEY, API_USERNAME))
    constructor(baseURL){
        this.baseURL = baseURL || "https://ih-crud-api.herokuapp.com"
        this.api = axios.create({baseURL: this.baseURL})
        //this.API_KEY = API_KEY
        //this.API_USER = API_USER

        // connection to api with secrets

        //  this.api = axios.create({ baseURL: `${this.baseURL}/?key=${API_KEY}` });
    }

    getAllCharacters = ()=> axios.get("/characters")
    getOneCharacter = (id)=> {
       return this.api.get(`/characters/${id}`)
    }
    createOneCharacter = ()=> {}
    updateOneCharacter = ()=> {}
    deleteOneCharacter = ()=> {}

}

module.exports = CharactersApi;
