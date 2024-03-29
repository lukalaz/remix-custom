export const isAuthorized = (request: any) => {
  const header = request.headers.get("Authorization");

  if (!header) return false;

  const base64 = header.replace("Basic ", "");
  const [username, password] = Buffer.from(base64, "base64")
    .toString()
    .split(":");

  return username === process.env.ADMINUSER && password === process.env.ADMINPW;
};

export const authHeaders = () => ({
  "WWW-Authenticate": "Basic",
});
