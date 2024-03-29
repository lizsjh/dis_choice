var botui=new BotUI('app');
const response=new Array();

botui.message.add({
    delay:700,
    loading: true,
    content: 'Hello. This is Taylor, and I am a bot created by the customer service department.'
}).then(function(){
    return botui.message.add({
        delay:500,
        loading: true,
        content:'I am handling your request today. What brings you here?'
    });
}).then(function(){
    return botui.action.button({
        action: [
          { text: 'Missing item',
            value: 'Missing item' 
          },
          { text: 'Check order status',
            value: 'Check order status' 
          },
          { text: 'Return/exchange item(s)',
            value: 'Return/exchange item(s)'
          }
        ]
    });
}).then(function (res) { 
        console.log(res.value); 
        response.push(res.value);   
}).then(function(){
    return botui.message.add({
        delay:800,
        loading: true,
        content:'I can help you with that. First, could you tell me why you need to replace or return this textbook?'
    });
}).then(function(){
    return botui.action.button({
        action: [
          { text: 'Damage in the item',
            value: 'Damage in the item' 
          },
          { text: 'Need a different version or edition',
            value: 'Need a different version or edition' 
          },
          { text: 'Incorrect item delivered',
            value: 'Incorrect item delivered'
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
        delay:800,
        loading: true,
        content:'Alright. I will process your request. Please give me a moment.'
    });
}).then(function(){
    return botui.message.add({
        delay:1500,
        loading: true,
        content:'The 3rd edition is currently in stock. For your information, you need to pay $50 more for the newer edition.'
    });
}).then(function(){
    return botui.message.add({
        delay:900,
        loading: true,
        content:'Would you still like to exchange the book?'
    });
}).then(function(){
    return botui.action.button({
        action: [
          { text: 'Yes, I would like an exchange',
            value: 'Yes, I would like an exchange' 
          },
          { text: 'No, I would like a refund',
            value: 'No, I would like a refund' 
          }
        ]
    });
}).then(function (res) { 
        console.log(res.value); 
        response.push(res.value);   
}).then(function(){
    return botui.message.add({
        delay:800,
        loading: true,
        content:'I’m processing your request. Please give me a moment'
    });
}).then(function(){
    return botui.message.add({
        delay:1800,
        loading: true,
        content:'I have finished processing your request.'
    });
}).then(function(){
    return botui.message.add({
        delay:1500,
        loading: true,
        content:'Please make sure you return the older edition to us. Is there anything else you need?'
    });
}).then(function(){
    return botui.action.button({
        action: [
          { text: '$20 express shipping label for returning the older edition',
            value: '$20 express shipping label for returning the older edition' 
          },
          { text: 'Subscribe to a marketing newsletter',
            value: 'Subscribe to a marketing newsletter' 
          }
        ]
    });
}).then(function (res) { 
        console.log(res.value); 
        response.push(res.value);   
}).then(function(){
    return botui.message.add({
        delay:1800,
        loading: true,
        content:'I have processed your request, and the issue is resolved'
    });
}).then(function(){
    sendcomplete();
    return botui.message.add({
        delay:900,
        loading: true,
        content:'Please contact us again if you need further assistance. Bye.'
    });
});

function sendcomplete(){
    window.parent.postMessage({"message": "completed","text1":response[0],"text2":response[1],"text3":response[2],"text4":response[3],"text5":response[4]}, "*");
};
