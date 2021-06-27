/* Class for Track data.
   When we get the JSON response from the API, use method .from() to construct new instances. */

class Track {
    static from(json){
        return Object.assign(new Track(), json);
    }

    artistsString(){
        /* Convert Track's 'artists' array to a String of artists. */
        return this.artists.map(artist => artist.name).join(', ')
    }
}

export default Track;