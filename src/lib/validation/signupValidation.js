export function validateSignup(form) {
  const errors = {};

  if (!form.name || form.name.trim().length < 3) {
    errors.name = "Name must be at least 3 characters";
  }

  if (!form.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = "Invalid email address";
  }

  if (!form.password) {
    errors.password = "Password is required";
  } else if (form.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  return errors;
}