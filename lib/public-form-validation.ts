export class PublicFormValidationError extends Error {}

function parseFields(body: unknown, allowed: string[]): Record<string, unknown> {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    throw new PublicFormValidationError("Invalid form details")
  }
  const data = body as Record<string, unknown>
  if (Object.keys(data).some(key => !allowed.includes(key))) {
    throw new PublicFormValidationError("Invalid form details")
  }
  return data
}

function text(data: Record<string, unknown>, key: string, max: number, required = false): string {
  const value = data[key]
  if (value === undefined && !required) return ""
  if (typeof value !== "string") throw new PublicFormValidationError(`Invalid ${key}`)
  const clean = value.trim()
  if ((required && !clean) || clean.length > max || (key !== "message" && /[\r\n]/.test(clean))) {
    throw new PublicFormValidationError(`Invalid ${key}`)
  }
  return clean
}

function email(data: Record<string, unknown>): string {
  const value = text(data, "email", 254, true)
  if (!/^[^\s@<>"']+@[^\s@<>"']+\.[^\s@<>"']+$/.test(value)) {
    throw new PublicFormValidationError("Invalid email")
  }
  return value
}

export function parseContact(body: unknown) {
  const data = parseFields(body, ["name", "email", "phone", "program", "message"])
  return {
    name: text(data, "name", 120, true),
    email: email(data),
    phone: text(data, "phone", 40),
    program: text(data, "program", 120),
    message: text(data, "message", 5000, true),
  }
}

export function parseNewsletter(body: unknown) {
  const data = parseFields(body, ["name", "email"])
  return { name: text(data, "name", 120), email: email(data) }
}
