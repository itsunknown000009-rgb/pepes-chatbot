function talk(){
  let chat = document.getElementById("chat");
  let box = document.getElementById("box");
  let text = box.value.toLowerCase();
  
  chat.innerHTML += "<p>You: " + box.value + "</p>";

  let reply = "Sorry, I don't understand.";

  if(text.includes("menu")) reply = "We sell chicken, burgers, wraps and wings.";
  if(text.includes("hours")) reply = "Open every day 11am to 11pm.";
  if(text.includes("location")) reply = "We are in Blackburn town centre.";
  if(text.includes("spicy")) reply = "Choose Mild, Hot or Extra Hot.";

  chat.innerHTML += "<p>Bot: " + reply + "</p>";
  box.value = "";
}
