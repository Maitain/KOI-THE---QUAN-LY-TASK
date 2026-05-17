import type { Handler, HandlerEvent } from "@netlify/functions";

const handler: Handler = async (event: HandlerEvent) => {
  const user = JSON.parse(event.body || "{}");

  // New users get 'store' role by default unless email matches known admin
  const isAdmin = user.email === "admin@koicafe.vn";

  return {
    statusCode: 200,
    body: JSON.stringify({
      app_metadata: {
        roles: isAdmin ? ["admin"] : ["store"],
      },
      user_metadata: {
        ...user.user_metadata,
        signed_up_at: new Date().toISOString(),
      },
    }),
  };
};

export { handler };
