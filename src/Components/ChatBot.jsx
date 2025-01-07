import React, { useState } from 'react';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleSend = () => {
    if (userInput.trim()) {
      const newMessages = [
        ...messages,
        { sender: 'user', text: userInput },
        { sender: 'bot', text: getBotResponse(userInput) },
      ];
      setMessages(newMessages);
      setUserInput('');
    }
  };

  const getBotResponse = (message) => {
    // Convert the message to lowercase for easier comparison
    const msg = message.toLowerCase();
  
    // Respond based on different keywords or phrases
    if (msg.includes('hello') || msg.includes('hi')) {
      return 'Hello! How can I assist you with your food delivery today?';
    } else if (msg.includes('menu')) {
      return 'You can browse our menu by visiting the menu section on the website or app!';
    } else if (msg.includes('order')) {
      return 'To place an order, please visit the "Order Now" section and choose your food items.';
    } else if (msg.includes('checkout')) {
      return 'Once you have selected your items, click on the checkout button to proceed with the payment.';
    } else if (msg.includes('tracking')) {
      return 'You can track your order in real-time using the "Order Tracking" feature on your dashboard.';
    } else if (msg.includes('delivery time')) {
      return 'Our average delivery time is between 30 minutes to 1 hour depending on your location and traffic conditions.';
    } else if (msg.includes('payment')) {
      return 'We accept various payment methods including credit cards, debit cards, and digital wallets like PayPal and Google Pay.';
    } else if (msg.includes('offers') || msg.includes('discounts')) {
      return 'We have ongoing offers! Check the "Offers" section in the app to see current discounts and promotions.';
    } else if (msg.includes('support')) {
      return 'If you need assistance, you can reach our support team through the "Help" section in the app or call us at (123) 456-7890.';
    } else if (msg.includes('cancel order')) {
      return 'You can cancel your order within 10 minutes of placing it. After that, the order will be processed for delivery.';
    } else if (msg.includes('refund')) {
      return 'Refund requests can be made through our customer support. Please provide your order number and reason for the refund.';
    } else if (msg.includes('track order')) {
      return 'To track your order, go to the "Track Order" section and enter your order number or use the tracking link sent to your email.';
    } else if (msg.includes('restaurants') || msg.includes('outlets')) {
      return 'We partner with multiple restaurants in your area. You can view them by clicking on the "Restaurants" tab.';
    } else if (msg.includes('pickup')) {
      return 'You can choose the "Pickup" option during checkout to pick up your order directly from the restaurant.';
    } else if (msg.includes('reviews') || msg.includes('ratings')) {
      return 'You can leave reviews and ratings for the restaurants and dishes you order. This helps us improve our service!';
    } else if (msg.includes('favorite food') || msg.includes('favorites')) {
      return 'You can mark your favorite food items or restaurants and quickly order from them in the future.';
    } else if (msg.includes('coupon') || msg.includes('voucher')) {
      return 'You can apply promo codes or vouchers during checkout to receive discounts. Make sure to check the "Coupons" section!';
    } else if (msg.includes('hours')) {
      return 'Our services are available from 9 AM to 11 PM daily. However, some restaurants may have different hours, so be sure to check their schedule.';
    } else if (msg.includes('feedback')) {
      return 'We value your feedback! Please share your experience through the "Feedback" section on the app, and we’ll improve our services.';
    } else if (msg.includes('loyalty program') || msg.includes('rewards')) {
      return 'Join our loyalty program to earn points for every order, which can be redeemed for discounts on future orders.';
    } else if (msg.includes('locations') || msg.includes('city')) {
      return 'We operate in multiple cities! Check the "Location" section to see if we deliver to your area.';
    } else if (msg.includes('allergens')) {
      return 'If you have any dietary restrictions or allergies, you can find this information on the menu for each dish.';
    } else if (msg.includes('update profile') || msg.includes('settings')) {
      return 'To update your profile or settings, go to the "Account" section where you can change your details and preferences.';
    } else {
      return 'I’m sorry, I didn’t quite understand that. Can you try asking something else?';
    }
  };
  

  return (
    <div style={styles.chatbotContainer}>
      <div style={styles.chatWindow}>
        <div style={styles.chatMessages}>
          {messages.map((msg, index) => (
            <div
              key={index}
              style={{
                ...styles.chatMessage,
                ...(msg.sender === 'user' ? styles.userMessage : styles.botMessage),
              }}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div style={styles.chatInput}>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your message..."
            style={styles.inputField}
          />
          <button onClick={handleSend} style={styles.sendButton}>Send</button>
        </div>
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  chatbotContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f4f4f4',
    fontFamily: 'Arial, sans-serif',
  },
  chatWindow: {
    width: '100%',
    maxWidth: '400px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  chatMessages: {
    flex: 1,
    padding: '20px',
    overflowY: 'auto',
  },
  chatMessage: {
    marginBottom: '10px',
    padding: '10px',
    borderRadius: '5px',
    maxWidth: '80%',
    lineHeight: '1.4',
  },
  userMessage: {
    backgroundColor: '#c8e6c9',
    color: '#2c6e3f',
    alignSelf: 'flex-end',
  },
  botMessage: {
    backgroundColor: '#e0f7fa',
    color: '#00796b',
    alignSelf: 'flex-start',
  },
  chatInput: {
    display: 'flex',
    padding: '10px',
    backgroundColor: '#f9f9f9',
    borderTop: '1px solid #ddd',
  },
  inputField: {
    flex: 1,
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '14px',
  },
  sendButton: {
    marginLeft: '10px',
    padding: '10px 20px',
    backgroundColor: '#00796b',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ChatBot;
