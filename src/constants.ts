export const languageToSlugs: Record<string,string> = {
  'Japanese': 'jap',
}

export const lightGrey = 'rgb(230,230,230)'

export const lingoCommandIsLocked = true;

export const mobileBreakPoint = 768;

export const lockIconStyle = { fontSize: '16px', marginLeft: '5px' }
export const protectedLinkStyle = {
  display:'flex',alignItems: 'center', justifyContent: 'space-between' 
}

export const fontStretch = '100%'

// Tailwind's JIT compiler does not detect dynamically generated classes,  
// so colours cannot be extracted dynamically from `consistentStyles`.  
// Instead, use (Ctrl + D) to quickly select and replace colours  
// across both the 'coloursList' and 'consistentStyles'.  

// coloursList = ['blue-500', 'blue-700', 'white','black']

export const consistentStyles = {
  darkBlueBorder: 'border-blue-700',
  blueBackground: 'bg-blue-500',
  blueText: 'text-blue-500',
  textWhite: 'text-white',
  textBlack: 'text-black'
}
