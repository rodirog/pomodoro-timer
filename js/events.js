import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonDecrease,
  buttonIncrease,
  soundOnForest,
  soundOnRain,
  soundOnCoffeeShop,
  soundOnFireplace,
  soundOffForest,
  soundOffRain,
  soundOffCoffeeShop,
  soundOffFireplace
} from "./elements.js"

export default function Events({
  timer,
  controls,
  sound,
  cards
}) {

  buttonPlay.addEventListener("click", function() {
    timer.countdown()
    controls.play()
    sound.buttonPress()
  })

  buttonPause.addEventListener("click", function() {
    timer.hold()
    controls.reset()
    sound.buttonPress()
  })

  buttonStop.addEventListener("click", function() {
    controls.reset()
    timer.reset()
    sound.buttonPress()
  })

  buttonIncrease.addEventListener("click", function() {
    controls.reset()
    timer.increaseMinutes()
    timer.reset()
  })

  buttonDecrease.addEventListener("click", function() {
    controls.reset()
    timer.decreaseMinutes()
    timer.reset() 
    })

  soundOffForest.addEventListener("click", function() {
    cards.reset()
    cards.playForest()
    sound.bgAudioPause()
    sound.playForestSound()
    })

  soundOffRain.addEventListener("click", function() {
    cards.reset()
    cards.playRain()
    sound.bgAudioPause()
    sound.playRainSound()
    })

  soundOffCoffeeShop.addEventListener("click", function() {
    cards.reset()
    cards.playCoffeeShop()
    sound.bgAudioPause()
    sound.playCoffeeShopSound()
    })

  soundOffFireplace.addEventListener("click", function() {
    cards.reset()
    cards.playFireplace()
    sound.bgAudioPause()
    sound.playFireplaceSound()
    })

  soundOnForest.addEventListener("click", function() {
    cards.reset()
    sound.bgAudioPause()
    })

  soundOnRain.addEventListener("click", function() {
    cards.reset()
    sound.bgAudioPause()
    })

  soundOnCoffeeShop.addEventListener("click", function() {
    cards.reset()
    sound.bgAudioPause()
    })

  soundOnFireplace.addEventListener("click", function() {
    cards.reset()
    sound.bgAudioPause()
    })

  
}