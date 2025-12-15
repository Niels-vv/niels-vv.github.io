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
      conversationId: "1234567",
      sessionId: "1234567",
    },
  },
};
var boost = window.boostInit("turesearch", options);

function openChat() {  
  options.chatPanel.settings.conversationId = "4445554";
  boost.chatPanel.setConversationId("4353232");
  boost.chatPanel.sendMessage("hoiii");
  boost.chatPanel.setConversationId("4353232");
}

function downloadConversation() {
  const endpoint = "https://<address>/api/chat/v2/conversation/download/testsss";
}
