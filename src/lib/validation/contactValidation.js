export function validateContact(data) {
  const errors = {};

  // Name validation
  if (!data.name || data.name.trim() === "") {
    errors.name = "Name is required";
  } else if (data.name.length < 3) {
    errors.name = "Name must be at least 3 characters";
  }

  // Email validation
  if (!data.email || data.email.trim() === "") {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Invalid email format";
  }

  // ADDED PHONE VALIDATION
  if (!data.phone || data.phone.trim() === "") {
    errors.phone = "Phone number is required";
  } else if (!/^[0-9]{10}$/.test(data.phone)) {
    errors.phone = "Phone number must be 10 digits";
  }

  // Message validation
  if (!data.message || data.message.trim() === "") {
    errors.message = "Message is required";
  } else if (data.message.length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  return errors;
}