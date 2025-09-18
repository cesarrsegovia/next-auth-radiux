export { default } from "next-auth/middleware";

export const config = { matcher: ['/dashboard/:path*']} //el :path* protege todas las rutas que esten dentro de dashboard