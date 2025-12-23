export function formatPhoneNumberToE164(phone: string): string {
  const digitsOnly = phone.replace(/\D/g, '')
  
  if (digitsOnly.length === 10) {
    return `+1${digitsOnly}`
  }
  
  if (digitsOnly.length === 11 && digitsOnly.startsWith('1')) {
    return `+${digitsOnly}`
  }
  
  if (phone.startsWith('+1') && digitsOnly.length === 11) {
    return phone
  }
  
  return phone
}

export function formatPhoneNumberDisplay(phone: string): string {
  const digitsOnly = phone.replace(/\D/g, '')
  
  if (digitsOnly.length === 10) {
    return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3, 6)}-${digitsOnly.slice(6)}`
  }
  
  if (digitsOnly.length === 11 && digitsOnly.startsWith('1')) {
    return `(${digitsOnly.slice(1, 4)}) ${digitsOnly.slice(4, 7)}-${digitsOnly.slice(7)}`
  }
  
  return phone
}

export function validatePhoneNumber(phone: string): boolean {
  const digitsOnly = phone.replace(/\D/g, '')
  return digitsOnly.length === 10 || (digitsOnly.length === 11 && digitsOnly.startsWith('1'))
}

