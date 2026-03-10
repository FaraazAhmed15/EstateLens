export function login(name) {
  if (typeof window !== "undefined") {
    localStorage.setItem("userName", name);
  }
}

export function getSession() {
  if (typeof window !== "undefined") {
    return localStorage.getItem("userName") || null;
  }
  return null;
}

export function logout() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("userName");
  }
}

// Check if user is logged in
export function isLoggedIn() {
  return getSession() !== null;
}