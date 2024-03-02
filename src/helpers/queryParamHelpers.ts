export const queryParamCompress = (settings: string)=> {
  let output = ''
  const settingsArray = JSON.parse(settings)
  output += settingsArray[0] + '-'
  output += settingsArray[1] + '-'
  output += settingsArray[2] ? 'T': 'F'
  output += settingsArray[3].toString();
  output += settingsArray[4] ? 'T': 'F'
  output += settingsArray[5] ? 'T': 'F'
  output += settingsArray[6] ? 'T': 'F'
  return output
};
export const queryParamDecompress = (compressedSettings: string)=> {
  if(compressedSettings === null){
    return null
  }
  let output = '['
  const a = compressedSettings.split('-')
  output += '"' + a[0] + '",'
  output += '"' + a[1] + '",'
  output += a[2][0] === 'T' ? 'true,' : 'false,'
  output += a[2][1] + ','
  output += a[2][2] === 'T' ? 'true,' : 'false,'
  output += a[2][3] === 'T' ? 'true,' : 'false,'
  output += a[2][4] === 'T' ? 'true' : 'false'
  output += ']'
  return output
};export const notNullOrUndefined = (value: any) => value !== null && value !== undefined
