var options = {
  chatPanel: {
    header: {
      title: "Coco",
    },
    styling: {
      avatarShape: "rounded",
      avatarUrl:
        "docs/assets/images/Mental_health_bloem1.png",
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
      conversationId: "123456789456123",
    },
  },
};
var boost = window.boostInit("turesearch", options);

function openChat() {  
  options.chatPanel.settings.conversationId = "44444444444444555";
  boost.chatPanel.show();
}

function downloadConversation() {
  const endpoint = "https://<address>/api/chat/v2/conversation/download/testsss";
}
