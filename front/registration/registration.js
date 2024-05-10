function mockRegister(username, password) {
  setTimeout(() => {
    console.log(`User ${username} registered successfully.`);
  }, 1000);
}

mockRegister('woxer', 'password123');
