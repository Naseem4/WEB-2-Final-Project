/**
 * Middleware to restrict access based on user role.
 * @param {...string} roles - Allowed roles (e.g., "admin", "user")
 */
const authorizeRole = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user?.role)) {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }
    next();
  };
};

module.exports = authorizeRole;