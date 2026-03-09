export function validateMessage(message) {
  if (!message || message.trim().length === 0) return false;
  if (message.length > 500) return false; // optional max length
  return message.trim();
}