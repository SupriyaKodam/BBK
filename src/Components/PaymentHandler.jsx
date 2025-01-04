const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const handlePayment = async (formData) => {
  const isLoaded = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
  if (!isLoaded) {
    alert('Razorpay SDK failed to load. Check your connection.');
    return;
  }

  const options = {
    key: "rzp_test_vv1FCZvuDRF6lQ", // Replace with your Razorpay key
    amount: parseInt(formData.totalAmount) * 100,
    currency: "INR",
    name: "Web Mastery",
    description: "Test Payment",
    handler: function (response) {
      console.log("Payment ID:", response.razorpay_payment_id);
      alert("Payment Successful!");
    },
    theme: {
      color: "#07a291db",
    },
  };

  const razorpay = new window.Razorpay(options);
  razorpay.open();
};

export default handlePayment;
