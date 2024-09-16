import { createHash } from "crypto"

export const encryptPassword = (email: string, password: string) =>
  createHash("sha256")
    .update(password + email.toLowerCase())
    .digest("base64")
