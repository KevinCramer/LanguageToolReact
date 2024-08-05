
export const queryParamCompress = (settings: string)=> {
  let output = ''
  const settingsArray = JSON.parse(settings)
  output += settingsArray[1] + '-'
  output += settingsArray[2] ? 'T' : 'F'
  output += settingsArray[3].toString();
  output += settingsArray[4] ? 'T' : 'F'
  output += settingsArray[5] ? 'T' : 'F'
  output += settingsArray[6] ? 'T' : 'F'
  return output
};
export const queryParamDecompress = (compressedSettings: string)=> {
  if(compressedSettings === null){
    return null
  }
  let output = '['
  const a = compressedSettings.split('-')
  output += '"' + a[0] + '",'
  output += a[1][0] === 'T' ? 'true,' : 'false,'
  output += a[1][1] + ','
  output += a[1][2] === 'T' ? 'true,' : 'false,'
  output += a[1][3] === 'T' ? 'true,' : 'false,'
  output += a[1][4] === 'T' ? 'true' : 'false'
  output += ']'
  return output
}

