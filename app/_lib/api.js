// lib/api.js

// lib/api.js

// IMPORTANT: Remove the default fallback completely
// We'll rely 100% on environment variables
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// Validation to ensure API URL is set
if (!API_BASE_URL) {
  console.error("❌ NEXT_PUBLIC_API_URL environment variable is not set!");
  console.error("Add it to your .env.local or .env.production file:");
  console.error(
    "NEXT_PUBLIC_API_URL=https://portfolio-backend-clean-95b4.onrender.com/api/v1",
  );
  // Throw error in development, but not in production to avoid breaking builds
  if (process.env.NODE_ENV === "development") {
    throw new Error(
      "NEXT_PUBLIC_API_URL is not configured. See console for details.",
    );
  }
} else {
  console.log(`✅ API Base URL configured: ${API_BASE_URL}`);
}

// Helper function to get API URL with validation
function getApiBaseUrl() {
  const url = process.env.NEXT_PUBLIC_API_URL;
  if (!url) {
    throw new Error(
      "API URL not configured. Set NEXT_PUBLIC_API_URL in your environment variables.",
    );
  }
  return url;
}

/**
 * Generic API request handler
 */
async function request(endpoint, options = {}) {
  const API_URL = getApiBaseUrl();
  const url = `${API_URL}${endpoint}`;

  console.log(`📤 API Request: ${url}`);

  const defaultHeaders = {
    "Content-Type": "application/json",
  };

  const config = {
    ...options,
    credentials: "include",
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);
    console.log(`📥 API Response: ${response.status} ${response.statusText}`);

    if (!response.ok) {
      const error = await response.json().catch(() => ({
        message: `HTTP error! status: ${response.status}`,
      }));
      console.error(`❌ API Error ${response.status}:`, error);
      throw new Error(
        error.message || `Request failed with status ${response.status}`,
      );
    }

    if (response.status === 204) return null;

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("❌ API request failed:", {
      url,
      error: error.message,
      endpoint,
    });
    throw error;
  }
}

/**
 * CONTACT API
 */
export const contactAPI = {
  /**
   * Send contact message
   * @param {Object} data - Contact form data
   * @param {string} data.name - Sender's name
   * @param {string} data.email - Sender's email
   * @param {string} data.message - Message content
   */
  sendMessage: async (data) => {
    return request("/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },
};

/**
 * USER API
 */
export const userAPI = {
  /**
   * Get user profile (public)
   */
  getProfile: async () => {
    return request("/users/profile");
  },

  /**
   * Update user profile (admin only)
   * @param {Object} updates - Profile updates
   */
  updateProfile: async (updates) => {
    return request("/users/profile", {
      method: "PATCH",
      body: JSON.stringify(updates),
      isAdmin: true,
    });
  },
};

/**
 * SKILLS API
 */
export const skillsAPI = {
  /**
   * Get all skills (public)
   */
  getAll: async () => {
    return request("/skills");
  },

  /**
   * Get single skill by ID (public)
   */
  getById: async (id) => {
    return request(`/skills/${id}`);
  },

  /**
   * Create new skill (admin only)
   */
  create: async (skillData) => {
    return request("/skills", {
      method: "POST",
      body: JSON.stringify(skillData),
      isAdmin: true,
    });
  },

  /**
   * Update skill (admin only)
   */
  update: async (id, updates) => {
    return request(`/skills/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updates),
      isAdmin: true,
    });
  },

  /**
   * Delete skill (admin only)
   */
  delete: async (id) => {
    return request(`/skills/${id}`, {
      method: "DELETE",
      isAdmin: true,
    });
  },

  /**
   * Reorder skills (admin only)
   */
  reorder: async (skills) => {
    return request("/skills/reorder", {
      method: "PATCH",
      body: JSON.stringify({ skills }),
      isAdmin: true,
    });
  },
};

/**
 * PROJECTS API
 */
export const projectsAPI = {
  /**
   * Get all projects (public)
   * @param {Object} params - Query parameters
   */
  getAll: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    const endpoint = queryString ? `/projects?${queryString}` : "/projects";
    return request(endpoint);
  },

  /**
   * Get single project by ID or slug (public)
   */
  getById: async (identifier) => {
    return request(`/projects/${identifier}`);
  },

  /**
   * Create project (admin only)
   */
  create: async (projectData) => {
    return request("/projects", {
      method: "POST",
      body: JSON.stringify(projectData),
      isAdmin: true,
    });
  },

  /**
   * Update project (admin only)
   */
  update: async (id, updates) => {
    return request(`/projects/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updates),
      isAdmin: true,
    });
  },

  /**
   * Delete project (admin only)
   */
  delete: async (id) => {
    return request(`/projects/${id}`, {
      method: "DELETE",
      isAdmin: true,
    });
  },
};

/**
 * EXPERIENCE API (Added based on your backend routes)
 */
export const experienceAPI = {
  /**
   * Get all experience (public)
   */
  getAll: async () => {
    return request("/experience");
  },

  /**
   * Get single experience by ID (public)
   */
  getById: async (id) => {
    return request(`/experience/${id}`);
  },

  /**
   * Create experience (admin only)
   */
  create: async (experienceData) => {
    return request("/experience", {
      method: "POST",
      body: JSON.stringify(experienceData),
      isAdmin: true,
    });
  },

  /**
   * Update experience (admin only)
   */
  update: async (id, updates) => {
    return request(`/experience/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updates),
      isAdmin: true,
    });
  },

  /**
   * Delete experience (admin only)
   */
  delete: async (id) => {
    return request(`/experience/${id}`, {
      method: "DELETE",
      isAdmin: true,
    });
  },
};

export const certificatesAPI = {
  getAll: () => request("/certificates"),
  create: (certificate) =>
    request("/certificates", {
      method: "POST",
      body: JSON.stringify(certificate),
    }),
  update: (id, certificate) =>
    request(`/certificates/${id}`, {
      method: "PATCH",
      body: JSON.stringify(certificate),
    }),
  delete: (id) => request(`/certificates/${id}`, { method: "DELETE" }),
};

export const adminAPI = {
  login: (secret) =>
    request("/admin/login", {
      method: "POST",
      body: JSON.stringify({ secret }),
    }),
  session: () => request("/admin/session"),
  logout: () => request("/admin/logout", { method: "POST" }),
};

/**
 * Export all APIs in one object for convenience
 */
export const api = {
  contact: contactAPI,
  user: userAPI,
  skills: skillsAPI,
  projects: projectsAPI,
  experience: experienceAPI, // Added
  certificates: certificatesAPI,
  admin: adminAPI,
};
