import Sound from 'react-native-sound';

// Enable playback in silence mode
Sound.setCategory('Playback');

const arrayOfPositiveSounds = [
  'kolhakavod',
  'metsuyan',
  'yafemeod',
  'yafemeod2',
  'yofi',
  'yofitofi',
];

// Function to play a random sound
export function play() {
  // Get random sound
  const randomSound =
    arrayOfPositiveSounds[
      Math.floor(Math.random() * arrayOfPositiveSounds.length)
    ];
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
