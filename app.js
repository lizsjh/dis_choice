var botui=new BotUI('app');
const response=new Array();

botui.message.add({
    delay:500,
    loading: true,
    content: 'Hello. This is Taylor, and I am a bot created by the customer service department.'
}).then(function(){
    return botui.message.add({
        delay:700,
        loading: true,
        content:'I am handling your request today. What brings you here?'
    });
}).then(function(){
    return botui.action.button({
        action: [
          { text: 'Missing item',
            value: 'Missing item' 
          },
          { text: 'Check an order status',
            value: 'Check an order status' 
          },
          { text: 'Delivery delay',
            value: 'Delivery delay'
          }
        ]
    });
}).then(function (res) { 
        console.log(res.value);
        response.push(res.value);
}).then(function(){
    return botui.message.add({
        delay:900,
        loading: true,
        content:'I can help you with that. First, could you tell me why you need your item in more details?'
    });
}).then(function(){
    return botui.action.button({
        action: [
          { text: 'To teach a course',
            value: 'To teach a course' 
          },
          { text: 'To self-study',
            value: 'To self-study' 
          },
          { text: 'For research',
            value: 'For research'
          }
        ]
    });
}).then(function (res) { 
        console.log(res.value);
        response.push(res.value);
}).then(function(){
    return botui.message.add({
        delay:700,
        loading: true,
        content:'Got it. Could you input your order number below?'
    });
}).then(function(){
    return botui.action.text({
        action: {
          placeholder: 'Enter your message.'
        }
    
    });
}).then(function (res) { 
    console.log(res.value);
    response.push(res.value);
}).then(function(){
    return botui.message.add({
        delay:700,
        loading: true,
        content:'Alright. I will process your request. Please give me a moment.'
    });
}).then(function(){
    return botui.message.add({
        delay:700,
        loading: true,
        content:'Our record shows that your item is already delivered.'
    });
}).then(function(){
    return botui.message.add({
        delay:700,
        loading: true,
        content:'Are you sure that you do not have the item with you?'
    });
}).then(function(){
    return botui.action.button({
        action: [
          { text: 'No, I do not have the item',
            value: 'No, I do not have the item' 
          },
          { text: 'Yes, I do have the item',
            value: 'Yes, I do have the item' 
          }
        ]
    });
}).then(function (res) { 
        console.log(res.value);
        response.push(res.value);
}).then(function(){
    sendcomplete();
    return botui.message.add({
        delay:900,
        loading: true,
        content:'We are currently experiencing a system error. Please contact us again later.'
    });
});

function sendcomplete(){
    window.parent.postMessage({"message": "completed","text":response}, "*");
};
