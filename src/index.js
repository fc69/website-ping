export default {
    async fetch(request, env, ctx) {
      const targetUrl = "https://felixcheung-chatbot-server.onrender.com/api/chat";
  
      const fakeMessage = {
        question: "testing"  // 🔥 Correct field name
      };
  
      try {
        const response = await fetch(targetUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(fakeMessage),
          cf: { fetchTimeout: 30 }
        });
  
        return new Response(`Sent message: ${response.status}`);
      } catch (e) {
        return new Response(`Error: ${e}`);
      }
    }
  };  