export default {
    async fetch(request, env, ctx) {
      const targetUrl = "https://felixcheung-chatbot-server.onrender.com";
  
      const fakeMessage = {
        message: "Hello from bot",
      };
  
      try {
        const response = await fetch(targetUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(fakeMessage),
        });
  
        return new Response(`Sent message: ${response.status}`);
      } catch (e) {
        return new Response(`Error: ${e}`);
      }
    },
  };
  