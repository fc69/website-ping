export default {
    // For manual GET/POST requests
    async fetch(request, env, ctx) {
      const targetUrl = "https://felixcheung-chatbot-server.onrender.com/api/chat";
  
      const payload = { question: "testing (manual GET)" };
  
      try {
        const res = await fetch(targetUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(payload)
        });
  
        return new Response(`Manual trigger: Sent message: ${res.status}`);
      } catch (err) {
        return new Response(`Manual trigger: Error: ${err}`);
      }
    },
  
    // For scheduled cron triggers (this is the missing piece)
    async scheduled(event, env, ctx) {
      const targetUrl = "https://felixcheung-chatbot-server.onrender.com/api/chat";
  
      const payload = { question: "testing (cron)" };
  
      try {
        const res = await fetch(targetUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(payload)
        });
  
        console.log(`Cron trigger: Sent message: ${res.status}`);
      } catch (err) {
        console.error(`Cron trigger: Error: ${err}`);
      }
    }
  };
  