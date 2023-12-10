var Task = {
    getTodayTask: function(songs, lyrics) {
        const date = new Date();
        const dayOfWeek = date.getDay();
        const lyricsArray = lyrics[dayOfWeek - 1]['lyrics'].split('\n');

        let result = songs[dayOfWeek - 1];
        result['lyrics'] = lyricsArray;
    
        return result;
    }
}