export const isAuthorized = (request: any) => {
  const header = request.headers.get("Authorization");
  console.log(header + "header");

  if (!header) return false;

  const base64 = header.replace("Basic ", "");
  const [username, password] = Buffer.from(base64, "base64")
    .toString()
    .split(":");

  return username === process.env.MYUSER && password === process.env.MYPW;
};

export const authHeaders = () => ({
  "WWW-Authenticate": "Basic",
});
