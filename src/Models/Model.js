export default class Model {
  constructor() {
    this.soundOn = true;
    this.musicOn = true;
    this.bgMusicPlaying = false;
    this.playerScore = 0;
    this.playerUsername = '';
  }

  set musicOn(value) {
    this.musicOn = value;
  }

  get musicOn() {
    return this.musicOn;
  }

  set soundOn(value) {
    this.soundOn = value;
  }

  get soundOn() {
    return this.soundOn;
  }

  set bgMusicPlaying(value) {
    this.bgMusicPlaying = value;
  }

  get bgMusicPlaying() {
    return this.bgMusicPlaying;
  }

  set score(value) {
    this.playerScore = value;
  }

  get score() {
    return this.playerScore;
  }

  set username(value) {
    this.playerUsername = value;
  }

  get username() {
    return this.playerUsername;
  }
}
