export function login(name, role) {
  if (typeof window !== "undefined") {
    localStorage.setItem("userName", name);
    localStorage.setItem("userRole", role);   // store role
  }
}

export function getSession() {
  if (typeof window !== "undefined") {
    return {
      name: localStorage.getItem("userName"),
      role: localStorage.getItem("userRole"),
    };
  }
  return null;
}

export function logout() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("userName");
    localStorage.removeItem("userRole"); // remove role also
  }
}

export function isLoggedIn() {
  return localStorage.getItem("userName") !== null;
}

// helper to check role
export function getRole() {
  if (typeof window !== "undefined") {
    return localStorage.getItem("userRole");
  }
  return null;
}