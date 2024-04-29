import {Platform} from 'react-native';
import Sound from 'react-native-sound';

// Enable playback in silence mode
Sound.setCategory('Playback');
const isIos: boolean = Platform.OS === 'ios';
const soundFileExtension = isIos ? '.mp3' : '';
const arrayOfPositiveSounds = [
  `kolhakavod${soundFileExtension}`,
  `metsuyan${soundFileExtension}`,
  `yafemeod${soundFileExtension}`,
  `yafemeod2${soundFileExtension}`,
  `yofi${soundFileExtension}`,
  `yofitofi${soundFileExtension}`,
];

const badSoundFile = `oops${soundFileExtension}`;

// Function to play a random sound
export function playQuestionFeedback(isGood: boolean = true) {
  // Get random sound
  const randomSound = isGood
    ? arrayOfPositiveSounds[
        Math.floor(Math.random() * arrayOfPositiveSounds.length)
      ]
    : badSoundFile;
  const sound = new Sound(randomSound, Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // Play the sound with an onEnd callback
    sound.play(success => {
      if (success) {
        sound.release();
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  });
}

export function tapSound() {
  const tapSoundFile = `tap${soundFileExtension}`;
  const sound = new Sound(tapSoundFile, Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    sound.play(success => {
      if (success) {
        sound.release();
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  });
}
export function successSound() {
  const tapSoundFile = `success${soundFileExtension}`;
  const sound = new Sound(tapSoundFile, Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    sound.play(success => {
      if (success) {
        sound.release();
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  });
}
