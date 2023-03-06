export function randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function getRandomIndex(usedNumbers: number[], min: number, max: number): number {
  let index = randomNumber(min, max)

  while (usedNumbers.indexOf(index) > -1) {
    if (index < max) {
      index++
    } else {
      index = 0
    }
  }

  return index
}
