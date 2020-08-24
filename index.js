class Movie {
    constructor(title, category, duration) {
        this.title = title;
        this.category = category;
        this.duration = duration;
    }
    watch(){
        return `Kamu menonton film ${this.title} dengan kategori ${this.category} berdurasi ${this.duration} `
    }
    streamAt(){
        return `Film ${this.title} ditayangkan di Televisi`;
    }
};

class Soundtract extends Movie{
    constructor(title, duration, category, titleSong, singer){
        super(title, duration, category);
        this.titleSong = titleSong;
        this.singer = singer;
    }
    movieSoundtrack(){
        return `Film ${this.title} memiliki lagu soundtrack berjudul; ${this.titleSong} yang dinyanyikan oleh ${this.singer}`
    }

}

class Channel extends Movie{
    constructor(title, duration, category, channelName){
        super(title, duration, category);
        this.channelName = channelName;
    }

    streamAt(){
        return `Film ${this.title} ditayangkan di ${this.channelName}`; 
    }
}
let movie = new Movie('Suspicious Partner', 'Romance', '60 Minutes');
let soundTract = new Soundtract('Suspicious Partner', 'Romance', '60 minutes', 'How do you feel', 'Ridho Majid')
let channel = new Channel('Suspicious Partner', 'Romance', '60 minutes', 'Netflix');

console.log(movie.watch());
console.log(soundTract.movieSoundtrack());
console.log(channel.streamAt());


