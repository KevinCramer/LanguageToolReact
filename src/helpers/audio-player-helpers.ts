export function nullOrUndefined(value: string | boolean | number): boolean {
  return value === null || value === undefined
}

const secondsInMinute = 60;
export function timeElapsed(currentSeconds: number): string {
  // assumes audio files are less than 1 hour
  return `${Math.floor(currentSeconds / secondsInMinute)}:${(Math.floor(currentSeconds) - 
    secondsInMinute * Math.floor(currentSeconds / secondsInMinute)).toString().padStart(2, '0')}`

}

export function timeRemaining(currentSeconds: number, totalSeconds: number): string {
  const secondsRemaining = Math.max(Math.ceil(totalSeconds) - currentSeconds, 0); // Prevent negative values
  // assumes audio files are less than 1 hour
  return `${Math.floor((secondsRemaining) / secondsInMinute)}:${
    (Math.floor(secondsRemaining) - secondsInMinute *
     Math.floor((secondsRemaining) / secondsInMinute))
      .toString().padStart(2, '0')
  }`
}