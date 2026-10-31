module.exports = { apps: [{ name: "portfolio", script: ".next/standalone/server.js", env: { NODE_ENV: "production", PORT: 3000, HOSTNAME: "127.0.0.1" }, max_memory_restart: "500M" }] };
