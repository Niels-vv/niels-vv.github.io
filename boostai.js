var options = {
  chatPanel: {
    header: {
      title: "Sol",
    },
    styling: {
      avatarShape: "rounded",
      avatarUrl:
        "",
      primaryColor: "#A98AB0",
      chatBubbles:{
        userBackgroundColor: "#C6E9EA",
      },
      buttons:{
        backgroundColor: "#6C6D6D",
      }

    },
    messageFeedback: {
      hide: true,
    },
    settings: {
      requestFeedback: false,
      startTriggerActionId: 5281,
      authStartTriggerActionId: 5281,
      enableProactivityForSmallDevices: true,
      alwaysFullscreen: false,
    },
  },
};

function openChat(intentID) {  
  let loader;
  if(intentID == 5419){
  	loader = document.getElementById("chat-loader-1");
  } else if (intentID == 5422) {
    loader = document.getElementById("chat-loader-2");
  } else if (intentID == 5425) {
    loader = document.getElementById("chat-loader-3");
  } else if (intentID == 5428) {
    loader = document.getElementById("chat-loader-4");
  }
  loader.style.display= "block";

  options.chatPanel.settings.startTriggerActionId = intentID;
  options.chatPanel.settings.authStartTriggerActionId = intentID;
  var boost = window.boostInit("turesearch", options);
  boost.chatPanel.show();

  loader.style.display= "none";
}
