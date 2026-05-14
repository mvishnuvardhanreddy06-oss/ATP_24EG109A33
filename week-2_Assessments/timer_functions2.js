/**
 * Assignment: OTP Countdown Simulator (Console App)
 * Demonstrates the use of setInterval() for a real-world countdown scenario.
 */

const startOTPCountdown = (seconds = 10) => {
  console.log("OTP Sent Successfully! 📩");
  
  let remainingTime = seconds;

  const intervalId = setInterval(() => {
    remainingTime--;

    if (remainingTime > 0) {
      console.log(`Resend OTP in ${remainingTime} seconds...`);
    } else {
      console.log("--- Ready ---");
      console.log("You can now resend the OTP. 🔄");
      clearInterval(intervalId);
    }
  }, 1000);
};

startOTPCountdown(10);