import requests
import time
import random

# Config
TARGET_URL = "https://felixcheung-chatbot-server.onrender.com"  # Your chatbot API endpoint

# Some example fake messages
FAKE_MESSAGES = [
    "Hello!",
    "Are you there?",
    "Tell me something interesting.",
    "What's your favorite color?",
    "Can you tell a joke?"
]

# Function to send a fake chat message
def send_fake_message():
    message = random.choice(FAKE_MESSAGES)
    payload = {"message": message}
    try:
        response = requests.post(TARGET_URL, json=payload)
        print(f"Sent message: '{message}' | Status: {response.status_code}")
    except Exception as e:
        print(f"Error sending message: {e}")

# Main loop
while True:
    send_fake_message()
    wait_time = random.randint(240, 360)  # Wait between 4 to 6 minutes randomly
    print(f"Waiting {wait_time} seconds before next message...")
    time.sleep(wait_time)
