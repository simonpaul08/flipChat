// plan types
export const PLANS = {
  FREE: "FREE",
  ESSENTIAL: "ESSENTIAL",
  EXPAND: "EXPAND",
  ELITE: "ELITE",
};

// status types
export const STATUS = {
  SUCCESS: "SUCCESS",
  FAILURE: "FAILURE",
  IN_PROGRESS: "IN_PROGRESS",
};

// plans rate
export const PLANS_RATE = {
  FREE: 0,
  ESSENTIAL: 499,
  EXPAND: 1999,
  ELITE: 5499,
};

// agents per plan
export const AGENT_PER_PLAN = {
  FREE: 1,
  ESSENTIAL: 2,
  EXPAND: 3,
  ELITE: 5,
};

// links per plan
export const LINKS_PER_PLAN = {
  ESSENTIAL: 1,
  EXPAND: 3,
  ELITE: 8,
};

// phone regex
export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

// countries
export const countries = [
  { country: "United States", code: "+1" },
  { country: "Canada", code: "+1" },
  { country: "United Kingdom", code: "+44" },
  { country: "Australia", code: "+61" },
  { country: "India", code: "+91" },
  { country: "Germany", code: "+49" },
  { country: "France", code: "+33" },
  { country: "Brazil", code: "+55" },
  { country: "Mexico", code: "+52" },
  { country: "China", code: "+86" },
  { country: "Japan", code: "+81" },
  { country: "Russia", code: "+7" },
  { country: "South Korea", code: "+82" },
  { country: "Italy", code: "+39" },
  { country: "Spain", code: "+34" },
  { country: "South Africa", code: "+27" },
  { country: "Argentina", code: "+54" },
  { country: "Saudi Arabia", code: "+966" },
  { country: "Egypt", code: "+20" },
  { country: "Nigeria", code: "+234" },
  { country: "Pakistan", code: "+92" },
  { country: "Indonesia", code: "+62" },
  { country: "Turkey", code: "+90" },
  { country: "Ukraine", code: "+380" },
  { country: "Thailand", code: "+66" },
  { country: "Vietnam", code: "+84" },
  { country: "Poland", code: "+48" },
  { country: "Belgium", code: "+32" },
  { country: "Netherlands", code: "+31" },
  { country: "Sweden", code: "+46" },
  { country: "Norway", code: "+47" },
  { country: "Finland", code: "+358" },
  { country: "Denmark", code: "+45" },
  { country: "Switzerland", code: "+41" },
  { country: "Austria", code: "+43" },
  { country: "Greece", code: "+30" },
  { country: "Portugal", code: "+351" },
  { country: "Czech Republic", code: "+420" },
  { country: "Romania", code: "+40" },
  { country: "Hungary", code: "+36" },
  { country: "Israel", code: "+972" },
  { country: "United Arab Emirates", code: "+971" },
  { country: "Singapore", code: "+65" },
  { country: "Malaysia", code: "+60" },
  { country: "Philippines", code: "+63" },
  { country: "New Zealand", code: "+64" },
  { country: "Chile", code: "+56" },
  { country: "Colombia", code: "+57" },
  { country: "Peru", code: "+51" },
  { country: "Bangladesh", code: "+880" },
  { country: "Iraq", code: "+964" },
  { country: "Kuwait", code: "+965" },
  { country: "Qatar", code: "+974" },
  { country: "Bahrain", code: "+973" },
  { country: "Oman", code: "+968" },
  { country: "Jordan", code: "+962" },
  { country: "Lebanon", code: "+961" },
  { country: "Cyprus", code: "+357" },
  { country: "Slovakia", code: "+421" },
  { country: "Croatia", code: "+385" },
  { country: "Slovenia", code: "+386" },
  { country: "Serbia", code: "+381" },
  { country: "Montenegro", code: "+382" },
  { country: "Kosovo", code: "+383" },
  { country: "North Macedonia", code: "+389" },
  { country: "Albania", code: "+355" },
  { country: "Macedonia", code: "+389" },
  { country: "Malta", code: "+356" },
  { country: "Belarus", code: "+375" },
  { country: "Latvia", code: "+371" },
  { country: "Lithuania", code: "+370" },
  { country: "Estonia", code: "+372" },
  { country: "Moldova", code: "+373" },
  { country: "Armenia", code: "+374" },
  { country: "Georgia", code: "+995" },
  { country: "Kazakhstan", code: "+7" },
  { country: "Azerbaijan", code: "+994" },
  { country: "Uzbekistan", code: "+998" },
  { country: "Kyrgyzstan", code: "+996" },
  { country: "Turkmenistan", code: "+993" },
  { country: "Tajikistan", code: "+992" },
  { country: "Mongolia", code: "+976" },
  { country: "Nepal", code: "+977" },
  { country: "Sri Lanka", code: "+94" },
  { country: "Myanmar", code: "+95" },
  { country: "Laos", code: "+856" },
  { country: "Cambodia", code: "+855" },
  { country: "Honduras", code: "+504" },
  { country: "Costa Rica", code: "+506" },
  { country: "Panama", code: "+507" },
  { country: "Guatemala", code: "+502" },
  { country: "El Salvador", code: "+503" },
  { country: "Nicaragua", code: "+505" },
  { country: "Belize", code: "+501" },
  { country: "Barbados", code: "+1-246" },
  { country: "Jamaica", code: "+1-876" },
  { country: "Trinidad and Tobago", code: "+1-868" },
];

// Server URL
export const SERVER_URL = import.meta.env.VITE_APP_SERVER_URL;

// razorpay option 
export const createRazorpayOption = ({ key, amount, orderId, name, email, phone }) => {
  const options = {
    key,
    amount: amount,
    currency: "INR",
    name: "FlipChat",
    description: "FlipChat Premium Subscription",
    order_id: orderId,
    callback_url: `${import.meta.env.VITE_APP_SERVER_URL}api/payment/process/payment`,
    prefill: {
      name: name,
      email: email,
      contact: phone
    },
    notes: {
      "address": "Razorpay Corporate Office"
    },
    theme: {
      "color": "#109449"
    }
  };
  return options;
}

// get last 12 months 
export function getLast12Months() {
  const months = [];
  const currentDate = new Date();
  
  for (let i = 0; i < 12; i++) {
    const month = new Date(currentDate);
    month.setMonth(currentDate.getMonth() - i);
    months.push(month.toLocaleString('default', { month: 'long', year: 'numeric' }));
  }

  return months.reverse(); // reverse to start from the current month
}
