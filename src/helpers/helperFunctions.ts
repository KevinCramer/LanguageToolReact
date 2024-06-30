export const nullOrUndefined = (value: string | boolean | number) =>
  value === null || value === undefined

const secondsInMinute = 60;
export function timeElapsed(currentSeconds: number): string {
  return `${Math.floor(currentSeconds / secondsInMinute)}:${(Math.floor(currentSeconds) - 
    secondsInMinute * Math.floor(currentSeconds / secondsInMinute)).toString().padStart(2, '0')}`

}

export function timeRemaining(currentSeconds: number, totalSeconds: number): string {
  const secondsRemaining = totalSeconds - currentSeconds;
  return `${Math.floor((secondsRemaining) / secondsInMinute)}:${
    (Math.floor(secondsRemaining) - secondsInMinute *
     Math.floor((secondsRemaining) / secondsInMinute))
      .toString().padStart(2, '0')
  }`
}